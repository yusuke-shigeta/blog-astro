import { n as createVNode, G as Fragment, _ as __astro_tag_component__ } from './astro/server_B4_qSRoV.mjs';
import 'clsx';

const frontmatter = {
  "date": "2025-02-15T00:00:00.000Z",
  "title": "AstroのブログをContent管理にする",
  "description": "AstroのContent Collectionsはマークダウンを型安全に管理するための機能です。Content Collectionsを用いたブログの構築手順をご紹介します。",
  "thumbnail": "astro_thumb.jpg",
  "tags": ["astro", "study", "mdx"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "mdx-を使用できるように設定",
    "text": "mdx を使用できるように設定"
  }, {
    "depth": 2,
    "slug": "コンテンツ管理のためルーティング設定",
    "text": "コンテンツ管理のためルーティング設定"
  }, {
    "depth": 2,
    "slug": "コンテンツ管理にできたので目次作って見る",
    "text": "コンテンツ管理にできたので目次作って見る"
  }, {
    "depth": 2,
    "slug": "memo",
    "text": "memo"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "mdx-を使用できるように設定",
      children: "mdx を使用できるように設定"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://evoworx.dev/blog/hylx27khn/",
        children: "参考記事"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "src/content/config.ts"
        }), "を作成"]
      }), "\n", createVNode(_components.li, {
        children: ["コンテンツを作成\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "src/content/blog/240215.mdx"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["mdx を使用可能にする\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "npx astro add mdx"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["vscode の設定で mdx を使用可能にする\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: ".vscode/settings.json"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "コンテンツ管理のためルーティング設定",
      children: "コンテンツ管理のためルーティング設定"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["コンテンツページを作成\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "src/pages/blog/[...slug].astro"
            }), "を作成\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: "動的ルーティングさせる"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["コンテンツ一覧ページを作成\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "pages/blog/index.astro"
            }), "\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: [createVNode(_components.code, {
                  children: "src/pages/blog.astro"
                }), "とバッティングするため、これ削除"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "コンテンツ管理にできたので目次作って見る",
      children: "コンテンツ管理にできたので目次作って見る"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "render を使用し、Content と同様、記事の heading リストを取得する"
      }), "\n", createVNode(_components.li, {
        children: "目次をうまい具合に出力する"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "memo",
      children: "memo"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["一旦、frontmatter は使用しない。\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "frontmatter layout も使用しない。"
          }), "\n"]
        }), "\n"]
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
