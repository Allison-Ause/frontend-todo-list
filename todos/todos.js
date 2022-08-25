import { getUser, getAllTodos, addTodo, updateTodo } from '../utils/fetch-utils.js';

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
    todoList.push(newTodo);
    display();
}

export default async function handleCompleteTodo(todo) {
    todo.bought = !todo.bought;
    await updateTodo(todo);
    display();
}

const TodoForm = createTodoForm(document.querySelector('#todo-form'), handleAddTodo);
const TodoList = createTodoList(document.querySelector('#todo-list'), handleCompleteTodo);

function display() {
    TodoForm();
    TodoList({ todoList });
}

handlePageLoad();
