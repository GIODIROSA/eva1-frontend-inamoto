import { dataMasterVinilo } from "./utils/data.js";

//console.log("Cantidad total de vinilos:", dataMasterVinilo);

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

   
    img.src = vinilo.portadaUrl;
    img.alt = `Portada de ${vinilo.nombre}`;
    img.onerror = function () {
      this.onerror = null;
      this.src = "./asset/img/default-imagen.jpg";
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




//Formulario

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");


const showError = (inputElement, message, errorDivId) => {
  const errorDiv = document.getElementById(errorDivId);
  errorDiv.textContent = message; 
  inputElement.classList.add("is-invalid"); 
  inputElement.setAttribute("aria-invalid", "true");
};


const clearError = (inputElement, errorDivId) => {
  const errorDiv = document.getElementById(errorDivId);
  errorDiv.textContent = ""; 
  inputElement.classList.remove("is-invalid"); 
  inputElement.setAttribute("aria-invalid", "false");
};


const clearAllErrors = () => {
  clearError(nameInput, "nameError");
  clearError(emailInput, "emailError");
  clearError(subjectInput, "subjectError");
  clearError(messageInput, "messageError");


  formMessage.classList.add("d-none"); 
  formMessage.textContent = "";
  formMessage.classList.remove("alert", "alert-success", "alert-danger"); 
};


const validateTextInput = (inputElement, errorDivId, minLength, fieldName) => {
  const value = inputElement.value.trim();
  if (value === "") {
    showError(
      inputElement,
      `El campo ${fieldName} es obligatorio.`,
      errorDivId
    );
    return false;
  }
  if (value.length < minLength) {
    showError(
      inputElement,
      `El campo ${fieldName} debe tener al menos ${minLength} caracteres.`,
      errorDivId
    );
    return false;
  }
  clearError(inputElement, errorDivId);
  return true;
};


const validateEmail = (inputElement, errorDivId) => {
  const value = inputElement.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === "") {
    showError(inputElement, "El campo Email es obligatorio.", errorDivId);
    return false;
  }
  if (!emailRegex.test(value)) {
    showError(
      inputElement,
      "Por favor, introduce un email válido.",
      errorDivId
    );
    return false;
  }
  clearError(inputElement, errorDivId);
  return true;
};


form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  clearAllErrors(); 

  let isValid = true;

  
  if (!validateTextInput(nameInput, "nameError", 2, "Nombre")) {
    isValid = false;
  }
  if (!validateEmail(emailInput, "emailError")) {
    isValid = false;
  }
  if (!validateTextInput(subjectInput, "subjectError", 5, "Asunto")) {
    isValid = false;
  }
  if (!validateTextInput(messageInput, "messageError", 10, "Mensaje")) {
    isValid = false;
  }

  
  if (isValid) {
   
    console.log("Formulario enviado con éxito:", {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
    });

  
    formMessage.classList.remove("d-none"); // Mostrar
    formMessage.classList.add("alert", "alert-success"); // 
    formMessage.textContent =
      "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.";

   
    form.reset(); 
    nameInput.focus(); 
  } else {
    
    formMessage.classList.remove("d-none"); // Mostrar
    formMessage.classList.add("alert", "alert-danger"); // 
    formMessage.textContent =
      "Por favor, corrige los errores en el formulario.";
  }
});


const fields = [
  {
    input: nameInput,
    errorId: "nameError",
    validator: (el, id) => validateTextInput(el, id, 2, "Nombre"),
  },
  { input: emailInput, errorId: "emailError", validator: validateEmail },
  {
    input: subjectInput,
    errorId: "subjectError",
    validator: (el, id) => validateTextInput(el, id, 5, "Asunto"),
  },
  {
    input: messageInput,
    errorId: "messageError",
    validator: (el, id) => validateTextInput(el, id, 10, "Mensaje"),
  },
];

fields.forEach(({ input, errorId, validator }) => {
  input.addEventListener("blur", () => validator(input, errorId));
  input.addEventListener("input", () => clearError(input, errorId));
});

