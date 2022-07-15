import React, {useState} from 'react'
import uniquid from 'uniquid';



function ListadosNombres() {

    const [nombre, setNombre]=useState('');
    const [listanombres, setListaNombres]=useState([]);
    const [modoEdicion, setModoEdicion]=useState(false);//poruq estamos en registro
    const [id, setId] = useState('')
    const [error, setError] = useState(null)


   const addNombre = (e)=>{
       e.preventDefault()
       if(!nombre.trim()){ //es el negativo de que si el campo tiene contenido
        setError('el campo nombe vacio')
        return 
       }
       const nuevoNombre={
        id:uniquid(),
        tituloNombre:nombre
       }
       setListaNombres([...listanombres,nuevoNombre])
       setNombre('')
       setError(null)
   }
    
    const editar = (item)=>{
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

       
    const deleteNombre = (id)=>{
        const nuevaArray = listanombres.filter(item=>item.id !== id)
        setListaNombres(nuevaArray)
    }

     
    
    const editarNombre = (e)=>{
        e.preventDefault()
        const nuevaArray = listanombres
        .map(item=>item.id === id? {id:id, tituloNombre:nombre}: item)
         setListaNombres(nuevaArray)
         setModoEdicion(false)//resetiamos
         setNombre('')
    }



  return (
    <div>
        <h2>App CRUD</h2>
        <div className='row'>
        <div className='col'>
            <h2>Listado Nombres</h2>
            <ul className='list-group'>
                {
                 listanombres.map(item=>
                 <li key="item.id" className='list-group-item'>{item.tituloNombre}
                 <button className='btn btn-danger float-right'
                 onClick={()=>{deleteNombre (item.id)}}
                 >BORRAR</button>
                  <button className='btn btn-info float-right'
                 onClick={()=>{editar (item)}}
                 >EDITAR</button>
                 </li>
                 )
                }
            </ul>
        </div>
        
        
        <div className='col'>
            <h2>Formulario Añadir Nombres</h2>
            <form onSubmit={modoEdicion? editarNombre: addNombre} className='form-group'>
            {/* aqui pasamos una calbac con arraoun function */}
            <input
             onChange={(e)=>{setNombre(e.target.value)}} 
             className='form-control mb-3' 
             type="text" placeholder='introduce el nombre'
            value={nombre}
             />
            <input 
            className='btn btn-info btn-block' 
            type="submit" 
            //APRENDER TERNARIO
            value={modoEdicion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE'}/>
        </form>
        {
            error != null ? (
             <div className='alert alert-danger'>{error}</div>
            ):(

              <div></div>
            )
        }

        </div>
     
        </div>
    </div>
  )
}

export default ListadosNombres