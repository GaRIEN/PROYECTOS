import React, { useState, useEffect } from "react";
const initiForm = {
  nombre: "",
  apellidos: "",
  edad: "",
  pais: "",
  cargo: "",
  aniosExperiencia: ""
};

const CrudForm = () => {
  const [form, setForm] = useState(initiForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-8/10">
      <form className="space-y-4">
        <div className="flex flex-col gap-8 items-center">
          <div className="relative grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-6">
            <div className="col-span-2">
              <label
                htmlFor="nombre"
                className="text-sm font-medium text-gray-300"
              >
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={form.nombre}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white outline-none border-2 border-transparent focus:border-blue-400 transition"
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="apellidos"
                className="text-sm font-medium text-gray-300"
              >
                Apellidos
              </label>
              <input
                type="text"
                name="apellidos"
                placeholder="Ingresa tus apellidos"
                onChange={handleChange}
                value={form.apellidos}
                className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white outline-none border-2 border-transparent focus:border-blue-400 transition "
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="edad"
                className="text-sm font-medium text-gray-300"
              >
                Edad
              </label>
              <input
                type="number"
                name="edad"
                placeholder="edad"
                onChange={handleChange}
                value={form.edad}
                className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white outline-none border-2 border-transparent focus:border-blue-400 transition [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="pais"
                className="text-sm font-medium text-gray-300"
              >
                Pais
              </label>
              <select
                name="pais"
                onChange={handleChange}
                value={form.pais}
                className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white outline-none border-2 border-transparent focus:border-blue-400 transition"
              >
                <option value="" disabled>
                  Seleccione un país
                </option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="cargo"
                className="text-sm font-medium text-gray-300"
              >
                Cargo
              </label>
              <select
                name="cargo"
                onChange={handleChange}
                value={form.cargo}
                className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white outline-none border-2 border-transparent focus:border-blue-400 transition"
              >
                <option value="" disabled>
                  Seleccione su cargo 
                </option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="aniosexperiencia"
                className="text-sm font-medium text-gray-300"
              >
                Años de Experiencia
              </label>
              <input
                type="number"
                name="aniosExperiencia"
                placeholder="años de experiencia"
                onChange={handleChange}
                value={form.aniosExperiencia}
                className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white outline-none border-2 border-transparent focus:border-blue-400 transition [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
          </div>

          <div className="flex gap-8">
            <button
              type="submit"
              className="w-35 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Actualizar
            </button>
            <button
              type="submit"
              className="w-35 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
