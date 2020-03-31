const initial = () => {
  const fragment = document.createDocumentFragment();

  const callToAction = document.createElement('p');
  callToAction.textContent =
    'Try to guess the secret code. Any combination of keyboard keys is valid';

  const waitingIndicator = document.createElement('div');
  waitingIndicator.textContent = 'keep trying';

  fragment.append(callToAction, waitingIndicator);

  return fragment;
};

const success = () => {
  const fragment = document.createDocumentFragment();

  const successMessage = document.createElement('p');
  successMessage.textContent = 'Success!';

  const refreshButton = document.createElement('button');
  refreshButton.textContent = 'refresh';

  fragment.append(successMessage, refreshButton);

  return fragment;
};

export const wrapped = (child) => {
  const container = document.createElement('div');
  if (child) {
    container.appendChild(child);
  }
  return container;
};

export const initialDom = wrapped(initial());
export const successDom = wrapped(success());
