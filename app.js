// Función para mostrar "app" y ocultar "main"
function mostrarAppYOcultarMain() {
    const app = document.getElementById("app");
    const main = document.getElementById("maincontenido");

    app.style.display = ""; // Mostrar "app"
    main.style.display = "none"; // Ocultar "main"
}

// Escuchar el clic en el botón de inicio de sesión para mostrar "app" y ocultar "main"
document.getElementById("btnLogin").addEventListener("click", () => {
    mostrarAppYOcultarMain();
});

// En app.js (Asegúrate de que este archivo esté incluido en tu HTML)

// Función para cargar y mostrar los productos desde JSON Server
async function cargarProductos() {
    try {
      const response = await fetch("http://localhost:3000/juguetes"); // Reemplaza la URL con la de tu servidor JSON
      const productos = await response.json();
  
      // Lógica para mostrar los productos en tu página
      const productosContainer = document.querySelector(".juguetes"); // Reemplaza con el selector correcto de tu contenedor de productos
  
      productos.forEach((producto) => {
        const card = nuevosProductos(producto.id, producto.name, producto.imageUrl, producto.price);
        productosContainer.appendChild(card);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  // Función para mostrar "app" y ocultar "main"
  function mostrarAppYOcultarMain() {
    const app = document.getElementById("app");
    const main = document.getElementById("maincontenido");
  
    app.style.display = ""; // Mostrar "app"
    main.style.display = "none"; // Ocultar "main"
  }
  
  // Escuchar el clic en el botón de inicio de sesión para mostrar "app" y ocultar "main"
  document.getElementById("btnLogin").addEventListener("click", () => {
    mostrarAppYOcultarMain();
  });
  
  // Después de que se cargue la página, cargar automáticamente los productos
  document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
  });