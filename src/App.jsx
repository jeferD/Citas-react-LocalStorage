import Header from "./Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState,useEffect } from "react"

function App() {
  const [pacientes, setPacientes]=useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

//   useEffect(()=>{
//     console.log('Desde local')
//       const obtenerLocaStorage = ()=>{
//         const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
//         console.log(pacientesLS)
//         setPacientes(pacientesLS);
//       }
//       obtenerLocaStorage();
//   },[]);

  useEffect(()=>{
      // console.log('Paciente listo o cambio paciente');
      localStorage.setItem('pacientes', JSON.stringify(pacientes));

  },[pacientes])

  const eliminarPaciente = (id)=>{
      // console.log('Eliminando paciente', id);
      const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
      setPacientes(pacientesActualizados);
  }
  

  return (
    <div className="container mx-auto mt-12">
        <Header 
         
        />
        <div className="mt-12 md:flex">
            <Formulario
                setPacientes={setPacientes}
                pacientes={pacientes}
                paciente = {paciente}
                setPaciente = {setPaciente}
            />
            <ListadoPacientes
                pacientes={pacientes}
                setPaciente= {setPaciente}
                eliminarPaciente={eliminarPaciente}
            />
        </div>
        
    </div>
  )
}

export default App
