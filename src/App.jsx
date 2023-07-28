import { useState } from "react";
import "./app.css";

function App() {
  const [todos, setTodos] = useState([
    "Practicar JS",
    "Practicar React",
    "Estudiar Hooks",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const postNewTodo = (e) => {
    if (e.code === "Enter" && newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (idx) => {
    const todoCopy = [...todos];
    const newTodos = todoCopy.filter((todo, i) => i !== idx);
    setTodos(newTodos);
  };

  return (
    <div className="m-auto p-3 w-25 m-0 border-0 bd-example m-0 border-0 principal">
      <ul className="list-group ">
        <input
          placeholder="Add ToDo"
          value={newTodo}
          onKeyDown={(e) => {
            postNewTodo(e);
          }}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          className=" list-group-item"
          type="text"
        />
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              className="d-flex justify-content-between list-group-item lista"
            >
              {todo}{" "}
              <i
                onClick={() => deleteTodo(index)}
                className="text-secondary bi bi-trash"
              ></i>
            </li>
          );
        })}
        <li className="list-group-item font">{todos.length} item left</li>
      </ul>
    </div>
  );
}

export default App;
