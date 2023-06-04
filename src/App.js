import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import BtnGroup from "./btn-group";

const inFocus = (i) => {
  setTimeout(() => {
    document.forms[0].elements[i].focus();
  }, 0);
};

export default function App() {
  const [todos, setTodos] = useState([
    {
      content: "What do you want to do?",
      isCompleted: false,
    },
  ]);

  useEffect(() => {
    inFocus(0);
  }, []);

  const handleKeyDown = (e, i) => {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  };

  const removeTodoAtIndex = (i) => {
    if (i === 0 && todos.length === 1) return;
    setTodos((todos) =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );
    inFocus(i - 1);
  };

  const createTodoAtIndex = (e, i) => {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false,
    });
    setTodos(newTodos);
    inFocus(i + 1);
  };

  const updateTodoAtIndex = (e, i) => {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  };

  const toggleTodoCompleteAtIndex = (index) => {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  };

  return (
    <div className="app">
      <AnimatedCursor
        innerSize={11}
        outerSize={13}
        color="255, 255, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      />

      <BtnGroup />

      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div
              className={`todo ${todo.isCompleted && "todo-is-completed"}`}
              key={i}
            >
              <div
                className={"checkbox"}
                onClick={() => toggleTodoCompleteAtIndex(i)}
              >
                {todo.isCompleted && <span>&#x2714;</span>}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onChange={(e) => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}
