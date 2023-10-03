import ActiveTag from "../ActiveTag";
import { Card } from "../Card";
import "./Resultados.css";

const ResultsPage = ({ cpf, prontuarios = [] }) => {
  //   const prontuarios = [
  //     {
  //       title: "Dermatite Atópica",
  //       date: "10/03/2023",
  //       ativo: true,
  //     },
  //     {
  //       title: "Lesão do flexor superficial dos dedos",
  //       date: "12/08/2022",
  //       ativo: false,
  //     },
  //     {
  //       title: "Dermatite Atópica",
  //       date: "10/03/2023",
  //       ativo: false,
  //     },
  //     {
  //       title: "Dermatite Atópica",
  //       date: "10/03/2023",
  //       ativo: true,
  //     },
  //     {
  //       title: "Lesão do flexor superficial dos dedos",
  //       date: "12/08/2022",
  //       ativo: false,
  //     },
  //     {
  //       title: "Dermatite Atópica",
  //       date: "10/03/2023",
  //       ativo: false,
  //     },
  //   ];

  return (
    <div className="container">
      <div>
        <h1 className="page-title">Resultados</h1>
        <p className="paragraph">Pesquisando por {cpf}</p>
      </div>
      <div className="prontuarios-container">
        {prontuarios.map((prontuario) => {
          return (
            <Card>
              <h3>{prontuario.resource.entry[0].resource.note[0].text}</h3>
              <p>{prontuario.resource.entry[0].resource.recordedDate}</p>
              {/* //TODO ver quais status é p ser ativo */}
              <ActiveTag
                color={
                  prontuario.resource.entry[0].resource.clinicalStatus.coding[0]
                    .code
                    ? "#00D6AC"
                    : "#606060"
                }
                content={
                  prontuario.resource.entry[0].resource.clinicalStatus.coding[0]
                    .code
                    ? "ATIVO"
                    : "INATIVO"
                }
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsPage;
