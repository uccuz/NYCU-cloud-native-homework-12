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

  test('one of book2', () => {
    potter.buyBook([1]);
    expect(potter.calPrice).toBe(8);
  });

  test('one of book3', () => {
    potter.buyBook([2]);
    expect(potter.calPrice).toBe(8);
  });

  test('one of book4', () => {
    potter.buyBook([3]);
    expect(potter.calPrice).toBe(8);
  });

  test('one of book5', () => {
    potter.buyBook([4]);
    expect(potter.calPrice).toBe(8);
  });

  test('three of book1', () => {
    potter.buyBook([1,1,1]);
    expect(potter.calPrice).toBe(8*3);
  });

});