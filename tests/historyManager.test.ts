import HistoryManager from "../src/entities/HistoryManager";

describe("HistoryManager", () => {
  it("should correctly register the record in the history manager", () => {
    const history = new HistoryManager<string>();

    history.add("Olá");
    expect(history.length).toEqual(0);
    expect(history.current).toEqual("Olá");

    history.add("Mundo");
    history.add("!");
    expect(history.storage).toEqual(["Olá", "Mundo"]);
    expect(history.current).toEqual("!");
  });

  it("should correctly undo the record in the history manager", () => {
    const history = new HistoryManager<string>();

    history.add("Olá");
    history.add("Mundo");
    history.add("!");

    expect(history.undo()).toEqual("Mundo");
    expect(history.current).toEqual("Mundo");
    expect(history.length).toEqual(1);

    history.undo();
    expect(history.length).toEqual(0);
    expect(history.current).toEqual("Olá");

    history.undo();
    history.undo();
    expect(history.length).toEqual(0);
    expect(history.current).toBeUndefined();
  });

  it("should correctly redo the record in the history manager", () => {
    const history = new HistoryManager<string>();

    history.add("Olá");
    history.add("Mundo");
    history.add("!");

    expect(history.undo()).toEqual("Mundo");
    expect(history.current).toEqual("Mundo");
    expect(history.length).toEqual(1);

    expect(history.redo()).toEqual("!");
    expect(history.current).toEqual("!");
    expect(history.length).toEqual(2);

    history.redo();
    history.redo();
    history.redo();
    expect(history.redo()).toEqual("!");
    expect(history.current).toEqual("!");
    expect(history.length).toEqual(2);

    history.undo();
    history.undo();
    history.undo();
    history.undo();
    history.undo();
    expect(history.redo()).toEqual("Olá");
    expect(history.current).toEqual("Olá");
    expect(history.length).toEqual(0);
  });

  it("should correctly clear history manager storage", () => {
    const history = new HistoryManager<string>();

    history.add("Olá");
    history.add("Mundo");
    history.add("!");
    history.undo();
    history.redo();
    history.clear();

    expect(history.current).toBeUndefined();
    expect(history.length).toEqual(0);
  });
});
