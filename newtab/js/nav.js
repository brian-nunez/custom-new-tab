let SEARCH_URL = "";

function getHistory({ search, maxResults = 100 }) {
  if (!search) return [];
  return new Promise(res => {
    chrome.history.search({ text: search, maxResults }, function(data) {
      res(data);
    });
  })
}

function setHistorySet(sites) {
  const container = document.querySelector('#historyResults');
  const goAnchor = document.querySelector('#historyAnchor');
  const createOption = (value, url) => {
    const option = createElement({ tag: 'option' });
    option.value = value;
    option.addEventListener('click', () => { goAnchor.href = url; });

    return option;
  };
  container.innerHTML = '';
  for (let site of sites) {
    const option = createOption(site.title, site.url);
    container.appendChild(option);
  }
}

function navSearch() {
  const search = document.querySelector('#historySearch');
  const onChange = async ({ target: { value }}) => {
    const sites = await getHistory({ search: value });
    console.log(sites);
    setHistorySet(sites);
  };

  search.addEventListener('input', onChange);
  search.addEventListener('change', onChange);
}

function onLoad() {
  navSearch();
}

window.addEventListener('load', onLoad);
