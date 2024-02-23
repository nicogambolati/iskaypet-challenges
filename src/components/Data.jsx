import React, { useState } from "react";
import { FormGroup, FormControl, Button } from 'react-bootstrap';

export default function MyData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [updated, setUpdated] = useState(false);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !phone) {
      alert('Por favor complete todos los campos.');
      return;
    }

    try {
      const response = await fetch('URL_DEL_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (response.ok) {
        setUpdated(true);
      } else {
        alert('Hubo un error al enviar los datos. Por favor intente nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar los datos. Por favor intente nuevamente.');
    }
  };

  return (
    <div className="wrapper-component">
      <h3 className="d-flex title-page">Mis datos</h3>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
              <p className="d-flex mb-2 input-name">Nombre</p>
              <FormControl
                type="text"
                value={name}
                onChange={(event) => handleInputChange(event, setName)}
                placeholder="Nombre"
                required
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <p className="d-flex mb-2 input-name">Email</p>
              <FormControl
                type="email"
                value={email}
                onChange={(event) => handleInputChange(event, setEmail)}
                placeholder="Email"
                required
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <p className="d-flex mb-2 input-name">Teléfono</p>
              <FormControl
                type="tel"
                value={phone}
                onChange={(event) => handleInputChange(event, setPhone)}
                placeholder="Teléfono"
                required
              />
            </FormGroup>
            <div className="mt-4">
              <Button type="submit" className="btn-primary">
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}