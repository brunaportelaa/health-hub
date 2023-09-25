import styled from "styled-components";
import { Shadows, Spaces, BorderRadiuses } from "../../shared/DesignTokens"

export const Card = styled.div`
  box-shadow: ${Shadows.ONE};
  text-align: center;
  padding: ${Spaces.TWO} ${Spaces.FOUR};
  border-radius: ${BorderRadiuses.TWO};
  flex: 1;
  margin: 0 1%;
`;