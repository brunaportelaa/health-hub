import './App.css';
import { NormalizeStyles } from './shared/NormalizeStyles'
import PacienteHome from './screens/PacienteHome'
import PesquisaProntuario from './screens/PesquisaProntuario';
import NavDrawer from './common-components/NavDrawer'
import CadastrarPaciente from './screens/CadastrarPaciente';
import CadastroProntuario from './screens/CadastrarProntuario';

function App() {
  return (
    <div>
      <PesquisaProntuario />
      <CadastrarPaciente />
      <CadastroProntuario />
    </div>
  );
}

export default App;
