/**
 * Returns true if arr ends with target and false otherwise.
 * @param {Array} arr array to test
 * @param {Array} target array to match against
 */
const endsWith = (arr, target) => {
  const arrEnd = arr.slice(-1 * target.length);
  let isEqual = true;
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== arrEnd[i]) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
};

export default endsWith;
