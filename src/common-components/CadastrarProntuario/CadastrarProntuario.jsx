import React, { Component } from 'react';
import './CadastrarProntuario.css';



class CadastroProntuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpfPaciente: '',
            diagnostico: {
                problema: '',
                dataRegistro: '',
                status: '',
                statusVerificacao: '',
                dataAbatimento: '',
            },
            medicamentos: [],
            novoMedicamento: {
                nomeMedicamento: '',
                dataInicioTratamento: '',
                medicamentoStatus: '',
                dosagem: '',
            },
        };
    }

    handleChange = (e, section) => {
        const { name, value } = e.target;
        if (section === 'diagnostico') {
            this.setState((prevState) => ({
                diagnostico: {
                    ...prevState.diagnostico,
                    [name]: value,
                },
            }));
        } else if (section === 'medicamento') {
            this.setState((prevState) => ({
                novoMedicamento: {
                    ...prevState.novoMedicamento,
                    [name]: value,
                },
            }));
        } else {
            this.setState({ [name]: value });
        }
    };

    handleAddMedicamento = () => {
        const { novoMedicamento } = this.state;
        this.setState((prevState) => ({
            medicamentos: [...prevState.medicamentos, novoMedicamento],
            novoMedicamento: {
                nomeMedicamento: '',
                dataInicioTratamento: '',
                medicamentoStatus: '',
                dosagem: '',
            },
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();


        const prontuarioMedico = {
            cpfPaciente: this.state.cpfPaciente,
            diagnostico: { ...this.state.diagnostico },
            medicamentos: [...this.state.medicamentos],
        };


        this.setState({
            cpfPaciente: '',
            diagnostico: {
                problema: '',
                dataRegistro: '',
                status: '',
                statusVerificacao: '',
                dataAbatimento: '',
            },
            medicamentos: [],
            novoMedicamento: {
                nomeMedicamento: '',
                dataInicioTratamento: '',
                medicamentoStatus: '',
                dosagem: '',
            },
        });
    };

    render() {
        const { cpfPaciente, diagnostico, medicamentos, novoMedicamento } = this.state;

        return (
            <div className='container-cadastrar-prontuario'>
                <h1 className='titulo-cadastrar-prontuario'>Cadastro de Prontuário Médico</h1>
                <form className='form-cadastrar-prontuario' onSubmit={this.handleSubmit}>
                    <div>
                        <label>CPF do Paciente:</label>
                        <input
                            type="text"
                            name="cpfPaciente"
                            value={cpfPaciente}
                            onChange={(e) => this.handleChange(e, 'cpfPaciente')}
                        />
                    </div>
                    <div>
                        <h2 className='titulo-diagnostico-medicamento'>Diagnóstico</h2>
                        <div>
                            <label>Problema:</label>
                            <input
                                type="text"
                                name="problema"
                                value={diagnostico.problema}
                                onChange={(e) => this.handleChange(e, 'diagnostico')}
                            />
                        </div>
                        <div>
                            <label>Data de Registro:</label>
                            <input
                                type="date"
                                name="dataRegistro"
                                value={diagnostico.dataRegistro}
                                onChange={(e) => this.handleChange(e, 'diagnostico')}
                            />
                        </div>
                        <div>
                            <label>Status:</label>
                            <input
                                type="text"
                                name="status"
                                value={diagnostico.status}
                                onChange={(e) => this.handleChange(e, 'diagnostico')}
                            />
                        </div>
                        <div>
                            <label>Status de Verificação:</label>
                            <input
                                type="text"
                                name="statusVerificacao"
                                value={diagnostico.statusVerificacao}
                                onChange={(e) => this.handleChange(e, 'diagnostico')}
                            />
                        </div>
                        <div>
                            <label>Data do Abatimento:</label>
                            <input
                                type="date"
                                name="dataAbatimento"
                                value={diagnostico.dataAbatimento}
                                onChange={(e) => this.handleChange(e, 'diagnostico')}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className='titulo-diagnostico-medicamento'>Medicamentos (se houver)</h2>
                        <div>
                            <label>Nome do Medicamento:</label>
                            <input
                                type="text"
                                name="nomeMedicamento"
                                value={novoMedicamento.nomeMedicamento}
                                onChange={(e) => this.handleChange(e, 'medicamento')}
                            />
                        </div>
                        <div>
                            <label>Data de Início do Tratamento:</label>
                            <input
                                type="date"
                                name="dataInicioTratamento"
                                value={novoMedicamento.dataInicioTratamento}
                                onChange={(e) => this.handleChange(e, 'medicamento')}
                            />
                        </div>
                        <div>
                            <label>Status do Medicamento:</label>
                            <input
                                type="text"
                                name="medicamentoStatus"
                                value={novoMedicamento.medicamentoStatus}
                                onChange={(e) => this.handleChange(e, 'medicamento')}
                            />
                        </div>
                        <div>
                            <label>Dosagem:</label>
                            <input
                                type="text"
                                name="dosagem"
                                value={novoMedicamento.dosagem}
                                onChange={(e) => this.handleChange(e, 'medicamento')}
                            />
                        </div>
                    </div>
                    <button className='button-cadastrar-prontuario' type="submit">Cadastrar Prontuário</button>
                </form>
            </div>
        );
    }
}

export default CadastroProntuario;
