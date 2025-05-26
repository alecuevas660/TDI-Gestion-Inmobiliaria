import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderScript, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CJ_da7cA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tSllLkrF.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CpB5BLPx.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const bannerNosotros3 = new Proxy({"src":"/_astro/banner_nosotros3.CXYQIFtF.jpg","width":7360,"height":4912,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/banner_nosotros3.jpg";
							}
							
							return target[name];
						}
					});

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const title = "Nosotros - TDI Inmobiliaria";
  const description = "TDI Inmobiliaria: expertos en corretaje, administraci\xF3n, arquitectura, servicios legales y obras civiles para gestionar y potenciar tu propiedad.";
  const urlTeam = bannerNosotros3;
  const valores = [
    { icon: "bi-award", title: "Excelencia" },
    { icon: "bi-people", title: "Compromiso" },
    { icon: "bi-shield-check", title: "Transparencia" },
    { icon: "bi-lightbulb", title: "Innovaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero-section d-flex align-items-center animate" data-astro-cid-noeej2nj> <div class="hero-bg-img" data-astro-cid-noeej2nj></div> <div class="container hero-content text-center" data-astro-cid-noeej2nj> <h1 class="display-4 fw-bold mb-4" data-astro-cid-noeej2nj>Conoce TDI Inmobiliaria</h1> <p class="lead mb-4" data-astro-cid-noeej2nj>Gestionamos todas las etapas de tu propiedad: corretaje, administración, arquitectura, servicios legales y obras civiles.</p> <div class="d-flex justify-content-center gap-3" data-astro-cid-noeej2nj> <a href="/servicios" class="btn btn-primary btn-lg" data-astro-cid-noeej2nj>Descubre nuestros servicios</a> </div> </div> </section>  <section class="story-section animate" data-astro-cid-noeej2nj> <div class="container" data-astro-cid-noeej2nj> <div class="story-grid" data-astro-cid-noeej2nj> <div class="story-content" data-astro-cid-noeej2nj> <h2 data-astro-cid-noeej2nj>Nuestra Historia</h2> <p data-astro-cid-noeej2nj>
Con más de 15 años en el mercado inmobiliario, TDI Inmobiliaria ha acompañado a cientos de clientes en la compra, venta, arriendo, remodelación y legalización de sus propiedades. Nuestro enfoque integral garantiza que cada proyecto se desarrolle con transparencia, eficiencia y la máxima calidad.
</p> </div> <div class="story-image" data-astro-cid-noeej2nj> ${renderComponent($$result2, "Image", $$Image, { "src": urlTeam, "alt": "Equipo Inmobiliario", "width": 800, "height": 400, "data-astro-cid-noeej2nj": true })} </div> </div> </div> </section>  <section class="mission-vision-section animate" data-astro-cid-noeej2nj> <div class="container" data-astro-cid-noeej2nj> <div class="mission-vision-grid" data-astro-cid-noeej2nj> <div class="mission-box" data-astro-cid-noeej2nj> <h3 data-astro-cid-noeej2nj>Misión</h3> <p data-astro-cid-noeej2nj>
Brindar soluciones integrales en bienes raíces, combinando experiencia comercial, técnica y legal, para maximizar el valor y la seguridad de las propiedades de nuestros clientes.
</p> </div> <div class="vision-box" data-astro-cid-noeej2nj> <h3 data-astro-cid-noeej2nj>Visión</h3> <p data-astro-cid-noeej2nj>
Ser la inmobiliaria de referencia en Chile, reconocida por nuestra gestión integral, innovación y compromiso con la excelencia en cada proyecto.
</p> </div> </div> </div> </section>  <section class="values-section animate" data-astro-cid-noeej2nj> <div class="container" data-astro-cid-noeej2nj> <h2 data-astro-cid-noeej2nj>Nuestros Valores</h2> <div class="values-grid" data-astro-cid-noeej2nj> ${valores.map((valor) => renderTemplate`<div class="value-card" data-astro-cid-noeej2nj> <i${addAttribute(valor.icon, "class")} data-astro-cid-noeej2nj></i> <h4 data-astro-cid-noeej2nj>${valor.title}</h4> <p data-astro-cid-noeej2nj>Nuestro pilar de trabajo y relación con clientes y colaboradores.</p> </div>`)} </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/pages/nosotros.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Nosotros,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
