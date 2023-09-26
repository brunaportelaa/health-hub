import React, { useState } from "react";
import "./CadastrarPaciente.css";
import { createPatient } from "../../services/API.service";

const PatientForm = () => {
  const [state, setState] = useState({
    patient: {
      firstName: "",
      lastName: "",
      cpf: "",
      gender: "",
      birthDate: "",
      contactNumber: "",
    },
    //   emergencyContact: {
    //     firstName: "",
    //     lastName: "",
    //     gender: "",
    //     relationship: "",
    //     emergencyNumber: "",
    //   },
  });

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { patient } = state;

    await createPatient(patient);

    setState({
      patient: {
        firstName: "",
        lastName: "",
        cpf: "",
        gender: "",
        birthDate: "",
        contactNumber: "",
      },
    });
  };

  return (
    <div className="container-cadastrar-paciente">
      <h1 className="titulo-cadastrar-paciente">Cadastrar Paciente</h1>
      <form className="form-cadastrar-paciente" onSubmit={handleSubmit}>
        <div>
          <label>Primeiro Nome*</label>
          <input
            type="text"
            name="firstName"
            value={state.patient.firstName}
            onChange={(e) => handleChange(e, "patient")}
            required
          />
        </div>
        <div>
          <label>Último Nome*</label>
          <input
            type="text"
            name="lastName"
            value={state.patient.lastName}
            onChange={(e) => handleChange(e, "patient")}
            required
          />
        </div>
        <div>
          <label>CPF*</label>
          <input
            name="cpf"
            value={state.patient.cpf}
            type="text"
            pattern="\d*"
            maxLength="11"
            minLength="11"
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              handleChange(e, "patient");
            }}
            required
          />
        </div>
        <div>
          <label>Gênero*</label>
          <input
            type="text"
            name="gender"
            value={state.patient.gender}
            onChange={(e) => handleChange(e, "patient")}
            required
          />
        </div>
        <div>
          <label>Data de Nascimento*</label>
          <input
            type="text"
            name="birthDate"
            value={state.patient.birthDate}
            onChange={(e) => handleChange(e, "patient")}
            required
          />
        </div>
        <div>
          <label>Telefone para Contato*</label>
          <input
            type="text"
            name="contactNumber"
            value={state.patient.contactNumber}
            onChange={(e) => {
              handleChange(e, "patient");
            }}
            required
          />
        </div>

        {/* <h3 className="titulo-contato-emergencia">Contato de Emergência</h3>
          <div>
            <label>Primeiro Nome*</label>
            <input
              type="text"
              name="firstName"
              value={emergencyContact.firstName}
              onChange={(e) => handleChange(e, "emergencyContact")}
            />
          </div>
          <div>
            <label>Último Nome*</label>
            <input
              type="text"
              name="lastName"
              value={emergencyContact.lastName}
              onChange={(e) => handleChange(e, "emergencyContact")}
            />
          </div>
          <div>
            <label>Gênero*</label>
            <input
              type="text"
              name="gender"
              value={emergencyContact.gender}
              onChange={(e) => handleChange(e, "emergencyContact")}
            />
          </div>
          <div>
            <label>Grau de Parentesco*</label>
            <input
              type="text"
              name="relationship"
              value={emergencyContact.relationship}
              onChange={(e) => handleChange(e, "emergencyContact")}
            />
          </div>
          <div>
            <label>Telefone para Contato*</label>
            <input
              type="text"
              name="emergencyNumber"
              value={emergencyContact.emergencyNumber}
              onChange={(e) => handleChange(e, "emergencyContact")}
            />
          </div> */}
        <button className="button-fazer-cadastro" type="submit">
          FAZER CADASTRO
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
