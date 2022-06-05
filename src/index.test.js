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

test("it works", () => {
  // setup
  jest.resetModules(); // to make sure that require will return a new module instance
  jest.mock("./yandexMaps", () => (ymaps = "test")); // mock whatever you want, even constants
  // const { getGoogleMaps } = require("./getGoogleMaps"); // import tested module

  // // tests
  // const maps = getGoogleMaps();

  // assertions
  expect(ymaps).toBe("test");

  // cleanup
  jest.resetModules(); // not required if you resetModules() at the beginning of each test case
});
