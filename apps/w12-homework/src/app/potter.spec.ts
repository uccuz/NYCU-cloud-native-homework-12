import { Potter } from './potter';

test('test no book', () => {
  const potter = new Potter();
  potter.buyBook([0]);
  expect(potter.calPrice).toBe(0);
});