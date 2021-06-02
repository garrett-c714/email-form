const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');



form.addEventListener('submit', event => {
    event.preventDefault();
    name.value = "";
    email.value = "";
});