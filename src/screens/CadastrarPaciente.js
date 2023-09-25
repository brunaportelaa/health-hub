import Footer from "../common-components/Footer/Footer";
import Header from "../common-components/Header/Header";

import PatientForm from "../common-components/CadastrarPaciente/CadastrarPaciente";

function CadastrarPaciente() {
    return (
      <div>
        <Header />
        <PatientForm/>
        <Footer />
      </div>
    );
  }
  
  export default CadastrarPaciente;