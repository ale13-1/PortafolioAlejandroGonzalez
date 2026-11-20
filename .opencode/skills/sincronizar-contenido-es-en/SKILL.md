---
name: sincronizar-contenido-es-en
description: Traduce y sincroniza español e inglés en contenido, CV e interfaz del portafolio. Usar al cambiar textos bilingües o revisar equivalencia de hechos, enlaces y etiquetas accesibles.
---

# Sincronizar contenido ES / EN

## Fuentes y entrada

Rutas desde la raíz del repositorio:
- Par de contenido: `doc/CONTENIDO_PORTAFOLIO_ES.md` y `doc/CONTENIDO_PORTAFOLIO_EN.md`.
- Par de CV: `doc/CV_Alejandro_Ignacio_Gonzalez_Arce.md` y `doc/CV_Alejandro_Ignacio_Gonzalez_Arce_EN.md`.
- Contexto: `doc/OBJETIVO_Y_ENFOQUE_DEL_PORTAFOLIO.md` y `doc/ESTRUCTURA_DEL_PORTAFOLIO.md`.

Recibir el texto o archivo modificado y el idioma de origen. Si no se indica origen, inspeccionar el cambio y las fuentes; preguntar solo cuando la elección afecte hechos no resueltos.

## Procedimiento

1. Leer ambas versiones y el contexto relevante. Si existe aplicación, localizar sus diccionarios, rutas o componentes de idioma sin asumir una biblioteca de internacionalización.
2. Comparar por secciones semánticas, no por igualdad de encabezados o número de líneas.
3. Alinear nombres, períodos, rol, equipo, aportes, tecnologías, formación, idiomas, disponibilidad y contacto. Las diferencias de estilo son válidas si conservan los mismos hechos.
4. Traducir de forma natural, preservando primera persona, nivel junior, trabajo guiado y reconocimiento al equipo. No cambiar nombres propios ni URLs.
5. Traducir navegación, botones, mensajes, metadatos y nombres accesibles cuando existan. Los textos alternativos describen imágenes reales; no inventar capturas.
6. En implementación, comprobar el atributo `lang`, idioma activo y selector ES / EN con nombres accesibles. Conservar la sección actual al cambiar de idioma cuando sea posible.
7. Ofrecer CV en el idioma activo solo si está disponible su archivo. No generar botones de descarga con destinos inexistentes.
8. Revisar el diff y comprobar que no queden textos mezclados accidentalmente. No añadir dependencias de traducción para una tarea únicamente editorial.

## Datos que deben mantenerse equivalentes

- Full Stack Junior / Junior Full-Stack Developer; no elevar seniority.
- Inglés A2; mandarín nivel HSK 1, sin afirmar certificación.
- Residencia en Chile e interés laboral en Chile y Nueva Zelanda, abierto a otros países.
- Equipo de tres y modificaciones guiadas en El Rincón de tu Mascota.
- Equipo de cinco y contribución frontend en Tu anillo de compromiso.

Ante contradicciones factuales sin fuente concluyente, mostrar ambas versiones y pedir confirmación, sin elegir por el idioma.

## Salida

Entregar `Sección | Diferencia | Corrección | Fuente`, archivos modificados y pendientes. Aclarar si solo se revisaron documentos o también se comprobó la interfaz.

## Casos de comprobación

- ES dice «equipo de 3» y EN «team of 5» para El Rincón de tu Mascota: detectar la discrepancia y usar tres según las fuentes.
- ES dice «incorporación técnica guiada» y EN «independently developed»: restaurar el matiz de acompañamiento.
- Una versión indica residencia en Nueva Zelanda: corregir a Chile según la documentación.

Ejemplo de solicitud: «Sincroniza la sección Contacto en español e inglés y revisa sus enlaces».
