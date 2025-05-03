import { ErauApi } from "./erau-types";
import { PhysicsEngine, PhysicsEngineType, PhysicsValueType, UsedVariables } from "./physics-engine";
import { randomIntFromInterval } from "./physics-unit";



class FormulaVisitor {
  private _init: ErauApi.ErauQuestion;
  private _engine: PhysicsEngineType;
  
  constructor(init: ErauApi.ErauQuestion) {
    if(!init.formula) {
      throw new Error('Formula not defined');
    }
    this._init = init;
    this._engine = new PhysicsEngine({ formulaText: init.formula })
  }

  visit(): ErauApi.ErauQuestion {
    const usedVariables: UsedVariables = this._engine.variables;
    const answers = this.visitAnswers(usedVariables);
    const correctAnswer = answers.filter(a => a.isCorrect).map(a => a.text).join(', ')

    const result: ErauApi.ErauQuestion = {
      ...this._init,
      answers,
      text: this.visitQuestionText(usedVariables),
      info: [
          ...this._init.info, 
          correctAnswer, 
          (this._init.formula ?? ''), 
          `{${usedVariables.variable_index}}`
      ]
    }
    return result;
  }

  private visitQuestionText(used: UsedVariables): string {
    const text: string = (Object.entries(used.variables)).reduce<string>((collector, [key, value]) => {
      return collector.replace(`{${key}}`, `${value}`);
    }, this._init.text);

    return text;
  }

  private visitAnswers(used: UsedVariables): ErauApi.ErauAnswer[] {
    const correctAnswerAt = randomIntFromInterval(0, 2);
    const answers: ErauApi.ErauAnswer[] = [];

    let index = 0;
    while(index < 3) {
      const isCorrect = correctAnswerAt === index;
      
      const template = randomIntFromInterval(0, this._init.answers.length-1);
      const answer = this._init.answers[template];

      answers.push({
        id: `${answer.id}_${index}`,
        isCorrect,
        text: this.visitAnswerText(used, answer, isCorrect)
      })
      index++;
    }
    return answers;
  }

  private visitAnswerText(used: UsedVariables, answer: ErauApi.ErauAnswer, isCorrect: boolean): string {
    const value = isCorrect ? used.value : this._engine.nextValue(used.formula_to_what);
    const generatedText: string = answer.text
      .replace(`{${used.formula_to_what}}`, `${value}`)
      .replace(`{${used.formula_to_what.toUpperCase()}}`, `${value}`);
    return generatedText;
  }
}


export function generateFormulaQuestion(init: ErauApi.ErauQuestion): ErauApi.ErauQuestion {
  if(!init.formula) {
    console.error(`Failed to generate formula for: ${init.text} questions, because formula is missing!`);
    return init;
  }

  let tries = 0;
  let lastError;
  do {
    try {
      return new FormulaVisitor(init).visit();
    } catch(e) {
      lastError = e;
    }
  } while(tries++ < 100);
  
  console.error(`Failed to generate formula: ${init.formula} questions`, lastError);

  return init;
}