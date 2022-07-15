import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function Usuario() {

    const [usuario, setUsuario]= useState([])
    const {id} = useParams()
    const obtenerUsuario= async()=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const users = await res.data
        setUsuario(users)
       }
       
       useEffect(()=>{
         obtenerUsuario()
       },[])
  return (
    <div>
    <h1>usuaria</h1>
     <p>Nombre: {usuario.name}</p>
     <p>Email: {usuario.email}</p>
     <p>CEL: {usuario.phone}</p>
    </div>
  )
}

export default Usuario