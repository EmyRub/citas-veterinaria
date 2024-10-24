import { ToastContainer } from "react-toastify"
import PacientForm from "./components/PacientForm"
import PacientList from "./components/PacientList"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:max-auto">
          Seguimiento de Pacientes
          <span className="text-indigo-700">Veterinaria</span>
        </h1>

        <div className="mt-12 md:flex">
          <PacientForm />
          <PacientList />
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
