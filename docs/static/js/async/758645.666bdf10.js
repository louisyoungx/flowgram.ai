"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["758645"],{546763:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var o=t(110239),r=t(444827);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"fixedlayouteditor",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fixedlayouteditor",children:"#"}),"FixedLayoutEditor"]}),"\n",(0,o.jsxs)(n.p,{children:["Fixed layout canvas, equivalent to the combination of ",(0,o.jsx)(n.code,{children:"FixedLayoutEditorProvider"})," and ",(0,o.jsx)(n.code,{children:"EditorRenderer"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",meta:"pure",children:"import { FixedLayoutEditor, FixedLayoutPluginContext } from '@flowgram.ai/fixed-layout-editor'\n\nfunction App() {\n  const ref = useRef<FixedLayoutPluginContext | undefined>();\n\n  useEffect(() => {\n    console.log(ref.current.document.toJSON())\n  }, [])\n\n  return (\n    <FixedLayoutEditor className=\"demo-editor\" {...editorProps} ref={ref} />\n  )\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}let a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapi%2Fcomponents%2Ffixed-layout-editor.mdx"]={toc:[],title:"FixedLayoutEditor",frontmatter:{}}}}]);