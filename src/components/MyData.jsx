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
    <div className="card">
        <div className="name">
          <p className="card-title">Nombre</p>
          <input
            type="text" value={name}
            onChange={(event) => handleInputChange(event, setName)}
          />
        </div>
        <div className="email">
          <p className="card-title">Email</p>
          <input
            type="text" value={email}
            onChange={(event) => handleInputChange(event, setEmail)}
          />
        </div>
        <div className="phone">
          <p className="card-title">Telefono</p>
          <input
            type="text" value={phone}
            onChange={(event) => handleInputChange(event, setPhone)}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleSave}>Guardar</button>
        </div>
      </div>
  );
}
