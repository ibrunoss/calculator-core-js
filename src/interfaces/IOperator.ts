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
   * @param a - O primeiro operando.
   * @param b - O segundo operando.
   * @returns O resultado da operação aplicada aos dois operandos.
   */
  execute(a: number, b: number): number;
}
