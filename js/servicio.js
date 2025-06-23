import { dataMasterVinilo } from "./utils/data.js";


document.addEventListener("DOMContentLoaded", () => {

   
    console.log("main.js se ha cargado en esta página.");
 
    const catalogoServiciosContainer = document.getElementById("catalogoServicios");
    const templateCard = document.getElementById("inamoto-template-catalogo-card");

    if (catalogoServiciosContainer && templateCard) {
        console.log("Detectado 'catalogoServicios' y 'inamoto-template-catalogo-card'. Iniciando carga del catálogo.");

        const fragment = document.createDocumentFragment();

        // Puedes filtrar aquí si solo quieres "Nuevos" o dejarlo así para todos los productos
        const productosACargar = dataMasterVinilo; // Muestra todos los productos

        if (!productosACargar || productosACargar.length === 0) {
            catalogoServiciosContainer.innerHTML =
                '<p class="text-gray-600 text-center col-span-full">No hay productos disponibles por el momento.</p>';
            return; // Salir si no hay productos
        }

        productosACargar.forEach((producto) => {
            const card = templateCard.content.cloneNode(true); // Clonar el contenido del template

            // Seleccionar elementos dentro de la tarjeta clonada
            const img = card.querySelector(".card-img-top");
            const title = card.querySelector(".card-title");
            const description = card.querySelector(".card-text");
            const price = card.querySelector(".card-price");

            // Rellenar la tarjeta con los datos del producto
            img.src = producto.portadaUrl;
            img.alt = `Portada de ${producto.nombre}`;
            img.onerror = function () {
                this.onerror = null; // Evita bucles infinitos en caso de error repetido
                this.src = "./asset/img/default-imagen.jpg"; // Imagen de fallback
            };

            title.textContent = producto.nombre;
            description.textContent = producto.descripcionCorta;

            // Formatear el precio a CLP (pesos chilenos)
            const formattedPrice = new Intl.NumberFormat("es-CL", {
                style: "currency",
                currency: "CLP",
                minimumFractionDigits: 3, // CLP no usa decimales en billetes/monedas
            }).format(producto.precioOferta || producto.precio); // Usa precioOferta si existe, si no, precio normal

            price.textContent = formattedPrice;

            fragment.appendChild(card); // Añadir la tarjeta al fragmento
        });

        catalogoServiciosContainer.appendChild(fragment); // Añadir todas las tarjetas al DOM de una vez
    } else {
        console.log("Los elementos del catálogo no están presentes en esta página. No se cargará el catálogo.");
    }
});