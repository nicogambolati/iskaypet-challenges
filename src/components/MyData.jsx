import React, { useState } from "react";

export default function MyData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [updated, setUpdated] = useState(false);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSave = () => {
    setUpdated(name, email, phone);
  };

  return (
    <div className="wrapper-component">
      <h3 className="d-flex title-page">Mis datos</h3>
      <div className="card">
        <div className="card-body input-group flex-column">
          <div className="name mb-4">
            <p className="d-flex mb-2 input-name">Nombre</p>
            <input
              type="text"
              value={name}
              onChange={(event) => handleInputChange(event, setName)}
              placeholder="Nombre"
              required
            />
          </div>
          <div className="email mb-4">
            <p className="d-flex mb-2 input-name">Email</p>
            <input
              type="text"
              value={email}
              onChange={(event) => handleInputChange(event, setEmail)}
              placeholder="Email"
              required
            />
          </div>
          <div className="phone mb-4">
            <p className="d-flex mb-2 input-name">Telefono</p>
            <input
              type="text"
              value={phone}
              onChange={(event) => handleInputChange(event, setPhone)}
              placeholder="Telefono"
              required
            />
          </div>
          <div className="mt-4">
            <button className="btn btn-primary " onClick={handleSave}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
