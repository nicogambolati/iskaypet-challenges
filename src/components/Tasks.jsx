import React, { useState, useEffect } from "react";

function Tasks() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (item) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${item.id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setData(oldValues => oldValues.filter(oldValue => oldValue.id !== item.id));
      } else {
        throw new Error('Failed to delete the item');
      }
    })
    .catch(error => console.error(error));
  };

  return (
    <div className="wrapper-component">
      <h3 className="d-flex title-page">Mis tareas</h3>

      <div>
        {data ? (
          <div>
              {data.map((item) => (
                <div className="card" key={item.id}>
                  <div className="card-body item-title">{item.title}</div>
                  <button onClick={() => handleDelete(item)}>Borrar</button>
                </div>
              ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <button className="btn btn-primary " onClick={""}>
        Añadir tarea
      </button>
    </div>
  );
}

export default Tasks;
