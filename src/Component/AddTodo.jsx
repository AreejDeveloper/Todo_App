import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const SubmitForm = (event) => {
    event.preventDefault();
    if (title === "") {
      alert("Task must contain its title...");
      return;
    }
    if (detail === "") {
      alert("Task must contain its details...");
      return;
    }
    props.addTodo(title,detail);
    setTitle("");
    setDetail('');
  };
  return (
    <div className="container">
      <h1 className="display-4 my-4">To-Do List</h1>
      <div className="container my-4 shadow">
        <div className="center">
          <Form onSubmit={(event) => SubmitForm(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="my-2">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your task title here..."
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Detail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task details here..."
                name="detail"
                value={detail}
                onChange={(event) => {
                  setDetail(event.target.value);
                }}
              />
            </Form.Group>
            <Button className="my-3 btn" variant="success" type="submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
