const openBtn = document.getElementById('burger-open');
const closeBtn = document.getElementById('burger-close');
const menuEl = document.getElementById('data-menu');
const linkEls = document.querySelectorAll('.nav-link');

openBtn.addEventListener('click', () => {
    menuEl.classList.toggle('is-hidden');
});

closeBtn.addEventListener('click', () => {
    menuEl.classList.toggle('is-hidden');
});

linkEls.forEach(linkEl => {
    linkEl.addEventListener('click', () => {
        menuEl.classList.toggle('is-hidden');
    });
});