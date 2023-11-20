## Filtrado de organización miembros Github
En el ejercicio básico vamos a buscar el listado de miembros de Github de la organización que indique el usuario.


### Enunciado
Añadir un input y un botón para filtrar por organización, es decir:

- Se muestra por defecto el listado de miembros de lemoncode.
- Se muestra un input que por defecto tiene como valor: lemoncode.
- El usuario puede teclear otro nombre de organizacíon, por ejemplo: microsoft y al pulsar el botón de busqueda te muestra los miembros de dicha organización.
- Que al volver de la página de detalle se muestre la organización que se había tecleado en el filtro (por ejemplo si el usuario tecleó microsoft se debe de ver Microsoft).


#### Opcional
- Añade paginación.
- Añade Material UI.
- Añadir otra página y
    - Tirar de la API rest de Rick y Morty para mostrar la lista de personajes de la serie.
    - Implementar la búsqueda.
    - Implementar use Debounce.
    - Mostrar detalle del actor seleccionado.


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:8080`:

```bash
# npm
npm run start

# pnpm
pnpm run start

# yarn
yarn start
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```