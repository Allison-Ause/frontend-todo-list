export default function createTodoForm(form, { handleAddTodo }) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        handleAddTodo(formData.get('todo'));
        form.reset();
    });
    return () => {};
}
