const DEFAULT_TYPING_DELAY = 400;

const sleep = ms => {
  return new Promise(res => {
    setInterval(() => {
      res();
    }, ms);
  })
}

const createElement = ({
  tag,
  attrs = [],
}) => {
  const element = document.createElement(tag);
  for (let [key, value] of attrs) {
    element.setAttribute(key, value);
  }
  return element;
};

const rem = px => px / 16;

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
