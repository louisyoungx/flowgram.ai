"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["486985"],{121315:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(110239),s=t(444827);function i(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",div:"div"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"front-matter-config",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter-config",children:"#"}),"Front Matter Config"]}),"\n",(0,a.jsxs)(n.h2,{id:"title",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"}),"title"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The title of the page. By default, the page's h1 heading will be used as the title of the HTML document. But if you want to use a different title, you can use Front Matter to specify the title of the page. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\ntitle: My Home Page\n---\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"description",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"}),"description"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"A custom description for the page. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\ndescription: This is my custom description for this page.\n---\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"pagetype",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pagetype",children:"#"}),"pageType"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"'home' | 'doc' | 'custom' | 'blank' | '404'"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"'doc'"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The type of the page. By default, the page type is ",(0,a.jsx)(n.code,{children:"doc"}),". But if you want to use a different page type, you can use the Front Matter field ",(0,a.jsx)(n.code,{children:"pageType"})," to specify the page type. E.g:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\npageType: home\n---\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The meaning of each ",(0,a.jsx)(n.code,{children:"pageType"})," config is as follows:"]}),"\n",(0,a.jsxs)(n.h2,{id:"titlesuffix",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#titlesuffix",children:"#"}),"titleSuffix"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Set the suffix of the page title. When ",(0,a.jsx)(n.code,{children:"titleSuffix"})," is not set, the site's ",(0,a.jsx)(n.a,{href:"/api/config/config-basic.html#title",children:"title"})," is used as the suffix by default."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\ntitleSuffix: 'Rspack-based Static Site Generator'\n---\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The default separator between the title and the suffix is ",(0,a.jsx)(n.code,{children:"-"}),", you can also use ",(0,a.jsx)(n.code,{children:"|"})," for separation:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\ntitleSuffix: '| Rspack-based Static Site Generator'\n---\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"head",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#head",children:"#"}),"head"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"[string, Record<string, string>][]"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Specify extra head tags to be injected for the current page. Will be appended after head tags injected by site-level config."}),"\n",(0,a.jsxs)(n.p,{children:["For example, you can use these headers to specify custom meta tags for ",(0,a.jsx)(n.a,{href:"https://ogp.me/",rel:"noopener noreferrer",target:"_blank",children:"Open Graph"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\nhead:\n  - - meta\n    - property: og:title\n      content: The Rock\n  - - meta\n    - property: og:url\n      content: https://www.imdb.com/title/tt0117500/\n  - - meta\n    - property: og:image\n      content: https://ia.media-imdb.com/images/rock.jpg\n# - - [htmlTag]\n#   - [attributeName]: [attributeValue]\n#     [attributeName]: [attributeValue]\n---\n"})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"Note"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,a.jsx)(n.p,{children:"Make sure to correctly define the header tag names and their attribute names."}),(0,a.jsxs)(n.p,{children:["For tags and attribute names that contain a hyphen (",(0,a.jsx)(n.code,{children:"-"}),"), use the camelCase format.\nFor example, ",(0,a.jsx)(n.code,{children:'http-equiv="refresh"'})," should be defined as ",(0,a.jsx)(n.code,{children:"httpEquiv: refresh"}),"."]}),(0,a.jsx)(n.p,{children:"This is because under the hood, headers are handled by React and react-helmet-async."})]})]}),"\n",(0,a.jsxs)(n.h2,{id:"hero",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hero",children:"#"}),"hero"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The hero config for the home page. It has the following types:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"",children:"interface Hero {\n  name: string;\n  text: string;\n  tagline: string;\n  image?: {\n    src: string | { dark: string; light: string };\n    alt: string;\n    /**\n     * `srcset` and `sizes` are attributes of `<img>` tag. Please refer to https://mdn.io/srcset for the usage.\n     * When the value is an array, rspress will join array members with commas.\n     **/\n    srcset?: string | string[];\n    sizes?: string | string[];\n  };\n  actions: {\n    text: string;\n    link: string;\n    theme: 'brand' | 'alt';\n  }[];\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"For example, you can use the following Front Matter to specify a page's hero config:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\npageType: home\n\nhero:\n  name: Rspress\n  text: A Documentation Solution\n  tagline: A modern documentation development technology stack\n  actions:\n    - theme: brand\n      text: Introduction\n      link: /en/guide/introduction\n    - theme: alt\n      text: Quick Start\n      link: /en/guide/getting-started\n---\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When setting ",(0,a.jsx)(n.code,{children:"hero.text"}),", you can use the ",(0,a.jsx)(n.code,{children:"|"})," symbol in YAML to manually control line breaks:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\npageType: home\n\nhero:\n  name: Rspress\n  text: |\n    A Documentation\n    Solution\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Or you can use ",(0,a.jsx)(n.code,{children:"HTML"})," to specify the hero config for the page:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:'---\npageType: home\n\nhero:\n  name: <span class="hero-name">Rspress</span>\n  text: <span class="hero-text">A Documentation Solution</span>\n  tagline: <span class="hero-tagline">A modern documentation development technology stack</span>\n  actions:\n    - theme: brand\n      text: <span class="hero-actions-text">Introduction</span>\n      link: /zh/guide/introduction\n    - theme: alt\n      text: <span class="hero-actions-text">Quick Start</span>\n      link: /zh/guide/getting-started\n---\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"features",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"features"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"Array"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["features config of the ",(0,a.jsx)(n.code,{children:"home"})," page. It has the following types:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"",children:"interface Feature {\n  title: string;\n  details: string;\n  icon: string;\n  // The length of the card grid, currently only support[3, 4, 6]\n  span?: number;\n  // The link of the feature, not required.\n  link?: string;\n}\n\nexport type Features = Feature[];\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For example, you could use the following to specify the features configuration for the ",(0,a.jsx)(n.code,{children:"home"})," page:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\npageType: home\n\nfeatures:\n  - title: 'MDX Support'\n    details: MDX is a powerful way to write content. You can use React components in Markdown.\n    icon: \uD83D\uDCE6\n  - title: 'Feature Rich'\n    details: Out of box support for i18n, full-text search etc.\n    icon: \uD83C\uDFA8\n  - title: 'Customizable'\n    details: You can customize the theme ui and the build process.\n    icon: \uD83D\uDE80\n---\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"sidebar",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sidebar",children:"#"}),"sidebar"]}),"\n",(0,a.jsxs)(n.p,{children:["Whether to show the sidebar on the left. By default, the ",(0,a.jsx)(n.code,{children:"doc"})," page will display the sidebar on the left. If you want to hide the sidebar on the left, you can use the following Front Matter config:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\nsidebar: false\n---\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"outline",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outline",children:"#"}),"outline"]}),"\n",(0,a.jsxs)(n.p,{children:["Whether to display the outline column on the right. By default, the ",(0,a.jsx)(n.code,{children:"doc"})," page displays the outline column on the right. You can hide the outline column with the following config:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\noutline: false\n---\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"footer",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#footer",children:"#"}),"footer"]}),"\n",(0,a.jsxs)(n.p,{children:["Whether to display the components at the bottom of the document (such as previous/next page). By default, the ",(0,a.jsx)(n.code,{children:"doc"})," page will display the footer at the bottom. You can hide the footer with the following config:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\nfooter: false\n---\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"navbar",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navbar",children:"#"}),"navbar"]}),"\n",(0,a.jsx)(n.p,{children:"Whether to hide the top navigation bar. You can hide the top nav bar with the following config:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\nnavbar: true\n---\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"overviewheaders",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overviewheaders",children:"#"}),"overviewHeaders"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"number[]"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"[2]"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The headers shown in the overview page. By default, the displayed header is h2. But if you want to display different headers, you can specify it using the ",(0,a.jsx)(n.code,{children:"overviewHeaders"})," Front Matter field. For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\noverviewHeaders: []\n---\n"})}),"\n",(0,a.jsx)(n.p,{children:"Or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:"",children:"---\noverviewHeaders: [2, 3]\n---\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"context",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"}),"context"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["After configuration, the ",(0,a.jsx)(n.code,{children:"data-context"})," attribute will be added to the DOM node when the sidebar is generated, and the value is the configured value."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:'title="foo.mdx"',children:"---\ncontext: 'context-foo'\n---\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",meta:'title="bar.mdx"',children:"---\ncontext: 'context-bar'\n---\n"})}),"\n",(0,a.jsx)(n.p,{children:"The DOM structure of the final generated sidebar is abbreviated as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",meta:"",children:'<div class="rspress-sidebar-group">\n  <div className="rspress-sidebar-item" data-context="context-foo"></div>\n  <div className="rspress-sidebar-item" data-context="context-bar"></div>\n</div>\n'})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}let d=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fapi%2Fplugins%2Fconfig-frontmatter.mdx"]={toc:[{id:"title",text:"title",depth:2},{id:"description",text:"description",depth:2},{id:"pagetype",text:"pageType",depth:2},{id:"titlesuffix",text:"titleSuffix",depth:2},{id:"head",text:"head",depth:2},{id:"hero",text:"hero",depth:2},{id:"features",text:"features",depth:2},{id:"sidebar",text:"sidebar",depth:2},{id:"outline",text:"outline",depth:2},{id:"footer",text:"footer",depth:2},{id:"navbar",text:"navbar",depth:2},{id:"overviewheaders",text:"overviewHeaders",depth:2},{id:"context",text:"context",depth:2}],title:"Front Matter Config",frontmatter:{}}}}]);