const DEFAULT_TYPING_DELAY = 400;

async function typing({
  element,
  text,
  delay,
}) {
  const sleepDelay = Number(delay);
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') continue;
    element.innerText = [...text].splice(0, i+1).join('');
    await sleep(sleepDelay);
  }
}

const typingElements = [...document.querySelectorAll('[data-typing]')];
for (let el of typingElements) {
  typing({
    element: el,
    text: el.dataset.typing,
    delay: el.dataset.typingDelay || DEFAULT_TYPING_DELAY,
  });
}
