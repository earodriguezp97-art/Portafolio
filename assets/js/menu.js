
const botonMenu = document.querySelector(".header__boton");
const menu = document.getElementById("menu-principal");
const textoBoton = botonMenu.querySelector(".solo-lector");

function abrirMenu() {
    botonMenu.setAttribute("aria-expanded", "true");
    menu.classList.add("header__nav--abierto");
    textoBoton.textContent = "Cerrar menú";
}

function cerrarMenu() {
    botonMenu.setAttribute("aria-expanded", "false");
    menu.classList.remove("header__nav--abierto");
    textoBoton.textContent = "Abrir menú";
}

// Click en el botón
botonMenu.addEventListener("click", () => {
    const estaAbierto = botonMenu.getAttribute("aria-expanded") === "true";

    if (estaAbierto) {
        cerrarMenu();
    } else {
        abrirMenu();
    }
});

// Al elegir una opción el menú se cierra
menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
});

// La tecla Escape también cierra el menú
document.addEventListener("keydown", (evento) => {
    const estaAbierto = botonMenu.getAttribute("aria-expanded") === "true";

    if (evento.key === "Escape" && estaAbierto) {
        cerrarMenu();
        botonMenu.focus();
    }
});
