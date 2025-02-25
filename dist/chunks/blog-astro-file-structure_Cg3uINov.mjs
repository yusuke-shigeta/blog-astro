import { n as createVNode, G as Fragment, _ as __astro_tag_component__ } from './astro/server_B4_qSRoV.mjs';
import 'clsx';

const frontmatter = {
  "date": "2025-02-20T00:00:00.000Z",
  "update": "2025-02-24T00:00:00.000Z",
  "title": "blog-astroのファイルとディレクトリの構造",
  "description": "このリポジトリのファイル構造",
  "thumbnail": "astro_thumb.jpg",
  "tags": ["astro"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "filemd-について",
    "text": "FILE.md について"
  }, {
    "depth": 2,
    "slug": "ファイル構造",
    "text": "ファイル構造"
  }, {
    "depth": 2,
    "slug": "ディレクトリ",
    "text": "ディレクトリ"
  }, {
    "depth": 3,
    "slug": "assets",
    "text": "assets"
  }, {
    "depth": 3,
    "slug": "components",
    "text": "components"
  }, {
    "depth": 3,
    "slug": "content",
    "text": "content"
  }, {
    "depth": 3,
    "slug": "contentblog",
    "text": "content/blog"
  }, {
    "depth": 3,
    "slug": "layouts",
    "text": "layouts"
  }, {
    "depth": 3,
    "slug": "pages",
    "text": "pages"
  }, {
    "depth": 3,
    "slug": "pagesblog",
    "text": "pages/blog"
  }, {
    "depth": 3,
    "slug": "pagesblogtags",
    "text": "pages/blog/tags"
  }, {
    "depth": 3,
    "slug": "script",
    "text": "script"
  }, {
    "depth": 4,
    "slug": "components-1",
    "text": "components"
  }, {
    "depth": 3,
    "slug": "styles",
    "text": "styles"
  }, {
    "depth": 2,
    "slug": "ファイル",
    "text": "ファイル"
  }, {
    "depth": 3,
    "slug": "srccomponentsbloglistastro",
    "text": "src/components/BlogList.astro"
  }, {
    "depth": 3,
    "slug": "srccomponentsfooterastro",
    "text": "src/components/Footer.astro"
  }, {
    "depth": 3,
    "slug": "srccomponentsheaderastro",
    "text": "src/components/Header.astro"
  }, {
    "depth": 3,
    "slug": "srccomponentsnavlistastro",
    "text": "src/components/NavList.astro"
  }, {
    "depth": 3,
    "slug": "srccomponentstaglistastro",
    "text": "src/components/TagList.astro"
  }, {
    "depth": 3,
    "slug": "srccomponentstocastro",
    "text": "src/components/Toc.astro"
  }, {
    "depth": 3,
    "slug": "srclayoutsbaselayoutastro",
    "text": "src/layouts/BaseLayout.astro"
  }, {
    "depth": 3,
    "slug": "srclayoutsbloglayoutastro",
    "text": "src/layouts/BlogLayout.astro"
  }, {
    "depth": 3,
    "slug": "srclayoutspagelayoutastro",
    "text": "src/layouts/PageLayout.astro"
  }, {
    "depth": 3,
    "slug": "srcpagesaboutastro",
    "text": "src/pages/about.astro"
  }, {
    "depth": 3,
    "slug": "srcpagesindexastro",
    "text": "src/pages/index.astro"
  }, {
    "depth": 3,
    "slug": "srcpagesblogslugastro",
    "text": "src/pages/blog/[slug].astro"
  }, {
    "depth": 3,
    "slug": "srcpagesblogindexastro",
    "text": "src/pages/blog/index.astro"
  }, {
    "depth": 3,
    "slug": "srcpagesblogtagtagastro",
    "text": "src/pages/blog/tag/[tag].astro"
  }, {
    "depth": 3,
    "slug": "srcpagesblogtagindexastro",
    "text": "src/pages/blog/tag/index.astro"
  }, {
    "depth": 3,
    "slug": "srcscriptcomponentsadjustmainmarginjs",
    "text": "src/script/components/adjustMainMargin.js"
  }, {
    "depth": 3,
    "slug": "srcscriptblogjs",
    "text": "src/script/blog.js"
  }, {
    "depth": 3,
    "slug": "srcscriptglobaljs",
    "text": "src/script/global.js"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "filemd-について",
      children: "FILE.md について"
    }), "\n", createVNode(_components.p, {
      children: "各ディレクトリ, ファイルの説明"
    }), "\n", createVNode(_components.p, {
      children: "content の説明は除く"
    }), "\n", createVNode(_components.h2, {
      id: "ファイル構造",
      children: "ファイル構造"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- assets"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- components"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - BlogList.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - Footer.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - Header.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - NavList.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - Social.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - TagList.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - Toc.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- content"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - blog"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - [ブログ記事].mdx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - config.ts"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- layouts"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - BaseLayout.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - BlogLayout.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - PageLayout.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- pages"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - blog"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - tags"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - [tags].astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - index.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - [slug].astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - index.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - about.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - index.astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- script"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - components"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - adjustMainMargin.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - blog.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - global.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- styles"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - global.css"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "ディレクトリ",
      children: "ディレクトリ"
    }), "\n", createVNode(_components.h3, {
      id: "assets",
      children: "assets"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "画像ファイルなどはここに保存。多分"
      }), "\n", createVNode(_components.li, {
        children: "今のところ未使用"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "components",
      children: "components"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "コンポーネント"
      }), "\n", createVNode(_components.li, {
        children: "共通パーツ"
      }), "\n", createVNode(_components.li, {
        children: "エレメント"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "content",
      children: "content"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ページ管理ではなくコンテンツ管理"
      }), "\n", createVNode(_components.li, {
        children: "content collection"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "contentblog",
      children: "content/blog"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ブログの投稿はここで作成"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "layouts",
      children: "layouts"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "共通レイアウト"
      }), "\n", createVNode(_components.li, {
        children: "二つ以上同じレイアウトのページを作成する場合"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "pages",
      children: "pages"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ページ追加用"
      }), "\n", createVNode(_components.li, {
        children: "コンテンツ管理の場合ルーティングさせてあげる"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "pagesblog",
      children: "pages/blog"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "blog コンテンツを管理"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "pagesblogtags",
      children: "pages/blog/tags"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "blog のタグを管理"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "script",
      children: "script"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["共通 script\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "script はコンポーネントに書かないの？"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "components-1",
      children: "components"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "script の共通コンポーネント"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "styles",
      children: "styles"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "共通 style"
      }), "\n", createVNode(_components.li, {
        children: "共通 style より、コンポーネントの style の方が上書きされる？"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "ファイル",
      children: "ファイル"
    }), "\n", createVNode(_components.h3, {
      id: "srccomponentsbloglistastro",
      children: "src/components/BlogList.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["このコンポーネントを使用しているファイル:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/pages/blog/index.astro"
          }), "\n", createVNode(_components.li, {
            children: "src/pages/blog/tag/[tag].astro"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "blog コンテンツをループ処理"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srccomponentsfooterastro",
      children: "src/components/Footer.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["このコンポーネントを使用しているファイル:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/layouts/BaseLayout.astro"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "共通フッター"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srccomponentsheaderastro",
      children: "src/components/Header.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["このコンポーネントを使用しているファイル:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/layouts/BaseLayout.astro"
          }), "\n", createVNode(_components.li, {
            children: "src/layouts/PageLayout.astro"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "共通ヘッダー"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srccomponentsnavlistastro",
      children: "src/components/NavList.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["このコンポーネントを使用しているファイル:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/components/Header.astro"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "各ページへの導線"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srccomponentstaglistastro",
      children: "src/components/TagList.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["このコンポーネントを使用しているファイル:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/layouts/blogLayout.astro"
          }), "\n", createVNode(_components.li, {
            children: "src/pages/blog/tag/index.astro"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "blog コンテンツのタグをループ処理"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srccomponentstocastro",
      children: "src/components/Toc.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["このコンポーネントを使用しているファイル:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/layouts/BlogLayout.astro"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["blog コンテンツの 目次\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "表示する深さは h5 まで"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srclayoutsbaselayoutastro",
      children: "src/layouts/BaseLayout.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["このレイアウトを使用しているファイル:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/layouts/BlogLayout.astro"
          }), "\n", createVNode(_components.li, {
            children: "src/layouts/PageLayout.astro"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srclayoutsbloglayoutastro",
      children: "src/layouts/BlogLayout.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["このレイアウトを使用しているファイル:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/pages/blog/[slug].astro"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "このファイル要らないか？"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srclayoutspagelayoutastro",
      children: "src/layouts/PageLayout.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["このレイアウトを使用しているファイル:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/pages/about.astro"
          }), "\n", createVNode(_components.li, {
            children: "src/pages/index.astro"
          }), "\n", createVNode(_components.li, {
            children: "src/pages/blog/index.astro"
          }), "\n", createVNode(_components.li, {
            children: "src/pages/blog/tag/[tag].astro"
          }), "\n", createVNode(_components.li, {
            children: "src/pages/blog/tag/index.astro"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "とりあえずページの Layout"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srcpagesaboutastro",
      children: "src/pages/about.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "URL: /about/"
      }), "\n", createVNode(_components.li, {
        children: "プロフィール"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srcpagesindexastro",
      children: "src/pages/index.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "URL: /"
      }), "\n", createVNode(_components.li, {
        children: "トップページ"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srcpagesblogslugastro",
      children: "src/pages/blog/[slug].astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "URL: /blog/[slug]"
      }), "\n", createVNode(_components.li, {
        children: "ブログ記事ページ"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srcpagesblogindexastro",
      children: "src/pages/blog/index.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "URL: /blog/"
      }), "\n", createVNode(_components.li, {
        children: "ブログ記事一覧ページ"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srcpagesblogtagtagastro",
      children: "src/pages/blog/tag/[tag].astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "URL: /blog/tag/[tag]"
      }), "\n", createVNode(_components.li, {
        children: "ブログタグに関連する記事一覧ページ"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srcpagesblogtagindexastro",
      children: "src/pages/blog/tag/index.astro"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "URL: /blog/tag/"
      }), "\n", createVNode(_components.li, {
        children: "ブログタグ一覧ページ"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srcscriptcomponentsadjustmainmarginjs",
      children: "src/script/components/adjustMainMargin.js"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["使用している js\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "src/script/global.js"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "なんとなくコンポーネント化"
      }), "\n", createVNode(_components.li, {
        children: "main の上部の余白を調整"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srcscriptblogjs",
      children: "src/script/blog.js"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "blog ページの共通 js"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "srcscriptglobaljs",
      children: "src/script/global.js"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ページ全体で読み込む js"
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

const url = "src/content/blog/blog-astro-file-structure.mdx";
const file = "/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/blog-astro-file-structure.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yusuke.shigeta/workspace/blog-astro/src/content/blog/blog-astro-file-structure.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
