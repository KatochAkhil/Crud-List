import React, { useState } from "react";
import Form from "./Form";
import Pagination from "./Pagination";
import Todo from "./Todo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function List() {
  const Alltodo = [
    {
      id: 121212121,
      text: "First List Item",
    },
    {
      id: 4535353535,
      text: "Second List Item",
    },
    {
      id: 6565656565656,
      text: "Third List Item",
    },
  ];

  const removeDupplicateArray = Alltodo.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );
  console.log(removeDupplicateArray);

  const [todos, setTodo] = useState([
    {
      id: 121212121,
      text: "First List Item",
    },
    {
      id: 4535353535,
      text: "Second List Item",
    },
    {
      id: 6565656565656,
      text: "Third List Item",
    },
    {
      id: 1234567928392,
      text: "Fourth List Item",
    },
    {
      id: 23023802302303,
      text: "Fivth List Item",
    },
    {
      id: 320283902840,
      text: "Sixth List Item",
    },
    {
      id: 666768766,
      text: "Seventh List Item",
    },
  ]);
  const [pagination, setPagination] = useState(1);
  const [listperPage] = useState(3);

  const getLastPost = pagination * listperPage;
  const getFirstPost = getLastPost - listperPage;
  const getCurrentList = todos.slice(getFirstPost, getLastPost);

  const paginate = (listNumber) => {
    setPagination(listNumber);
  };

  const addTodo = (item) => {
    if (!item.text) {
      return;
    }
    const newTodo = [item, ...todos];
    setTodo(newTodo);
  };

  const editTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodo((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    toast("Item Edited Successfully");
  };

  const deleteTodo = (id) => {
    const remove = [...todos].filter((item) => item.id !== id);
    setTodo(remove);
    toast("Deleted Succefffully");
  };

  const completeTodo = (id) => {
    const remove = [...todos].filter((item) => item.id !== id);
    setTodo(remove);
    toast("Task Completed and removed  Succefffully");
  };
  return (
    <div className="todoListmain">
      <h1 className="text-center">Add your Todo Here</h1>
      <Form onSubmit={addTodo} />

      <Todo
        todos={getCurrentList}
        CompleteTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      <Pagination
        listPerPage={listperPage}
        totalList={todos.length}
        paginate={paginate}
      />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default List;
