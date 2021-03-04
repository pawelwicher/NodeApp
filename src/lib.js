exports.fib = fib;
exports.cycle = cycle;

function fib(n) {
  return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}

function cycle(arr, times) {
  return times <= 1 ? arr : [...arr, ...cycle(arr, times - 1)];
}