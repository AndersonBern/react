import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//Importar BootStrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

//Importar CSS GERAL
import './App.css';

//Importar MATERIAL DESIGN ICONS
import '@mdi/font/css/materialdesignicons.css'

//Importar COMPONENTES
import Navbar from "./components/Navbar";
import Categorias from "./components/Categorias";

function App() {
  return(
    <div>
      <Navbar />
      <Categorias />
    </div>
  )
}

export default App;
