import { signUpUser } from './utils/fetch-utils.js';

const signUpForm = document.getElementById('sign-up-form');
const formData = new FormData(signUpForm);

signUpForm.addEventListener('submit', async (e) => {
    console.log('form functioning');
    e.preventDefault();

    await signUpUser({
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });
});
