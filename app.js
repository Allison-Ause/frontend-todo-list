import { signUpUser, signInUser, redirectIfLoggedIn, addTodo } from './utils/fetch-utils.js';
import createTodoList from './components/TodoList.js';
import createTodoForm from './components/TodoForm.js';

let todoList = [];

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

async function handlePageLoad() {
    const user = await getUser();
    if (!user) location.replace('../');
    todoList = await getAllTodos();
    display();
}

async function handleAddTodo(todo) {
    const newTodo = await addTodo(todo);
    todoList.push(newTodo);
    display();
}

const TodoForm = createTodoForm(document.querySelector('#todo-form'), { handleAddTodo });
const TodoList = createTodoList(document.querySelector('#todo-list'));

await redirectIfLoggedIn();

function display() {
    TodoForm();
    TodoList({ todoList });
}
