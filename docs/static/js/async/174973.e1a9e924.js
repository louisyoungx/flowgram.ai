"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["174973"],{561229:function(e,n,r){r.r(n),r.d(n,{default:function(){return a}});var i=r(110239),d=r(444827);function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,d.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"节点引擎",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#节点引擎",children:"#"}),"节点引擎"]}),"\n",(0,i.jsx)(n.p,{children:"节点引擎 NodeEngine 是一个流程节点逻辑的书写框架，让业务专注于业务自身的渲染与数据逻辑，无需关注画布以及节点间联动的底层api。与此同时，节点引擎沉淀了最佳的节点书写范式，帮助业务解决流程业务中可能遇到的各种问题， 如数据逻辑与渲染耦合等。\n节点引擎是可选启用的。如果你不存在以下这些复杂的节点逻辑，可以选择不启用节点引擎，自己维护节点数据与渲染。复杂节点逻辑如：1）节点不渲染也能校验或触发数据副作用；2）节点间联动丰富；3）redo/undo; 等等。"}),"\n",(0,i.jsxs)(n.h2,{id:"基础概念",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基础概念",children:"#"}),"基础概念"]}),"\n",(0,i.jsx)(n.p,{children:"FlowNodeEntity\n流程节点模型。"}),"\n",(0,i.jsx)(n.p,{children:"FlowNodeRegistry\n流程节点的静态配置。"}),"\n",(0,i.jsx)(n.p,{children:"FormMeta\n节点引擎的静态配置。 配置在 FlowNodeRegistry 中的 formMeta 字段。"}),"\n",(0,i.jsx)(n.p,{children:"Form\n节点引擎中的表单。它维护节点的数据并提供渲染、校验、副作用等能力。他的模型 FormModel 提供节点数据的访问和修改及触发校验等能力。"}),"\n",(0,i.jsx)(n.p,{children:"Field\n节点表单中的某个渲染字段。注意， Form 已经提供了数据层的逻辑，Field 更多是一个渲染层的模型，它尽在表单字段渲染后才存在。"}),"\n",(0,i.jsx)(n.p,{children:"validate\n表单校验。通常有对单个字段的校验也有整体表单校验。"}),"\n",(0,i.jsx)(n.p,{children:"effect\n表单数据的副作用。通常指在表单数据发生一些事件时要触发特定逻辑。 如在某字段的数据变更时要同步一些信息到某个store，这个可以被称为一个effect。"}),"\n",(0,i.jsx)(n.p,{children:"FormPlugin\n表单插件。可以配置在formMeta 中，插件可以对表单进行一系列深度操作。如变量插件。"})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}let a=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["zh%2Fguide%2Fconcepts%2Fnode-engine.mdx"]={toc:[{id:"基础概念",text:"基础概念",depth:2}],title:"节点引擎",frontmatter:{}}}}]);