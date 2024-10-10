export default interface IOperator {
  /**
   * O símbolo que representa o operador (por exemplo, '+', '-', '*', '/').
   * Define o tipo de operação que será realizada.
   */
  symbol: string;

  /**
   * Um rótulo descritivo opcional para o operador, amigável ao usuário.
   * Pode ser usado para exibir o nome da operação (ex.: "Adição", "Subtração").
   */
  label?: string;

  /**
   * Executa a operação definida pelo operador em dois operandos numéricos.
   *
   * @param args - Um ou mais operandos numéricos sobre os quais a operação será realizada.
   *               Para operadores binários, espera-se que sejam fornecidos exatamente dois argumentos.
   * @returns O resultado da operação aplicada aos operandos. O retorno é um número que representa
   *          o resultado da execução do operador, resultante da operação entre os operandos fornecidos.
   */
  execute(...args: number[]): number;
}
