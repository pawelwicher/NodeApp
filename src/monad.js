module.exports.M = M;

function M(value) {
  const map = f => M(f(value));
  const flatMap = f => f(value);

  return {
    map,
    flatMap
  };
}
