import React, {useState} from "react";
import "./CadastrarPaciente.css";
import {createPatient, getPatientByCpf} from "../../services/api.service";
import Select from "../Select";
import ReactInputMask from "react-input-mask";
import {toast} from "react-toastify";

const PatientForm = () => {
    const [state, setState] = useState({
        patient: {
            firstName: "",
            lastName: "",
            cpf: "",
            gender: "",
            birthDate: null,
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
        const {name, value} = e.target;
        setState({
            ...state,
            [section]: {
                ...state[section],
                [name]: value
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {patient} = state;

        patient.cpf = patient.cpf.replaceAll(/\D/g, "");

        if (patient.cpf.length < 11) {
            toast("CPF inválido", {type: "error"});
            return;
        }

        if (patient.birthDate.length < 10) {
            toast("Data de nascimento inválida", {type: "error"});
            return;
        }

        patient.contactNumber = patient.contactNumber.replaceAll(/\D/g, "");

        if (patient.contactNumber.length < 13) {
            toast("Telefone inválido", {type: "error"});
            return;
        }

        const exists = await getPatientByCpf(patient.cpf);
        console.log(exists);

        if (exists?.entry?.length) {
            toast("Paciente já registrado", {type: "warning"});
            return;
        }

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

        toast("Paciente cadastrado!", {type: "success"});
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
                    <ReactInputMask
                        mask="999.999.999-99"
                        value={state.patient.cpf}
                        name="cpf"
                        onChange={(e) => {
                            handleChange(e, "patient");
                        }}
                        required
                    />
                </div>

                <Select
                    id={"gender"}
                    label="Gênero*"
                    onChange={(e) => handleChange(e, "patient")}
                    options={[
                        {value: "male", label: "Masculino"},
                        {value: "female", label: "Feminino"},
                        {value: "other", label: "Outro"},
                    ]}
                    value={state.patient.gender}
                    required
                />

                <label>Data de Nascimento*</label>

                <input
                    type="date"
                    value={state.patient.birthDate}
                    aria-label="Data"
                    onChange={(e) => {
                        setState({
                            ...state,
                            patient: {
                                ...state.patient,
                                birthDate: e?.target.value
                            }
                        });
                    }}
                    required
                />

                <div>
                    <label>Telefone para Contato*</label>
                    <ReactInputMask
                        mask="+55 (99) 99999-9999"
                        value={state.patient.contactNumber}
                        name="contactNumber"
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
