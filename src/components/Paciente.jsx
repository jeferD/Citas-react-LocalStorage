import React from 'react'
import { useEffect } from 'react';

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id}=paciente;
  
  const handleEliminar = ()=>{
    const respuesta  = confirm('Deseas elimiar este paciente?');
    if(respuesta){
      eliminarPaciente(id);
    }
  }
  return (
    <div className='mx-3 px-5 py-10 rounded-md bg-white shadow-md'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: <span className='font-normal normal-case'>{nombre}</span></p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: <span className='font-normal normal-case'>{propietario}</span></p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>email: <span className='font-normal normal-case'>{email}</span></p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: <span className='font-normal normal-case'>{fecha}</span></p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: <span className='font-normal normal-case'>{sintomas}</span></p>

            <div className='flex justify-center '>
                <button className="py-2 px-10 mx-2 bg-indigo-600 hover:bg-indigo-400 text-white font-bold uppercase rounded-lg" type="button" onClick={() => setPaciente(paciente)}>Editar</button>
                <button className='py-2 px-10 mx-2 bg-red-600 hover:bg-red-400 text-white font-bold uppercase rounded-lg' type='button' onClick={handleEliminar}>Eliminar</button>
            </div>
    </div>
  )
}

export default Paciente