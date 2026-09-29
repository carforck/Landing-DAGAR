# DAGAR - Landing Page

Landing page corporativa desarrollada con [Astro](https://astro.build/) y [Bootstrap 5](https://getbootstrap.com/), optimizada para rendimiento y SEO.

## 🚀 Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── sections/
│       ├── Hero.astro
│       ├── FeaturedServices.astro
│       ├── About.astro
│       ├── Skills.astro
│       ├── Stats.astro
│       ├── Clients.astro
│       ├── Services.astro
│       ├── Testimonials.astro
│       ├── Portfolio.astro
│       ├── Team.astro
│       ├── Pricing.astro
│       ├── FAQ.astro
│       └── Contact.astro
├── layouts/
│   └── Layout.astro
├── styles/
│   ├── base/
│   │   ├── _variables.scss
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   ├── _buttons.scss
│   │   └── _forms.scss
│   ├── sections/
│   │   ├── _hero.scss
│   │   ├── _services.scss
│   │   └── ...
│   └── main.scss
└── pages/
    └── index.astro
```

# 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [Bootstrap 5](https://getbootstrap.com/) - Framework CSS
- [SASS](https://sass-lang.com/) - Preprocesador CSS
- [GitLab Pages](https://gitlab.com/pages) - Hosting

# ⚙️ Comandos

| Comando         | Acción                                          |
| --------------- | ----------------------------------------------- |
| npm install     | Instala dependencias                            |
| npm run dev     | Inicia servidor de desarrollo en localhost:4321 |
| npm run build   | Construye el sitio para producción en ./dist/   |
| npm run preview | Vista previa local de la build                  |

# 🚀 Despliegue

Este proyecto está configurado para desplegarse automáticamente en GitLab Pages.

1. El despliegue se realiza automáticamente en cada push a la rama main
2. Puedes ver el sitio en: https://devcmg.gitlab.io/dagar

# 🎨 Personalización

Los estilos están organizados en archivos SCSS bajo src/styles/:

- base/ - Estilos base y variables
- components/ - Estilos de componentes
- sections/ - Estilos de secciones
