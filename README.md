# AgroVerde

Site institucional da AgroVerde feito com HTML e CSS, organizado com os estilos dentro da pasta de cada página.

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

    pages/
      home/
        home.css
      about/
        about.html
        about.css
      contact/
        contact.html
        contact.css
      services/
        services.html
        services.css
      products/
        products.html
        products.css

  index.html
  package.json
  package-lock.json
  vite.config.js
```

## Como funciona

- `index.html` é a página inicial.
- As páginas internas ficam em `src/pages`.
- Cada página tem seu próprio arquivo CSS dentro da própria pasta.
- As imagens ficam em `src/assets/images`.
- O favicon fica em `src/assets/icons` e também há uma cópia pública em `public/favicon.ico`.
