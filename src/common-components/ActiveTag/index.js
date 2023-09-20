import styled from "styled-components";
import { FontSizes } from "../../shared/DesignTokens";

const ActiveTagDiv = styled.div`
  background-color: #ededed;
  width: fit-content;
  block-size: fit-content;
  margin: auto;
`;

const ActiveTagP = styled.p`
  font-size: ${FontSizes.ONE_QUARTER};
  margin: 5px 15px;
  color: ${(props) => props.color};
`;

export default function ActiveTag(props) {
    return (
            <ActiveTagDiv>
              <ActiveTagP color={props.color}>
                {props.content}
              </ActiveTagP>
            </ActiveTagDiv>
    )
}