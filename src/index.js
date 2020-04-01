import isEqual from 'lodash/isEqual';

import { initialDom, successDom } from './domNodes';

const correctSequence = ['a', 's', 'd', 'f', 'ArrowRight'];
const inputKeys = [];

const { body } = document;
body.prepend(initialDom);

const handleKeyDown = (e) => {
  inputKeys.push(e.key);
  if (inputKeys.length > correctSequence.length) {
    inputKeys.shift();
  }
  if (isEqual(inputKeys, correctSequence)) {
    initialDom.replaceWith(successDom);
    document.removeEventListener('keydown', handleKeyDown);
  }
};

document.addEventListener('keydown', handleKeyDown);
