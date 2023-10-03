    //GET
    const listaProductos = ()=>{
        fetch("https://raw.githubusercontent.com/PunksCode/Ecommerce/main/db.json")
        .then(respuesta=> respuesta.json())
        .catch(error=>console.error(error))
    }
    export const productosServicios ={
        listaProductos
    }