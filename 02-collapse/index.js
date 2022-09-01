SELECTORS = {
  COLLAPSIBLE_CONTENT: '.collapsible__content',
  COLLAPSIBLE_BUTTON: '.collapsible__button',
  COLLAPSIBLE_ACTION: '.collapsible__action',
}

CLASSES = {
  COLLAPSIBLE_ACTION_HIDDEN: 'collapsible__action--hidden',
  COLLAPSIBLE_ACTION_VISIBLE: 'collapsible__action--visible',
}

const content = document.querySelector(SELECTORS.COLLAPSIBLE_CONTENT),
  button = document.querySelector(SELECTORS.COLLAPSIBLE_BUTTON),
  collapsibleActions = document.querySelectorAll(SELECTORS.COLLAPSIBLE_ACTION);

button.addEventListener('click', onClick);
document.addEventListener('DOMContentLoaded', initButtonText);

function initButtonText() {
  collapsibleActions.forEach((collapsibleAction) => {
    if (collapsibleAction.classList.contains(CLASSES.COLLAPSIBLE_ACTION_HIDDEN)) {
      collapsibleAction.style.display = 'none'
    }
  })
}

function onClick(event) {
  const target = event.target;

  if (!target) {
    return
  }

  const actions = Array.from(collapsibleActions);

  for (let i = 0; i < actions.length; i++) {
    if (i === 0 && actions[i].classList.contains(CLASSES.COLLAPSIBLE_ACTION_VISIBLE)) {
      handleButtons(actions[i], i + 1)
      hideText();
      break;
    }

    if (i === 1 && actions[i].classList.contains(CLASSES.COLLAPSIBLE_ACTION_VISIBLE)) {
      handleButtons(actions[i], i - 1)
      showText();
    }
  }
}

function handleButtons(currentAction, oppositeActionIndex) {
  currentAction.classList.remove(CLASSES.COLLAPSIBLE_ACTION_VISIBLE);
  currentAction.classList.add(CLASSES.COLLAPSIBLE_ACTION_HIDDEN);
  currentAction.style.display = 'none';

  collapsibleActions[oppositeActionIndex].classList.remove(CLASSES.COLLAPSIBLE_ACTION_HIDDEN);
  collapsibleActions[oppositeActionIndex].classList.add(CLASSES.COLLAPSIBLE_ACTION_VISIBLE);
  collapsibleActions[oppositeActionIndex].style.display = '';
}

function hideText() {
  content.animate(
    [
      { opacity: 1 },
      { opacity: 0.5, transform: 'translateY(-50%)' },
      { opacity: 0, transform: 'translateY(-100%)', visibility: 'hidden' }
    ], {
      fill: 'forwards',
      duration: 1500,
    }
  );
}

function showText() {
  content.animate(
    [
      { opacity: 0  },
      { opacity: 0.5, transform: 'translateY(-50%)'},
      { opacity: 1, transform: 'translateY(0)', visibility: 'visible' },
    ], {
      fill: 'forwards',
      duration: 1500,
    }
  );
}
