import { CustomCurrencyPipe } from './custom-currency.pipe';

describe('CustomCurrencyPipe', () => {
  let pipe: CustomCurrencyPipe;

  beforeEach(() => {
    pipe = new CustomCurrencyPipe();
  });

  it('should transform a single value correctly', () => {
    const value = '1000000';
    const expected = '$1000000 million';

    const result = pipe.transform(value);

    expect(result).toEqual(expected);
  });

  it('should transform a range of values correctly', () => {
    const value = '1000000-2000000';
    const expected = '$1000000-2000000 million';

    const result = pipe.transform(value);

    expect(result).toEqual(expected);
  });

  it('should return an empty string if the value is falsy', () => {
    const value = '';
    const expected = '';

    const result = pipe.transform(value);

    expect(result).toEqual(expected);
  });

  it('should use the provided unit if specified', () => {
    const value = '1000000';
    const unit = 'billion';
    const expected = '$1000000 billion';

    const result = pipe.transform(value, unit);

    expect(result).toEqual(expected);
  });
});
