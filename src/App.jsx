import './App.css';
import { NormalizeStyles } from './shared/NormalizeStyles';
import PesquisaProntuario from './screens/PesquisaProntuario';
import CadastrarPaciente from './screens/CadastrarPaciente';
import CadastroProntuario from './screens/CadastrarProntuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastrarProntuario from './screens/CadastrarProntuario';

function App() {
  return (
    <div>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PesquisaProntuario/>} />
          <Route path='/cadastrar-prontuario' element={<CadastrarProntuario/>}/>
          <Route path='/cadastrar-paciente' element={<CadastrarPaciente/>}/>
          <Route path='*' element=''/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
