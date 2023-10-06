import styled from "styled-components";
import { FontWeights } from "../../shared/DesignTokens";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMedicalRegistrationById } from "../../services/api.service";

const Container = styled.div`
  margin: 70px;
`;

const P = styled.p`
  text-transform: uppercase;
  letter-spacing: 2.88px;
`;

const H2 = styled.h2`
  /*  */
`;

const H3 = styled.h3`
  margin-bottom: 5px;
`;

const Item = styled.p`
  color: #565656;
  display: flex;
  margin: 0;
  line-height: 200%;
`;

const ItemTitulo = styled.p`
  font-weight: ${FontWeights.BOLD};
  margin: 0 5px 0;
`;

const ItemConteudo = styled.p`
  margin: 0;
`;

//status
const status = {
  active: "Ativo",
  recurrence: "Recorrência",
  relapse: "Recaída",
  inactive: "Inativo",
  remission: "Remissão",
  resolved: "Resolvido",
};

const statusVerificacao = {
  unconfirmed: "Não confirmado",
  provisional: "Provisório",
  differential: "Diferencial",
  confirmed: "Confirmado",
  refuted: "Refutado",
  "entered-in-error": "Erro de digitação",
};

const statusMedicamento = {
  "in-progress": "Em progresso",
  "not-done": "Não realizado",
  "on-hold": "Em espera",
  completed: "Completo",
  "entered-in-error": "Erro de digitação",
  stopped: "Parado",
  unknown: "Desconhecido",
};

const categoria = {
  24642003: "Procedimento ou serviço de psiquiatria",
  409063005: "Aconselhamento",
  409073007: "Educação",
  387713003: "Procedimento cirúrgico",
  103693007: "Procedimento de diagnóstico",
  46947000: "Manipulação quiroprática",
  410606002: "Procedimento de serviço social",
};

function ProntuarioInfo() {
  const { id } = useParams();
  const [prontuario, setProntuario] = useState({
    diagnostico: {
      problema: "",
      dataRegistro: "",
      status: "",
      statusVerificacao: "",
      dataAbatimento: "",
    },
    medicamentos: [],
    procedimentos: [],
  });
  console.log(prontuario);
  const getProntuario = async () => {
    const res = await getMedicalRegistrationById(id);
    console.log(res);
    const medicamentos = res.entry.filter(
      (e) => e.resource.resourceType === "MedicationAdministration"
    );
    const procedimentos = res.entry.filter(
      (e) => e.resource.resourceType === "Procedure"
    );
    const diagnostico = res.entry.find(
      (e) => e.resource.resourceType === "Condition"
    );
    setProntuario({
      diagnostico: {
        problema: diagnostico.resource.note[0].text,
        dataRegistro: diagnostico.resource.recordedDate,
        status: diagnostico.resource.clinicalStatus.coding[0].code,
        statusVerificacao:
          diagnostico.resource.verificationStatus.coding[0].code,
        dataAbatimento: diagnostico.resource.abatementDateTime,
      },
      medicamentos: medicamentos.map((m) => ({
        nome: m.resource.note[0].text,
        status: m.resource.status,
        dosagem: m.resource.dosage.text,
        dataInicio: m.resource.effectiveDateTime,
      })),
      procedimentos: procedimentos.map((p) => ({
        nome: p.resource.note[0].text,
        categoria: p.resource.category.coding[0].code,
        dataOcorrencia: p.resource.performedDateTime,
        status: p.resource.status,
      })),
    });
  };
  useEffect(() => {
    getProntuario();
  }, []);
  return (
    <Container>
      <P>Prontuário</P>
      <h1>{prontuario.diagnostico.problema}</h1>

      {/* <Item>
        <ItemTitulo>Paciente: </ItemTitulo>
        <ItemConteudo>Dermatite Atópica</ItemConteudo>
      </Item> */}

      <H2>Diagnóstico</H2>
      <Item>
        <ItemTitulo>Problema: </ItemTitulo>
        <ItemConteudo>{prontuario.diagnostico.problema}</ItemConteudo>
      </Item>
      <Item>
        <ItemTitulo>Data de registro: </ItemTitulo>
        <ItemConteudo>{prontuario.diagnostico.dataRegistro}</ItemConteudo>
      </Item>
      <Item>
        <ItemTitulo>Status: </ItemTitulo>
        <ItemConteudo>{status[prontuario.diagnostico.status]}</ItemConteudo>
      </Item>
      <Item>
        <ItemTitulo>Status de verificação: </ItemTitulo>
        <ItemConteudo>
          {statusVerificacao[prontuario.diagnostico.statusVerificacao]}
        </ItemConteudo>
      </Item>
      <Item>
        <ItemTitulo>Data do abatimento (se curado): </ItemTitulo>
        <ItemConteudo>{prontuario.diagnostico.dataAbatimento}</ItemConteudo>
      </Item>

      {prontuario.procedimentos.length > 0 && <H2>Procedimentos</H2>}
      {prontuario.procedimentos.map((p) => (
        <>
          <H3>{p.nome}</H3>
          <Item>
            <ItemTitulo>Categoria: </ItemTitulo>
            <ItemConteudo>{categoria[p.categoria]}</ItemConteudo>
          </Item>
          <Item>
            <ItemTitulo>Data da ocorrência: </ItemTitulo>
            <ItemConteudo>{p.dataOcorrencia}</ItemConteudo>
          </Item>
          <Item>
            <ItemTitulo>Status: </ItemTitulo>
            <ItemConteudo>{statusMedicamento[p.status]}</ItemConteudo>
          </Item>
        </>
      ))}

      {prontuario.medicamentos.length > 0 && <H2>Medicamentos</H2>}

      {prontuario.medicamentos.map((m) => (
        <>
          <H3>{m.nome}</H3>
          <Item>
            <ItemTitulo>Status: </ItemTitulo>
            <ItemConteudo>{statusMedicamento[m.status]}</ItemConteudo>
          </Item>
          <Item>
            <ItemTitulo>Dosagem: </ItemTitulo>
            <ItemConteudo>{m.dosagem}</ItemConteudo>
          </Item>
          <Item>
            <ItemTitulo>Data do início: </ItemTitulo>
            <ItemConteudo>{m.dataInicio}</ItemConteudo>
          </Item>
        </>
      ))}
    </Container>
  );
}

export default ProntuarioInfo;
