import styled from "styled-components";
import { FontWeights } from "../../shared/DesignTokens";


const Container = styled.div`
  margin: 70px;
`;

const P = styled.p`
  text-transform: uppercase;
  letter-spacing: 2.88px;
`;


const H2 = styled.h2`
/*  */
`;


const H3 = styled.h3`
  margin-bottom: 5px;
`;


const Item = styled.p`
    color: #565656;
    display: flex;
    margin:0;
    line-height: 200%;
`;

const ItemTitulo = styled.p`
  font-weight: ${FontWeights.BOLD};
  margin:0 5px 0;
`;

const ItemConteudo = styled.p`
    margin:0;
`;


function ProntuarioInfo(){

    return (
        <Container>
            <P>Prontuário</P>
            <h1>Dermatite Atópica</h1>

            <Item>
                <ItemTitulo>Paciente: </ItemTitulo>
                <ItemConteudo>Dermatite Atópica</ItemConteudo>
            </Item>

            <H2>Diagnóstico</H2>
            <Item>
                <ItemTitulo>Problema: </ItemTitulo>
                <ItemConteudo>Jéssica Medeiros</ItemConteudo>
            </Item>
            <Item>
                <ItemTitulo>Data de registro: </ItemTitulo>
                <ItemConteudo>XX/XX/XXXX</ItemConteudo>
            </Item>
            <Item>
                <ItemTitulo>Status: </ItemTitulo>
                <ItemConteudo>Recorrência</ItemConteudo>
            </Item>
            <Item>
                <ItemTitulo>Status de verificação: </ItemTitulo>
                <ItemConteudo>Confirmado</ItemConteudo>
            </Item>
            <Item>
                <ItemTitulo>Data do abatimento (se curado): </ItemTitulo>
                <ItemConteudo>XX/XX/XXXX</ItemConteudo>
            </Item>

            <H2>Procedimentos</H2>
            <H3>Nome do Procedimento 1</H3>
            <Item>
                <ItemTitulo>Categoria: </ItemTitulo>
                <ItemConteudo>Jéssica Medeiros</ItemConteudo>
            </Item>
            <Item>
                <ItemTitulo>Data da ocorrência: </ItemTitulo>
                <ItemConteudo>XX/XX/XXXX</ItemConteudo>
            </Item>
            <Item>
                <ItemTitulo>Status: </ItemTitulo>
                <ItemConteudo>Concluído</ItemConteudo>
            </Item>

            <H2>Medicamentos</H2>
            <H3>Nome do Medicamento 1</H3>
            <Item>
                <ItemTitulo>Status: </ItemTitulo>
                <ItemConteudo>Concluído</ItemConteudo>
            </Item>
            <Item>
                <ItemTitulo>Dosagem: </ItemTitulo>
                <ItemConteudo>1 mg a cada 12 horas, por 5 dias</ItemConteudo>
            </Item>
            <Item>
                <ItemTitulo>Data do início: </ItemTitulo>
                <ItemConteudo>XX/XX/XXXX</ItemConteudo>
            </Item>

        </Container>

    )
}

export default ProntuarioInfo;