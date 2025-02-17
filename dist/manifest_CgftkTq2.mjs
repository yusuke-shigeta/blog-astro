import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, l as decodeKey } from './chunks/astro/server_CecKvSIS.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/yusuke.shigeta/workspace/blog-astro/","cacheDir":"file:///Users/yusuke.shigeta/workspace/blog-astro/node_modules/.astro/","outDir":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/","srcDir":"file:///Users/yusuke.shigeta/workspace/blog-astro/src/","publicDir":"file:///Users/yusuke.shigeta/workspace/blog-astro/public/","buildClientDir":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/client/","buildServerDir":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/server/","adapterName":"","routes":[{"file":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-1","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-1.md","pathname":"/posts/post-1","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-2","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-2.md","pathname":"/posts/post-2","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-3","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-3\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-3.md","pathname":"/posts/post-3","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-4/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-4","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-4\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-4.md","pathname":"/posts/post-4","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-5/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-5","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-5\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-5","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-5.md","pathname":"/posts/post-5","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/yusuke.shigeta/workspace/blog-astro/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/posts/post-1.md",{"propagation":"none","containsHead":true}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/posts/post-2.md",{"propagation":"none","containsHead":true}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/posts/post-3.md",{"propagation":"none","containsHead":true}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/posts/post-4.md",{"propagation":"none","containsHead":true}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/posts/post-5.md",{"propagation":"none","containsHead":true}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/yusuke.shigeta/workspace/blog-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/posts/post-1@_@md":"pages/posts/post-1.astro.mjs","\u0000@astro-page:src/pages/posts/post-2@_@md":"pages/posts/post-2.astro.mjs","\u0000@astro-page:src/pages/posts/post-3@_@md":"pages/posts/post-3.astro.mjs","\u0000@astro-page:src/pages/posts/post-4@_@md":"pages/posts/post-4.astro.mjs","\u0000@astro-page:src/pages/posts/post-5@_@md":"pages/posts/post-5.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CgftkTq2.mjs","/Users/yusuke.shigeta/workspace/blog-astro/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/yusuke.shigeta/workspace/blog-astro/.astro/content-modules.mjs":"chunks/content-modules_DJhkMzLG.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_8FWb4UcR.mjs","/Users/yusuke.shigeta/workspace/blog-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B7cVYuM6.mjs","/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/post-1.mdx?astroPropagatedAssets":"chunks/post-1_BYA7NlaK.mjs","/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/post-2.mdx?astroPropagatedAssets":"chunks/post-2_Bn_Wduf6.mjs","/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/post-1.mdx":"chunks/post-1_-aLKqfG8.mjs","/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/post-2.mdx":"chunks/post-2_A9utMc0g.mjs","/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.U36sVhwW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});"]],"assets":["/file:///Users/yusuke.shigeta/workspace/blog-astro/dist/about/index.html","/file:///Users/yusuke.shigeta/workspace/blog-astro/dist/blog/index.html","/file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-1/index.html","/file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-2/index.html","/file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-3/index.html","/file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-4/index.html","/file:///Users/yusuke.shigeta/workspace/blog-astro/dist/posts/post-5/index.html","/file:///Users/yusuke.shigeta/workspace/blog-astro/dist/tags/index.html","/file:///Users/yusuke.shigeta/workspace/blog-astro/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"f3rCEoNiL4hJe7SwjJjkNYFLA2/zZphItifCxEwj184="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
