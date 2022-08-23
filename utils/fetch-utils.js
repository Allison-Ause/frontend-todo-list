// create signUpUser function
// cross-fetch?
const BASE_URL = 'http://localhost:7890';

export async function signUpForm(userInfo) {
    const res = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userInfo),
    });
    const data = await res.json();
    if (res.ok) {
        location.replace('./tasks');
    } else {
        console.error(data.message);
    }
}
