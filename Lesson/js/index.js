const $btnClickMe = document.querySelector('#clickMe');
const $block = document.querySelector('.block');

$btnClickMe.addEventListener('click', () => {
  const $theme = document.querySelector('.theme');

  if(!$theme.classList.contains('theme-dark')) {
    $theme.classList.add('theme-dark');
    document.querySelector(':root').style.cssText = '--theme: dark';
  } else {
    $theme.classList.remove('theme-dark');
    document.querySelector(':root').style.cssText = '--theme: light';
  }
});