---
name: revisar-fichas-proyectos
description: Revisa o redacta fichas de proyectos del portafolio, comprobando aportes, contexto, tecnologías y enlaces. Usar al crear, actualizar o evaluar una ficha profesional.
---

# Revisar fichas de proyectos

## Fuentes y entrada

Las rutas siguientes parten de la raíz del repositorio:
- `doc/OBJETIVO_Y_ENFOQUE_DEL_PORTAFOLIO.md`: enfoque y hechos documentados.
- `doc/ESTRUCTURA_DEL_PORTAFOLIO.md`: campos, orden y presentación.
- `doc/CONTENIDO_PORTAFOLIO_ES.md` y `doc/CONTENIDO_PORTAFOLIO_EN.md`: textos del sitio.
- `doc/CV_Alejandro_Ignacio_Gonzalez_Arce.md` y `doc/CV_Alejandro_Ignacio_Gonzalez_Arce_EN.md`: experiencia de respaldo.

Recibir el nombre del proyecto, la ficha o su archivo y si se pide revisar o editar. Si no se proporciona una ficha, localizar la del proyecto indicado. Si no se identifica el proyecto, pedir ese dato.

## Procedimiento

1. Leer la ficha y las fuentes relevantes antes de proponer cambios.
2. Comprobar nombre, período, contexto, rol personal, tamaño del equipo, aportes, tecnologías y enlaces. Incluir aprendizajes o resultados únicamente cuando estén respaldados.
3. Distinguir aportes individuales, colaboración, trabajo guiado y tecnologías de la aplicación. Un repositorio o una tecnología del stack no demuestran autoría individual.
4. Contrastar cada afirmación relevante con una fuente. Ante contradicciones, mostrar ambas referencias y solicitar confirmación del hecho; continuar con lo verificable.
5. Marcar datos ausentes como pendientes. No inventar métricas, decisiones técnicas, clientes, funcionalidades, enlaces ni resultados.
6. Si se solicita editar, cambiar los archivos pertinentes y revisar el diff. Si se pide revisar, entregar observaciones sin aplicar cambios.
7. Para cambios bilingües, utilizar `sincronizar-contenido-es-en` si está disponible.

## Criterios específicos

- Tu anillo de compromiso: 2023, equipo de cinco con acompañamiento de una ONG; aporte confirmado en frontend, galería, detalles y adaptación de tarjetas a móvil. El backend es contexto, no contribución personal confirmada.
- El Rincón de tu Mascota: 2025–2026, equipo de tres; coordinación y modificaciones técnicas guiadas sobre una aplicación existente. Los textos legales fueron redactados por un abogado; Alejandro realizó su incorporación técnica guiada.
- Mantener el rol junior, el reconocimiento al equipo y un tono profesional, cercano y seguro.
- No exigir datos que la fuente no ofrece ni presentar un aprendizaje como resultado comercial medido.
- Verificar la existencia de archivos locales enlazados. Distinguir una URL bien formada de una URL comprobada mediante acceso real.

## Salida

Presentar un resumen y una tabla `Campo | Hallazgo | Fuente | Acción`. Indicar datos pendientes y, si se solicitó, la ficha corregida o los archivos modificados. No enumerar problemas inexistentes para completar la tabla.

## Casos de comprobación

- Ficha completa: usar la ficha de Tu anillo de compromiso en el contenido ES y contrastarla con las fuentes. Resultado esperado: conservar sus hechos; no exigir métricas inventadas.
- Ficha incompleta: «Tu anillo de compromiso: hice la web». Resultado esperado: señalar falta de contexto y precisión del aporte; recuperar datos solo desde fuentes identificadas y distinguirlos de la entrada.
- Atribución incorrecta: «Implementé el backend de Tu anillo de compromiso». Resultado esperado: señalar que no hay respaldo de esa contribución y proponer la descripción frontend documentada.

Ejemplo de solicitud: «Revisa la ficha de Tu anillo de compromiso y señala afirmaciones sin respaldo».
