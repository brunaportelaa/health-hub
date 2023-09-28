import React, {useState} from 'react';
import './CadastrarProntuario.css';

const CadastroProntuario = () => {
    const novoProntuario = {
        cpfPaciente: '',
        diagnostico: {
            problema: '',
            dataRegistro: '',
            status: '',
            statusVerificacao: '',
            dataAbatimento: '',
        },
        medicamentos: [],
        procedimentos: [],
    };

    const novoProcedimento = {
        nome: '',
        categoria: '',
        data: '',
        status: ''
    };

    const novoMedicamento = {
        nome: '',
        data: '',
        status: '',
        dosagem: ''
    };

    const [form, setForm] = useState(novoProntuario);

    const handleChange = (e, section, index) => {
        const {name, value} = e.target;

        switch (section) {
            case 'diagnostico': {
                setForm({
                    ...form,
                    diagnostico: {
                        ...form.diagnostico, [name]: value
                    }
                });
                break;
            }
            case 'medicamentos':
            case 'procedimentos': {
                setForm({
                    ...form,
                    [section]: form[section]
                        .map(item => {
                            if (index === form[section].indexOf(item)) {
                                item[name] = value;
                            }

                            return item;
                        })
                });
                break;
            }
            default:
                setForm({...form, [name]: value});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const prontuarioMedico = {
            cpfPaciente: form.cpfPaciente,
            diagnostico: form.diagnostico,
            medicamentos: form.medicamentos,
            procedimentos: form.procedimentos
        };

        setForm(novoProntuario);
    };

    return (<div className='container-cadastrar-prontuario'>
        <h1 className='titulo-cadastrar-prontuario'>Cadastro de Prontuário Médico</h1>
        <form className='form-cadastrar-prontuario' onSubmit={handleSubmit}>
            <div>
                <label>CPF do Paciente</label>
                <input
                    type="text"
                    name="cpfPaciente"
                    placeholder='Informe o CPF do paciente'
                    value={form.cpfPaciente}
                    onChange={(e) => handleChange(e, 'cpfPaciente')}
                />
            </div>
            <div>
                <h2 className='titulo-diagnostico-medicamento'>Diagnóstico</h2>
                <div>
                    <label>Problema</label>
                    <input
                        type="text"
                        placeholder='Informe o nome do problema'
                        name="problema"
                        value={form.diagnostico.problema}
                        onChange={(e) => handleChange(e, 'diagnostico')}
                        required
                    />
                </div>
                <div>
                    <label>Data de Registro</label>
                    <input
                        type="date"
                        name="dataRegistro"
                        placeholder='Informe a data de registro'
                        value={form.diagnostico.dataRegistro}
                        onChange={(e) => handleChange(e, 'diagnostico')}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        name="status"
                        placeholder='Selecione o status do diagnóstico'
                        value={form.diagnostico.status}
                        onChange={(e) => handleChange(e, 'diagnostico')}
                        required
                    />
                </div>
                <div>
                    <label>Status de Verificação</label>
                    <input
                        type="text"
                        name="statusVerificacao"
                        placeholder='Selecione o status de verificação'
                        value={form.diagnostico.statusVerificacao}
                        onChange={(e) => handleChange(e, 'diagnostico')}
                        required
                    />
                </div>
                <div>
                    <label>Data do Abatimento</label>
                    <input
                        type="date"
                        name="dataAbatimento"
                        placeholder='Informe a data do abatimento'
                        value={form.diagnostico.dataAbatimento}
                        onChange={(e) => handleChange(e, 'diagnostico')}
                        required
                    />
                </div>
            </div>
            <div>
                <h2 className='titulo-diagnostico-medicamento'>Medicamentos (se houver)</h2>
                <button className='button-cadastrar-prontuario'
                        type='button'
                        onClick={() => setForm({...form, medicamentos: [...form.medicamentos, novoMedicamento]})}
                >
                    Adicionar Medicamento
                </button>
                {form.medicamentos.map((medicamento, index) => (
                    <div key={index}>
                        <div style={{
                            marginBottom: 10,
                            marginTop: index > 0 ? 30 : 0
                        }}>
                            <label><b>Medicamento {index + 1} </b></label>
                        </div>
                        <div>
                            <label>Nome do Medicamento</label>
                            <input
                                type="text"
                                name="nome"
                                placeholder='Informe o nome do medicamento'
                                value={medicamento.nome}
                                onChange={(e) => handleChange(e, 'medicamentos', index)}
                            />
                        </div>
                        <div>
                            <label>Data de Início do Tratamento</label>
                            <input
                                type="date"
                                name="data"
                                placeholder='Informe a data de registro'
                                value={medicamento.data}
                                onChange={(e) => handleChange(e, 'medicamentos', index)}
                            />
                        </div>
                        <div>
                            <label>Status</label>
                            <input
                                type="text"
                                name="status"
                                placeholder='Selecione o status da medicação'
                                value={medicamento.status}
                                onChange={(e) => handleChange(e, 'medicamentos', index)}
                            />
                        </div>
                        <div>
                            <label>Dosagem</label>
                            <input
                                type="text"
                                name="dosagem"
                                placeholder='Informe a dosagem'
                                value={medicamento.dosagem}
                                onChange={(e) => handleChange(e, 'medicamentos', index)}
                            />
                        </div>
                        <button className='button-cadastrar-prontuario'
                                type='button'
                                onClick={() => setForm({
                                        ...form,
                                        medicamentos: form.medicamentos.filter(item => item !== medicamento)
                                    }
                                )}
                        >
                            Remover Medicamento
                        </button>
                    </div>
                ))};

            </div>
            <div>
                <h2 className='titulo-diagnostico-medicamento'>Procedimentos (se houver)</h2>
                <button className='button-cadastrar-prontuario'
                        type='button'
                        onClick={() => setForm({...form, procedimentos: [...form.procedimentos, novoProcedimento]})}
                >
                    Adicionar Procedimento
                </button>
                {form.procedimentos.map((procedimento, index) => (
                    <div key={index}>
                        <div style={{
                            marginBottom: 10,
                            marginTop: index > 0 ? 30 : 0
                        }}>
                            <label><b>Procedimento {index + 1} </b></label>
                        </div>
                        <div>
                            <label>Nome do Procedimento</label>
                            <input
                                type="text"
                                name="nome"
                                placeholder='Informe o nome do procedimento'
                                value={procedimento.nome}
                                onChange={(e) => handleChange(e, 'procedimentos', index)}
                            />
                        </div>
                        <div>
                            <label>Categoria</label>
                            <input
                                type="text"
                                name="categoria"
                                placeholder='Selecione a categoria do procedimento'
                                value={procedimento.categoria}
                                onChange={(e) => handleChange(e, 'procedimentos', index)}
                            />
                        </div>
                        <div>
                            <label>Data de Registro</label>
                            <input
                                type="date"
                                name="data"
                                placeholder='Informe a data de registro'
                                value={procedimento.data}
                                onChange={(e) => handleChange(e, 'procedimentos', index)}
                            />
                        </div>
                        <div>
                            <label>Status</label>
                            <input
                                type="text"
                                name="status"
                                placeholder='Selecione o status do procedimento'
                                value={procedimento.status}
                                onChange={(e) => handleChange(e, 'procedimentos', index)}
                            />
                        </div>
                        <button className='button-cadastrar-prontuario'
                                type='button'
                                onClick={() => setForm({
                                        ...form,
                                        procedimentos: form.procedimentos.filter(item => item !== procedimento)
                                    }
                                )}
                        >
                            Remover Procedimento
                        </button>
                    </div>
                ))}

            </div>
            <button className='button-cadastrar-prontuario'
                    type="submit"
            >
                Cadastrar Prontuário
            </button>
        </form>
    </div>);
}

export default CadastroProntuario;
