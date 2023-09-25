import React, { Component } from 'react';
import './CadastrarPaciente.css';
import axios from 'axios';

class PatientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: {
                firstName: '',
                lastName: '',
                cpf: '',
                gender: '',
                birthDate: '',
                contactNumber: '',
            },
            emergencyContact: {
                firstName: '',
                lastName: '',
                gender: '',
                relationship: '',
                emergencyNumber: '',
            },
        };
    }

    handleChange = (e, section) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            [section]: {
                ...prevState[section],
                [name]: value,
            },
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { patient, emergencyContact } = this.state;


        axios.post('', {
            patient,
            emergencyContact,
        })
            .then((response) => {

            })
            .catch((error) => {

            });


        this.setState({
            patient: {
                firstName: '',
                lastName: '',
                cpf: '',
                gender: '',
                birthDate: '',
                contactNumber: '',
            },
            emergencyContact: {
                firstName: '',
                lastName: '',
                gender: '',
                relationship: '',
                emergencyNumber: '',
            },
        });
    };

    render() {
        const { patient, emergencyContact } = this.state;

        return (
            <div className='container-cadastrar-paciente'>
                <h1 className='titulo-cadastrar-paciente'>Cadastrar Paciente</h1>
                <form className='form-cadastrar-paciente' onSubmit={this.handleSubmit}>
                    <div>
                        <label>Primeiro Nome*</label>
                        <input
                            type="text"
                            name="firstName"
                            value={patient.firstName}
                            onChange={(e) => this.handleChange(e, 'patient')}
                        />
                    </div>
                    <div>
                        <label>Último Nome*</label>
                        <input
                            type="text"
                            name="lastName"
                            value={patient.lastName}
                            onChange={(e) => this.handleChange(e, 'patient')}
                        />
                    </div>
                    <div>
                        <label>CPF*</label>
                        <input
                            type="text"
                            name="cpf"
                            value={patient.cpf}
                            onChange={(e) => this.handleChange(e, 'patient')}
                        />
                    </div>
                    <div>
                        <label>Gênero*</label>
                        <input
                            type="text"
                            name="gender"
                            value={patient.gender}
                            onChange={(e) => this.handleChange(e, 'patient')}
                        />
                    </div>
                    <div>
                        <label>Data de Nascimento*</label>
                        <input
                            type="text"
                            name="birthDate"
                            value={patient.birthDate}
                            onChange={(e) => this.handleChange(e, 'patient')}
                        />
                    </div>
                    <div>
                        <label>Telefone para Contato*</label>
                        <input
                            type="text"
                            name="contactNumber"
                            value={patient.contactNumber}
                            onChange={(e) => this.handleChange(e, 'patient')}
                        />
                    </div>

                    <h3 className='titulo-contato-emergencia'>Contato de Emergência</h3>
                    <div>
                        <label>Primeiro Nome*</label>
                        <input
                            type="text"
                            name="firstName"
                            value={emergencyContact.firstName}
                            onChange={(e) => this.handleChange(e, 'emergencyContact')}
                        />
                    </div>
                    <div>
                        <label>Último Nome*</label>
                        <input
                            type="text"
                            name="lastName"
                            value={emergencyContact.lastName}
                            onChange={(e) => this.handleChange(e, 'emergencyContact')}
                        />
                    </div>
                    <div>
                        <label>Gênero*</label>
                        <input
                            type="text"
                            name="gender"
                            value={emergencyContact.gender}
                            onChange={(e) => this.handleChange(e, 'emergencyContact')}
                        />
                    </div>
                    <div>
                        <label>Grau de Parentesco*</label>
                        <input
                            type="text"
                            name="relationship"
                            value={emergencyContact.relationship}
                            onChange={(e) => this.handleChange(e, 'emergencyContact')}
                        />
                    </div>
                    <div>
                        <label>Telefone para Contato*</label>
                        <input
                            type="text"
                            name="emergencyNumber"
                            value={emergencyContact.emergencyNumber}
                            onChange={(e) => this.handleChange(e, 'emergencyContact')}
                        />
                    </div>
                    <button className='button-fazer-cadastro' type="submit">FAZER CADASTRO</button>
                </form>
            </div>
        );
    }
}

export default PatientForm;
