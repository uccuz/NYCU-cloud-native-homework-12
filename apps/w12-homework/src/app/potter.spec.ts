import { Potter } from './potter';

test('test no book', () => {
  const potter = new Potter();
  potter.buyBook([]);
  expect(potter.calPrice).toBe(0);
});

test('test one book', () => {
  const potter = new Potter();
  potter.buyBook([1]);
  expect(potter.calPrice).toBe(8);
});