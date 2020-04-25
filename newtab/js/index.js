const videos = [
  "https://www.youtube-nocookie.com/embed/Zeb440Chomw",
  "https://www.youtube-nocookie.com/embed/lYO77zNhWl4",
  "https://www.youtube-nocookie.com/embed/eN84vAqO9NY",
  "https://www.youtube-nocookie.com/embed/GLr0usOC2_k",
  "https://www.youtube-nocookie.com/embed/AU3D8Yfzlxs",
  "https://www.youtube-nocookie.com/embed/MuMsLcAsdLc",
  "https://www.youtube-nocookie.com/embed/0_4fziIKwNE",
  "https://www.youtube-nocookie.com/embed/PY2otJqwmfA",
  "https://www.youtube-nocookie.com/embed/c7GkZd7T3tk",
  "https://www.youtube-nocookie.com/embed/kygPUxOs03c",
  "https://www.youtube-nocookie.com/embed/JH398xAYpZA",
  "https://www.youtube-nocookie.com/embed/nl71vFvVOvw",
  "https://www.youtube-nocookie.com/embed/pM3nIOYF2W8",
  "https://www.youtube-nocookie.com/embed/MzsU_sn2aIE",
  "https://www.youtube-nocookie.com/embed/UxPEFFHA4xw",
  "https://www.youtube-nocookie.com/embed/vsARlcGW0jE",
  "https://www.youtube-nocookie.com/embed/1DpH-icPpl0",
  "https://www.youtube-nocookie.com/embed/RcS_8-a-sMg",
  "https://www.youtube-nocookie.com/embed/4NRXx6U8ABQ",
  "https://www.youtube-nocookie.com/embed/dqRZDebPIGs",
  "https://www.youtube-nocookie.com/embed/u6lihZAcy4s",
  "https://www.youtube-nocookie.com/embed/CE-Iy24NOTY",
  "https://www.youtube-nocookie.com/embed/ygTZZpVkmKg",
  "https://www.youtube-nocookie.com/embed/iv1_FOdJ5s0",
  "https://www.youtube-nocookie.com/embed/EjlLdjzE7dg"
];

function page2() {
  const iframe = document.querySelector('#random-song');
  const randomNumber = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomNumber];
  console.log(iframe);
  iframe.src = `${randomVideo}`;
}

function onLoad() {
  page2();
}

window.addEventListener('load', onLoad);
