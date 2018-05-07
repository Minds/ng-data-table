import { MinPipe } from './min';

describe('(datatable): MinPipe', () => {
  let pipe: MinPipe;

  beforeEach(() => {
    pipe = new MinPipe();
  });

  it('providing [1,2] returns 1', () => {
    expect(pipe.transform([1, 2], [])).toBe(1);
  });

  it('providing [-1,2] returns 1', () => {
    expect(pipe.transform([-1, 2], [])).toBe(-1);
  });

  it('providing [] returns Infinity', () => {
    expect(pipe.transform([], [])).toBe(Infinity);
  });

  it('providing [3, 2, 1, 6, 5, 4] returns 1', () => {
    expect(pipe.transform([3, 2, 1, 6, 5, 4], [])).toBe(1);
  });

  it('providing [1.5, 0.5, 1 ] returns 0.5', () => {
    expect(pipe.transform([1.5, 0.5, 1], [])).toBe(0.5);
  });
});
