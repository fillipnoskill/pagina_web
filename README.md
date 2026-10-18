# Catálogo de Videojuegos en React

Este proyecto es una aplicación web interactiva desarrollada con React que permite a los usuarios explorar un catálogo de videojuegos, buscar títulos específicos, filtrar por género y gestionar una lista de favoritos.

## Requerimientos cumplidos
- **Catálogo:** Visualización de tarjetas de videojuegos con su información principal (título, imagen a 150x150, género y año).
- **Búsqueda interactiva:** Campo de texto que filtra los resultados por nombre en tiempo real.
- **Filtros por categoría:** Menú desplegable para visualizar juegos de un género específico y que funciona simultáneamente con el buscador.
- **Sistema de Favoritos:** Botones para agregar o quitar juegos de la lista de favoritos, contador dinámico y un botón para visualizar únicamente los títulos marcados.
- **Detalles del juego:** Un modal (ventana emergente) que muestra la descripción completa del juego seleccionado.

## Tecnologías y conceptos aplicados
- React (Componentes funcionales)
- JSX para el renderizado de interfaces
- Hook `useState` para el manejo de estados dinámicos
- Comunicación entre componentes mediante `props`
- Renderizado de listas y filtrado con `map()` y `filter()`
- Manejo de eventos (`onClick`, `onChange`)

## Instrucciones de ejecución

Sigue estos pasos para levantar el proyecto en tu máquina local:

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu equipo.

### Pasos para iniciar

1. **Abrir la terminal y ubicarte en el proyecto**
   Abre tu terminal en la carpeta principal del proyecto.

2. **Instalar las dependencias**
   Descarga los paquetes de Node y React necesarios para que el entorno funcione. Ejecuta:
   ```bash
   npm install
   npm run dev