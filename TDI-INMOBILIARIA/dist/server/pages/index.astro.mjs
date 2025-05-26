import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderScript, a as renderComponent } from '../chunks/astro/server_CJ_da7cA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_tSllLkrF.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Contacto } from '../chunks/Contacto_Co0O9KfX.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CpB5BLPx.mjs';
export { renderers } from '../renderers.mjs';

const banner2 = new Proxy({"src":"/_astro/banner2.BIL-4LFp.jpg","width":4928,"height":3280,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/banner2.jpg";
							}
							
							return target[name];
						}
					});

const banner3 = new Proxy({"src":"/_astro/banner3.BEqNtHeN.jpg","width":1041,"height":652,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/banner3.jpg";
							}
							
							return target[name];
						}
					});

const banner4 = new Proxy({"src":"/_astro/banner4.D2jNaAky.jpg","width":1041,"height":652,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/banner4.jpg";
							}
							
							return target[name];
						}
					});

const $$HomeBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="banner" data-astro-cid-gcuavmae> <!-- Slide 1: Servicios --> <div class="banner-content active" data-astro-cid-gcuavmae> <img${addAttribute(banner3.src, "src")} alt="Servicios Inmobiliarios" data-astro-cid-gcuavmae> <div class="overlay" data-astro-cid-gcuavmae></div> <h1 class="banner-title" data-astro-cid-gcuavmae>Soluciones Inmobiliarias Integrales</h1> <p class="banner-description" data-astro-cid-gcuavmae>
Corretaje · Administración · Arquitectura · Servicios Legales · Obras Civiles
</p> <a style="text-decoration: none;" class="banner-button" href="servicios" data-astro-cid-gcuavmae>Ver servicios</a> </div> <!-- Slide 2: Arquitectura y Obras --> <div class="banner-content" data-astro-cid-gcuavmae> <img${addAttribute(banner4.src, "src")} alt="Arquitectura y Construcción" data-astro-cid-gcuavmae> <div class="overlay" data-astro-cid-gcuavmae></div> <h1 class="banner-title" data-astro-cid-gcuavmae>Arquitectura y Construcción</h1> <p class="banner-description" data-astro-cid-gcuavmae>
Diseño arquitectónico y ejecución de obras civiles con los más altos estándares
</p> <a style="text-decoration: none;" class="banner-button" href="servicios/arquitectura" data-astro-cid-gcuavmae>Conoce más</a> </div> <!-- Slide 3: Asesoría --> <div class="banner-content" data-astro-cid-gcuavmae> <img${addAttribute(banner2.src, "src")} alt="Asesoría Integral" data-astro-cid-gcuavmae> <div class="overlay" data-astro-cid-gcuavmae></div> <h1 class="banner-title" data-astro-cid-gcuavmae>Asesoría Integral</h1> <p class="banner-description" data-astro-cid-gcuavmae>
Corretaje inmobiliario y servicios legales especializados
</p> <a class="banner-button" style="text-decoration: none;" href="contacto" data-astro-cid-gcuavmae>Contáctanos</a> </div> <button class="banner-arrow left" aria-label="Anterior slide" data-astro-cid-gcuavmae><i class="fas fa-chevron-left" data-astro-cid-gcuavmae></i></button> <button class="banner-arrow right" aria-label="Siguiente slide" data-astro-cid-gcuavmae><i class="fas fa-chevron-right" data-astro-cid-gcuavmae></i></button> <div class="banner-nav" data-astro-cid-gcuavmae></div> </div>  ${renderScript($$result, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/HomeBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/HomeBanner.astro", void 0);

const $$ServiciosHome = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Corretaje y Administraci\xF3n",
      description: "Gesti\xF3n integral de compra, venta y arriendo de propiedades, adem\xE1s de administraci\xF3n profesional de inmuebles.",
      image: "https://res.cloudinary.com/dscyapo0j/image/upload/v1747104368/corretaje_xz3tsy.png",
      url: "/servicios-corretaje"
    },
    {
      title: "Arquitectura",
      description: "Dise\xF1o arquitect\xF3nico, remodelaciones y proyectos personalizados para tu propiedad.",
      image: "https://res.cloudinary.com/dscyapo0j/image/upload/v1747104367/arquitectura_h5e6ym.webp",
      url: "/servicios-arquitectura"
    },
    {
      title: "Servicios Legales",
      description: "Asesor\xEDa legal especializada en bienes ra\xEDces, contratos y regularizaci\xF3n de propiedades.",
      image: "https://res.cloudinary.com/dscyapo0j/image/upload/v1747104366/servicios-legales_boogab.jpg",
      url: "/servicios-legales"
    },
    {
      title: "Obras Civiles",
      description: "Construcci\xF3n, ampliaciones y mejoras de infraestructura con altos est\xE1ndares de calidad.",
      image: "https://res.cloudinary.com/dscyapo0j/image/upload/v1747104365/obrasciviles_tovxvp.jpg",
      url: "/servicios-obras-civiles"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="services-section py-5" data-astro-cid-ufbrykfy> <div class="container" data-astro-cid-ufbrykfy> <h2 class="text-center fw-bold custom-title-color mb-2 fade-in-up" data-astro-cid-ufbrykfy>Servicios por Categoría</h2> <div class="title-underline custom-underline-color fade-in-up mb-5" data-astro-cid-ufbrykfy></div> <div class="row g-4 justify-content-center" data-astro-cid-ufbrykfy> ${services.map((service, index) => renderTemplate`<div class="col-12 col-md-6" data-astro-cid-ufbrykfy> <div class="service-card position-relative overflow-hidden rounded fade-in-up"${addAttribute(index * 200, "data-delay")} data-astro-cid-ufbrykfy> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")}${addAttribute(600, "width")}${addAttribute(350, "height")} class="img-fluid w-100 h-100 object-fit-cover" loading="lazy" data-astro-cid-ufbrykfy> <div class="service-overlay d-flex flex-column justify-content-center align-items-center text-center p-3" data-astro-cid-ufbrykfy> <div class="service-title-container" data-astro-cid-ufbrykfy> <h3 class="fw-bold text-white mb-1 service-title-large" data-astro-cid-ufbrykfy>${service.title}</h3> </div> <div class="service-desc-container" data-astro-cid-ufbrykfy> <p class="service-description mt-2" data-astro-cid-ufbrykfy>${service.description}</p> </div> <a class="service-btn mt-3"${addAttribute(service.url, "href")} data-astro-cid-ufbrykfy>Ver más</a> </div> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/ServiciosHome.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/ServiciosHome.astro", void 0);

const diagnostico = new Proxy({"src":"/_astro/diagnostico.DfJLIAQ3.jpg","width":900,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/diagnostico.jpg";
							}
							
							return target[name];
						}
					});

const estrategia = new Proxy({"src":"/_astro/estrategia.DZUewrvC.jpg","width":800,"height":379,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/estrategia.jpg";
							}
							
							return target[name];
						}
					});

const ejecucion = new Proxy({"src":"/_astro/ejecucion.BUfr8S_j.jpg","width":900,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/ejecucion.jpg";
							}
							
							return target[name];
						}
					});

const seguimiento = new Proxy({"src":"/_astro/seguimiento.DovfTytR.jpg","width":300,"height":186,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/seguimiento.jpg";
							}
							
							return target[name];
						}
					});

const $$ComoTrabajamos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="process-section py-5" data-astro-cid-rfis2ebk> <div class="container" data-astro-cid-rfis2ebk> <h2 class="text-center fw-bold custom-title-color mb-2 fade-in-up" data-astro-cid-rfis2ebk>Nuestro Proceso</h2> <div class="title-underline custom-underline-color fade-in-up mb-5" data-astro-cid-rfis2ebk></div> <div class="row g-4 justify-content-center" data-astro-cid-rfis2ebk> <div class="col-md-6 col-lg-3" data-astro-cid-rfis2ebk> <div class="process-card position-relative overflow-hidden rounded fade-in-up" data-delay="0"${addAttribute(`background-image: url('${diagnostico.src}'); background-size: cover; background-position: center;`, "style")} data-astro-cid-rfis2ebk> <div class="process-overlay d-flex flex-column justify-content-center align-items-center text-center p-3" data-astro-cid-rfis2ebk> <div class="process-icon-container mb-3" data-astro-cid-rfis2ebk> <div class="process-icon" data-astro-cid-rfis2ebk> <i class="bi bi-chat-dots" data-astro-cid-rfis2ebk></i> </div> </div> <div class="process-title-container" data-astro-cid-rfis2ebk> <h3 class="fw-bold text-white mb-2 process-title" data-astro-cid-rfis2ebk>1. Diagnóstico</h3> </div> <div class="process-desc-container" data-astro-cid-rfis2ebk> <p class="process-description" data-astro-cid-rfis2ebk>Entendemos tus necesidades y objetivos a través de una conversación profunda y personalizada.</p> </div> </div> </div> </div> <div class="col-md-6 col-lg-3" data-astro-cid-rfis2ebk> <div class="process-card position-relative overflow-hidden rounded fade-in-up" data-delay="200"${addAttribute(`background-image: url('${estrategia.src}'); background-size: cover; background-position: center;`, "style")} data-astro-cid-rfis2ebk> <div class="process-overlay d-flex flex-column justify-content-center align-items-center text-center p-3" data-astro-cid-rfis2ebk> <div class="process-icon-container mb-3" data-astro-cid-rfis2ebk> <div class="process-icon" data-astro-cid-rfis2ebk> <i class="bi bi-lightbulb" data-astro-cid-rfis2ebk></i> </div> </div> <div class="process-title-container" data-astro-cid-rfis2ebk> <h3 class="fw-bold text-white mb-2 process-title" data-astro-cid-rfis2ebk>2. Estrategia</h3> </div> <div class="process-desc-container" data-astro-cid-rfis2ebk> <p class="process-description" data-astro-cid-rfis2ebk>Desarrollamos un plan de acción adaptado a tus necesidades específicas y objetivos.</p> </div> </div> </div> </div> <div class="col-md-6 col-lg-3" data-astro-cid-rfis2ebk> <div class="process-card position-relative overflow-hidden rounded fade-in-up" data-delay="400"${addAttribute(`background-image: url('${ejecucion.src}'); background-size: cover; background-position: center;`, "style")} data-astro-cid-rfis2ebk> <div class="process-overlay d-flex flex-column justify-content-center align-items-center text-center p-3" data-astro-cid-rfis2ebk> <div class="process-icon-container mb-3" data-astro-cid-rfis2ebk> <div class="process-icon" data-astro-cid-rfis2ebk> <i class="bi bi-gear" data-astro-cid-rfis2ebk></i> </div> </div> <div class="process-title-container" data-astro-cid-rfis2ebk> <h3 class="fw-bold text-white mb-2 process-title" data-astro-cid-rfis2ebk>3. Ejecución</h3> </div> <div class="process-desc-container" data-astro-cid-rfis2ebk> <p class="process-description" data-astro-cid-rfis2ebk>Implementamos la solución con un equipo especializado y tecnología de vanguardia.</p> </div> </div> </div> </div> <div class="col-md-6 col-lg-3" data-astro-cid-rfis2ebk> <div class="process-card position-relative overflow-hidden rounded fade-in-up" data-delay="600"${addAttribute(`background-image: url('${seguimiento.src}'); background-size: cover; background-position: center;`, "style")} data-astro-cid-rfis2ebk> <div class="process-overlay d-flex flex-column justify-content-center align-items-center text-center p-3" data-astro-cid-rfis2ebk> <div class="process-icon-container mb-3" data-astro-cid-rfis2ebk> <div class="process-icon" data-astro-cid-rfis2ebk> <i class="bi bi-check-circle" data-astro-cid-rfis2ebk></i> </div> </div> <div class="process-title-container" data-astro-cid-rfis2ebk> <h3 class="fw-bold text-white mb-2 process-title" data-astro-cid-rfis2ebk>4. Seguimiento</h3> </div> <div class="process-desc-container" data-astro-cid-rfis2ebk> <p class="process-description" data-astro-cid-rfis2ebk>Acompañamiento continuo y ajustes necesarios para garantizar el éxito del proyecto.</p> </div> </div> </div> </div> </div> <div class="row mt-5" data-astro-cid-rfis2ebk> <div class="col-lg-8 mx-auto text-center fade-in-up" data-astro-cid-rfis2ebk> <div class="process-cta" data-astro-cid-rfis2ebk> <h3 class="h4 mb-4" data-astro-cid-rfis2ebk>¿Listo para comenzar tu proyecto?</h3> <p class="mb-4" data-astro-cid-rfis2ebk>Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.</p> <a href="/contacto" class="process-btn" data-astro-cid-rfis2ebk>Agendar Consulta</a> </div> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/ComoTrabajamos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/ComoTrabajamos.astro", void 0);

const $$PorqueElegirnos = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      icon: "bi bi-building-check",
      title: "Experiencia Comprobada",
      description: "M\xE1s de 10 a\xF1os en el mercado inmobiliario, con un historial de proyectos exitosos y clientes satisfechos."
    },
    {
      icon: "bi bi-shield-check",
      title: "Garant\xEDa de Calidad",
      description: "Trabajamos con los m\xE1s altos est\xE1ndares de calidad y cumplimos con todas las normativas vigentes."
    },
    {
      icon: "bi bi-people-fill",
      title: "Equipo Multidisciplinario",
      description: "Contamos con profesionales especializados en arquitectura, derecho, ingenier\xEDa y corretaje inmobiliario."
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "Inversi\xF3n Segura",
      description: "Asesoramiento experto para maximizar el valor de tu inversi\xF3n inmobiliaria."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="why-choose-us py-5" data-astro-cid-clblqeb3> <div class="container" data-astro-cid-clblqeb3> <h2 class="text-center fw-bold custom-title-color mb-2 fade-in-up" data-astro-cid-clblqeb3>¿Por qué elegirnos?</h2> <div class="title-underline custom-underline-color fade-in-up mb-5" data-astro-cid-clblqeb3></div> <div class="row g-4" data-astro-cid-clblqeb3> ${features.map((feature, index) => renderTemplate`<div class="col-md-6 col-lg-3" data-astro-cid-clblqeb3> <div class="feature-card h-100 fade-in-up"${addAttribute(index * 200, "data-delay")} data-astro-cid-clblqeb3> <div class="icon-container" data-astro-cid-clblqeb3> <div class="icon-wrapper" data-astro-cid-clblqeb3> <i${addAttribute(`${feature.icon}`, "class")} data-astro-cid-clblqeb3></i> </div> </div> <div class="title-container" data-astro-cid-clblqeb3> <h3 class="h4 text-center mb-3" data-astro-cid-clblqeb3>${feature.title}</h3> </div> <div class="desc-container" data-astro-cid-clblqeb3> <p class="text-center mb-0" data-astro-cid-clblqeb3>${feature.description}</p> </div> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/PorqueElegirnos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/PorqueElegirnos.astro", void 0);

const corretaje = new Proxy({"src":"/_astro/corretaje.Dn9XFwLX.jpeg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/corretaje.jpeg";
							}
							
							return target[name];
						}
					});

const arquitectura = new Proxy({"src":"/_astro/arquitectura.DyeXDaDG.jpg","width":1024,"height":577,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/arquitectura.jpg";
							}
							
							return target[name];
						}
					});

const seguridadlegal = new Proxy({"src":"/_astro/seguridadlegal.C2i4yBEF.jpg","width":696,"height":580,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/seguridadlegal.jpg";
							}
							
							return target[name];
						}
					});

const obras = new Proxy({"src":"/_astro/obrasciviles.BYJ5DQrg.jpg","width":1024,"height":683,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/obrasciviles.jpg";
							}
							
							return target[name];
						}
					});

const compra = new Proxy({"src":"/_astro/compra.D5mcCKay.jpg","width":900,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/compra.jpg";
							}
							
							return target[name];
						}
					});

const venta = new Proxy({"src":"/_astro/venta.D9LYkEW6.webp","width":1254,"height":836,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/assets/img/venta.webp";
							}
							
							return target[name];
						}
					});

const $$Galeria = createComponent(($$result, $$props, $$slots) => {
  const galleryItems = [
    {
      image: corretaje,
      title: "Corretaje y Administraci\xF3n",
      story: "La tranquilidad de dejar tu propiedad en manos expertas. Gestionamos cada detalle para que solo te preocupes de disfrutar tu nuevo hogar o inversi\xF3n."
    },
    {
      image: arquitectura,
      title: "Arquitectura que Transforma",
      story: "Un dise\xF1o pensado para ti puede cambiarlo todo. Remodelamos y creamos espacios que reflejan tu estilo de vida y tus sue\xF1os."
    },
    {
      image: seguridadlegal,
      title: "Seguridad Legal",
      story: "Cada firma, cada contrato, cada paso: te acompa\xF1amos con respaldo legal para que tu experiencia inmobiliaria sea segura y transparente."
    },
    {
      image: obras,
      title: "Obras Civiles de Confianza",
      story: "Construimos y mejoramos espacios con altos est\xE1ndares de calidad, para que tu inversi\xF3n sea duradera y tu familia est\xE9 protegida."
    },
    {
      image: compra,
      title: "Compra de Propiedades",
      story: "Encuentra la propiedad ideal para ti. Te acompa\xF1amos en todo el proceso de compra, con asesor\xEDa experta y personalizada."
    },
    {
      image: venta,
      title: "Venta de Propiedades",
      story: "Vende tu propiedad de forma segura y eficiente. Nos encargamos de la gesti\xF3n, promoci\xF3n y cierre exitoso."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="gallery-section py-5" data-astro-cid-zz5di7e4> <div class="container" data-astro-cid-zz5di7e4> <h2 class="text-center fw-bold custom-title-color mb-2 fade-in-up" data-astro-cid-zz5di7e4>Tu Propiedad, Tu Historia</h2> <div class="title-underline custom-underline-color fade-in-up mb-5" data-astro-cid-zz5di7e4></div> <p class="text-center text-muted mb-5 fade-in-up" data-astro-cid-zz5di7e4>Inspírate con imágenes que celebran la arquitectura, el diseño, la construcción y la gestión inmobiliaria. Descubre cómo nuestros servicios pueden transformar espacios, crear valor y aportar bienestar a las personas y comunidades.</p> <div class="row g-4" data-astro-cid-zz5di7e4> ${galleryItems.map((item, idx) => renderTemplate`<div class="col-12 col-md-6 col-lg-4" data-astro-cid-zz5di7e4> <div class="gallery-card fade-in-up"${addAttribute(idx * 150, "data-delay")} data-astro-cid-zz5di7e4> <div class="gallery-img-wrapper" data-astro-cid-zz5di7e4> ${typeof item.image === "string" ? renderTemplate`<img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="img-fluid w-100 h-100 object-fit-cover" loading="lazy" data-astro-cid-zz5di7e4>` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": item.image, "alt": item.title, "class": "img-fluid w-100 h-100 object-fit-cover", "loading": "lazy", "data-astro-cid-zz5di7e4": true })}`} </div> <div class="gallery-content p-3" data-astro-cid-zz5di7e4> <h3 class="gallery-title mb-2" data-astro-cid-zz5di7e4>${item.title}</h3> <p class="gallery-story mb-0" data-astro-cid-zz5di7e4>${item.story}</p> </div> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/Galeria.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/components/Galeria.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Inicio | TDI Gesti\xF3n Inmobiliaria";
  const description = "Conecta Internacional es una empresa emergente en comercio exterior que ofrece soluciones integrales en log\xEDstica, importaciones y exportaciones para impulsar el crecimiento de tu negocio global.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeBanner", $$HomeBanner, {})} ${renderComponent($$result2, "PorqueElegirnos", $$PorqueElegirnos, {})} ${renderComponent($$result2, "ServiciosHome", $$ServiciosHome, {})} ${renderComponent($$result2, "ComoTrabajamos", $$ComoTrabajamos, {})} ${renderComponent($$result2, "Galeria", $$Galeria, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} ` })}`;
}, "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/pages/index.astro", void 0);

const $$file = "C:/Users/alexis/Desktop/TDI Gestion Inmobiliaria/TDI-INMOBILIARIA/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
