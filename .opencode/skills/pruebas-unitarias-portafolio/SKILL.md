---
name: pruebas-unitarias-portafolio
description: Crea y ejecuta pruebas unitarias y de componentes JavaScript del portafolio Next.js. Usar para lógica, interacciones, regresiones o configuración de Jest y React Testing Library.
---

# Pruebas unitarias y de componentes

## Entrada y herramientas

Identificar el comportamiento solicitado, los archivos afectados y los criterios de aceptación. Inspeccionar `package.json`, lockfile, scripts, configuración y pruebas antes de elegir comandos.

- Respetar un runner existente que funcione con el proyecto.
- Si se solicita configurar pruebas y no existe runner, usar Jest, React Testing Library, jest-dom y user-event, integrando Next.js mediante `next/jest` y un entorno jsdom para componentes.
- Confirmar versiones y compatibilidad actuales antes de instalar dependencias de desarrollo; seguir el gestor indicado por el lockfile y usar archivos de configuración compatibles con el formato de módulos del proyecto.
- Esta skill no implica instalar herramientas al cargarla: hacerlo solo cuando sea necesario para la tarea solicitada.

## Procedimiento

1. Formular el comportamiento observable y los casos que podrían fallar. Priorizar decisiones de lógica, estados, errores y datos opcionales.
2. Probar utilidades puras en entorno apropiado y componentes interactivos en jsdom. Seguir la ubicación y nomenclatura de pruebas existente; si no existe, usar archivos adyacentes `*.test.js` o `*.test.jsx`.
3. Consultar elementos por rol, nombre accesible y etiqueta. Usar user-event para interacciones y esperar cambios asíncronos con las utilidades adecuadas.
4. Comprobar resultados visibles, atributos semánticos y callbacks públicos; no estados internos, nombres de clases CSS ni detalles privados de hooks.
5. Simular únicamente fronteras necesarias, como navegación de Next.js o servicios externos. Mantener las pruebas independientes, deterministas y sin acceso real a red.
6. Al corregir un error, agregar una prueba de regresión cuando tenga valor y, si es viable, comprobar que falla antes de la corrección y pasa después.
7. Ejecutar las pruebas afectadas en modo no interactivo con el script real del repositorio. Ampliar la ejecución si el cambio afecta comportamiento compartido o aparecen fallos.
8. Si se configura el runner, documentar el comando real en el README y ejecutar al menos una prueba significativa del comportamiento disponible.

## Casos relevantes

| Comportamiento | Aserciones útiles |
| --- | --- |
| Menú móvil | Abrir/cerrar, `aria-expanded` y Escape cuando corresponda |
| Selector ES / EN | Contenido y estado activo correctos; sección preservada si está implementado |
| Tarjeta de proyecto | Renderizar datos recibidos y omitir acciones sin URL |
| CV por idioma | Mostrar descarga solo cuando los datos indiquen un archivo disponible |
| Utilidades | Idioma desconocido, valores opcionales y generación de enlaces |

Para disponibilidad real de un PDF, comprobar además el archivo o recurso: una prueba del componente con datos simulados no demuestra su existencia.

## Límites y calidad

- No crear pruebas para cambios estáticos triviales ni pruebas que dupliquen la implementación.
- Evitar snapshots masivos y objetivos arbitrarios de cobertura; priorizar comportamientos relevantes.
- No afirmar que jsdom valida contraste, layout responsive o navegación completa: requieren comprobación visual o navegador.
- Los componentes de servidor asíncronos de Next.js tienen limitaciones en pruebas unitarias: consultar soporte actual y verificar su integración mediante navegador cuando corresponda. No distorsionar la arquitectura para forzar un test unitario.
- Un fallo preexistente debe identificarse con evidencia; no ocultarlo ni modificar expectativas para hacer pasar un error.

## Salida

Indicar comportamientos cubiertos, archivos modificados, comando ejecutado, resultado y limitaciones concretas. Si no hay aplicación o runner, explicar el requisito pendiente sin afirmar que las pruebas pasaron.

Ejemplo de solicitud: «Prueba que el menú móvil abre y cierra y actualiza aria-expanded».
