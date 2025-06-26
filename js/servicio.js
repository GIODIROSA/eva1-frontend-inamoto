import { dataMasterVinilo } from "./utils/data.js";


document.addEventListener("DOMContentLoaded", () => {

   
    console.log("main.js se ha cargado en esta página.");
 
    const catalogoServiciosContainer = document.getElementById("catalogoServicios");
    const templateCard = document.getElementById("inamoto-template-catalogo-card");

    if (catalogoServiciosContainer && templateCard) {
        console.log("Detectado 'catalogoServicios' y 'inamoto-template-catalogo-card'. Iniciando carga del catálogo.");

        const fragment = document.createDocumentFragment();

 
        const productosACargar = dataMasterVinilo; 

        if (!productosACargar || productosACargar.length === 0) {
            catalogoServiciosContainer.innerHTML =
                '<p class="text-gray-600 text-center col-span-full">No hay productos disponibles por el momento.</p>';
            return; 
        }

        productosACargar.forEach((producto) => {
            const card = templateCard.content.cloneNode(true); 

           
            const img = card.querySelector(".card-img-top");
            const title = card.querySelector(".card-title");
            const description = card.querySelector(".card-text");
            const price = card.querySelector(".card-price");

          
            img.src = producto.portadaUrl;
            img.alt = `Portada de ${producto.nombre}`;
            img.onerror = function () {
                this.onerror = null; 
                this.src = "./asset/img/default-imagen.jpg"; 
            };

            title.textContent = producto.nombre;
            description.textContent = producto.descripcionCorta;

            
            const formattedPrice = new Intl.NumberFormat("es-CL", {
                style: "currency",
                currency: "CLP",
                minimumFractionDigits: 3, 
            }).format(producto.precioOferta || producto.precio); 

            price.textContent = formattedPrice;

            fragment.appendChild(card); 
        });

        catalogoServiciosContainer.appendChild(fragment); // 
    } else {
        console.log("Los elementos del catálogo no están presentes en esta página. No se cargará el catálogo.");
    }
});