const nuevosProductos = (id, name, imageUrl, price) => {
    const card = document.createElement("div");
    const contenido = `
        <div class="producto">
            <img class="img__juguetes" src="${imageUrl}" alt="Juguetes">
            <h6 class="product__name">${name}</h1>
            <p class="precio">${price}</p>
            <a class="ver__producto" href="../img/productos?id=${id}">Ver producto</a>
        </div>
    `;
    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
}

// Para seleccionar elementos con atributo data-product
const productos = document.querySelector("[data-product]");