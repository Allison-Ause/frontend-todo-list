import { signUpUser, signInUser, redirectIfLoggedIn } from './utils/fetch-utils.js';

const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(signUpForm);
    await signUpUser({
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('form functioning');
    const formData = new FormData(signInForm);
    await signInUser({
        email: formData.get('email'),
        password: formData.get('password'),
    });
});

await redirectIfLoggedIn();
