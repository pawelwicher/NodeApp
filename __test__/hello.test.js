const { M } = require('../src/monad');

test('2 + 2 = 4', () => {
  expect(2 + 2).toBe(4);
});
 
test('Monad laws', () => {
  const id = x => x;
  const f = x => x + 1;
  const m = M(1);
  expect(M(1).flatMap(f)).toEqual(f(1));
  expect(m.flatMap(M).flatMap(id)).toEqual(m.flatMap(id));
});
