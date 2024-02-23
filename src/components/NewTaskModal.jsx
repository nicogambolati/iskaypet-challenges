import React from "react";
import { Modal, Button, Form } from 'react-bootstrap';

function NewTaskModal({ showModal, setShowModal, handleAddTask, newTaskTitle, setNewTaskTitle, newTaskDescription, setNewTaskDescription }) {
  return (
    <Modal className="new-task-modal" show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Añadir tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="new-task-form">
          <Form.Group className="mb-4" controlId="taskTitle">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="taskDescription">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              placeholder="Descripcion"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              className="custom-textarea"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
        </Button>
        <Button variant="primary" onClick={handleAddTask}>
            Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewTaskModal;