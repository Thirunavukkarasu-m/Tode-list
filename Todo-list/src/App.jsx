import { useState } from "react";
import "./index.css";
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>📝 My Todo List</h1>

        <div className="inputBox">
          <input
            type="text"
            value={task}
            placeholder="Enter your task..."
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul className="list">
          {todos.length === 0 && <p className="empty">No tasks yet 🚀</p>}

          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
