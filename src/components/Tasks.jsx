import React, { useState, useEffect } from "react";
import NewTaskModal from "./NewTaskModal";
import DeleteButton from "./DeleteButton";

function Tasks() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const defaultDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna";
  const TASKS_LIMIT = 3; // Define la constante para el límite de tareas

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${TASKS_LIMIT}`)
      .then((response) => response.json())
      .then((data) => {
        // Agregar la propiedad "descripcion" con un Lorem Ipsum a cada tarea
        const tasksWithDescription = data.map((task) => ({
          ...task,
          description: defaultDescription,
        }));
        setData(tasksWithDescription);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (item) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${item.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Eliminar el elemento del estado
          setData((prevData) =>
            prevData.filter((oldValue) => oldValue.id !== item.id)
          );
        } else {
          throw new Error("Failed to delete the item");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleAddTask = () => {
    const newTask = {
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
    };

    fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add task");
        }
      })
      .then((data) => {
        setData((prevData) => [...prevData, data]); // Simplemente agregamos la nueva tarea al estado
        // Cerrar el modal
        setShowModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="wrapper-component">
      <h3 className="d-flex title-page">Mis tareas</h3>
      <div>
        {data ? (
          <div>
            {data.map((item) => (
              <div className="card" key={item.id}>
                <div className="card-body">
                  <div className="item-title">{item.title}</div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-10 item-description">
                        {item.description}
                      </div>
                      <div className="col-2 ">
                        <DeleteButton onClick={() => handleDelete(item)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <button
        className="btn btn-primary mt-5"
        onClick={() => setShowModal(true)}
      >
        Añadir tarea
      </button>

      <NewTaskModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleAddTask={handleAddTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskDescription={newTaskDescription}
        setNewTaskDescription={setNewTaskDescription}
      />
    </div>
  );
}

export default Tasks;
