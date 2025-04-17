import React, { useState } from 'react';
import "./form.css";
const Formulario = (props) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setUsers([...props.users, formData]);
       
    };

    const handleClearForm = () => {
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
        });
    };

    const handleClearList = () => {
        props.setUsers([]);
    };

    return (
        <form id="formulario"
            onSubmit={handleSubmit}
            className="mt-8 hover:scale-105 transition-transform duration-300 max-w-xs mx-auto p-4 bg-white shadow-xl rounded-xl space-y-4"
        >
            <h2 className="text-xl font-bold text-center">Formulario</h2>

            <div>
                <label className="block mb-1 font-medium">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg shadow-sm"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg shadow-sm"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg "
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
                Agregar
            </button>

            <button
                type="button"
                onClick={handleClearForm}
                className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
                Limpiar formulario
            </button>

            <button
                type="button"
                onClick={handleClearList}
                className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
                Limpiar lista
            </button>
        </form>
    );
};

export default Formulario;
