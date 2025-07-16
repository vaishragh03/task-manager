import React from "react";


export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <ul className="d-flex align-items-center  mb-2">
      <input type="checkbox"
        checked={todo.isChecked}
        onChange={() => toggleTodo(todo.id)}
        className="mr-2 checked"
      />
      <span className={todo.isChecked ? "checked" : ""}>{todo.text}</span>
    
      <button className="btn btn-sm btn-danger ml-auto delete-icon-container delete-icon"
        onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </ul>
  );
}
