import { n as createVNode, G as Fragment, _ as __astro_tag_component__ } from './astro/server_BDs0mMKt.mjs';
import 'clsx';

const frontmatter = {
  "date": "2025-02-15T00:00:00.000Z",
  "title": "mdxってなんぞや",
  "description": "mdとmdxの違いを簡単にリストアップ",
  "thumbnail": "astro_thumb.jpg",
  "tags": ["Astro", "Markdown", "MDX"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "heading2-1",
    "text": "heading2-1"
  }, {
    "depth": 3,
    "slug": "heading3-1",
    "text": "heading3-1"
  }, {
    "depth": 2,
    "slug": "heading2-2",
    "text": "heading2-2"
  }, {
    "depth": 3,
    "slug": "heading3-2",
    "text": "heading3-2"
  }, {
    "depth": 4,
    "slug": "heading4",
    "text": "heading4"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["違い1\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "違い2"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "違い3"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "heading2-1",
      children: "heading2-1"
    }), "\n", createVNode(_components.h3, {
      id: "heading3-1",
      children: "heading3-1"
    }), "\n", createVNode(_components.h2, {
      id: "heading2-2",
      children: "heading2-2"
    }), "\n", createVNode(_components.h3, {
      id: "heading3-2",
      children: "heading3-2"
    }), "\n", createVNode(_components.h4, {
      id: "heading4",
      children: "heading4"
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

const url = "src/content/blog/post-2.mdx";
const file = "/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/post-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/post-2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
