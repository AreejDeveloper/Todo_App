import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TodoItem = ({ todo, onDelete, onUpdate}) => {
  const [showModal, setShowModal] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedDetail, setUpdatedDetail] = useState(todo.detail);
  const btnTextColor ={
    color: "white"
  }
  const handleUpdate = () => {
    // Perform update logic here
    // For simplicity, just printing the updated title and detail in this example
    console.log('Updated Title:', updatedTitle);
    console.log('Updated Detail:', updatedDetail);
    const updatedTodo = {
      title:updatedTitle,
      detail:updatedDetail
    }
    onUpdate(updatedTodo,todo.id);
    // Close the modal
    setShowModal(false);
  };

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.detail}</p>
      <button className='btn btn-sm btn-danger me-4' onClick={() => onDelete(todo)}>
        Delete
      </button>
      <button className='btn btn-sm btn-info' onClick={() => setShowModal(true)} style={btnTextColor}>
        Update
      </button>
      <hr />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Title:</label>
            <input
              type='text'
              value={updatedTitle}
              onChange={(event) => setUpdatedTitle(event.target.value)}
            />
          </div>
          <div>
            <label>Detail:</label>
            <input
              type='text'
              value={updatedDetail}
              onChange={(event) => setUpdatedDetail(event.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoItem;
