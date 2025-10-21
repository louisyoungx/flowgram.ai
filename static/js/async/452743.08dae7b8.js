"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["452743"],{11611:function(e,t,n){n.d(t,{G6:()=>c,KU:()=>u,Th:()=>d,Us:()=>h,jE:()=>a});var r=n(908600),i=n(228470),o=(0,r.createContext)(null),s=(0,r.createContext)(null),l=(0,r.createContext)(void 0);function a(){return(0,r.useContext)(o)}function c(){let e=(0,r.useContext)(l);if(!e)throw Error("useInjector should be used in EditorProvider");return e}function u({children:e}){let[t,n]=(0,r.useState)(null),a=(0,r.useRef)(null);return a.current||(a.current=(0,i.vH)()),r.createElement(o.Provider,{value:t},r.createElement(s.Provider,{value:n},r.createElement(l.Provider,{value:a.current},e)))}function d(e){let{plugins:t,defaultValue:n,root:o,options:l,domProps:a={},extensions:u,didMount:d,children:h}=e,[f,p]=(0,r.useState)(),v=(0,r.useRef)(null),x=(0,r.useRef)(null),m=(0,r.useRef)(null),g=(0,r.useContext)(s),y=c();return m.current=e,(0,r.useEffect)(()=>{let{render:e,eventKeys:r}=(0,i.Ue)({plugins:t,injector:y}),s=e({parent:v.current,root:o,defaultValue:n,options:l??{},extensions:u});return x.current=s,r.forEach(e=>{s.$on(e,t=>{var n;let r=null==(n=m.current)?void 0:n[`on${e.charAt(0).toUpperCase()+e.substring(1)}`];"function"==typeof r&&r(t)})}),"function"==typeof d&&d(s),p(s),()=>{s.$destroy()}},[]),(0,r.useEffect)(()=>{f&&g&&g(f)},[f,g]),(0,r.useEffect)(()=>{x.current.$set(e.options??{})},[e.options]),r.createElement(r.Fragment,null,r.createElement("div",{...a,ref:v}),h)}function h(e,t){return function(n){let i=n.extensions,o=(0,r.useMemo)(()=>[...t??[],...i??[]],[i]);return r.createElement(d,{...n,extensions:o,plugins:e})}}},442935:function(e,t,n){n.r(t),n.d(t,{VariableTagInject:()=>y});var r=n(110239),i=n(908600),o=n(374488),s=n(938573),l=n(950454),a=n(11611),c=n(852469),u=n(498080),d=n(455770),h=n(11187),f=n(461249);let p=f.ZP.div`
  margin-right: 4px;
  min-width: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--semi-color-text-2);
`,v=f.ZP.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,x=(0,f.ZP)(c.Vp)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 300px;

  & .semi-tag-content-center {
    justify-content: flex-start;
  }

  &.semi-tag {
    margin: 0 5px;
  }
`,m=f.ZP.div`
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`;class g extends d.l9{renderVariable(e){var t;if(!e)return void this.root.render((0,r.jsx)(x,{prefixIcon:(0,r.jsx)(u.Z,{}),color:"amber",children:"Unknown"}));let n=(0,o.Z)(e.parentFields)||e,i=e===n,s=(0,r.jsx)(p,{children:(null==(t=n.meta)?void 0:t.title)?`${n.meta.title} ${i?"":"-"} `:""}),l=this.renderIcon(null==n?void 0:n.meta.icon);this.root.render((0,r.jsx)(c.J2,{content:(0,r.jsxs)(m,{children:[l,s,(0,r.jsx)(v,{children:null==e?void 0:e.keyPath.slice(1).join(".")})]}),children:(0,r.jsxs)(x,{prefixIcon:l,children:[s,!i&&(0,r.jsx)(v,{children:null==e?void 0:e.key})]})}))}toDOM(e){let t=document.createElement("span");return this.root=(0,h.s)(t),this.toDispose.push(l.JTr.create(()=>{this.root.unmount()})),this.toDispose.push(this.scope.available.trackByKeyPath(this.keyPath,e=>{this.renderVariable(e)},{triggerOnInit:!1})),this.renderVariable(this.scope.available.getByKeyPath(this.keyPath)),t}eq(e){return(0,s.Z)(this.keyPath,e.keyPath)}ignoreEvent(){return!1}destroy(e){this.toDispose.dispose()}constructor({keyPath:e,scope:t}){super(),this.toDispose=new l.K46,this.renderIcon=e=>"string"==typeof e?(0,r.jsx)("img",{style:{marginRight:8},width:12,height:12,src:e}):e,this.keyPath=e,this.scope=t}}function y(){let e=(0,a.G6)(),t=(0,l.$eD)();return(0,i.useLayoutEffect)(()=>{let n=new d.Y1({regexp:/\{\{([^\}\{]+)\}\}/g,decoration:e=>{var n;return d.p.replace({widget:new g({keyPath:(null==(n=e[1])?void 0:n.split("."))??[],scope:t})})}});return e.inject([d.lg.fromClass(class{update(){this.decorations=n.createDeco(this.view)}constructor(e){this.view=e,this.decorations=n.createDeco(e)}},{decorations:e=>e.decorations,provide:e=>d.tk.atomicRanges.of(t=>{var n;return(null==(n=t.plugin(e))?void 0:n.decorations)??d.p.none})})])},[e]),null}},11187:function(e,t,n){n.d(t,{F:()=>s,s:()=>o});var r=n(89802);let i=e=>({render(t){(0,r.render)(t,e)},unmount(){(0,r.unmountComponentAtNode)(e)}});function o(e){return i(e)}function s(e){i=e}}}]);