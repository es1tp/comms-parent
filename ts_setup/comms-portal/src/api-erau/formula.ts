import Formula from "fparser";


export type NormalizeFormulaVariableProvider = (variableName: string) => any

export interface NormalizedFormula {
  evaluate(provider: NormalizeFormulaVariableProvider): {
    evaluated: number,
    variables: Record<string, number>
  };
  
  meta: {
    original: string;
    name: string;
    normalized: string 
  }
}

function funnySpacesTrim(text: string) {
  const regex = /([\u200B]+|[\u200C]+|[\u200D]+|[\u200E]+|[\u200F]+|[\uFEFF]+)/g;
  return text.replace(regex, '');
};

export function parseFormula(original: string): NormalizedFormula {
  const position = original.indexOf('=');
  const formulaToWhat: string = original.substring(0, position).trim();
  const formulaInit: string = original.substring(position + 1).trim()

  const inputMapping: Record<string, string> = {};
  let normalized = formulaInit;
  let toParse = formulaInit;
  let index = 1;

  while(toParse.indexOf('[') > -1) {
    const startPos = toParse.indexOf('[')+1;
    const endPos = toParse.indexOf(']');
    const varName = funnySpacesTrim(toParse.substring(startPos, endPos));
    const formulaVarName = `var${index++}`;

    inputMapping[formulaVarName] = varName;
    toParse = toParse.substring(endPos + 1);
    normalized = normalized.replace(varName, formulaVarName);
  }

  const formula = new Formula(normalized);
  const variableNames = formula.getVariables();
  
  return {
    meta: {
      original,
      name: formulaToWhat,
      normalized,
    },
    evaluate: (provider) => {
      
      const actual: Record<string, number> = {}; 
      const used = variableNames.reduce<Record<string, number>>((collector, variableName) => {

        const actualVariableName = inputMapping[variableName] ?? variableName;
        const provided = provider(actualVariableName);

        actual[actualVariableName] = provided;
        collector[variableName] = provided;

        return collector;
      }, {});
    
      const evaluated: number = formula.evaluate(used) as number;

      return {
        evaluated,
        variables: actual
      };
    }
  };
}