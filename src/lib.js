exports.fib = fib;

function fib(n) {
  return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}
