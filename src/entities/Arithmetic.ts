import { IArithmetic } from "../interfaces";

export default class Arithmetic implements IArithmetic {
  // Adição de dois números
  add(a: number, b: number): number {
    return a + b;
  }

  // Subtração de dois números
  subtract(a: number, b: number): number {
    return a - b;
  }

  // Multiplicação de dois números
  multiply(a: number, b: number): number {
    return a * b;
  }

  // Divisão de dois números, com tratamento para divisão por zero
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }

  // Exponenciação (a^b)
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  // Operação módulo (resto da divisão)
  mod(a: number, b: number): number {
    return a % b;
  }
}
