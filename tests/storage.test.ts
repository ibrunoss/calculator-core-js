import { Storage } from "../src/entities";

describe("Storage", () => {
  it("should correctly register the record in storage", () => {
    const storage = new Storage<string>();

    storage.add("Olá");
    expect(storage.length).toEqual(0);
    expect(storage.current).toEqual("Olá");

    storage.add("Mundo");
    storage.add("!");
    expect(storage.history).toEqual(["Olá", "Mundo"]);
    expect(storage.current).toEqual("!");
  });

  it("should correctly undo the record in storage", () => {
    const storage = new Storage<string>();

    storage.add("Olá");
    storage.add("Mundo");
    storage.add("!");

    expect(storage.undo()).toEqual("Mundo");
    expect(storage.current).toEqual("Mundo");
    expect(storage.length).toEqual(1);

    storage.undo();
    expect(storage.length).toEqual(0);
    expect(storage.current).toEqual("Olá");

    storage.undo();
    storage.undo();
    expect(storage.length).toEqual(0);
    expect(storage.current).toBeUndefined();
  });

  it("should correctly redo the record in storage", () => {
    const storage = new Storage<string>();

    storage.add("Olá");
    storage.add("Mundo");
    storage.add("!");

    expect(storage.undo()).toEqual("Mundo");
    expect(storage.current).toEqual("Mundo");
    expect(storage.length).toEqual(1);

    expect(storage.redo()).toEqual("!");
    expect(storage.current).toEqual("!");
    expect(storage.length).toEqual(2);

    storage.redo();
    storage.redo();
    storage.redo();
    expect(storage.redo()).toEqual("!");
    expect(storage.current).toEqual("!");
    expect(storage.length).toEqual(2);

    storage.undo();
    storage.undo();
    storage.undo();
    storage.undo();
    storage.undo();
    expect(storage.redo()).toEqual("Olá");
    expect(storage.current).toEqual("Olá");
    expect(storage.length).toEqual(0);
  });

  it("should correctly clear storage storage", () => {
    const storage = new Storage<string>();

    storage.add("Olá");
    storage.add("Mundo");
    storage.add("!");
    storage.undo();
    storage.redo();
    storage.clear();

    expect(storage.current).toBeUndefined();
    expect(storage.length).toEqual(0);
  });
});
