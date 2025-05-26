import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_z6UFvzag.mjs';
import { manifest } from './manifest_CjUVhqo0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contacto.astro.mjs');
const _page2 = () => import('./pages/nosotros.astro.mjs');
const _page3 = () => import('./pages/servicios-administracion-propiedades.astro.mjs');
const _page4 = () => import('./pages/servicios-arquitectura.astro.mjs');
const _page5 = () => import('./pages/servicios-corretaje.astro.mjs');
const _page6 = () => import('./pages/servicios-legales.astro.mjs');
const _page7 = () => import('./pages/servicios-obras-civiles.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/contacto.astro", _page1],
    ["src/pages/nosotros.astro", _page2],
    ["src/pages/servicios-administracion-propiedades.astro", _page3],
    ["src/pages/servicios-arquitectura.astro", _page4],
    ["src/pages/servicios-corretaje.astro", _page5],
    ["src/pages/servicios-legales.astro", _page6],
    ["src/pages/servicios-obras-civiles.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "hybrid",
    "client": "file:///C:/Users/alexis/Desktop/TDI%20Gestion%20Inmobiliaria/TDI-INMOBILIARIA/dist/client/",
    "server": "file:///C:/Users/alexis/Desktop/TDI%20Gestion%20Inmobiliaria/TDI-INMOBILIARIA/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
