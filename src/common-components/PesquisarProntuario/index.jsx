import React, {useState} from 'react';
import axios from 'axios';
import './PesquisarProntuario.css'

const SearchProntuario = () => {
    const [state, setState] = useState({
        cpf: '',
        prontuarioData: null,
        error: null,
    });

    const handleChange = (e) => {
        setState({
            ...state,
            cpf: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const {data} = await axios.get();
            setState({
                cpf: state.cpf,
                prontuarioData: data,
                error: null
            });
        } catch (error) {
            setState({
                ...state,
                prontuarioData: null,
                error: error.message
            });
        }
    };

    return (
        <div className="container">
            <h1 className='titulo-pesq-pront'>Pesquisar prontuários</h1>
            <form onSubmit={handleSubmit}>
                <label className='label-pesq-pront' htmlFor="cpf">Insira seu CPF:</label>
                <input className='input-pesq-pront'
                       type="text"
                       id="cpf"
                       name="cpf"
                       value={state.cpf}
                       onChange={handleChange}
                       placeholder="123.456.789-00"
                       required
                />
                <button className='button-pesq-pront' type="submit">Pesquisar</button>
            </form>

            {state.error && <p className="error">Erro: {state.error}</p>}

            {state.prontuarioData && (
                <div>
                    <h2>Dados do Prontuário</h2>
                    {}
                </div>
            )}
        </div>
    );
}

export default SearchProntuario;
