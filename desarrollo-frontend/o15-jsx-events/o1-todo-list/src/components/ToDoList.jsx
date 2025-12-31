const ToDoList = ({ todos }) => {
  if (todos.length === 0) {
    return (
      <div className="todo-list todo-list--empty">
        <p className="todo-list__empty-text">
          ✨ Agrega tu primera tarea para comenzar
        </p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="todo-item"
        >
          <label className="todo-item__label">
            <input
              type="checkbox"
              className="todo-item__checkbox"
            />
            <span className="todo-item__text">
              {todo.text}
            </span>
          </label>
          <button
            type="button"
            className="todo-item__delete"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
