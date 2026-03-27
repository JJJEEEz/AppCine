# React Project - Optimizacion de rendimiento

Este proyecto fue optimizado para mejorar tiempos de carga, reducir codigo duplicado y facilitar mantenimiento.

## Cambios principales

1. Rutas separadas en archivo independiente
- Se creo `src/routes/AppRoutes.jsx`.
- `src/App.jsx` ahora solo maneja layout global.
- Se aplico `React.lazy` + `Suspense` para carga diferida por pagina.

2. Capa de servicios para datos
- Se creo `src/services/contentApi.js` para centralizar consumo de datos.
- Se agrego cache en memoria para evitar peticiones repetidas de peliculas y alimentos.
- Paginas actualizadas: Home, Cartelera, Alimentos, Detail.

3. Mejor estructura y limpieza
- Se movieron datos estaticos de "Otros" a `src/data/otherItems.js`.
- Se eliminaron componentes y estilos sin uso.

4. Documentacion para entrega
- Se agrego `docs/OPTIMIZACION.md` con desarrollo, justificacion tecnica, conclusion y plantilla de portada.

## Ejecutar proyecto

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```
