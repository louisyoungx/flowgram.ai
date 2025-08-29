"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["802327"],{957592:function(e,t,n){n.r(t),n.d(t,{PromptEditorWithVariables:()=>P});var r=n(868861),i=n(3760),a=n(753113),o=n(908600),l=n(245803),s=n(855868),c=n(329193),u=n(374488),h=n(938573),d=n(950454),p=n(523076),m=n(711294),f=n(261513);function g(){let[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(!1),[a,u]=(0,o.useState)(-1),h=(0,s.jE)();(0,o.useEffect)(()=>{if(!h)return},[h,n]);let d=(0,i.VX)({});return o.createElement(o.Fragment,null,o.createElement(c.pf,{triggerCharacters:["{","{}","@"],onOpenChange:function(e){u(e.state.selection.main.head),r(e.value)}}),o.createElement(l.J2,{visible:n,trigger:"custom",position:"topLeft",rePosKey:e,content:o.createElement("div",{style:{width:300}},o.createElement(l.mp,{treeData:d,onSelect:e=>{!function(e){let t=(0,c.m4)(h.$view.state);if(!t)return;let{from:n,to:i}=t;for(;"{"===h.$view.state.doc.sliceString(n-1,n);)n--;for(;"}"===h.$view.state.doc.sliceString(i,i+1);)i++;h.replaceText({from:n,to:i,text:"{{"+e+"}}"}),r(!1)}(e)}}))},o.createElement(c.Iq,{position:a,onChange:()=>t(String(Math.random()))})))}var v=f.ZP.div`
  margin-right: 4px;
  min-width: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--semi-color-text-2);
`,w=f.ZP.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,E=(0,f.ZP)(l.Vp)`
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
`,y=f.ZP.div`
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`,x=class extends m.l9{renderVariable(e){if(!e)return void this.root.render(o.createElement(E,{prefixIcon:o.createElement(p.Z,null),color:"amber"},"Unknown"));let t=(0,u.Z)(e.parentFields),n=o.createElement(v,null,(null==t?void 0:t.meta.title)?`${t.meta.title} -`:""),r=this.renderIcon(null==t?void 0:t.meta.icon);this.root.render(o.createElement(l.J2,{content:o.createElement(y,null,r,n,o.createElement(w,null,null==e?void 0:e.keyPath.slice(1).join(".")))},o.createElement(E,{prefixIcon:r},n,o.createElement(w,null,null==e?void 0:e.key))))}toDOM(e){let t=document.createElement("span");return this.root=(0,a.sW)(t),this.toDispose.push(d.JTr.create(()=>{this.root.unmount()})),this.toDispose.push(this.scope.available.trackByKeyPath(this.keyPath,e=>{this.renderVariable(e)},{triggerOnInit:!1})),this.renderVariable(this.scope.available.getByKeyPath(this.keyPath)),t}eq(e){return(0,h.Z)(this.keyPath,e.keyPath)}ignoreEvent(){return!1}destroy(e){this.toDispose.dispose()}constructor({keyPath:e,scope:t}){super(),this.toDispose=new d.K46,this.renderIcon=e=>"string"==typeof e?o.createElement("img",{style:{marginRight:8},width:12,height:12,src:e}):e,this.keyPath=e,this.scope=t}};function k(){let e=(0,s.G6)(),t=(0,d.$eD)();return(0,o.useLayoutEffect)(()=>{let n=new m.Y1({regexp:/\{\{([^\}\{]+)\}\}/g,decoration:e=>{var n;return m.p.replace({widget:new x({keyPath:(null==(n=e[1])?void 0:n.split("."))??[],scope:t})})}});return e.inject([m.lg.fromClass(class{update(){this.decorations=n.createDeco(this.view)}constructor(e){this.view=e,this.decorations=n.createDeco(e)}},{decorations:e=>e.decorations,provide:e=>m.tk.atomicRanges.of(t=>{var n;return(null==(n=t.plugin(e))?void 0:n.decorations)??m.p.none})})])},[e]),null}function P(e){return o.createElement(r.Q,{...e},o.createElement(g,null),o.createElement(k,null))}}}]);