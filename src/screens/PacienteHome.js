import styled from "styled-components";
import {
  BorderRadiuses,
  FontFamilies,
  FontSizes,
  FontWeights,
  Gradients,
  Shadows,
  Spaces,
} from "../shared/DesignTokens";
import doutores from "../assets/objects/doutores.js";
import prontuarios from "../assets/objects/prontuarios";
import recursos from "../assets/objects/recursos";

const HomeContainer = styled.div`
  width: 100%;
  padding: 40px 60px 0 140px;
`;

const HomeTitle = styled.h1`
  font-size: ${FontSizes.SIX};
`;

const H2 = styled.h2`
  letter-spacing: 2.88px;
  text-transform: uppercase;
  font-weight: ${FontWeights.THIN};
  margin: 100px 0 15px 0;
  margin-top: ${(props) => props.marginTop};
  font-size: ${FontSizes.TWO_HALF};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Doutor = styled.div`
  width: 12.5%;
  text-align: center;
  /* border: 1px solid red; */
`;

const DoutorImg = styled.img`
  width: 100%;
`;

const DoutorName = styled.h3`
  font-size: ${FontSizes.TWO};
`;

const ProntuarioName = styled.h3`
  font-size: ${FontSizes.TWO_HALF};
`;

const Details = styled.p`
  font-size: ${FontSizes.TWO};
`;

const ProntuarioCard = styled.div`
  box-shadow: ${Shadows.ONE};
  text-align: center;
  margin: 0 2%;
  width: 29.3%;
  padding: ${Spaces.TWO} ${Spaces.FOUR};
  border-radius: ${BorderRadiuses.TWO};
`;

const ActiveTagDiv = styled.div`
  background-color: #ededed;
  width: fit-content;
  block-size: fit-content;
  margin: auto;
`;

const ActiveTag = styled.p`
  font-size: ${FontSizes.ONE_QUARTER};
  margin: 5px 15px;
  color: ${(props) => props.color};
`;

const Recurso = styled.div`
  box-shadow: ${Shadows.ONE};
  text-align: center;
  margin: 0 2%;
  width: 29.3%;
  padding: ${Spaces.TWO} ${Spaces.FOUR};
  border-radius: ${BorderRadiuses.TWO};
  background: ${Gradients.ONE};
`;

const RecursosName = styled.h3`
  font-family: ${FontFamilies.PRIMARY};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

const Button = styled.button`
  font-family: ${FontFamilies.PRIMARY};
  text-transform: uppercase;
  background: none;
  border: 2px solid white;
  border-radius: ${BorderRadiuses.ONE};
  padding: ${Spaces.ONE} ${Spaces.THREE};
`;

function PacienteHome() {
  return (
    <HomeContainer>
      <HomeTitle>Olá, Jéssica</HomeTitle>
      <H2 marginTop='10px'>Seus doutores</H2>
      <Container>
        {doutores.map((doutor) => (
          <Doutor>
            <DoutorImg src={doutor.src} />
            <DoutorName>{doutor.nome}</DoutorName>
            <Details>{doutor.especialidade}</Details>
          </Doutor>
        ))}
      </Container>
      <H2>Seus prontuários</H2>
      <Container>
        {prontuarios.map((prontuario) => (
          <ProntuarioCard>
            <ProntuarioName>{prontuario.title}</ProntuarioName>
            <Details>{prontuario.especialidade}</Details>
            <Details>{prontuario.data_abertura}</Details>
            <ActiveTagDiv>
              <ActiveTag color={prontuario.ativo ? "#00D6AC" : "#9E9E9E"}>
                {prontuario.ativo ? "ATIVO" : "INATIVO"}
              </ActiveTag>
            </ActiveTagDiv>
          </ProntuarioCard>
        ))}
      </Container>
      <H2>Seus Recursos</H2>
      <Container>
        {recursos.map((recurso) => (
          <Recurso>
            <img src={recurso.icon} />
            <RecursosName>{recurso.name}</RecursosName>
            <Button>{`Acessar ${recurso.name.split(" ").pop()}`}</Button>
          </Recurso>
        ))}
      </Container>
    </HomeContainer>
  );
}

export default PacienteHome;
