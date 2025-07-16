import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem("todoList")) || [];
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text,
      isChecked: false
    };
    setTodoList([...todoList, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodoList(todoList.map(todo =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const filteredTodos = todoList.filter(todo =>
    filter === "All" ? true :
    filter === "Active" ? !todo.isChecked :
    todo.isChecked
  );

  return (
    <div className="container background mt-4">
      <h3 className="mb-3 todos-heading">Task Manager</h3>
      <h1 className="create-task-heading">Create <span className="create-task-heading-subpart">Task</span></h1>
      <div className="d-flex">
        <input id="todoInput" className="form-control todo-user-input" placeholder="What needs to be done?" />
        <button className="button btn"
          onClick={() => {
            const input = document.getElementById("todoInput");
            addTodo(input.value);
            input.value = "";
          }}>
          Add
        </button>
      </div>
      <FilterButtons filter={filter} setFilter={setFilter} />
      <ul className="list-unstyled">
        <AnimatePresence>
          {filteredTodos.map(todo =>
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
}
