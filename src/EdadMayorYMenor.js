import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EdadMayorYMenor = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    getAllPersonas();
  }, []);

  const getAllPersonas = async () => {
    let apiurl = 'https://weblogin.muninqn.gov.ar/api/Examen';
    try {
      const response = await axios.get(apiurl);
      console.log(response.data.value);
      setPersonas(response.data.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      
    <div className="absolute z-30">
      <button className="fixed bottom-0 right-0 m-5 bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full" onClick={() => setOpen(!open)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg>
      </button>

      <div
        className={`${
          open ? "w-2/4" : "w-0"
        }  dark:text-gray-100 dark:bg-slate-900 bg-sky-100 h-screen duration-300 left-0 z-10 overflow-x-auto  relative `}>
      </div>

    <div className=' dark:text-gray-100 dark:bg-slate-900 w-auto min-h-screen'>
      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
        <table className='w-full border-collapse bg-white dark:bg-slate-800 text-left text-sm text-gray-500 dark:text-white '>
          <thead className='bg-gray-50 dark:bg-slate-700'>
            <tr className=''>
              <th
                scope='col'
                className='px-6 py-4 font-medium text-gray-900 dark:text-white'
              >
                ID
              </th>
              <th
                scope='col'
                className='px-6 py-4 font-medium text-gray-900 dark:text-white'
              >
                Nombre
              </th>
              <th
                scope='col'
                className='px-6 py-4 font-medium text-gray-900 dark:text-white'
              >
                DNI
              </th>
              <th
                scope='col'
                className='px-6 py-4 font-medium text-gray-900 dark:text-white'
              >
                Género
              </th>
              <th
                scope='col'
                className='px-6 py-4 font-medium text-gray-900 dark:text-white'
              >
                Fecha de Nacimiento
              </th>
            </tr>
          </thead>
          {personas.length > 0 ? (
            <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
              {personas.map(persona => (
                <tr
                  className='hover:bg-gray-50 dark:hover:bg-slate-900'
                  key={persona.id}
                >
                  <td className='px-6 py-4'>{persona.id}</td>
                  <td className='px-6 py-4'>{persona.razonSocial}</td>
                  <td className='px-6 py-4'>{persona.dni}</td>
                  <td className='px-6 py-4'>{persona.genero.value}</td>
                  <td className='px-6 py-4'>{persona.fechaNacimiento}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan='5' className='px-6 py-4'>
                  Cargando...
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <div className='flex gap-2 ml-5'>
        {/*Listar personas según el genero*/}
        <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md w-52 bg-white dark:bg-slate-800 mb-2'>
          <table className='w-full h-full border-collapse bg-white dark:bg-slate-800 text-left text-sm text-gray-500 dark:text-white'>
            <thead className='bg-gray-50 dark:bg-slate-900 '>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white '
                >
                  Genero
                </th>
                <th
                  scope='col'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white'
                >
                  Cantidad
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
              <tr className='hover:bg-gray-50 dark:hover:bg-slate-900'>
                <td className='px-6 py-4'>Masculino</td>
                <td className='px-6 py-4'>
                  {
                    personas.filter(
                      persona => persona.genero.value === 'MASCULINO',
                    ).length
                  }
                </td>
              </tr>
              <tr className='hover:bg-gray-50 dark:hover:bg-slate-900'>
                <td className='px-6 py-4'>Femenino</td>
                <td className='px-6 py-4'>
                  {
                    personas.filter(
                      persona => persona.genero.value === 'FEMENINO',
                    ).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*Listar personas según la edad*/}
        <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md w-52 bg-white dark:bg-slate-800 mb-2'>
          <table className='w-full border-collapse bg-white dark:bg-slate-800 text-left text-sm text-gray-500 dark:text-white'>
            <thead className='bg-gray-50 dark:bg-slate-900 '>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white'
                >
                  Edad
                </th>
                <th
                  scope='col'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white'
                >
                  Cantidad
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
              <tr className='hover:bg-gray-50 dark:hover:bg-slate-900'>
                <td className='px-6 py-4'>Menor a 18</td>
                <td className='px-6 py-4'>
                  {
                    personas.filter(
                      persona => persona.fechaNacimiento > '2005-06-1',
                    ).length
                  }
                </td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='px-6 py-4'>Mayores a 18</td>
                <td className='px-6 py-4'>
                  {
                    personas.filter(
                      persona => persona.fechaNacimiento < '2005-06-1',
                    ).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div> 
);
};
export default EdadMayorYMenor;
