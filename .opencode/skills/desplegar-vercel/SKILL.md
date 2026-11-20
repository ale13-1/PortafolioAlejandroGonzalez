---
name: desplegar-vercel
description: Prepara, verifica y despliega el portafolio Next.js en Vercel Hobby sin servicios de pago. Usar para Preview, publicación en producción o diagnóstico de errores de Vercel.
---

# Desplegar en Vercel Hobby

## Objetivo y referencias

El despliegue inicial debe funcionar en Vercel Hobby con subdominio `*.vercel.app` y sin contratar servicios adicionales. Un dominio propio es opcional y puede tener costo.

Consultar las condiciones y cuotas vigentes antes de publicar, sin copiar cifras como garantías permanentes:
- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/limits/fair-use-guidelines
- https://vercel.com/docs/frameworks/full-stack/nextjs
- https://vercel.com/docs/deployments/environments
- https://vercel.com/docs/environment-variables

Hobby tiene límites y condiciones para uso personal/no comercial. Evaluar el uso real conforme a las condiciones vigentes; no tratar un portafolio como una tienda ni asumir que un uso comercial futuro seguirá siendo elegible.

## Procedimiento

1. Inspeccionar aplicación, scripts, lockfile, versión de Next.js y Node.js, configuración y estado Git. Identificar si el proyecto ya está vinculado a Vercel y el alcance solicitado: preparar, Preview, producción o diagnóstico.
2. Ejecutar las pruebas, análisis estático y compilación pertinentes mediante los scripts existentes. Si falta aplicación o existe un fallo que impide compilar, resolverlo dentro del alcance o informar el bloqueo antes de intentar publicar.
3. Favorecer prerenderizado y recursos estáticos. No añadir base de datos, formularios con envío de correo, almacenamiento o analítica de pago para el alcance inicial. No forzar exportación estática si limita funciones necesarias de Next.js.
4. Revisar archivos públicos, rutas ES / EN, imágenes y CV. Identificar variables realmente utilizadas; no inventar variables obligatorias para contenido estático.
5. Si hay variables, documentar sus nombres y finalidad sin valores secretos. Separar Development, Preview y Production. Usar `NEXT_PUBLIC_` solo para datos que puedan exponerse al navegador; no guardar secretos en Git.
6. Usar preferentemente integración Git con Vercel. Confirmar cuenta Hobby, repositorio, directorio raíz, rama de producción y detección de Next.js. Mantener instalación y build automáticos salvo necesidad demostrada; crear `vercel.json` solo si hace falta.
7. Si se solicita desplegar por CLI, comprobar herramienta y autenticación existentes; crear Preview por defecto y usar producción cuando el usuario lo solicite. No hacer commits, push ni vincular cuentas distintas sin una instrucción que lo autorice.
8. Si faltan autenticación o permisos, pedir únicamente la intervención necesaria en Vercel y continuar con la preparación local. No solicitar tokens en el chat ni afirmar que existe una URL no obtenida.
9. Validar Preview: acceso público esperado, navegación, cambio de idioma, menú móvil, recursos, contacto, CV disponible y metadatos. Revisar logs si hay errores. Confirmar la configuración de protección antes de compartir una URL con reclutadores.
10. Al publicar producción, validar la URL final y el comportamiento esencial. Si hay dominio propio ya disponible, comprobar DNS y HTTPS sin comprarlo automáticamente.
11. Documentar cómo actualizar desde Git y cómo volver a un despliegue funcional mediante las opciones disponibles de Vercel. No ejecutar una reversión salvo que se solicite o sea parte explícita de la recuperación autorizada.

## Control de costo

- Comprobar que el destino sea Hobby, no una prueba temporal de Pro ni un equipo de pago.
- No habilitar planes, complementos o integraciones de pago. Si un requisito los necesita, explicar el costo y pedir una decisión antes de activarlos.
- Revisar consumo en el panel y explicar los límites aplicables. Hobby es gratuito, no ilimitado; al alcanzar cuotas pueden aplicarse restricciones conforme a la documentación vigente.
- Para el alcance actual, contacto mediante `mailto:` y `tel:`, contenido versionado y CV e imágenes locales.

## Salida

Entregar entorno, URL real si existe, versión o commit desplegado si se conoce, comprobaciones y resultados, configuración no secreta y pendientes. Distinguir preparación local, despliegue completado y validación de producción.

Ejemplos: «Prepara el portafolio para Vercel Hobby»; «Despliega una Preview»; «Publica en producción y comprueba su URL».
