import React, { useState, useEffect, useRef } from "react";

function Form(props) {
  const [inputs, setInputs] = useState(props.edit ? props.edit.value : "");

  const valueref = useRef(null);

  useEffect(() => {
    valueref.current.focus();
  }, []);

  const inputChange = (e) => {
    setInputs(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 50000),
      text: inputs,
    });
    setInputs("");
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler} className="todo_Form_parent">
        {props.edit ? (
          <div className="form-group">
            <input
              type="text"
              placeholder="Edit your List Item"
              className="form-control"
              value={inputs}
              name="text"
              onChange={inputChange}
              ref={valueref}
            />
            <button type="submit" className="btn_sumbit">
              Edit
            </button>
          </div>
        ) : (
          <div className="form-group">
            <input
              type="text"
              placeholder="Add as you wish"
              className="form-control"
              value={inputs}
              name="text"
              onChange={inputChange}
              ref={valueref}
            />
            <button type="submit" className="btn_sumbit">
              Add
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
