import styled from "styled-components";
import ActiveTag from "../ActiveTag";
import { FontSizes } from "../../shared/DesignTokens";

const ProntuarioName = styled.h3`
  font-size: ${FontSizes.TWO_HALF};
`;

const Details = styled.p`
  font-size: ${FontSizes.TWO};
`;

export default function ProntuarioInfo(props) {
    return (
        <div>
            <ProntuarioName>{props.title}</ProntuarioName>
            <Details>{props.especialidade}</Details>
            <Details>{props.data}</Details>
            <ActiveTag
            color = {props.ativo ? "#00D6AC" : "#9E9E9E"}
            content = {props.ativo ? "ATIVO" : "INATIVO"} />
        </div>
    )
}