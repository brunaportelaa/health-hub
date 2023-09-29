import styled from "styled-components";

const H1 = styled.h1`
    font-family: Poppins;
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0em;
    text-align: center;
`;

const P = styled.p`
  /* ... */
`;


export default function NotFound(){
    return (
        <div>
            <h1>Página não encontrada</h1>
            <p>Tente realizar uma pesquisa por CPF</p>
        </div>
    )
}