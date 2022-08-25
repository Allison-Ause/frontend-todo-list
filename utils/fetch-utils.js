// create signUpUser function

const BASE_URL = 'https://aause-backend-todo-list.herokuapp.com';
// const BASE_URL = 'http://localhost:7890';

export async function signUpUser(userInfo) {
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

export async function signInUser(userInfo) {
    console.log('USERINFO', userInfo);
    const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userInfo),
    });
    const data = await res.json();
    console.log('DATA', data);
    console.log('RES.STATUS', res.status);
    if (res.ok) {
        location.replace('./todos');
    } else {
        // eslint-disable-next-line no-console
        console.error(data.message);
    }
}

export async function getUser() {
    const res = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    if (res.ok) {
        const user = await res.json();
        return user;
    }
}

export async function checkUser() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) {
        location.replace('./todos');
    }
}

export async function getAllTodos() {
    const res = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    if (res.ok) {
        const todoList = await res.json();

        return todoList;
    }
}

export async function addTodo(todo) {
    const res = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: todo }),
        credentials: 'include',
    });

    if (res.ok) {
        const newTodo = await res.json();

        return newTodo;
    }
}

export async function updateTodo(todo) {
    const res = await fetch(`${BASE_URL}/api/v1/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo), //what goes here?
        credentials: 'include',
    });

    if (res.ok) {
        const updatedTodo = await res.json();
        return updatedTodo;
    }
}
