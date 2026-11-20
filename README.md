# PortafolioAlejandroGonzalez

Portafolio profesional de Alejandro González, desarrollador Full Stack Junior. Orientado a mostrar proyectos, formación y experiencia colaborativa a reclutadores y equipos de desarrollo.

## Estado y tecnologías

La aplicación incluye una primera versión bilingüe en `/es` y `/en`, con presentación, proyectos, conocimientos, sobre mí y contacto. `/` redirige a español. Las páginas se generan de forma estática con Next.js App Router.

Stack acordado: **Next.js, JavaScript/JSX y CSS**, con despliegue inicial en **Vercel Hobby**. Se usará el subdominio gratuito `*.vercel.app`; un dominio propio es opcional y puede tener costo. El despliegue debe respetar las condiciones y cuotas vigentes del plan.

### Ejecutar en local

Requisitos: Node.js **20.9 o superior** y npm. La implementación se verificó con Node.js 24.

```bash
npm ci
npm run dev
```

Abrir [localhost:3000](http://localhost:3000). Para ejecutar la versión de producción:

```bash
npm run build
npm start
```

### Comprobaciones

```bash
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

Las pruebas de navegador usan la compilación de producción y arrancan un servidor en el puerto 3100. Comprueban idioma y anclas, menú móvil, Escape, foco por teclado, enlace para saltar al contenido y desbordamientos en varios tamaños y con texto ampliado.

### Estructura de la aplicación

```text
src/
  app/
    [locale]/        # Layout, metadatos y página de cada idioma
    globals.css      # Variables visuales y estilos base
  components/        # Encabezado interactivo, secciones, proyectos y CSS Modules
  content/
    portfolio.js     # Contenido ES / EN, enlaces y anclas compartidas
tests/               # Pruebas de navegación con Playwright
doc/                 # Especificaciones y fuentes de contenido
```

Actualizar primero las fuentes en `doc/` y reflejar los cambios en ambos idiomas de `src/content/portfolio.js`. Las anclas `projects`, `skills`, `about` y `contact` son compartidas para conservar la sección al cambiar de idioma. Los estilos siguen la dirección carbón/coral definida en la documentación.

Fotografía, capturas reales y PDF del CV siguen pendientes. La interfaz funciona con texto y no publica enlaces de descarga hasta disponer de los archivos.

### Despliegue

Importar el repositorio en Vercel, seleccionar el preset **Next.js** y usar la raíz del repositorio. Comando de instalación: `npm ci`; compilación: `npm run build`. Esta versión no requiere variables de entorno. La publicación se realiza desde la cuenta de Vercel; aún no se ha desplegado desde esta implementación.

## Documentación del portafolio

- [Objetivo y enfoque](doc/OBJETIVO_Y_ENFOQUE_DEL_PORTAFOLIO.md).
- [Estructura y dirección visual](doc/ESTRUCTURA_DEL_PORTAFOLIO.md).
- Contenido: [español](doc/CONTENIDO_PORTAFOLIO_ES.md) / [inglés](doc/CONTENIDO_PORTAFOLIO_EN.md).
- CV: [español](doc/CV_Alejandro_Ignacio_Gonzalez_Arce.md) / [inglés](doc/CV_Alejandro_Ignacio_Gonzalez_Arce_EN.md).

## Skills de OpenCode

Las skills son instrucciones reutilizables para tareas concretas. Se guardan en `.opencode/skills/<nombre>/SKILL.md`, con metadatos que permiten a OpenCode identificar cuándo utilizarlas.

| Skill | Uso | Ejemplo de solicitud |
| --- | --- | --- |
| [revisar-fichas-proyectos](.opencode/skills/revisar-fichas-proyectos/SKILL.md) | Revisar contexto, aportes, tecnologías y enlaces | «Usa revisar-fichas-proyectos para evaluar la ficha de Tu anillo de compromiso» |
| [actualizar-contenido-profesional](.opencode/skills/actualizar-contenido-profesional/SKILL.md) | Mantener coherencia entre perfil, contenido y CV | «Actualiza mi presentación usando el CV con actualizar-contenido-profesional» |
| [sincronizar-contenido-es-en](.opencode/skills/sincronizar-contenido-es-en/SKILL.md) | Traducir y comparar hechos, enlaces y etiquetas | «Usa sincronizar-contenido-es-en para revisar Contacto» |
| [implementar-secciones-portafolio](.opencode/skills/implementar-secciones-portafolio/SKILL.md) | Construir interfaz accesible y responsive con el stack acordado | «Implementa Proyectos usando implementar-secciones-portafolio» |
| [pruebas-unitarias-portafolio](.opencode/skills/pruebas-unitarias-portafolio/SKILL.md) | Probar lógica, componentes e interacciones | «Usa pruebas-unitarias-portafolio para comprobar el menú móvil» |
| [desplegar-vercel](.opencode/skills/desplegar-vercel/SKILL.md) | Preparar Preview y producción en Vercel Hobby | «Usa desplegar-vercel para preparar una Preview sin servicios de pago» |

### Carga y uso

1. Cerrar y reiniciar OpenCode desde este repositorio para que detecte las nuevas skills.
2. Pedir una tarea concreta; se puede mencionar explícitamente la skill como en los ejemplos.
3. Revisar los cambios y las comprobaciones informadas antes de publicar.

No hace falta registrar estas rutas en un archivo de configuración adicional: se utiliza la ubicación estándar de skills del proyecto. Cargar una skill no instala dependencias ni ejecuta despliegues por sí mismo.

### Cómo comprobar las skills

Después de reiniciar OpenCode, verificar que aparecen las seis skills y pedir que se cargue la correspondiente. Ejecutar estas revisiones sin editar las fuentes, usando entradas temporales en el prompt:

| Caso | Resultado esperado |
| --- | --- |
| Revisar la ficha completa de Tu anillo de compromiso en el contenido ES | Reconocer sus datos y no exigir métricas inventadas |
| Revisar «Tu anillo de compromiso: hice la web» | Señalar imprecisiones y recuperar hechos solo desde fuentes identificadas |
| Evaluar «Implementé el backend de Tu anillo de compromiso» | Detectar que no está respaldado como contribución personal |
| Comparar ES «equipo de 3» con EN «team of 5» para El Rincón de tu Mascota | Señalar la diferencia y respaldar tres con la documentación |
| Revisar «Vivo en Nueva Zelanda y mi inglés es avanzado» | Detectar discrepancias con residencia en Chile e inglés A2 |
| Pedir preparar Vercel antes de crear la aplicación | Informar que falta la aplicación, sin afirmar que se compiló o publicó |

Las interacciones de navegación de la aplicación se comprueban con `npm run test:e2e`. El descubrimiento y la ejecución efectiva de las skills deben comprobarse en la sesión reiniciada; revisar sus archivos no sustituye esa comprobación.

### Mantenimiento

Actualizar primero las fuentes de contenido afectadas y conservar equivalencia ES / EN. Al modificar una skill, mantener el nombre de carpeta y el campo `name` iguales, conservar una descripción precisa, revisar sus referencias y repetir los casos relevantes. Reiniciar OpenCode para cargar los cambios.
