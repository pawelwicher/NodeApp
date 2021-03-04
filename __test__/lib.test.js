const lib = require('../src/lib');

test('cycle', () => {
  const actual = lib.cycle([1, 2, 3], 5);
  const expected = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
  expect(actual).toEqual(expected);
});
