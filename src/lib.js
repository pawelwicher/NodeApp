exports.fib = fib;
exports.cycle = cycle;

function fib(n) {
  return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}

function cycle(arr, times, acc = []) {
  return times < 1 ? acc : cycle(arr, times - 1, [...acc, ...arr]);
}
