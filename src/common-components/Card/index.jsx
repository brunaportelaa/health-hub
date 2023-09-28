import styled from "styled-components";
import { Shadows, Spaces, BorderRadiuses } from "../../shared/DesignTokens"

export const Card = styled.div`
  width: 30%;
  box-shadow: ${Shadows.ONE};
  text-align: center;
  padding: ${Spaces.TWO} ${Spaces.FOUR};
  border-radius: ${BorderRadiuses.TWO};
  margin: 1%;
`;