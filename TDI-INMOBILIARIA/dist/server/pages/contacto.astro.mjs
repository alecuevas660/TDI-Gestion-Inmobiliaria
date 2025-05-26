import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderScript, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CJ_da7cA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tSllLkrF.mjs';
import { $ as $$Contacto$1 } from '../chunks/Contacto_Co0O9KfX.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const title = "Contacto - TDI Inmobiliaria";
  const description = "\xBFTienes dudas o quieres una cotizaci\xF3n? Cont\xE1ctanos para gestionar tu propiedad con expertos en corretaje, arquitectura, servicios legales y obras civiles.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero-section d-flex align-items-center animate" data-astro-cid-2mxdoeuz> <div class="container hero-content text-center" data-astro-cid-2mxdoeuz> <h1 class="display-4 fw-bold mb-4" data-astro-cid-2mxdoeuz>Contáctanos</h1> <p class="lead mb-4" data-astro-cid-2mxdoeuz>¿Tienes dudas o quieres una cotización? Nuestro equipo multidisciplinario está listo para asesorarte.</p> <div class="d-flex justify-content-center gap-3" data-astro-cid-2mxdoeuz> <a href="#contact-form" class="btn btn-primary btn-lg" data-astro-cid-2mxdoeuz>Iniciar Proyecto</a> </div> </div> <div class="hero-bg-img" data-astro-cid-2mxdoeuz></div> </section>  <section class="contact-cards-section animate" data-astro-cid-2mxdoeuz> <div class="container" data-astro-cid-2mxdoeuz> <div class="contact-cards-grid" data-astro-cid-2mxdoeuz> ${[{
    icon: "bi-envelope",
    title: "Correo",
    text: "contacto@tdigestion.com",
    link: "mailto:contacto@tdigestion.com",
    aria: "Env\xEDanos un correo electr\xF3nico"
  }, {
    icon: "bi-telephone",
    title: "Tel\xE9fono",
    text: "+56 9 8726 0572",
    link: "tel:+56987260572",
    aria: "Ll\xE1manos por tel\xE9fono"
  }, {
    icon: "bi-geo-alt",
    title: "Oficina",
    text: `O'Higgins 1186 Of. 1202, Edif. Studio Sur - Concepci\xF3n`,
    link: "https://maps.google.com/?q=O%27Higgins+1186,+Of.+1202,+Concepci\xF3n",
    aria: "Ver ubicaci\xF3n en Google Maps",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    icon: "bi-instagram",
    title: "Instagram",
    text: "@Tdigestioninmobiliaria",
    link: "https://instagram.com/Tdigestioninmobiliaria",
    aria: "Visita nuestro Instagram",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    icon: "bi-facebook",
    title: "Facebook",
    text: "@Tdigestioninmobiliaria",
    link: "https://facebook.com/Tdigestioninmobiliaria",
    aria: "Visita nuestro Facebook",
    target: "_blank",
    rel: "noopener noreferrer"
  }].map((item, idx) => renderTemplate`<a${addAttribute(item.link, "href")} class="contact-card pro-card"${addAttribute(item.aria, "aria-label")}${addAttribute(item.target, "target")}${addAttribute(item.rel, "rel")} data-astro-cid-2mxdoeuz> <div class="pro-card-icon" data-astro-cid-2mxdoeuz><i${addAttribute(item.icon, "class")} aria-hidden="true" data-astro-cid-2mxdoeuz></i></div> <div class="card-info" data-astro-cid-2mxdoeuz> <h3 class="card-title" data-astro-cid-2mxdoeuz>${item.title}</h3> <p class="card-text" data-astro-cid-2mxdoeuz>${item.text}</p> </div> </a>`)} </div> </div> </section>  <section id="contact-form" class="contact-form-section animate" data-astro-cid-2mxdoeuz> <div class="container" data-astro-cid-2mxdoeuz> <div class="form-header" data-astro-cid-2mxdoeuz> <h2 data-astro-cid-2mxdoeuz>Envíanos tus requerimientos</h2> <p class="form-subtitle" data-astro-cid-2mxdoeuz>Completa el formulario y un especialista se contactará contigo en menos de 24 horas.</p> </div> ${renderComponent($$result2, "Contacto", $$Contacto$1, { "data-astro-cid-2mxdoeuz": true })} </div> </section> ` })}  ${renderScript($$result, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/pages/contacto.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
