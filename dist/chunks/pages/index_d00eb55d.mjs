/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_b412bef5.mjs';
import { b as $$Link, a as $$Container, $ as $$Layout } from './404_8d7197f7.mjs';
import { $ as $$Icon } from './contact_7dd3aa17.mjs';
import { a as $$Picture } from './about_f290662e.mjs';

const $$Astro$4 = createAstro("https://astroship.web3templates.com");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<div class="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"> <h2 class="text-white text-4xl md:text-6xl tracking-tight">
Build faster websites.
</h2> <p class="text-slate-400 mt-4 text-lg md:text-xl">
Pull content from anywhere and serve it fast with Astro's next-gen island
    architecture.
</p> <div class="flex mt-5"> ${renderComponent($$result, "Link", $$Link, { "href": "#", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Get Started` })} </div> </div>`;
}, "/Users/edwardchoi/idpWebsiteTemp/src/components/cta.astro", void 0);

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Bring Your Own Framework",
      description: "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
      icon: "bx:bxs-briefcase"
    },
    {
      title: "100% Static HTML, No JS",
      description: "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
      icon: "bx:bxs-window-alt"
    },
    {
      title: "On-Demand Components",
      description: "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
      icon: "bx:bxs-data"
    },
    {
      title: "Broad Integration",
      description: "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
      icon: "bx:bxs-bot"
    },
    {
      title: "SEO Enabled",
      description: "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
      icon: "bx:bxs-file-find"
    },
    {
      title: "Community",
      description: "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
      icon: "bx:bxs-user"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0"> <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
Everything you need to start a website
</h2> <p class="text-lg mt-4 text-slate-600">
Astro comes batteries included. It takes the best parts of state-of-the-art
    tools and adds its own innovations.
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"> ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start"> <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="font-semibold text-lg">${item.title}</h3>${" "} <p class="text-slate-500 mt-2 leading-relaxed">${item.description}</p> </div> </div>`)} </div>`;
}, "/Users/edwardchoi/idpWebsiteTemp/src/components/features.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero.6fdd0dc6.png","width":520,"height":424,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24"> <div class="py-6 md:order-1 hidden md:block"> ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Astronaut in the air", "widths": [200, 400, 600], "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif" })} </div> <div> <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
Marketing website done with Astro
</h1> <p class="text-lg mt-4 text-slate-600 max-w-xl">
Astroship is a starter template for startups, marketing websites & landing
      pages.<wbr> Built with Astro.build and TailwindCSS. You can quickly
      create any website with this starter.
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3"> ${renderComponent($$result, "Link", $$Link, { "href": "#", "href": "https://web3templates.com/templates/astroship-starter-website-template-for-astro", "target": "_blank", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-white w-5 h-5", "name": "bx:bxs-cloud-download" })}
Download for Free
` })} ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "https://github.com/surjithctly/astroship", "class": "flex gap-1 items-center justify-center", "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-black w-4 h-4", "name": "bx:bxl-github" })}
GitHub Repo
` })} </div> </div> </main>`;
}, "/Users/edwardchoi/idpWebsiteTemp/src/components/hero.astro", void 0);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logos;
  return renderTemplate`${maybeRenderHead()}<div class="mt-24"> <h2 class="text-center text-slate-500">Works with your technologies</h2> <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:react" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:svelte" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-14", "name": "simple-icons:tailwindcss" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-16", "name": "simple-icons:alpinedotjs" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:vercel" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:astro" })} </div> </div>`;
}, "/Users/edwardchoi/idpWebsiteTemp/src/components/logos.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "Logos", $$Logos, {})} ${renderComponent($$result3, "Cta", $$Cta, {})} ` })} ` })}`;
}, "/Users/edwardchoi/idpWebsiteTemp/src/pages/index.astro", void 0);

const $$file = "/Users/edwardchoi/idpWebsiteTemp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
