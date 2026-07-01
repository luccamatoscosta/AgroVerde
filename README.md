# AgroVerde

Site institucional da AgroVerde feito com HTML, CSS e JavaScript, organizado em uma estrutura profissional de projeto.

## Estrutura

```text
AgroVerde/
  public/
    favicon.ico
    robots.txt
    manifest.json

  src/
    assets/
      images/
      icons/
      logos/
      fonts/

    styles/
      reset.css
      variables.css
      global.css

    components/
      header.js
      navbar.js
      banner.js
      card.js
      footer.js

    services/
      api.js

    utils/
      helpers.js

    pages/
      home/
        home.css
        home.js
      about/
        about.html
        about.css
        about.js
      contact/
        contact.html
        contact.css
        contact.js
      services/
        services.html
        services.css
        services.js
      products/
        products.html
        products.css
        products.js

  index.html
  package.json
  package-lock.json
  vite.config.js
```

## Como abrir

Abra `index.html` no navegador ou use o servidor local do Vite.

## Como funciona

- `index.html` é a página inicial.
- As páginas internas ficam em `src/pages`.
- Os estilos globais ficam em `src/styles`.
- Scripts reutilizáveis ficam em `src/components`.
- Imagens, ícones, logos e fontes ficam em `src/assets`.
- Arquivos públicos do navegador ficam em `public`.