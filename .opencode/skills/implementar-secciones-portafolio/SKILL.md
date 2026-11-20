---
name: implementar-secciones-portafolio
description: Implementa secciones, navegación y estilos del portafolio con Next.js, JavaScript y CSS. Usar al construir o ajustar la interfaz responsive, accesible y bilingüe.
---

# Implementar secciones del portafolio

## Contexto y fuentes

Stack confirmado: Next.js, JavaScript/JSX, CSS y despliegue en Vercel Hobby.

Leer desde la raíz:
- `doc/ESTRUCTURA_DEL_PORTAFOLIO.md`.
- `doc/OBJETIVO_Y_ENFOQUE_DEL_PORTAFOLIO.md`.
- `doc/CONTENIDO_PORTAFOLIO_ES.md` y `doc/CONTENIDO_PORTAFOLIO_EN.md`.

## Procedimiento

1. Inspeccionar el repositorio, `package.json`, lockfile, versión de Next.js, router, componentes, estilos y scripts existentes. No asumir que la aplicación ya está creada.
2. Si se solicita iniciar el sitio y no existe aplicación, preparar una base mínima con Next.js, JavaScript, CSS y App Router; confirmar compatibilidad de versiones y conservar los documentos existentes. Para una tarea limitada, evitar scaffolding ajeno al alcance.
3. Seguir las convenciones existentes. Usar CSS global para base y variables compartidas y CSS Modules para estilos locales cuando se necesiten; no introducir Tailwind, TypeScript ni bibliotecas de componentes sin petición.
4. Implementar una sección o funcionalidad a la vez. Extraer componentes reutilizables por responsabilidades reales, sin abstracciones innecesarias.
5. En App Router, mantener componentes de servidor por defecto y limitar `use client` a interacciones que lo requieran. En Pages Router, respetar su modelo. No usar APIs exclusivas de un router en el otro.
6. Favorecer prerenderizado para contenido del portafolio. Evitar bases de datos, API y servicios de pago si no son necesarios para el requisito.
7. Usar los textos documentados y datos ES / EN coherentes; recurrir a `sincronizar-contenido-es-en` para cambios bilingües.
8. Aplicar los criterios visuales y funcionales siguientes.
9. Usar `pruebas-unitarias-portafolio` para lógica o interacciones que lo justifiquen. Ejecutar los scripts pertinentes disponibles, incluida compilación cuando el cambio lo requiera; no inventar comandos ni afirmar verificaciones no realizadas.

## Criterios de aceptación

- Encabezado y pie; orden Presentación → Proyectos → Conocimientos → Sobre mí → Contacto.
- El Rincón de tu Mascota antes de Tu anillo de compromiso; aportes antes del stack.
- Fondo carbón, superficies diferenciadas, texto blanco suave y acento terracota/coral. Comprobar contraste WCAG AA: 4.5:1 en texto normal y 3:1 en texto grande.
- HTML semántico, un encabezado principal, jerarquía coherente, enlace para saltar al contenido, foco visible y controles utilizables por teclado.
- Layout móvil sin desbordamientos ni funciones dependientes solo de hover. Comprobar tamaños de pantalla disponibles y texto ampliado.
- Selector ES / EN visible, idioma activo reconocible y `lang` correcto; preservar sección al cambiar de idioma cuando sea posible.
- Menú móvil con nombre accesible, `aria-expanded` y gestión de foco adecuada a su comportamiento; Escape cierra los paneles que lo requieran.
- Contenido legible sin fotografía ni capturas pendientes, sin imágenes ficticias ni espacios vacíos obligatorios.
- Enlaces de correo y teléfono funcionales; CV descargable únicamente si existe el archivo correspondiente.
- Imágenes reales con dimensiones, texto alternativo pertinente y carga optimizada; respetar preferencias de movimiento reducido si hay animaciones.

## Salida

Resumir archivos modificados, comportamiento implementado, comprobaciones ejecutadas con resultado y revisiones visuales pendientes. Para publicar, usar `desplegar-vercel`.

Ejemplo de solicitud: «Implementa la sección de proyectos con Next.js y CSS usando los textos ES / EN».
