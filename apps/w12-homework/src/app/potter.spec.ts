import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;

  beforeEach(() => {
    potter = new Potter();
  });

  it('should create an instance', () => {
    expect(potter).toBeTruthy();
  });

  // Test basics Potter functionality
  test('no book', () => {
    potter.buyBook([]);
    expect(potter.calPrice).toBe(0);
  });

  test('one of book1', () => {
    potter.buyBook([0]);
    expect(potter.calPrice).toBe(8);
  });



});