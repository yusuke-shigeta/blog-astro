const contentModules = new Map([
["src/content/blog/post-1.mdx", () => import('./post-1_DKTH_Tdq.mjs')],
["src/content/blog/post-2.mdx", () => import('./post-2_B-40MJ-Z.mjs')]]);

export { contentModules as default };
