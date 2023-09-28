import styled from "styled-components";
import { FontWeights } from "../../shared/DesignTokens";

const Item = styled.p`
    display: flex;
    margin:0;
    line-height: 200%;
`;

const ItemTitulo = styled.p`
  font-weight: ${FontWeights.BOLD};
  margin:0;
`;

const ItemConteudo = styled.p`
    margin:0;
`;


function Prontuario(){

    return (
        <div>
            <p>Prontuário</p>
            <h1>Dermatite Atópica</h1>

            <Item>
                <ItemTitulo>Paciente: </ItemTitulo>
                <ItemConteudo>Dermatite Atópica</ItemConteudo>
            </Item>

            <h2>Diagnóstico</h2>
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

            <h2>Procedimentos</h2>
            <h3>Nome do Procedimento 1</h3>
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

            <h2>Medicamentos</h2>
            <h3>Nome do Medicamento 1</h3>
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

        </div>

    )
}

export default Prontuario;