import styled from "styled-components";
import { Shadows, Spaces, BorderRadiuses, Gradients } from "../../shared/DesignTokens"

export const GradientCard = styled.div`
  box-shadow: ${Shadows.ONE};
  text-align: center;
  padding: ${Spaces.TWO} ${Spaces.FOUR};
  border-radius: ${BorderRadiuses.TWO};
  background: ${Gradients.ONE};
  flex: 1;
  margin: 0 1%;
`;