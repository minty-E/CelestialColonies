/* empty css                           */import { A as AstroError, l as UnknownContentCollectionError, f as createComponent, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, r as renderTemplate, i as renderComponent, u as unescapeHTML, e as createAstro, m as maybeRenderHead, g as addAttribute } from '../astro_b412bef5.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_a9a357b2.mjs';
import { $ as $$Layout, a as $$Container } from './404_8d7197f7.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://astroship.web3templates.com","ASSETS_PREFIX":undefined},{}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/complete-guide-fullstack-development.md": () => import('../complete-guide-fullstack-development_15480253.mjs'),"/src/content/blog/essential-data-structures-algorithms.md": () => import('../essential-data-structures-algorithms_0706d704.mjs'),"/src/content/blog/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master_81b8e4c6.mjs'),"/src/content/blog/kitchensink.mdx": () => import('../kitchensink_d38646f7.mjs'),"/src/content/team/janette-lynch.md": () => import('../janette-lynch_3f26dd26.mjs'),"/src/content/team/marcell-ziemann.md": () => import('../marcell-ziemann_b6897b23.mjs'),"/src/content/team/robert-palmer.md": () => import('../robert-palmer_baf76722.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"complete-guide-fullstack-development":"/src/content/blog/complete-guide-fullstack-development.md","essential-data-structures-algorithms":"/src/content/blog/essential-data-structures-algorithms.md","how-to-become-frontend-master":"/src/content/blog/how-to-become-frontend-master.md","kitchensink":"/src/content/blog/kitchensink.mdx"}},"team":{"type":"content","entries":{"janette-lynch":"/src/content/team/janette-lynch.md","marcell-ziemann":"/src/content/team/marcell-ziemann.md","robert-palmer":"/src/content/team/robert-palmer.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/complete-guide-fullstack-development.md": () => import('../complete-guide-fullstack-development_7778b56a.mjs'),"/src/content/blog/essential-data-structures-algorithms.md": () => import('../essential-data-structures-algorithms_ccbb1244.mjs'),"/src/content/blog/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master_68868931.mjs'),"/src/content/blog/kitchensink.mdx": () => import('../kitchensink_38bdb3c7.mjs'),"/src/content/team/janette-lynch.md": () => import('../janette-lynch_53523947.mjs'),"/src/content/team/marcell-ziemann.md": () => import('../marcell-ziemann_91beb3f5.mjs'),"/src/content/team/robert-palmer.md": () => import('../robert-palmer_571794c4.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro("https://astroship.web3templates.com");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl mt-14"> <span class="text-blue-400 uppercase tracking-wider text-sm font-medium"> ${entry.data.category} </span> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight"> ${entry.data.title} </h1> <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap"> <span class="text-gray-400"> ${entry.data.author} </span> <span class="text-gray-400">•</span> <time class="text-gray-400"${addAttribute(entry.data.publishDate.toISOString(), "datetime")}> ${entry.data.publishDate.toDateString()} </time> <span class="text-gray-400 hidden md:block">•</span> <div class="w-full md:w-auto flex flex-wrap gap-3"> ${entry.data.tags.map((tag) => renderTemplate`<span class="text-sm text-gray-500">#${tag}</span>`)} </div> </div> </div> <div class="mx-auto prose prose-lg mt-6 max-w-3xl"> ${renderComponent($$result3, "Content", Content, {})} </div> <div class="text-center mt-8"> <a href="/blog" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">← Back to Blog</a> </div> ` })} ` })}`;
}, "/Users/edwardchoi/idpWebsiteTemp/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/edwardchoi/idpWebsiteTemp/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_ as _, getCollection as g };
