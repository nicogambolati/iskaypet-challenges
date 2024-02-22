import React, { Component } from 'react'

export class Tasks extends Component {
  render() {
    return (
      <div className="wrapper-component">
        <h3 className="d-flex title-page">Mis tareas</h3>
        <button className="btn btn-primary " onClick={''}>
              Añadir tarea
          </button>
      </div>
    )
  }
}

export default Tasks