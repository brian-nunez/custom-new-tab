const albumIDs = [
  { type: 'album', value: '2gWDbNPfFcIR1EewwlvyqJ', title: 'After Hours (Deluxe)' },
  { type: 'album', value: '4yP0hdKOZPNshxUOjY0cZj', title: 'After Hours' },
  { type: 'album', value: '4qZBW3f2Q8y0k1A84d4iAO', title: 'My Dear Melancholy,' },
  { type: 'album', value: '2ODvWsOgouMbaA5xf0RkJe', title: 'Starboy' },
  { type: 'album', value: '0P3oVJBFOv3TDXlYRhGL7s', title: 'Beauty Behind The Madness' },
  { type: 'album', value: '3hhDpPtCFuQbppwYgsVhMO', title: 'Kiss Land' },
  { type: 'album', value: '5EbpxRwbbpCJUepbqVTZ1U', title: 'Trilogy' },
  { type: 'playlist', value: '0z7GmUhANVdVs3d17YFRlA', title: 'My Playlist' },
];

const playListUrl = ({ type, value } = {}) => {
  return `https://open.spotify.com/embed/${type}/${value}`;
};

const createSpotifyNavOption = text => {
  const element = createElement({
    tag: 'button',
    classList: 'dropdown-item',
  });
  element.innerText = text;
  return element;
};

function SpotifyOnLoad() {
  const container = document.querySelector('#spotify');
  const navSpotify = document.querySelector('#nav-spotify-button');
  const navSpotifyList = document.querySelector('#nav-spotify-list');
  navSpotify.addEventListener('click', () => {
    container.scrollIntoView({ behavior: 'smooth' });
  });

  for (let item of albumIDs) {
    const option = createSpotifyNavOption(item.title);
    option.addEventListener('click', () => {
      container.src = playListUrl(item);
      localStorage.setItem('spotify_list', JSON.stringify(item));
    });
    navSpotifyList.appendChild(option);
  }
  const randomOption = createSpotifyNavOption('Random');
  randomOption.addEventListener('click', () => {
    localStorage.setItem('spotify_list', null);
    container.src = playListUrl(random.item(albumIDs));
  });
  navSpotifyList.appendChild(randomOption);


  const savedSpotifyList = localStorage.getItem('spotify_list');

  
  if (savedSpotifyList) {
    container.src = playListUrl(JSON.parse(savedSpotifyList));
  } else {
    container.src = playListUrl(random.item(albumIDs));
  }
}

window.addEventListener('load', SpotifyOnLoad);
