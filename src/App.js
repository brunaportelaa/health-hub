import './App.css';
import { NormalizeStyles } from './shared/NormalizeStyles'
import PacienteHome from './screens/PacienteHome'
import NavDrawer from './common-components/NavDrawer'

function App() {
  return (
    <div>
      <NavDrawer />
      <NormalizeStyles />
      <PacienteHome />
    </div>
  );
}

export default App;
