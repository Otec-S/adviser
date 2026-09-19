# Сайт ЮФ «Эдвайзер»

Статический сайт юридической фирмы «Эдвайзер», собираемый генератором [Eleventy (11ty)](https://www.11ty.dev/).

## Стек

- [Eleventy 3.x](https://www.11ty.dev/) — шаблоны на Nunjucks (`.njk`)
- [`@11ty/eleventy-img`](https://www.11ty.dev/docs/plugins/image/) — автоматическая оптимизация изображений (WEBP, responsive `srcset`, `loading="lazy"`)
- Без клиентского JavaScript

## Быстрый старт

```bash
npm install       # установка зависимостей
npm start         # локальный сервер с live reload — http://localhost:8080
npm run build     # финальная сборка в _site/
```

## Структура проекта

```
adviser/
├── eleventy.config.js      # конфигурация Eleventy, shortcode {% image %}
├── src/
│   ├── _includes/layout.njk # общий layout (header/nav/footer)
│   ├── _data/                # site.json, clients.json, news.json
│   ├── *.njk                 # страницы сайта
│   ├── styles/                # normalize.css, styles.css
│   ├── fonts/                  # шрифты Jura
│   └── images/                  # исходные изображения
└── _site/                     # результат сборки (в .gitignore)
```

Подробное описание архитектуры, BEM-соглашений и частых задач (добавление страницы/новости/клиента) — в [`CLAUDE.md`](./CLAUDE.md).
