import styled from "styled-components";
import { FontSizes } from "../../shared/DesignTokens";
import doutores from "../../assets/objects/doutores";

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

const Details = styled.p`
  font-size: ${FontSizes.TWO};
`;

export function Doutores(){
  {doutores.map((doutor) => (
    <Doutor>
      <DoutorImg src={doutor.src} />
      <DoutorName>{doutor.nome}</DoutorName>
      <Details>{doutor.especialidade}</Details>
    </Doutor>
  ))}
}