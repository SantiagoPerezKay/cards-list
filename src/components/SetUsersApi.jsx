import React from 'react';
import { getUsers } from '../services/userService';

const setUsersApi = ({ setUsers }) => {
  const handleClick = async () => {
    try {
      const data = await getUsers();
      setUsers(data); // <- esta es la clave
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
    >
      Llenar con API
    </button>
  );
};

export default setUsersApi;