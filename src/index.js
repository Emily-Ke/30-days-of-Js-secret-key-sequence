import debounce from 'lodash/debounce';

import { initialDom, successDom } from './domNodes';
import endsWith from './arrayHelpers';

const correctSequence = [65, 83, 68, 70, 39]; // a, s, d, f, right arrow
const inputKeys = [];

const resetInputKeys = () => {
  inputKeys.length = 0;
};
const debouncedResetInputKeys = debounce(resetInputKeys, 1000);

const { body } = document;
body.prepend(initialDom);

const handleKeyDown = (e) => {
  debouncedResetInputKeys();
  inputKeys.push(e.keyCode);
  if (endsWith(inputKeys, correctSequence)) {
    initialDom.replaceWith(successDom);
    document.removeEventListener('keydown', handleKeyDown);
  }
};

document.addEventListener('keydown', handleKeyDown);
