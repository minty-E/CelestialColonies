import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_b412bef5.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.fac1be7b.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.fac1be7b.css"},{"type":"inline","content":".invalid-feedback[data-astro-cid-uwnxe3i2],.empty-feedback[data-astro-cid-uwnxe3i2]{display:none}.was-validated[data-astro-cid-uwnxe3i2] :-moz-placeholder-shown:invalid[data-astro-cid-uwnxe3i2]~.empty-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :placeholder-shown:invalid[data-astro-cid-uwnxe3i2]~.empty-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :not(:-moz-placeholder-shown):invalid[data-astro-cid-uwnxe3i2]~.invalid-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :not(:placeholder-shown):invalid[data-astro-cid-uwnxe3i2]~.invalid-feedback[data-astro-cid-uwnxe3i2]{display:block}.is-invalid[data-astro-cid-uwnxe3i2],.was-validated[data-astro-cid-uwnxe3i2] :invalid[data-astro-cid-uwnxe3i2]{border-color:#dc3545}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.fac1be7b.css"}],"routeData":{"route":"/pricing","type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.fac1be7b.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.fac1be7b.css"}],"routeData":{"route":"/blog/[slug]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.fac1be7b.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.fac1be7b.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astroship.web3templates.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/edwardchoi/idpWebsiteTemp/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/edwardchoi/idpWebsiteTemp/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/Users/edwardchoi/idpWebsiteTemp/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["/Users/edwardchoi/idpWebsiteTemp/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/edwardchoi/idpWebsiteTemp/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/edwardchoi/idpWebsiteTemp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/edwardchoi/idpWebsiteTemp/src/pages/pricing.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/blog.astro":"chunks/pages/blog_d863a06a.mjs","/src/pages/index.astro":"chunks/pages/index_d00eb55d.mjs","/src/pages/pricing.astro":"chunks/pages/pricing_591cd3f2.mjs","\u0000@astrojs-manifest":"manifest_cd5a30a6.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/complete-guide-fullstack-development.md?astroContentCollectionEntry=true":"chunks/complete-guide-fullstack-development_15480253.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/essential-data-structures-algorithms.md?astroContentCollectionEntry=true":"chunks/essential-data-structures-algorithms_0706d704.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/how-to-become-frontend-master.md?astroContentCollectionEntry=true":"chunks/how-to-become-frontend-master_81b8e4c6.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/kitchensink.mdx?astroContentCollectionEntry=true":"chunks/kitchensink_d38646f7.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/team/janette-lynch.md?astroContentCollectionEntry=true":"chunks/janette-lynch_3f26dd26.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/team/marcell-ziemann.md?astroContentCollectionEntry=true":"chunks/marcell-ziemann_b6897b23.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/team/robert-palmer.md?astroContentCollectionEntry=true":"chunks/robert-palmer_baf76722.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/complete-guide-fullstack-development.md?astroPropagatedAssets":"chunks/complete-guide-fullstack-development_7778b56a.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/essential-data-structures-algorithms.md?astroPropagatedAssets":"chunks/essential-data-structures-algorithms_ccbb1244.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/how-to-become-frontend-master.md?astroPropagatedAssets":"chunks/how-to-become-frontend-master_68868931.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/kitchensink.mdx?astroPropagatedAssets":"chunks/kitchensink_38bdb3c7.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/team/janette-lynch.md?astroPropagatedAssets":"chunks/janette-lynch_53523947.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/team/marcell-ziemann.md?astroPropagatedAssets":"chunks/marcell-ziemann_91beb3f5.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/team/robert-palmer.md?astroPropagatedAssets":"chunks/robert-palmer_571794c4.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/complete-guide-fullstack-development.md":"chunks/complete-guide-fullstack-development_5d1c30af.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/essential-data-structures-algorithms.md":"chunks/essential-data-structures-algorithms_6c0fca78.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/how-to-become-frontend-master.md":"chunks/how-to-become-frontend-master_e6c50f00.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/blog/kitchensink.mdx":"chunks/kitchensink_f7808e66.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/team/janette-lynch.md":"chunks/janette-lynch_534ec2b7.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/team/marcell-ziemann.md":"chunks/marcell-ziemann_34e42365.mjs","/Users/edwardchoi/idpWebsiteTemp/src/content/team/robert-palmer.md":"chunks/robert-palmer_6ae2b0c4.mjs","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
