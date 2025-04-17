import { ErauApi } from "./erau-types";
import { PhysicsEngine, PhysicsValueType } from "./physics-engine";
import Formula from 'fparser';


interface UsedVariables {
  variables: Record<string, number>; // used variables to get the correct answer
  value: number; // the correct answer
}

class FormulaVisitor {
  private _init: ErauApi.ErauQuestion;
  private _engine = new PhysicsEngine();
  private _formula_to_what: PhysicsValueType;
  private _formula: Formula;

  
  constructor(init: ErauApi.ErauQuestion) {
    if(!init.formula) {
      throw new Error('Formula not defined');
    }
    this._init = init;
    const position = init.formula.indexOf('=');
    this._formula_to_what = this._engine.isSupportedType(init.formula.substring(0, position).trim());
    this._formula = new Formula(init.formula.substring(position + 1).trim())
  }

  visit(): ErauApi.ErauQuestion {
    const usedVariables: UsedVariables = this.visitVariables();

    const result: ErauApi.ErauQuestion = {
      ...this._init,
      text: this.visitQuestionText(usedVariables),
      answers: this.visitAnswers(usedVariables)
    }
    return result;
  }

  private visitVariables(): UsedVariables {
    const variableNames = this._formula.getVariables();

    // generate variable values until full figures
    let index = 0;
    while(index++ < 100000) {
      const variables = variableNames.reduce<Record<string, number>>((collector, key) => {
        collector[key] = this._engine.nextValue(key as any);
        return collector;
      }, {});

      const result = this._formula.evaluate(variables) as number;
      if(this.isFullFigure(result)) {
        this._engine.clear();
        this._engine.reserveAllValues(variables)
        this._engine.reserveValue(result, this._formula_to_what)
        return { variables, value: result };
      }
    }
    throw Error(`Can't generate nice set of numbers for formula: ${this._init.formula}!`);
  }

  private isFullFigure(input: number): boolean {
    const asString = input + '';
    const afterComma = asString.indexOf('.')
    if(afterComma < 0) {
      return true;
    }
    return asString.substring(afterComma+1).replaceAll('0', '').trim().length === 0;
  }

  private visitQuestionText(used: UsedVariables): string {
    const text: string = (Object.entries(used.variables)).reduce<string>((collector, [key, value]) => {
      return collector.replace(`{${key}}`, `${value}`);
    }, this._init.text);

    return text;
  }

  private visitAnswers(used: UsedVariables): ErauApi.ErauAnswer[] {
    const correctAnswerAt = this._engine.anyInt(0, 2);
    const answers: ErauApi.ErauAnswer[] = [];

    let index = 0;
    while(index < 3) {
      const isCorrect = correctAnswerAt === index;
      const value = isCorrect ? used.value : this._engine.nextValue(this._formula_to_what);
      const template = this._engine.anyInt(0, this._init.answers.length-1);
      const answer = this._init.answers[template];


      const generatedText: string = answer.text
        .replace(`{${this._formula_to_what}}`, `${value}`)
        .replace(`{${this._formula_to_what.toUpperCase()}}`, `${value}`);
      answers.push({
        id: `${answer.id}_${index}`,
        isCorrect,
        text: generatedText + (correctAnswerAt === index ? ' (' + this._init.formula + ')' : '')
      })
      index++;
    }
    return answers;
  }
}




export function generateFormulaQuestion(init: ErauApi.ErauQuestion): ErauApi.ErauQuestion {
  if(!init.formula) {
    console.error(`Failed to generate formula for: ${init.text} questions, because formula is missing!`);
    return init;
  }

  try {
    return new FormulaVisitor(init).visit();
  } catch(e) {
    console.error(`Failed to generate formula: ${init.formula} questions`);
  }
  return init;
}