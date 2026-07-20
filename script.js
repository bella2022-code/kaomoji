const data = [
  { text: '(｡•ᴗ•｡)', tags: ['人物', '可愛', '柔和', '聊天', '回覆'] },
  { text: '(╥﹏╥)', tags: ['人物', '哭', '難過', '柔和'] },
  { text: 'ฅ^•ﻌ•^ฅ', tags: ['動物', '貓', '可愛'] },
  { text: '( ´ ▽ ` )ﾉ', tags: ['人物', '招手', '打招呼', '早安'] },
  { text: '(˶ᵔ ᵕ ᵔ˶)', tags: ['人物', '可愛', '柔和', '開心'] },
  { text: '(っ˘ω˘ς )', tags: ['人物', '晚安', '柔和'] },
  { text: '(づ｡◕‿‿◕｡)づ', tags: ['人物', '愛心', '擁抱', '可愛'] },
  { text: 'ʕ·ᴥ·ʔ', tags: ['動物', '熊', '可愛', '極簡'] },
  { text: '(*˘︶˘*).｡.:*♡', tags: ['愛心', '可愛', '柔和'] },
  { text: '(๑•̀ㅂ•́)و✧', tags: ['人物', '手勢', '加油', '恭喜'] },
  { text: '(｡•́︿•̀｡)', tags: ['人物', '道歉', '難過', '柔和'] },
  { text: '╰(*´︶`*)╯', tags: ['人物', '恭喜', '開心'] },
  { text: '(￣▽￣)ノ', tags: ['人物', '打招呼', '招手', '極簡'] },
  { text: '٩(ˊᗜˋ*)و', tags: ['人物', '手勢', '加油', '可愛'] },
  { text: '(人 •͈ᴗ•͈)', tags: ['人物', '道謝', '柔和'] },
  { text: '✧˖° (⁎ᵕᴗᵕ⁎) °˖✧', tags: ['星星', '裝飾', '可愛'] },
  { text: '┬─┬ ノ( ゜-゜ノ)', tags: ['文字', '特殊', 'ASCII'] },
  { text: 'ᕕ( ᐛ )ᕗ', tags: ['人物', '特殊', '加油'] },
];

const categories = [
  ['all', '全部'], ['updated', '最近更新'], ['recent', '最近使用'], ['favorites', '收藏'],
  ['動物', '動物'], ['人物', '人物'], ['手勢', '手勢'], ['愛心', '愛心'], ['裝飾', '裝飾'], ['more', '更多']
];
const categoryNames = Object.fromEntries(categories);
const categoryEl = document.querySelector('#categories');
const listEl = document.querySelector('#kaomoji-list');
const listTitle = document.querySelector('#list-title');
const categoryDescription = document.querySelector('#category-description');
const countEl = document.querySelector('#result-count');
const emptyEl = document.querySelector('#empty-state');
const searchInputs = [...document.querySelectorAll('#search-input, #hero-search-input')];
const searchInput = document.querySelector('#hero-search-input');
const clearButton = document.querySelector('.clear-search');
const template = document.querySelector('#kaomoji-template');
let activeCategory = 'all';
let favorites = JSON.parse(localStorage.getItem('kaomoji-favorites') || '[]');
let recents = JSON.parse(localStorage.getItem('kaomoji-recents') || '[]');

function save() {
  localStorage.setItem('kaomoji-favorites', JSON.stringify(favorites));
  localStorage.setItem('kaomoji-recents', JSON.stringify(recents));
}

function matchesCategory(item) {
  if (activeCategory === 'all' || activeCategory === 'updated') return true;
  if (activeCategory === 'favorites') return favorites.includes(item.text);
  if (activeCategory === 'recent') return recents.includes(item.text);
  if (activeCategory === 'more') return ['星星', '花朵', '食物', '天氣', '文字'].some(tag => item.tags.includes(tag));
  return item.tags.includes(activeCategory);
}

function getVisibleItems() {
  const query = searchInput.value.trim().toLowerCase();
  let items = data.filter(item => matchesCategory(item));
  if (query) items = items.filter(item => `${item.text} ${item.tags.join(' ')}`.toLowerCase().includes(query));
  if (activeCategory === 'recent') items.sort((a, b) => recents.indexOf(a.text) - recents.indexOf(b.text));
  return items;
}

function renderCategories() {
  categoryEl.replaceChildren();
  categories.forEach(([key, label]) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = `category-button${key === activeCategory ? ' active' : ''}`;
    button.textContent = label; button.dataset.category = key;
    button.addEventListener('click', () => { activeCategory = key; renderCategories(); renderList(); });
    categoryEl.append(button);
  });
}

function renderList() {
  const items = getVisibleItems();
  listEl.replaceChildren();
  listTitle.textContent = searchInput.value.trim() ? `搜尋「${searchInput.value.trim()}」` : `${categoryNames[activeCategory]}顏文字`;
  const descriptions = { all: '從今天的心情開始挑選。', updated: '剛加入的顏文字。', recent: '你最近複製過的內容。', favorites: '留給下一次使用。', 動物: '貓、熊與各種可愛生物。', 人物: '日常情緒與表情。', 手勢: '用動作代替一句話。', 愛心: '把喜歡傳出去。', 裝飾: '讓訊息多一點氣氛。', more: '星星、文字與特別款式。' };
  categoryDescription.textContent = searchInput.value.trim() ? '依名稱、用途、外觀與關鍵字篩選。' : descriptions[activeCategory];
  countEl.textContent = `${items.length} 個`;
  emptyEl.hidden = items.length > 0;
  items.forEach(item => {
    const fragment = template.content.cloneNode(true);
    const row = fragment.querySelector('.kaomoji-row');
    const copy = fragment.querySelector('.kaomoji-copy');
    const text = fragment.querySelector('.kaomoji-text');
    const favorite = fragment.querySelector('.favorite-button');
    text.textContent = item.text;
    fragment.querySelector('.kaomoji-tags').innerHTML = item.tags.slice(0, 2).map(tag => `<i>${tag}</i>`).join('');
    favorite.classList.toggle('active', favorites.includes(item.text));
    favorite.setAttribute('aria-label', favorites.includes(item.text) ? '取消收藏' : '加入收藏');
    copy.addEventListener('click', () => copyItem(item.text, row));
    favorite.addEventListener('click', () => toggleFavorite(item.text));
    listEl.append(fragment);
  });
}

async function copyItem(text, row) {
  try { await navigator.clipboard.writeText(text); }
  catch { const input = document.createElement('textarea'); input.value = text; document.body.append(input); input.select(); document.execCommand('copy'); input.remove(); }
  recents = [text, ...recents.filter(item => item !== text)].slice(0, 30); save();
  row.classList.add('copied');
  window.setTimeout(() => row.classList.remove('copied'), 800);
}

function toggleFavorite(text) {
  favorites = favorites.includes(text) ? favorites.filter(item => item !== text) : [text, ...favorites];
  save(); renderList();
}

searchInputs.forEach(input => input.addEventListener('input', event => {
  searchInputs.forEach(other => { if (other !== event.target) other.value = event.target.value; });
  clearButton.classList.toggle('visible', Boolean(searchInput.value));
  renderList();
}));
clearButton.addEventListener('click', () => {
  searchInputs.forEach(input => { input.value = ''; });
  clearButton.classList.remove('visible'); searchInput.focus(); renderList();
});
document.querySelectorAll('.suggestions button').forEach(button => button.addEventListener('click', () => {
  searchInputs.forEach(input => { input.value = button.textContent; });
  clearButton.classList.add('visible'); searchInput.focus(); renderList();
}));
document.querySelector('#reset-button').addEventListener('click', () => {
  searchInputs.forEach(input => { input.value = ''; });
  activeCategory = 'all'; clearButton.classList.remove('visible'); renderCategories(); renderList();
});

renderCategories();
renderList();
