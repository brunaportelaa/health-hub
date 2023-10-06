import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import ResultsPage from "../Resultados/Resultados";
import { toast } from "react-toastify";
import { getMedicalRegistrationByCpf } from "../../services/api.service";
import "./PesquisarProntuario.css";

const SearchProntuario = () => {
  const [state, setState] = useState({
    cpf: "",
    prontuarioData: null,
    error: null,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      cpf: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await getMedicalRegistrationByCpf(
        state.cpf.replaceAll(/\D/g, "")
      );

      if (!data?.entry?.length) {
        toast("Nenhum prontuário encontrado", { type: "error" });
      }

      setState({
        cpf: state.cpf,
        prontuarioData: data?.entry,
        error: null,
      });
    } catch (error) {
      setState({
        ...state,
        prontuarioData: null,
        error: error.message,
      });
    }
  };

  return (
    <div className="container">
      <h1 className="titulo-pesq-pront">Pesquisar prontuários</h1>
      <form onSubmit={handleSubmit}>
        <label className="label-pesq-pront" htmlFor="cpf">
          Insira seu CPF:
        </label>

        <div className="div-input">
          <ReactInputMask
            mask="999.999.999-99"
            value={state.cpf}
            id="cpf"
            name="cpf"
            onChange={handleChange}
            required
          />
        </div>
        <button className="button-pesq-pront" type="submit">
          Pesquisar
        </button>
      </form>

      {state.error && <p className="error">Erro: {state.error}</p>}

      {state?.prontuarioData?.length && (
        <>
          <h2>Dados do Prontuário</h2>
          <ResultsPage cpf={state.cpf} prontuarios={state.prontuarioData} />
        </>
      )}
    </div>
  );
};

export default SearchProntuario;
