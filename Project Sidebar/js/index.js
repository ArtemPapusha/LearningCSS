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

const $btnClickMe = document.querySelector('#switch__slider');
const $switchInput = document.querySelector('.switch__input');
const $theme = document.querySelector('.theme');
const $btnCollapse = document.querySelector('#btn_sidebar_size');
const $aside_size = document.querySelector('#sidebar_size');


  const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  const savedSize = localStorage.getItem(LOCAL_STORAGE_SIZE_KEY);

  const currentTheme = savedTheme === THEME_DARK_VALUE 
    ? `${THEME}: ${THEME_DARK_VALUE};` 
    : `${THEME}: ${THEME_LIGHT_VALUE};`;
 
  
  const currentSize = savedSize === SIDEBAR_SHORT_VALUE 
    ? `${SIDEBAR_SIZE}: ${SIDEBAR_SHORT_VALUE};` 
    : `${SIDEBAR_SIZE}: ${SIDEBAR_LARGE_VALUE};`;

  
  document.querySelector(':root').style.cssText = currentTheme + currentSize;
  
  if(savedTheme === THEME_DARK_VALUE) {
    $theme.classList.add(THEME_DARK_CLASS_VALUE);
    $switchInput.setAttribute('checked', true);
  }
  
  if(savedSize === SIDEBAR_SHORT_VALUE) {
    $aside_size.classList.add(SIZE_SHORT_CLASS_VALUE);
  }

  let sizeSidebar;
  function getLocalStorageTheme (themeValue) {
    document.querySelector(':root').style.cssText = `${THEME}: ${themeValue}; ${sizeSidebar}`;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeValue);
  }

  // function getLocalStorage (property, value, sidebarProperty, storageKey) {
  //   document.querySelector(':root').style.cssText = `${property}: ${value}; ${sidebarProperty}`;
  //   localStorage.setItem(storageKey, value);
  // }

$btnClickMe.addEventListener('click', () => {
  const $aside_size = document.querySelector('#sidebar_size');
  sizeSidebar = $aside_size.classList.contains(SIZE_SHORT_CLASS_VALUE) 
    ? `${SIDEBAR_SIZE}: ${SIDEBAR_SHORT_VALUE};` 
    : `${SIDEBAR_SIZE}: ${SIDEBAR_LARGE_VALUE};`;

  if(!$theme.classList.contains(THEME_DARK_CLASS_VALUE)) {
    $theme.classList.add(THEME_DARK_CLASS_VALUE);
    getLocalStorageTheme (THEME_DARK_VALUE);
  } else {
    $theme.classList.remove(THEME_DARK_CLASS_VALUE);
    getLocalStorageTheme (THEME_LIGHT_VALUE);
  }
});

let themeSidebar;

function checkTheme () {
  const $theme = document.querySelector('.theme');
  themeSidebar = $theme.classList.contains(THEME_DARK_CLASS_VALUE) 
    ? `${THEME}: ${THEME_DARK_VALUE};` 
    : `${THEME}: ${THEME_LIGHT_VALUE};`;
}

function getLocalStorageSize (sizeValue) {
  document.querySelector(':root').style.cssText = `${SIDEBAR_SIZE}: ${sizeValue}; ${themeSidebar}`;
  localStorage.setItem(LOCAL_STORAGE_SIZE_KEY, sizeValue);
}

$btnCollapse.addEventListener('click', () => {
  checkTheme ();

  if(!$aside_size.classList.contains(SIZE_SHORT_CLASS_VALUE)) {
    $aside_size.classList.add(SIZE_SHORT_CLASS_VALUE);
     getLocalStorageSize (SIDEBAR_SHORT_VALUE);
  } else {
    $aside_size.classList.remove(SIZE_SHORT_CLASS_VALUE);
    getLocalStorageSize (SIDEBAR_LARGE_VALUE);
  }
});

const $btnExpandSidebar = document.querySelector('#OnlyOpenSidebar');
const $searchInput = document.querySelector('#searchInput')

$btnExpandSidebar.addEventListener('click', () => {
  checkTheme ();

  if ($aside_size.classList.contains(SIZE_SHORT_CLASS_VALUE)) {
    $aside_size.classList.remove(SIZE_SHORT_CLASS_VALUE);
    getLocalStorageSize (SIDEBAR_LARGE_VALUE);
    $searchInput.focus()
  }

});
