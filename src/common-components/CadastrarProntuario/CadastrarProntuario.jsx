import React, { useState } from "react";
import "./CadastrarProntuario.css";

const CadastroProntuario = () => {
  const [form, setForm] = useState({
    cpfPaciente: "",
    diagnostico: {
      problema: "",
      dataRegistro: "",
      status: "",
      statusVerificacao: "",
      dataAbatimento: "",
    },
    medicamentos: [],
    novoMedicamento: {
      nomeMedicamento: "",
      dataInicioTratamento: "",
      medicamentoStatus: "",
      dosagem: "",
    },
  });

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "diagnostico") {
      setForm((prevform) => ({
        ...prevform,
        diagnostico: {
          ...prevform.diagnostico,
          [name]: value,
        },
      }));
    } else if (section === "medicamento") {
      setForm((prevform) => ({
        ...prevform,
        novoMedicamento: {
          ...prevform.novoMedicamento,
          [name]: value,
        },
      }));
    } else {
      setForm((prevform) => ({ ...prevform, [name]: value }));
    }
  };

  const handleAddMedicamento = () => {
    const { novoMedicamento } = form;
    setForm((prevform) => ({
      medicamentos: [...prevform.medicamentos, novoMedicamento],
      novoMedicamento: {
        nomeMedicamento: "",
        dataInicioTratamento: "",
        medicamentoStatus: "",
        dosagem: "",
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const prontuarioMedico = {
      cpfPaciente: form.cpfPaciente,
      diagnostico: { ...form.diagnostico },
      medicamentos: [...form.medicamentos],
    };

    setForm({
      cpfPaciente: "",
      diagnostico: {
        problema: "",
        dataRegistro: "",
        status: "",
        statusVerificacao: "",
        dataAbatimento: "",
      },
      medicamentos: [],
      novoMedicamento: {
        nomeMedicamento: "",
        dataInicioTratamento: "",
        medicamentoStatus: "",
        dosagem: "",
      },
    });
  };

  const { cpfPaciente, diagnostico, medicamentos, novoMedicamento } = form;

  return (
    <div className="container-cadastrar-prontuario">
      <h1 className="titulo-cadastrar-prontuario">
        Cadastro de Prontuário Médico
      </h1>
      <form className="form-cadastrar-prontuario" onSubmit={handleSubmit}>
        <div>
          <label>CPF do Paciente:</label>
          <input
            type="text"
            name="cpfPaciente"
            value={cpfPaciente}
            onChange={(e) => handleChange(e, "cpfPaciente")}
            required
          />
        </div>
        <div>
          <h2 className="titulo-diagnostico-medicamento">Diagnóstico</h2>
          <div>
            <label>Problema:</label>
            <input
              type="text"
              name="problema"
              value={diagnostico.problema}
              onChange={(e) => handleChange(e, "diagnostico")}
              required
            />
          </div>
          <div>
            <label>Data de Registro:</label>
            <input
              type="date"
              name="dataRegistro"
              value={diagnostico.dataRegistro}
              onChange={(e) => handleChange(e, "diagnostico")}
              required
            />
          </div>
          <div>
            <label>Status:</label>
            <input
              type="text"
              name="status"
              value={diagnostico.status}
              onChange={(e) => handleChange(e, "diagnostico")}
              required
            />
          </div>
          <div>
            <label>Status de Verificação:</label>
            <input
              type="text"
              name="statusVerificacao"
              value={diagnostico.statusVerificacao}
              onChange={(e) => handleChange(e, "diagnostico")}
              required
            />
          </div>
          <div>
            <label>Data do Abatimento:</label>
            <input
              type="date"
              name="dataAbatimento"
              value={diagnostico.dataAbatimento}
              onChange={(e) => handleChange(e, "diagnostico")}
              required
            />
          </div>
        </div>
        <div>
          <h2 className="titulo-diagnostico-medicamento">
            Medicamentos (se houver)
          </h2>
          <div>
            <label>Nome do Medicamento:</label>
            <input
              type="text"
              name="nomeMedicamento"
              value={novoMedicamento.nomeMedicamento}
              onChange={(e) => handleChange(e, "medicamento")}
              required
            />
          </div>
          <div>
            <label>Data de Início do Tratamento:</label>
            <input
              type="date"
              name="dataInicioTratamento"
              value={novoMedicamento.dataInicioTratamento}
              onChange={(e) => handleChange(e, "medicamento")}
              required
            />
          </div>
          <div>
            <label>Status do Medicamento:</label>
            <input
              type="text"
              name="medicamentoStatus"
              value={novoMedicamento.medicamentoStatus}
              onChange={(e) => handleChange(e, "medicamento")}
              required
            />
          </div>
          <div>
            <label>Dosagem:</label>
            <input
              type="text"
              name="dosagem"
              value={novoMedicamento.dosagem}
              onChange={(e) => handleChange(e, "medicamento")}
              required
            />
          </div>
        </div>
        <button className="button-cadastrar-prontuario" type="submit">
          Cadastrar Prontuário
        </button>
      </form>
    </div>
  );
};

export default CadastroProntuario;
