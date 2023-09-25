import React, { Component } from 'react';
import axios from 'axios';
import './PesquisarProntuario.css'

class SearchProntuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpf: '',
            prontuarioData: null,
            error: null,
        };
    }

    handleChange = (e) => {
        this.setState({ cpf: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { cpf } = this.state;

        
        axios
            .get() 
            .then((response) => {
                
                this.setState({ prontuarioData: response.data, error: null });
            })
            .catch((error) => {
                
                this.setState({ prontuarioData: null, error: error.message });
            });
    };

    render() {
        const { cpf, prontuarioData, error } = this.state;

        return (
            <div className="container">
                <h1 className='titulo-pesq-pront'>Pesquisar prontuários</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className='label-pesq-pront' htmlFor="cpf">Insira seu CPF:</label>
                    <input className='input-pesq-pront'
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={cpf}
                        onChange={this.handleChange}
                        placeholder="123.456.789-00"
                        required
                    />
                    <button className='button-pesq-pront' type="submit">Pesquisar</button>
                </form>

                {error && <p className="error">Erro: {error}</p>}

                {prontuarioData && (
                    <div>
                        <h2>Dados do Prontuário</h2>
                        { }
                    </div>
                )}
            </div>
        );
    }
}

export default SearchProntuario;
