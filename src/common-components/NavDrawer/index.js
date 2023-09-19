import { styled } from "styled-components";
import { Shadows } from "../../shared/DesignTokens";


const Container = styled.div`
  height: 100vh;
  width: 80px;
  box-shadow: ${Shadows.TWO};
  position: fixed;
  top: 0;
`;


function NavDrawer() {
return(
  <Container>

  </Container>
)

}

export default NavDrawer
