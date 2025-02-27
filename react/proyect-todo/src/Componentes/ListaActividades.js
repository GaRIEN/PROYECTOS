import React from 'react'

function ListaActividades(props){
    return(
        <>
        <ul>
            {props.children}
        </ul>
        </>
    )
}

export{ListaActividades}