import { signUpUser } from './utils/fetch-utils';

const signUpForm = document.querySelector('form');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(signUpForm);
    const data = await signUpUser({
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });
});
