import React, { useState } from "react";
import Select from "../Select";
import ReactInputMask from "react-input-mask";
import {
  createMedicalRegistration,
  getPatientByCpf,
} from "../../services/api.service";
import { toast } from "react-toastify";
import "./CadastrarProntuario.css";

const CadastroProntuario = () => {
  const novoProntuario = {
    cpfPaciente: "",
    diagnostico: {
      problema: "",
      dataRegistro: "",
      status: "",
      statusVerificacao: "",
      dataAbatimento: "",
    },
    medicamentos: [],
    procedimentos: [],
  };

  const novoProcedimento = {
    nome: "",
    categoria: "",
    data: "",
    status: "",
  };

  const novoMedicamento = {
    nome: "",
    data: "",
    status: "",
    dosagem: "",
  };

  const [form, setForm] = useState(novoProntuario);

  const handleChange = (e, section, index) => {
    const { name, value } = e.target;

    switch (section) {
      case "diagnostico": {
        setForm({
          ...form,
          diagnostico: {
            ...form.diagnostico,
            [name]: value,
          },
        });
        break;
      }
      case "medicamentos":
      case "procedimentos": {
        setForm({
          ...form,
          [section]: form[section].map((item) => {
            if (index === form[section].indexOf(item)) {
              item[name] = value;
            }

            return item;
          }),
        });
        break;
      }
      default:
        setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bundle = {
      cpf: form.cpfPaciente,
      condition: {
        clinicalStatus: form.diagnostico.status,
        verificationStatus: form.diagnostico.statusVerificacao,
        recordedDate: form.diagnostico.dataRegistro,
        abatementDateTime: form.diagnostico.dataAbatimento,
        note: form.diagnostico.problema,
      },
      procedures: form.procedimentos.map((p) => ({
        status: p.status,
        category: p.categoria,
        note: p.nome,
        performedDateTime: p.data,
      })),
      medications: form.medicamentos.map((m) => ({
        dosage: m.dosagem,
        status: m.status,
        effectiveDateTime: m.data,
        note: m.nome,
      })),
    };

    bundle.cpf = bundle.cpf.replaceAll(/\D/g, "");

    if (bundle.cpf.length < 11) {
      toast("CPF inválido", { type: "error" });
      return;
    }

    const exists = await getPatientByCpf(bundle.cpf);

    if (!exists?.entry?.length) {
      toast("CPF não registrado na plataforma", { type: "warning" });
      return;
    }

    await createMedicalRegistration(bundle);
    setForm(novoProntuario);
    toast("Prontuário cadastrado!", { type: "success" });
  };

  return (
    <div className="container-cadastrar-prontuario">
      <h1 className="titulo-cadastrar-prontuario">
        Cadastro de Prontuário Médico
      </h1>
      <form className="form-cadastrar-prontuario" onSubmit={handleSubmit}>
        <ReactInputMask
          mask="999.999.999-99"
          value={form.cpfPaciente}
          name="cpfPaciente"
          onChange={(e) => {
            handleChange(e, "cpfPaciente");
          }}
          placeholder="Informe o CPF do paciente"
          required
        />
        <div>
          <h2 className="titulo-diagnostico-medicamento">Diagnóstico</h2>
          <div>
            <label>Problema</label>
            <input
              type="text"
              placeholder="Informe o nome do problema"
              name="problema"
              value={form.diagnostico.problema}
              onChange={(e) => handleChange(e, "diagnostico")}
              required
            />
          </div>
          <div>
            <label>Data de Registro</label>
            <input
              type="date"
              name="dataRegistro"
              placeholder="Informe a data de registro"
              value={form.diagnostico.dataRegistro}
              onChange={(e) => handleChange(e, "diagnostico")}
              required
            />
          </div>

          <Select
            id={"status"}
            label="Status:"
            onChange={(e) => handleChange(e, "diagnostico")}
            options={[
              { value: "active", label: "Ativo" },
              { value: "recurrence", label: "Recorrência" },
              { value: "relapse", label: "Recaída" },
              { value: "inactive", label: "Inativo" },
              { value: "remission", label: "Remissão" },
              { value: "resolved", label: "Resolvido" },
            ]}
            value={form.diagnostico.status}
            placeholder="Selecione o status do diagnóstico"
            required
          />

          <Select
            id={"statusVerificacao"}
            label="Status de Verificação:"
            onChange={(e) => handleChange(e, "diagnostico")}
            options={[
              { value: "unconfirmed", label: "Não confirmado" },
              { value: "provisional", label: "Provisório" },
              { value: "differential", label: "Diferencial" },
              { value: "confirmed", label: "Confirmado" },
              { value: "refuted", label: "Refutado" },
              { value: "entered-in-error", label: "Erro de digitação" },
            ]}
            value={form.diagnostico.statusVerificacao}
            placeholder="Selecione o status de verificação"
            required
          />

          <div>
            <label>Data do Abatimento</label>
            <input
              type="date"
              name="dataAbatimento"
              placeholder="Informe a data do abatimento"
              value={form.diagnostico.dataAbatimento}
              onChange={(e) => handleChange(e, "diagnostico")}
              required
            />
          </div>
        </div>
        <div>
          <h2 className="titulo-diagnostico-medicamento">
            Medicamentos (se houver)
          </h2>
          <button
            className="button-cadastrar-prontuario"
            type="button"
            onClick={() =>
              setForm({
                ...form,
                medicamentos: [...form.medicamentos, novoMedicamento],
              })
            }
          >
            Adicionar Medicamento
          </button>
          {form.medicamentos.map((medicamento, index) => (
            <div key={index}>
              <div
                style={{
                  marginBottom: 10,
                  marginTop: index > 0 ? 30 : 0,
                }}
              >
                <label>
                  <b>Medicamento {index + 1} </b>
                </label>
              </div>
              <div>
                <label>Nome do Medicamento</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Informe o nome do medicamento"
                  value={medicamento.nome}
                  onChange={(e) => handleChange(e, "medicamentos", index)}
                  required
                />
              </div>
              <div>
                <label>Data de Início do Tratamento</label>
                <input
                  type="date"
                  name="data"
                  placeholder="Informe a data de registro"
                  value={medicamento.data}
                  onChange={(e) => handleChange(e, "medicamentos", index)}
                  required
                />
              </div>

              <Select
                id={"status"}
                label="Status"
                onChange={(e) => handleChange(e, "medicamentos", index)}
                options={[
                  { value: "in-progress", label: "Em progresso" },
                  { value: "not-done", label: "Não realizado" },
                  { value: "on-hold", label: "Em espera" },
                  { value: "completed", label: "Completo" },
                  { value: "entered-in-error", label: "Erro de digitação" },
                  { value: "stopped", label: "Parado" },
                  { value: "unknown", label: "Desconhecido" },
                ]}
                value={medicamento.status}
                placeholder="Selecione o status da medicação"
                required
              />

              <div>
                <label>Dosagem</label>
                <input
                  type="text"
                  name="dosagem"
                  placeholder="Informe a dosagem"
                  value={medicamento.dosagem}
                  onChange={(e) => handleChange(e, "medicamentos", index)}
                  required
                />
              </div>
              <button
                className="button-cadastrar-prontuario"
                type="button"
                onClick={() =>
                  setForm({
                    ...form,
                    medicamentos: form.medicamentos.filter(
                      (item) => item !== medicamento
                    ),
                  })
                }
              >
                Remover Medicamento
              </button>
            </div>
          ))}
        </div>
        <div>
          <h2 className="titulo-diagnostico-medicamento">
            Procedimentos (se houver)
          </h2>
          <button
            className="button-cadastrar-prontuario"
            type="button"
            onClick={() =>
              setForm({
                ...form,
                procedimentos: [...form.procedimentos, novoProcedimento],
              })
            }
          >
            Adicionar Procedimento
          </button>
          {form.procedimentos.map((procedimento, index) => (
            <div key={index}>
              <div
                style={{
                  marginBottom: 10,
                  marginTop: index > 0 ? 30 : 0,
                }}
              >
                <label>
                  <b>Procedimento {index + 1} </b>
                </label>
              </div>
              <div>
                <label>Nome do Procedimento</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Informe o nome do procedimento"
                  value={procedimento.nome}
                  onChange={(e) => handleChange(e, "procedimentos", index)}
                  required
                />
              </div>

              <Select
                id={"categoria"}
                label="Categoria"
                onChange={(e) => handleChange(e, "procedimentos", index)}
                options={[
                  {
                    value: "24642003",
                    label: "Procedimento ou serviço de psiquiatria",
                  },
                  { value: "409063005", label: "Aconselhamento" },
                  { value: "409073007", label: "Educação" },
                  { value: "387713003", label: "Procedimento cirúrgico" },
                  { value: "103693007", label: "Procedimento de diagnóstico" },
                  { value: "46947000", label: "Manipulação quiroprática" },
                  {
                    value: "410606002",
                    label: "Procedimento de serviço social",
                  },
                ]}
                value={procedimento.categoria}
                placeholder="Selecione o status do procedimento"
                required
              />

              <div>
                <label>Data de Registro</label>
                <input
                  type="date"
                  name="data"
                  placeholder="Informe a data de registro"
                  value={procedimento.data}
                  onChange={(e) => handleChange(e, "procedimentos", index)}
                  required
                />
              </div>

              <Select
                id={"status"}
                label="Status"
                onChange={(e) => handleChange(e, "procedimentos", index)}
                options={[
                  { value: "in-progress", label: "Em progresso" },
                  { value: "not-done", label: "Não realizado" },
                  { value: "on-hold", label: "Em espera" },
                  { value: "completed", label: "Completo" },
                  { value: "entered-in-error", label: "Erro de digitação" },
                  { value: "stopped", label: "Parado" },
                  { value: "unknown", label: "Desconhecido" },
                ]}
                value={procedimento.status}
                placeholder="Selecione o status do procedimento"
                required
              />

              <button
                className="button-cadastrar-prontuario"
                type="button"
                onClick={() =>
                  setForm({
                    ...form,
                    procedimentos: form.procedimentos.filter(
                      (item) => item !== procedimento
                    ),
                  })
                }
              >
                Remover Procedimento
              </button>
            </div>
          ))}
        </div>
        <button className="button-cadastrar-prontuario" type="submit">
          Cadastrar Prontuário
        </button>
      </form>
    </div>
  );
};

export default CadastroProntuario;
