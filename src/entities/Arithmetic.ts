import { IArithmetic, IOperator } from "../interfaces";

/**
 * Classe que implementa operações aritméticas utilizando operadores definidos.
 */
export default class Arithmetic implements IArithmetic {
  constructor(readonly operators: IOperator[]) {}

  /**
   * Executa o método `execute` para todos os operadores na lista de `operators`.
   */
  executeAllOperators(a: number, b: number): number[] {
    const result: number[] = this.operators.reduce((acc, operator) => {
      acc.push(operator.execute(a, b));
      return acc;
    }, [] as number[]);
    return result;
  }

  /**
   * Executa o método `execute` do operador localizado pelo índice fornecido.
   */
  executeOperatorByIndex(index: number, a: number, b: number): number {
    const operator = this.operators[index];

    return this.executeOperatorAndReturn(operator, a, b);
  }

  /**
   * Executa o método `execute` do operador localizado pelo símbolo fornecido.
   */
  executeOperatorBySymbol(symbol: string, a: number, b: number): number {
    const operator = this.findOperatorBySymbol(symbol);

    return this.executeOperatorAndReturn(operator, a, b);
  }

  /**
   * Método privado que executa a operação e retorna o resultado.
   *
   * @private
   * @param operator - O operador a ser utilizado na operação.
   * @param a - O valor do primeiro operando.
   * @param b - O valor do segundo operando.
   * @returns O resultado da operação ou `NaN` se o operador for `undefined`.
   */
  private executeOperatorAndReturn(
    operator: IOperator | undefined,
    a: number,
    b: number
  ): number {
    if (!operator) {
      return NaN;
    }

    return operator.execute(a, b);
  }

  /**
   * Busca um operador na lista com base no símbolo fornecido.
   *
   * @private
   * @param symbol - O símbolo do operador a ser encontrado.
   * @returns O operador correspondente ou `undefined` se não for encontrado.
   */
  private findOperatorBySymbol(symbol: string): IOperator | undefined {
    return this.operators.find((o) => o.symbol === symbol);
  }
}
