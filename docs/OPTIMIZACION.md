# Actividad: Optimizacion de rendimiento en React

## Portada (plantilla)
- Institucion: [Nombre de la institucion]
- Logotipo: [Insertar imagen]
- TSU: [Nombre del TSU]
- Asignatura: [Nombre de la asignatura]
- Cuatrimestre: [Numero de cuatrimestre]
- Alumno: [Nombre completo]
- Grupo: [Grupo]
- Cuatrimestre actual: [Cuatrimestre actual]
- Fecha: [Fecha de entrega]

## Desarrollo de la actividad

### 1. Organizacion del proyecto
Se separaron las rutas en un archivo independiente para mejorar mantenimiento y escalar el proyecto sin sobrecargar App.

Cambios aplicados:
- Se creo `src/routes/AppRoutes.jsx` para centralizar todas las rutas.
- `src/App.jsx` quedo enfocado en layout global (Header, Footer y contenedor principal).
- Se aplico carga diferida (`React.lazy`) para paginas, reduciendo el peso de carga inicial.

### 2. Buenas practicas aplicadas

#### 2.1 Eliminacion de codigo innecesario
Se eliminaron componentes y archivos sin uso real en la aplicacion para reducir deuda tecnica:
- Componentes no utilizados.
- Estilos huerfanos asociados a esos componentes.
- Archivo de pagina vacio.

#### 2.2 Consumo de datos organizado
Se centralizo el acceso a datos en una capa de servicios:
- Se creo `src/services/contentApi.js`.
- Se unifico la lectura de `movies.json` y `alimentos.json`.
- Se agrego cache en memoria para evitar peticiones repetidas al navegar entre paginas.

Beneficio tecnico:
- Menos solicitudes HTTP redundantes.
- Menor tiempo de espera al reingresar a secciones.
- Logica de datos reutilizable y facil de probar.

#### 2.3 Datos estaticos fuera de componentes
- Se movio el arreglo de "Otros" a `src/data/otherItems.js`.

Beneficio tecnico:
- Componentes mas limpios.
- Mejor separacion de responsabilidades.

### 3. Justificacion tecnica de decisiones
- Rutas separadas: evita un archivo principal monolitico y facilita agregar middleware visual (fallbacks, guards, layouts).
- Lazy loading por pagina: disminuye el JS inicial descargado y mejora rendimiento percibido.
- Capa de servicios con cache: evita duplicar `fetch` en varias paginas y reduce costo de red.
- Eliminacion de archivos no usados: mejora legibilidad del repositorio y reduce mantenimiento.

### 4. Evidencia de optimizacion
Indicadores esperados tras cambios:
- Menor numero de peticiones repetidas a `movies.json`.
- Menor bundle inicial al entrar en `/`.
- Navegacion mas fluida entre secciones ya consultadas (por cache).

## Conclusion
La optimizacion aplicada mejora tanto el rendimiento como la mantenibilidad del proyecto. Se redujo codigo duplicado, se separaron responsabilidades y se implementaron practicas de arquitectura basadas en componentes y servicios reutilizables. Esto permite que la aplicacion crezca de forma ordenada y con menor riesgo de errores futuros.

## Formato de entrega
- Repositorio: subir cambios al repositorio Git.
- Documento: exportar este contenido a PDF.
- Nombre sugerido del archivo PDF: `ApellidoNombre_Actividad_OptimizacionReact.pdf`.
