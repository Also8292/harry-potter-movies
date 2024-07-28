import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('should transform minutes to hours and minutes', () => {
    const value = '120';
    const transformedValue = pipe.transform(value);
    expect(transformedValue).toBe('2h 0min');
  });

  it('should transform minutes to minutes when value is less than 60', () => {
    const value = '30';
    const transformedValue = pipe.transform(value);
    expect(transformedValue).toBe('30min');
  });

  it('should return an empty string when value is not a valid number', () => {
    const value = 'abc';
    const transformedValue = pipe.transform(value);
    expect(transformedValue).toBe('');
  });
});
