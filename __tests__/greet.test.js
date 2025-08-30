const { greet } = require('../src/greet');

test('returns expected greeting', () => {
  expect(greet('Team')).toBe('Hi, Camille! This is the updated Agile DevOps greeting. 8/2025');
});
