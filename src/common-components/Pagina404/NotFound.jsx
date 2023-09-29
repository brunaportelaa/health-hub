import styled from "styled-components";

const Container = styled.div`
 display: flex;
 height: 50vh;
 flex-direction: column;
 justify-content: center;
 align-items: center;

`;


const H1 = styled.h1`
    font-family: Poppins;
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 0;
`;

const P = styled.p`
  margin-bottom: 50px;
`;


export default function NotFound(){
    return (
        <Container>
            <H1>Página não encontrada</H1>
            <P>Tente realizar uma pesquisa por CPF</P>
        </Container>
    )
}