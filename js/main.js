const cont = document.querySelector('.cont');
const switchButton = document.querySelector('.img__btn');
const signInForm = document.querySelector('.sign-in');

function updateSignInHeight() {
  const height = signInForm ? signInForm.offsetHeight : 0;
  document.documentElement.style.setProperty('--signin-height', `${height}px`);
}

switchButton.addEventListener('click', () => {
  cont.classList.toggle('s--signup');
});

window.addEventListener('resize', updateSignInHeight);
updateSignInHeight();