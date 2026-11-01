import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { render } from './src/render.js'

// Every page is rendered from src/render.js; the .html files are placeholders.
// Path (without the /ar prefix) → page key in src/legal.js.
const PAGES = { '': 'home', 'privacy/': 'privacy', 'terms/': 'terms', 'delete-account/': 'delete' }

const input = {}
for (const lang of ['en', 'ar']) {
  for (const dir of Object.keys(PAGES)) {
    const file = `${lang === 'ar' ? 'ar/' : ''}${dir}index.html`
    input[file.replace(/\/?index\.html$/, '') || 'en'] = fileURLToPath(new URL(file, import.meta.url))
  }
}

export default defineConfig({
  build: { rollupOptions: { input } },
  plugins: [
    {
      name: 'shaheen-pages',
      transformIndexHtml: {
        order: 'pre',
        handler: (_html, ctx) => {
          const ar = ctx.path.startsWith('/ar/')
          const dir = ctx.path.slice(ar ? 4 : 1).replace(/index\.html$/, '')
          return render(ar ? 'ar' : 'en', PAGES[dir] ?? 'home')
        },
      },
    },
  ],
})
