import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({pacientes,setPacientes, paciente, setPaciente}) => {
    // console.log(paciente);
    const [nombre, setNombre]=useState('');
    const [propietario, setPropietario]=useState('');
    const [email, setEmail]=useState('');
    const [fecha, setFecha]=useState(Date.now());
    const [sintomas, setSintomas]=useState('');

    const [error, setError] = useState(false);
    const generarId = ()=>{
        const ramdon = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return ramdon + fecha;
    }

    useEffect(()=> {
        // console.log(paciente)
        if( Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
        
    },[paciente])

    const handleSubmit = (e)=> {
        e.preventDefault();
        // console.log('Desde handleSubmit');
        //validar formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setTimeout(() => {
                setError(false)
            }, 3000);
            setError(true)
            return;
        }

        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }
        if(paciente.id){
            // console.log('Editando...........');
            //Editando regristro
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados);
            setPaciente({})


        }else{
            //nuevo registro
            objetoPaciente.id= generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        //Reiniciar formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');       

    }
    
  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>

        <p className='text-lg mt-5 text-center mb-3'>Añade pacientes y <span className='text-indigo-600 font-bold'>Administralos</span></p>
        {error && 
            <Error>Todos los campos son obligatorios</Error>
        }

        <form onSubmit={handleSubmit} className='bg-sky-900 shadow-md rounded-lg py-5 px-5 mb-10 '>
            <div className='mb-5'>
                <label className='block text-gray-200 font-bold' htmlFor='mascota'> Nombre de mascota:</label>
                <input 
                    type="text"  
                    placeholder='Nombre de mascota'    
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    id='mascota'
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value) }
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-200 font-bold' htmlFor='propietario'> Nombre del propietarip:</label>
                <input 
                    type="text"  
                    placeholder='Nombre del propietario'    
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    id='propietario'
                    value={propietario}
                    onChange={(e)=> setPropietario(e.target.value) }
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-200 font-bold' htmlFor='email'> Email:</label>
                <input 
                    type="email"  
                    placeholder='Email de propietario'    
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    id='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value) }
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-200 font-bold' htmlFor='fecha'> fecha de alta:</label>
                <input 
                    type="date"  
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    id='fecha'
                    value={fecha}
                    onChange={(e)=> setFecha(e.target.value) }
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-200 font-bold' htmlFor='mascota'> Sintomas de mascota:</label>
                <textarea name="sintomas" id="sintomas" className='w-full border-2 p-2 mt-2 rounded-md placeholder-gray-400' placeholder='Sintomas de mascota' 
                    value={sintomas}
                    onChange={(e)=> setSintomas(e.target.value) }></textarea>
                
            </div>

            <div className='text-center'>
                <input type="submit" className='bg-indigo-600 w-1/2 p-3 text-white uppercase rounded-md font-bold hover:bg-indigo-700 cursor-pointer' value={paciente.id ? "Editar paciente" : "Agregar paciente"} />
            </div>
        </form>
    </div>
  )
}

export default Formulario