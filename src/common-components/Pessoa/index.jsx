import styled from "styled-components";
import { FontSizes } from "../../shared/DesignTokens";

const Doutor = styled.div`
width: 12.5%;
text-align: center;
`;

const DoutorImg = styled.img`
  width: 100%;
`;

const DoutorName = styled.h3`
  font-size: ${FontSizes.TWO};
`;

const Details = styled.p`
  font-size: ${FontSizes.ONE_QUARTER};
`;

export default function Pessoa(props) {
  return (
    <Doutor>
      <DoutorImg src={props.src} />
      <DoutorName>{props.nome}</DoutorName>
      <Details>{props.especialidade}</Details>
    </Doutor>
  );
}
