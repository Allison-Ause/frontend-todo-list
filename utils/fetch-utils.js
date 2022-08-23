// create signUpUser function

const BASE_URL = 'http://localhost:7890';

export async function signUpUser(userInfo) {
    console.log('firing');
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
        location.replace('./todos');
    } else {
        // eslint-disable-next-line no-console
        console.error(data.message);
    }
}
