import { Keyboard } from "../src/entities";

describe("Keyboard", () => {
  const mockUpdateValue = jest.fn();
  const mockAddOperator = jest.fn();
  const operatorSymbols = ["+", "-", "+", "*", "/", "=", "backspace"];
  const keyboard = new Keyboard(
    operatorSymbols,
    mockUpdateValue,
    mockAddOperator
  );

  it("should correctly load operatorSymbols", () => {
    expect(keyboard.operatorSymbols).toEqual(operatorSymbols);
  });

  it("should correctly dispatch updateValue event", () => {
    keyboard.onKeyDown("1234567");
    expect(mockUpdateValue).toHaveBeenCalledWith("1234567");
    keyboard.onKeyUp("3");
    expect(mockUpdateValue).toHaveBeenCalledWith("3");
  });

  it("should correctly dispatch addOperator event", () => {
    keyboard.onKeyUp("+");
    expect(mockAddOperator).toHaveBeenCalledWith("+");
  });
});
