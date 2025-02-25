import { n as createVNode, G as Fragment, _ as __astro_tag_component__ } from './astro/server_B4_qSRoV.mjs';
import 'clsx';

const frontmatter = {
  "date": "2025-02-24T00:00:00.000Z",
  "update": "2025-02-24T00:00:00.000Z",
  "title": "blogのdesign",
  "description": "astroブログのデザインを決める",
  "thumbnail": "astro_thumb.jpg",
  "tags": ["astro", "design", "ブログ"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "まずはキータと同じデザインにする",
    "text": "まずはキータと同じデザインにする"
  }, {
    "depth": 2,
    "slug": "欲しい要素",
    "text": "欲しい要素"
  }, {
    "depth": 2,
    "slug": "参考デザイン",
    "text": "参考デザイン"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "まずはキータと同じデザインにする",
      children: "まずはキータと同じデザインにする"
    }), "\n", createVNode(_components.h2, {
      id: "欲しい要素",
      children: "欲しい要素"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "検索機能"
      }), "\n", createVNode(_components.li, {
        children: "関連記事"
      }), "\n", createVNode(_components.li, {
        children: "よく読まれている記事"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "参考デザイン",
      children: "参考デザイン"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "",
          children: "ヘッダー 1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "",
          children: "フッター 1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "",
          children: "TOC1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "",
          children: "タイトル 1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "",
          children: "ナビゲーション 1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "",
          children: "テキスト 1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "",
          children: "リンク 1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "",
          children: "リスト 1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "",
          children: "tag 1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://qiita.com",
          children: "ブログ記事一覧 1"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://qiita.com",
          children: "検索機能"
        })
      }), "\n"]
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

const url = "src/content/blog/blog-design.mdx";
const file = "/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/blog-design.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/blog-design.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
