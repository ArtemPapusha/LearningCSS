const THEME_DARK_VALUE = 'dark';
const THEME_LIGHT_VALUE = 'light';
const SIDEBAR_SHORT_VALUE = 'short';
const SIDEBAR_LARGE_VALUE = 'large';
const THEME = '--theme';
const SIDEBAR_SIZE = '--sidebar-size';
const LOCAL_STORAGE_THEME_KEY = 'theme';
const LOCAL_STORAGE_SIZE_KEY = 'size';
const THEME_DARK_CLASS_VALUE = 'theme-dark';
const SIZE_SHORT_CLASS_VALUE = 'size-short';
const THEME_SELECTOR = '.theme';
const ASIDE_SIZE_SELECTOR = '#sidebar_size';

const $btnExpandSidebar = document.querySelector('#OnlyOpenSidebar');
const $searchInput = document.querySelector('#searchInput');
const $btnClickMe = document.querySelector('#switch__slider');
const $switchInput = document.querySelector('.switch__input');
const $theme = document.querySelector('.theme');
const $btnCollapse = document.querySelector('#btn_sidebar_size');
const $aside_size = document.querySelector('#sidebar_size');

(function() {
  const theme = getLocalStorageItem(LOCAL_STORAGE_THEME_KEY);
  const size = getLocalStorageItem(LOCAL_STORAGE_SIZE_KEY);

  const themeStyleVar = getThemeStyleVar(theme === THEME_DARK_VALUE);
  const sizeStyleVar = getSidebarStyleVar(size === SIDEBAR_SHORT_VALUE);

  setRootStyle(themeStyleVar + sizeStyleVar);


  if(theme === THEME_DARK_VALUE) {
    handleNodeClass(THEME_SELECTOR, THEME_DARK_CLASS_VALUE);
    $switchInput.setAttribute('checked', true);
  }
  if(size === SIDEBAR_SHORT_VALUE) {
    handleNodeClass(ASIDE_SIZE_SELECTOR, SIZE_SHORT_CLASS_VALUE);
  }
}());

function getLocalStorageItem(key) {
  return localStorage.getItem(key);
}

function setLocalStorageItem(key, value) {
  return localStorage.setItem(key, value);
}

function setRootStyle(value) {
  document.querySelector(':root').style.cssText = value;
}

function getThemeStyleVar(cond) {
  return cond ? `${THEME}: ${THEME_DARK_VALUE};` : `${THEME}: ${THEME_LIGHT_VALUE};`;
}

function getSidebarStyleVar(cond) {
  return cond ? `${SIDEBAR_SIZE}: ${SIDEBAR_SHORT_VALUE};` : `${SIDEBAR_SIZE}: ${SIDEBAR_LARGE_VALUE};`;
}

function handleNodeClass(selector, className, isRemove = false) {
  const $node = document.querySelector(selector);

  if(isRemove) {
    $node.classList.remove(className);
  } else {
    $node.classList.add(className);
  }
}

const handleClickBtnClickMe = () => {
  const $aside_size = document.querySelector('#sidebar_size');
  const isThemeValueDark = !$theme.classList.contains(THEME_DARK_CLASS_VALUE);
  const theme = getThemeStyleVar(isThemeValueDark);
  const size = getSidebarStyleVar($aside_size.classList.contains(SIZE_SHORT_CLASS_VALUE));

  setLocalStorageItem(LOCAL_STORAGE_THEME_KEY, isThemeValueDark ? THEME_DARK_VALUE : THEME_LIGHT_VALUE);
  setRootStyle(theme + size);

  if(isThemeValueDark) {
    handleNodeClass(THEME_SELECTOR, THEME_DARK_CLASS_VALUE);
  } else {
    handleNodeClass(THEME_SELECTOR, THEME_DARK_CLASS_VALUE, true);
  }
}

const handleClickBtnCollapse = () => {
  const isSizeValueShort = !$aside_size.classList.contains(SIZE_SHORT_CLASS_VALUE);
  const size = getSidebarStyleVar(isSizeValueShort);
  const theme = getThemeStyleVar($theme.classList.contains(THEME_DARK_CLASS_VALUE));

  setLocalStorageItem(LOCAL_STORAGE_SIZE_KEY, isSizeValueShort ? SIDEBAR_SHORT_VALUE : SIDEBAR_LARGE_VALUE);
  setRootStyle(size + theme);

  if(isSizeValueShort) {
    handleNodeClass(ASIDE_SIZE_SELECTOR, SIZE_SHORT_CLASS_VALUE);
  } else {
    handleNodeClass(ASIDE_SIZE_SELECTOR, SIZE_SHORT_CLASS_VALUE, true);
  }
}

const handleClickBtnExpandSidebar = () => {
  const isSizeValueShort = $aside_size.classList.contains(SIZE_SHORT_CLASS_VALUE);

  if(!isSizeValueShort) {
    return false;
  }

  const size = getSidebarStyleVar(!isSizeValueShort);
  const theme = getThemeStyleVar($theme.classList.contains(THEME_DARK_CLASS_VALUE));

  setLocalStorageItem(LOCAL_STORAGE_SIZE_KEY, SIDEBAR_LARGE_VALUE);
  setRootStyle(size + theme);

  if (isSizeValueShort) {
    handleNodeClass(ASIDE_SIZE_SELECTOR, SIZE_SHORT_CLASS_VALUE, true);
    $searchInput.focus()
  } 
}

$openButton.addEventListener('click', handleClickOpenButton);

$closeButton.addEventListener('click', handleClickCloseButton);

$btnExpandSidebar.addEventListener('click', handleClickBtnExpandSidebar);

$btnClickMe.addEventListener('click', handleClickBtnClickMe);

$btnCollapse.addEventListener('click', handleClickBtnCollapse);
