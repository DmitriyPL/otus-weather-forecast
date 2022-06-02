import { saveList } from "./index";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("saveList", () => {
  it("is a function", () => {
    expect(saveList).toBeInstanceOf(Function);
  });
  it('save ["moscow", "london", "rome", "new york", "boston"] in localstorage', () => {
    saveList("list", ["moscow", "london", "rome", "new york", "boston"]);
    const items = localStorage.getItem("rome");
    expect(items).toEqual("rome");
  });
});
