import React from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';
import { useState } from 'react';
import { useImmer } from 'use-immer';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos,updateTodos] = useImmer(
    initialTodos
  );

  function handleAddTodo(title) {
    updateTodos(draft =>{
      draft.push({
        id: nextId++,
        title: title,
        done: false
      }); //Immerはpushが使えるらしい
    });
  }

  function handleChangeTodo(nextTodo) {
    updateTodos(todos.map(todo => { //setter以外かえあらない
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    }));
    }

  function handleDeleteTodo(todoId) {
    updateTodos(
      todos.filter(t => t.id !== todoId)
    ); //Setter名以外変わらない
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
