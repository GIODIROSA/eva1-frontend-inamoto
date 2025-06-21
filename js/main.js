import { dataMasterVinilo } from "./utils/data.js";

console.log("Cantidad total de vinilos:", dataMasterVinilo);


//CAROUSEL BANNER
new Splide("#inamotoBannerCauroselVinilo", {
  perPage: 1,
  perMove: 1,
  breakpoints: {
    768: {
      perPage: 1,
      drag: true,
      type: "loop",
      autoplay: true,
      padding: {
        right: "5rem",
      },
    },
  },
  pagination: false,
  gap: 5,

  arrows: true,
  autoplay: true,
  drag: true,
}).mount();


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".inamoto-contendor-grid-card");

  const template = document.getElementById("inamoto-template-card");

  if (!container || !template) {
    console.error("Error: No se encontró el contenedor o el template HTML.");
    return;
  }

 
  const fragment = document.createDocumentFragment();


  const vinilosNuevos = dataMasterVinilo.filter(
    (vinilo) => vinilo.estadoProducto === "Nuevo"
  );

  if (vinilosNuevos.length === 0) {
    container.innerHTML =
      '<p class="text-gray-600 text-center col-span-full">No hay lanzamientos nuevos por el momento.</p>';
    return;
  }

  vinilosNuevos.forEach((vinilo) => {
    const card = template.content.cloneNode(true);

    const img = card.querySelector(".card-img-top");
    const title = card.querySelector(".card-title");
    const description = card.querySelector(".card-text");
    const price = card.querySelector(".card-price");

    // Rellenar la tarjeta con los datos del vinilo
    img.src = vinilo.portadaUrl;
    img.alt = `Portada de ${vinilo.nombre}`;
    img.onerror = function () {
      this.onerror = null;
      this.src =
        "./asset/img/default-imagen.jpg"; 
    };

 
    title.textContent = vinilo.nombre;
    description.textContent = vinilo.descripcionCorta;


    const formattedPrice = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 3,
    }).format(vinilo.precioOferta || vinilo.precio); 


    price.textContent = formattedPrice;

    price.textContent = formattedPrice; 


    fragment.appendChild(card);
  });

  container.appendChild(fragment);
});

