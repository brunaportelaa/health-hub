import styled from "styled-components";
import { BorderRadiuses,  FontFamilies,  FontSizes,  FontWeights,  Spaces} from "../shared/DesignTokens";
import doutores from "../assets/objects/doutores.js";
import prontuarios from "../assets/objects/prontuarios";
import recursos from "../assets/objects/recursos";
import Pessoa from "../common-components/Pessoa";
import { Card } from "../common-components/Card";
import { GradientCard } from "../common-components/GradientCard";
import ProntuarioInfo from "../common-components/ProntuarioInfo";


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
  margin: 70px 0 15px 0;
  margin-top: ${(props) => props.marginTop};
  font-size: ${FontSizes.TWO_HALF};
`;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
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
          <Pessoa 
            src={doutor.src}
            nome={doutor.nome}
            especialidade={doutor.especialidade}
          />
        ))}
      </Container>
      <H2>Seus prontuários</H2>
      <Container>
        {prontuarios.map((prontuario) => (
          <Card>
            <ProntuarioInfo
              title={prontuario.title}
              especialidade={prontuario.especialidade}
              data={prontuario.data_abertura}
            />
          </Card>
        ))}
      </Container>
      <H2>Seus Recursos</H2>
      <Container>
        {recursos.map((recurso) => (
          <GradientCard>
            <img src={recurso.icon} alt=''/>
            <RecursosName>{recurso.name}</RecursosName>
            <Button color="#fff">{`Acessar ${recurso.name.split(" ").pop()}`}</Button>
          </GradientCard>
        ))}
      </Container>
    </HomeContainer>
  );
}

export default PacienteHome;
