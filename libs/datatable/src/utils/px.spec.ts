import { PixelConverter } from './px';

describe('(datatable): PixelConverter', () => {
  let pipe: PixelConverter;

  beforeEach(() => {
    pipe = new PixelConverter();
  });

  it('providing undefined value returns undefined', () => {
    expect(pipe.transform(undefined, [])).toBe(undefined);
  });

  it('providing null value returns undefined', () => {
    expect(pipe.transform(null, [])).toBe(undefined);
  });

  it('providing string value returns it unchanged', () => {
    expect(pipe.transform('30', [])).toBe('30');
  });

  it('providing integer value returns integer+px', () => {
    expect(pipe.transform(30, [])).toBe('30px');
  });

});
