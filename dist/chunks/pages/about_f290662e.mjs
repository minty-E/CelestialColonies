/* empty css                           */import { e as createAstro, f as createComponent, A as AstroError, q as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, h as renderSlot, i as renderComponent, F as Fragment } from '../astro_b412bef5.mjs';
import { g as getCollection } from './_slug__559654b7.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_a9a357b2.mjs';
import { a as $$Container, $ as $$Layout } from './404_8d7197f7.mjs';

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/edwardchoi/idpWebsiteTemp/node_modules/.pnpm/astro@3.5.5/node_modules/astro/components/Image.astro", void 0);

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/edwardchoi/idpWebsiteTemp/node_modules/.pnpm/astro@3.5.5/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/edwardchoi/idpWebsiteTemp/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)} </h1> <p class="text-lg mt-4 text-slate-600"> ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)} </p> </div>`;
}, "/Users/edwardchoi/idpWebsiteTemp/src/components/sectionhead.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const publishedTeamMembers = await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a small passionate team.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About` })}` })} ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"> <h2 class="font-bold text-3xl text-gray-800">
Empowering the world with Astro.
</h2> <p class="text-lg leading-relaxed text-slate-500">
We're a multi-cultural team from around the world! We come from diverse
        backgrounds, bringing different personalities, experiences and skills to
        the job. This is what makes our team so special.
</p> </div> <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12"> ${publishedTeamMembers.map((teamMemberEntry) => renderTemplate`<div class="group"> <div class="w-full aspect-square"> ${renderComponent($$result3, "Picture", $$Picture, { "src": teamMemberEntry.data.avatar.src, "alt": teamMemberEntry.data.avatar.alt, "sizes": "(max-width: 800px) 100vw, 400px", "width": 400, "height": 400, "class": "w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square" })} </div> <div class="mt-4 text-center"> <h2 class="text-lg text-gray-800">${teamMemberEntry.data.name}</h2> <h3 class="text-sm text-slate-500"> ${teamMemberEntry.data.title} </h3> </div> </div>`)} </div> ` })} ` })}`;
}, "/Users/edwardchoi/idpWebsiteTemp/src/pages/about.astro", void 0);

const $$file = "/Users/edwardchoi/idpWebsiteTemp/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sectionhead as $, $$Picture as a, $$Image as b, about as c };
