export default function createTodoList(root) {
    return ({ todoList }) => {
        root.innerHTML = '';

        for (const todo of todoList) {
            const li = Todo(todo);
            root.append(li);
        }
    };
}

function Todo(todo) {
    const li = document.createElement('li');
    li.classList.add('single-todo');

    const item = document.createElement('span');
    li.item.add('todo');
    item.textContent = todo.item;

    if (todo.bought === true) {
        todo.classList.add('toggle');
    }

    // When ready to tackle complete functionality:
    // li.addEventListener('dblclick', () => {
    //   handleCompleteTodo;
    // });

    li.append(item);
    return li;
}
