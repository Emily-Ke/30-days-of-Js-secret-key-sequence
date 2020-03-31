import '@testing-library/jest-dom/extend-expect';

import { initialDom, successDom, wrapped } from './domNodes';

test('success Node includes a success message', () => {
  expect(successDom).toHaveTextContent(/success/i);
});

test('initial Node includes a call to action', () => {
  expect(initialDom).toHaveTextContent(/try.*key/i);
});

describe('wrapped()', () => {
  it('returns a childless Node when no argument is supplied', () => {
    const container = wrapped();
    expect(container).toBeEmpty();
  });

  it('returns a parent and child Node when an argument is supplied', () => {
    const myChild = document.createElement('div');
    const container = wrapped(myChild);
    expect(container).toContainElement(myChild);
  });
});
