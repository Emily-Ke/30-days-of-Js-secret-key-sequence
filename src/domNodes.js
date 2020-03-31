import faRedo from './faLibrary';

const initial = () => {
  const fragment = document.createDocumentFragment();

  const callToAction = document.createElement('p');
  callToAction.textContent =
    'Try to guess the secret code. Any combination of keyboard keys is valid';

  const waitingIndicator = document.createElement('div');
  waitingIndicator.classList.add('waiting-indicator');

  fragment.append(callToAction, waitingIndicator);

  return fragment;
};

const success = () => {
  const fragment = document.createDocumentFragment();

  const successMessage = document.createElement('p');
  successMessage.textContent = 'Success!';

  const refreshButton = document.createElement('button');
  refreshButton.innerHTML = faRedo;
  refreshButton.autofocus = true;
  refreshButton.classList.add('refresh-btn');
  refreshButton.addEventListener('click', () => window.location.reload());

  fragment.append(successMessage, refreshButton);

  return fragment;
};

export const wrapped = (child) => {
  const container = document.createElement('div');
  container.classList.add('container');
  if (child) {
    container.appendChild(child);
  }
  return container;
};

export const initialDom = wrapped(initial());
export const successDom = wrapped(success());
