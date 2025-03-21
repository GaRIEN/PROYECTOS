import React from 'react';

export function TituloyCantidad({completado,total}) { 
    return (
        <>
            <div>
                <h1 className='text-2xl font-bold'>Completo {completado} de {total} actividades</h1>
            </div>
        </>
    );
}