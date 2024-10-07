export default interface IArithmetic {
  // Realiza a adição de dois números e retorna o resultado
  add(a: number, b: number): number;

  // Realiza a subtração de dois números e retorna o resultado
  subtract(a: number, b: number): number;

  // Realiza a multiplicação de dois números e retorna o resultado
  multiply(a: number, b: number): number;

  // Realiza a divisão de dois números e retorna o resultado
  divide(a: number, b: number): number;

  // Realiza a exponenciação (a^b) e retorna o resultado
  power(base: number, exponent: number): number;

  // Realiza a operação de módulo (resto da divisão)
  mod(a: number, b: number): number;
}
