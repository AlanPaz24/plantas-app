import React from 'react'
//import hook
import { useState } from 'react'
import './itemListContainer.css'

const ItemListContainer = ({greeting}) => {
        const [saludo, setSaludo]=useState('Hola')
        const cambiarSaludo = ()=> {
            setSaludo('Chau')
        }
    
    return (
        <div className='greetingContainer'>
            <h1 className='titulo'>{greeting}</h1>
            <button className='btn btn-success' onClick={cambiarSaludo}>{saludo}</button>
        </div> 
        
    )
    

}
export default ItemListContainer