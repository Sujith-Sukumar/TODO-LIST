import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleCheckboxChange = (id) => {
    const updatedTodos = toDos.map(todo => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, status: !todo.status };
        if (updatedTodo.status) {
          setCompletedTodos([...completedTodos, updatedTodo]);
        } else {
          setCompletedTodos(completedTodos.filter(todo => todo.id !== id));
        }
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    setTodos(toDos.filter(todo => todo.id !== id));
    setCompletedTodos(completedTodos.filter(todo => todo.id !== id));
  };

  const addTodo = () => {
    if (!toDo.trim()) return; // Prevent adding empty todos
    const newTodo = { id: Date.now(), text: toDo, status: false };
    setTodos([...toDos, newTodo]);
    setTodo(''); // Clear input after adding todo
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>TODO LIST</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                onChange={() => handleCheckboxChange(todo.id)}
                checked={todo.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => handleDelete(todo.id)}></i>
            </div>
          </div>
        ))}
      </div>
      <div className="completedTodos">
        <h2>Completed</h2>
        {completedTodos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                onChange={() => handleCheckboxChange(todo.id)}
                checked={todo.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => handleDelete(todo.id)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
