import React, { useState } from "react";
import Form from "./Form";

function Todo({ todos, deleteTodo, editTodo, CompleteTodo }) {
  const [search, setSearch] = useState("");

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const update = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={update} />;
  }

  return (
    <>
      <div className="search_input">
        <input
          type="text"
          placeholder="🔍 Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="todo_list">
        {todos
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (item.text.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((todo, i) => (
            <div className="todoList" key={i}>
              <div className="listTodomain">
                <div
                  className="listTodo"
                  key={todo.id}
                  onClick={() => CompleteTodo(todo.id)}
                >
                  {todo.text}
                </div>
                <div className="buttons">
                  <button
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Todo;
