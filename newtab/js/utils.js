const createElement = ({
  tag,
  attrs = [],
  classList,
}) => {
  const element = document.createElement(tag);
  for (let [key, value] of attrs) {
    element.setAttribute(key, value);
  }
  if (classList) {
    element.classList = classList;
  }
  return element;
};

const rem = px => px / 16;

const sleep = ms => {
  return new Promise(res => {
    setInterval(() => {
      res();
    }, ms);
  })
};

const random = (() => {
  const number = num => Math.floor(Math.random() * num);
  const range = (min, max) => randomNumber(max) + min;
  const item = array => array[number(array.length)];
  const entry = object => {
    const entires = Object.entries(object);
    return item(entires);
  }

  return ({
    number,
    range,
    item,
    entry,
  });
})();