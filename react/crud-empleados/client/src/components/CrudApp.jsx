import React, { useState, useEffect } from 'react';
import CrudForm from './CrudForm';



const CrudApp = () => {

  return (
    <div className="min-h-screen flex flex-col  items-center  pt-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <h1 className="text-2xl font-semibold text-center mb-4">CRUP APP DE EMPLEADOS</h1>
      <CrudForm/>
    </div>
  )
}

export default CrudApp
