// __tests__/greet.test.js
const { greet } = require('../src/greet');

test('returns expected greeting', () => {
  expect(greet('Team')).toBe('Hi, Team! This is the updated Agile DevOps greeting. 8/2025');
});
