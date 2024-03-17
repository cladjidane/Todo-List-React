import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const loadTasks = () => {
    fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((error) => console.error("Failed to load tasks", error));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTodo = (todo) => {
    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(loadTasks);
  };

  const removeTodo = (todoId) => {
    fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => setTodos(res));
  };

  const updateTodo = (todoId, status) => {
    fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completed: status,
      })
    })
    .then(res => res.json())
    .then(res => setTodos(res));
            
  };

  const value = { todos, addTodo, removeTodo, updateTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};