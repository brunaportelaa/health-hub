import "./App.css";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import PesquisaProntuario from "./screens/PesquisaProntuario";
import CadastrarPaciente from "./screens/CadastrarPaciente";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarProntuario from "./screens/CadastrarProntuario";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resultados from "./screens/Resultados";
import PaginaNaoEncontrada from "./screens/Prontuario";
import Prontuario from "./screens/Prontuario";

function App() {
  return (
    <div>
      <ToastContainer />
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PesquisaProntuario />} />
          <Route
            path="/cadastrar-prontuario"
            element={<CadastrarProntuario />}
          />
          <Route path="/cadastrar-paciente" element={<CadastrarPaciente />} />
          <Route path="/prontuario" element={<Prontuario />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
