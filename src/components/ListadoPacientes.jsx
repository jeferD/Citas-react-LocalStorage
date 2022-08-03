import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
 
  return (
    
    <div className='md:w-1/2 lg:h-2/5 md:h-screen overflow-y-scroll'>
        {pacientes && pacientes.length ? (
          <>
              <h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
              <p className='text-xl mt-5 mb-10 text-center'>Administra tus <span className='text-indigo-600 font-bold'>Pacientes y citas</span></p>
              {
                pacientes.map(paciente=>(
                  <div className='mb-2'>
                      <Paciente
                          key={paciente.id}
                          paciente={paciente}
                          setPaciente={setPaciente}
                          eliminarPaciente={eliminarPaciente}
                      />
                  </div>
                  
                ))}
          </>
        ) : 
        <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Comienza administra tus <span className='text-indigo-600 font-bold'>Pacientes y citas</span></p>
            
        </>
        }
    </div>
  )
}

export default ListadoPacientes