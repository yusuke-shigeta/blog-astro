import { i as createVNode, G as Fragment, _ as __astro_tag_component__ } from './astro/server_CecKvSIS.mjs';
import 'clsx';

const frontmatter = {
  "date": 20250215,
  "title": "AstroのContent Collectionsでブログをつくる",
  "description": "AstroのContent Collectionsはマークダウンを型安全に管理するための機能です。Content Collectionsを用いたブログの構築手順をご紹介します。",
  "thumbnail": "astro_thumb.jpg",
  "tags": ["Astro", "Content Collections"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "heading2",
    "text": "heading2"
  }, {
    "depth": 3,
    "slug": "heading3",
    "text": "heading3"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "heading2",
      children: "heading2"
    }), "\n", createVNode(_components.h3, {
      id: "heading3",
      children: "heading3"
    }), "\n", createVNode(_components.p, {
      children: ["Content Collectionsは", createVNode(_components.code, {
        children: ".md"
      }), "や", createVNode(_components.code, {
        children: ".mdx"
      }), "を型安全に管理するためのAstroの機能です。astro@2.0.0で追加されました。\nでも型そんなちゃんと管理したいか？"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/post-1.mdx";
const file = "/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/post-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/post-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
