import { saveList, readList, addCityInList, drawList } from "./workWithList";

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

beforeEach(() => {
  document.body.innerHTML = `<form>
        <input placeholder="Enter the city" required autofocus />
        <button>Get weather</button>
    </form>
    
    <div id="list"></div>`;
  const inputEl = document.querySelector("input");
  inputEl.value = "Moscow";
});

describe("saveList", () => {
  it("is a function", () => {
    expect(saveList).toBeInstanceOf(Function);
  });
  it('save ["moscow", "london", "rome", "new york", "boston"] in localstorage', () => {
    saveList("list", ["moscow", "london", "rome", "new york", "boston"]);
    const items = localStorage.getItem("list");
    expect(items).toEqual('["moscow","london","rome","new york","boston"]');
  });
});

describe("readList", () => {
  it("is a function", () => {
    expect(readList).toBeInstanceOf(Function);
  });
  it('read ["moscow", "london", "rome", "new york", "boston"] from localstorage', () => {
    saveList("list", ["moscow", "london", "rome", "new york", "boston"]);
    const items = readList("list");
    expect(items).toEqual(["moscow", "london", "rome", "new york", "boston"]);
  });
});

describe("addCityInList", () => {
  it("is a function", () => {
    expect(addCityInList).toBeInstanceOf(Function);
  });

  it("add new city in list", () => {
    let items = [];
    const formEl = document.querySelector("form");
    const event = {
      target: formEl,
    };
    const value = addCityInList(event, items);

    expect(value).toEqual("Moscow");
    expect(items).toEqual(["Moscow"]);
  });

  it("replace city in list after 10", () => {
    let items = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const formEl = document.querySelector("form");
    const event = {
      target: formEl,
    };
    const value = addCityInList(event, items);

    expect(value).toEqual("Moscow");
    expect(items).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Moscow",
    ]);
  });
});

describe("drawList", () => {
  it("is a function", () => {
    expect(drawList).toBeInstanceOf(Function);
  });

  it("create markup", () => {
    let items = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    drawList(items);

    const el = document.querySelector("#list");

    expect(el.querySelector("ol")).toBeTruthy();
    expect(el.querySelector("li")).toBeTruthy();
    expect(el.querySelector("li").value).toEqual(0);
  });
});
