import { showWeather } from "./showWeather.js";

beforeEach(() => {
  document.body.innerHTML = `<div class="weather-info" id="weather-info"></div>`;
});

describe("showWeather", () => {
  it("is a function", () => {
    expect(showWeather).toBeInstanceOf(Function);
  });

  it("create markup", () => {
    const weatherInfo = {
      name: "SPb",
      weather: [{ icon: "01d" }],
    };

    showWeather(weatherInfo);

    const el = document.querySelector("#weather-info");

    expect(el.querySelector("h1")).toBeTruthy();
    expect(el.querySelector("img")).toBeTruthy();
  });

  it("processing non-existent city", () => {
    const weatherInfo = {
      name: "SPb",
    };

    showWeather(weatherInfo);

    const el = document.querySelector("#weather-info");

    expect(el.querySelector("h1")).toBeTruthy();
    expect(el.querySelector("div.not-found")).toBeTruthy();
  });
});
