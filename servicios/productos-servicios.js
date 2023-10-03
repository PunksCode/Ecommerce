//GET
const listaProductos = ()=>{
    fetch("http://localhost:3000/")
    .then(respuesta=> respuesta.json())
    .catch(error=>console.error(error))
}
export const productosServicios ={
    listaProductos
}