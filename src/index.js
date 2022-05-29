// import "../css/file.css"

export function test(a, b) {
  return a + b + 1;
}

const h1El = document.body.querySelector("h1");

h1El.textContent = "Test 3";

const foo = () => {
  console.log("foo");
};

foo();
