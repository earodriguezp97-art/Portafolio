# Portafolio de Eliseo Augusta

Portafolio personal de Front-End Developer. Reúne mis proyectos del bootcamp de Desarrollo Front-End, un caso de estudio y mi trayectoria creativa.

**Sitio:** https://earodriguezp97-art.github.io/Portafolio/

## Contenido

- **Inicio:** presentación, sobre mí, proyectos, trayectoria creativa y contacto.
- **Caso de estudio** (`pages/caso-de-estudio.html`): cómo reorganicé el Archivo de libros de arte con Vuex, Vue Router y una API.

## Proyectos incluidos

- [Archivo de libros de arte](https://github.com/earodriguezp97-art/Gestor-de-libros), Vue.js
- [Cauce](https://github.com/earodriguezp97-art/Cauce---Gestor-de-tareas), JavaScript
- [SmartBudget](https://github.com/earodriguezp97-art/smartbudget-landing), SASS

## Decisiones técnicas

- HTML semántico (`header`, `nav`, `main`, `section`, `article`, `footer`) y textos alternativos en todas las imágenes.
- CSS propio sin librerías, con enfoque Mobile First: los estilos base son para celular y dos media queries (48rem y 64rem) adaptan el diseño a tablet y escritorio.
- Colores, tipografías y medidas declarados como variables en `:root`.
- Accesibilidad: enlace para saltar al contenido, foco visible al navegar con teclado y avisos para lectores de pantalla en los enlaces que abren otra pestaña.
- Tipografías: Syne para títulos y Sora para textos (Google Fonts).

## Estructura

```
index.html
pages/
└─ caso-de-estudio.html
assets/
├─ css/
│   └─ style.css
└─ img/
    ├─ foto-perfil.jpg
    ├─ proyectos/
    └─ caso/
```
