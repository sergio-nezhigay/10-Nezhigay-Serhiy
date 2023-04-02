const resultEl = document.querySelector(".result");
let task = "<h1> HomeWork #10 </h1>\n";

function main(a = 2, b = 3, c) {
  if (typeof c === "function") {
    return c(sum(a, b));
  } else return sum(a, b);
}

function sum(a, b) {
  return a + b;
}

function cb1(x) {
  return 2 * x;
}

const result = main(10, 20, cb1);
console.log(result);

task += result;

resultEl.insertAdjacentHTML("beforeend", task);
