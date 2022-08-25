import { getUser, getAllTodos, addTodo } from '../utils/fetch-utils.js';

import createTodoList from '../components/TodoList.js';
import createTodoForm from '../components/TodoForm.js';

let todoList = [];

async function handlePageLoad() {
    const user = await getUser();
    if (!user) location.replace('../');
    todoList = await getAllTodos();
    display();
}

async function handleAddTodo(todo) {
    const newTodo = await addTodo(todo);
    console.log('newTodo', newTodo);
    todoList.push(newTodo);
    display();
}

const TodoForm = createTodoForm(document.querySelector('#todo-form'), handleAddTodo);
const TodoList = createTodoList(document.querySelector('#todo-list'));

function display() {
    TodoForm();
    TodoList({ todoList });
}

handlePageLoad();
