"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["884312"],{506922:function(e,r,n){n.r(r),n.d(r,{default:function(){return i}});var d=n(110239),a=n(444827);function t(e){let r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h3:"h3",ul:"ul",li:"li",strong:"strong",h4:"h4",h5:"h5",hr:"hr"},(0,a.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"interface-observert",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#interface-observert",children:"#"}),"Interface: Observer<T>"]}),"\n",(0,d.jsx)(r.p,{children:"An object interface that defines a set of callback functions a user can use to get\nnotified of any set of Observable\nguide/glossary-and-semantics#notification notification events."}),"\n",(0,d.jsx)(r.p,{children:"For more info, please refer to guide/observer this guide."}),"\n",(0,d.jsxs)(r.h2,{id:"type-parameters",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#type-parameters",children:"#"}),"Type parameters"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsx)(r.tr,{children:(0,d.jsx)(r.th,{align:"left",children:"Name"})})}),(0,d.jsx)(r.tbody,{children:(0,d.jsx)(r.tr,{children:(0,d.jsx)(r.td,{align:"left",children:(0,d.jsx)(r.code,{children:"T"})})})})]}),"\n",(0,d.jsxs)(r.h2,{id:"table-of-contents",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#table-of-contents",children:"#"}),"Table of contents"]}),"\n",(0,d.jsxs)(r.h3,{id:"properties",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#properties",children:"#"}),"Properties"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"/en/auto-docs/editor/interfaces/Observer.html#complete",children:"complete"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"/en/auto-docs/editor/interfaces/Observer.html#error",children:"error"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"/en/auto-docs/editor/interfaces/Observer.html#next",children:"next"})}),"\n"]}),"\n",(0,d.jsxs)(r.h2,{id:"properties-1",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#properties-1",children:"#"}),"Properties"]}),"\n",(0,d.jsxs)(r.h3,{id:"complete",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#complete",children:"#"}),"complete"]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"complete"}),": () => ",(0,d.jsx)(r.code,{children:"void"})]}),"\n",(0,d.jsxs)(r.h4,{id:"type-declaration",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#type-declaration",children:"#"}),"Type declaration"]}),"\n",(0,d.jsxs)(r.p,{children:["(): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n",(0,d.jsxs)(r.p,{children:["A callback function that gets called by the producer if and when it has no more\nvalues to provide (by calling ",(0,d.jsx)(r.code,{children:"next"})," callback function). This means that no error\nhas happened. This callback can't be called more than one time, it can't be called\nif the ",(0,d.jsx)(r.code,{children:"error"})," callback function have been called previously, nor it can't be called\nif the consumer has unsubscribed."]}),"\n",(0,d.jsx)(r.p,{children:"For more info, please refer to guide/glossary-and-semantics#complete this guide."}),"\n",(0,d.jsxs)(r.h5,{id:"returns",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#returns",children:"#"}),"Returns"]}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsxs)(r.h3,{id:"error",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#error",children:"#"}),"error"]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"error"}),": (",(0,d.jsx)(r.code,{children:"err"}),": ",(0,d.jsx)(r.code,{children:"any"}),") => ",(0,d.jsx)(r.code,{children:"void"})]}),"\n",(0,d.jsxs)(r.h4,{id:"type-declaration-1",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#type-declaration-1",children:"#"}),"Type declaration"]}),"\n",(0,d.jsxs)(r.p,{children:["(",(0,d.jsx)(r.code,{children:"err"}),"): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n",(0,d.jsxs)(r.p,{children:["A callback function that gets called by the producer if and when it encountered a\nproblem of any kind. The errored value will be provided through the ",(0,d.jsx)(r.code,{children:"err"})," parameter.\nThis callback can't be called more than one time, it can't be called if the\n",(0,d.jsx)(r.code,{children:"complete"})," callback function have been called previously, nor it can't be called if\nthe consumer has unsubscribed."]}),"\n",(0,d.jsx)(r.p,{children:"For more info, please refer to guide/glossary-and-semantics#error this guide."}),"\n",(0,d.jsxs)(r.h5,{id:"parameters",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#parameters",children:"#"}),"Parameters"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{align:"left",children:"Name"}),(0,d.jsx)(r.th,{align:"left",children:"Type"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{align:"left",children:(0,d.jsx)(r.code,{children:"err"})}),(0,d.jsx)(r.td,{align:"left",children:(0,d.jsx)(r.code,{children:"any"})})]})})]}),"\n",(0,d.jsxs)(r.h5,{id:"returns-1",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#returns-1",children:"#"}),"Returns"]}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsxs)(r.h3,{id:"next",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#next",children:"#"}),"next"]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"next"}),": (",(0,d.jsx)(r.code,{children:"value"}),": ",(0,d.jsx)(r.code,{children:"T"}),") => ",(0,d.jsx)(r.code,{children:"void"})]}),"\n",(0,d.jsxs)(r.h4,{id:"type-declaration-2",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#type-declaration-2",children:"#"}),"Type declaration"]}),"\n",(0,d.jsxs)(r.p,{children:["(",(0,d.jsx)(r.code,{children:"value"}),"): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n",(0,d.jsxs)(r.p,{children:['A callback function that gets called by the producer during the subscription when\nthe producer "has" the ',(0,d.jsx)(r.code,{children:"value"}),". It won't be called if ",(0,d.jsx)(r.code,{children:"error"})," or ",(0,d.jsx)(r.code,{children:"complete"})," callback\nfunctions have been called, nor after the consumer has unsubscribed."]}),"\n",(0,d.jsx)(r.p,{children:"For more info, please refer to guide/glossary-and-semantics#next this guide."}),"\n",(0,d.jsxs)(r.h5,{id:"parameters-1",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#parameters-1",children:"#"}),"Parameters"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{align:"left",children:"Name"}),(0,d.jsx)(r.th,{align:"left",children:"Type"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{align:"left",children:(0,d.jsx)(r.code,{children:"value"})}),(0,d.jsx)(r.td,{align:"left",children:(0,d.jsx)(r.code,{children:"T"})})]})})]}),"\n",(0,d.jsxs)(r.h5,{id:"returns-2",children:[(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#returns-2",children:"#"}),"Returns"]}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}let i=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fauto-docs%2Feditor%2Finterfaces%2FObserver.md"]={toc:[{id:"type-parameters",text:"Type parameters",depth:2},{id:"table-of-contents",text:"Table of contents",depth:2},{id:"properties",text:"Properties",depth:3},{id:"properties-1",text:"Properties",depth:2},{id:"complete",text:"complete",depth:3},{id:"type-declaration",text:"Type declaration",depth:4},{id:"error",text:"error",depth:3},{id:"type-declaration-1",text:"Type declaration",depth:4},{id:"next",text:"next",depth:3},{id:"type-declaration-2",text:"Type declaration",depth:4}],title:"Interface: Observer<T>",frontmatter:{}}}}]);