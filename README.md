 ## Usar o setup.sh na pasta Trabalhos


# BaseApp

Estrutura base para novos projetos Vue 3 com Vite, TypeScript, Tailwind CSS, Pinia, Vue Router e suporte a PWA.

## Tecnologias e Plugins

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia (Store)](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) (PWA com atualização automática e modo offline)
- [gh-pages](https://github.com/tschaub/gh-pages) (deploy opcional no GitHub Pages)
   

## Scripts

- `npm run dev` — roda o projeto em modo de desenvolvimento
- `npm run build` — faz o build do projeto para produção
- `npm run preview` — pré-visualiza o build de produção localmente
- `npm run deploy` — envia os arquivos para o GitHub Pages (pasta `dist`)

## Estrutura inicial

```bash
src/
├── assets/
├── components/
│   ├── PwaNotification.vue
│   └── PwaStatus.vue
├── views/
│   └── TelaStatus.vue
├── stores/
│   └── counter.ts
├── router/
│   └── index.ts
├── App.vue
├── main.ts
├── style.css
