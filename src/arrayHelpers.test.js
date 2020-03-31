import endsWith from './arrayHelpers';

describe('endsWith function', () => {
  it('returns false when source array is shorter than target array', () => {
    expect(endsWith([1], [1, 2])).toBe(false);
  });

  it('returns false when source array does not end with the target array', () => {
    expect(endsWith([1, 2, 3], [1, 2])).toBe(false);
  });

  it('returns true when source array ends with the target array', () => {
    expect(endsWith([1, 2, 3], [2, 3])).toBe(true);
  });
});
