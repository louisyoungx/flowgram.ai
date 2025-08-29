"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["811212"],{198738:function(e,t,n){n.r(t),n.d(t,{JsonEditorWithVariables:()=>b});var r=n(3760),i=n(753113),l=n(908600),a=n(950454),o=n(366563),s=n(245803),c=n(855868),u=n(329193),h=n(374488),d=n(938573),p=n(523076),g=n(711294),m=n(261513);function f(){let[e,t]=(0,l.useState)(""),[n,i]=(0,l.useState)(!1),[a,o]=(0,l.useState)(-1),h=(0,c.jE)();(0,l.useEffect)(()=>{if(!h)return},[h,n]);let d=(0,r.VX)({});return l.createElement(l.Fragment,null,l.createElement(u.pf,{triggerCharacters:["@"],onOpenChange:function(e){o(e.state.selection.main.head),i(e.value)}}),l.createElement(s.J2,{visible:n,trigger:"custom",position:"topLeft",rePosKey:e,content:l.createElement("div",{style:{width:300}},l.createElement(s.mp,{treeData:d,onSelect:e=>{let t=(0,u.m4)(h.$view.state);t&&(h.replaceText({...t,text:"{{"+e+"}}"}),i(!1))}}))},l.createElement(u.Iq,{position:a,onChange:()=>t(String(Math.random()))})))}var v=m.ZP.div`
  margin-right: 4px;
  min-width: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--semi-color-text-2);
`,x=m.ZP.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,E=(0,m.ZP)(s.Vp)`
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
`,w=m.ZP.div`
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`,y=class extends g.l9{renderVariable(e){if(!e)return void this.root.render(l.createElement(E,{prefixIcon:l.createElement(p.Z,null),color:"amber"},"Unknown"));let t=(0,h.Z)(e.parentFields),n=l.createElement(v,null,(null==t?void 0:t.meta.title)?`${t.meta.title} -`:""),r=this.renderIcon(null==t?void 0:t.meta.icon);this.root.render(l.createElement(s.J2,{content:l.createElement(w,null,r,n,l.createElement(x,null,null==e?void 0:e.keyPath.slice(1).join(".")))},l.createElement(E,{prefixIcon:r},n,l.createElement(x,null,null==e?void 0:e.key))))}toDOM(e){let t=document.createElement("span");return this.root=(0,i.sW)(t),this.toDispose.push(a.JTr.create(()=>{this.root.unmount()})),this.toDispose.push(this.scope.available.trackByKeyPath(this.keyPath,e=>{this.renderVariable(e)},{triggerOnInit:!1})),this.renderVariable(this.scope.available.getByKeyPath(this.keyPath)),t}eq(e){return(0,d.Z)(this.keyPath,e.keyPath)}ignoreEvent(){return!1}destroy(e){this.toDispose.dispose()}constructor({keyPath:e,scope:t}){super(),this.toDispose=new a.K46,this.renderIcon=e=>"string"==typeof e?l.createElement("img",{style:{marginRight:8},width:12,height:12,src:e}):e,this.keyPath=e,this.scope=t}};function P(){let e=(0,c.G6)(),t=(0,a.$eD)();return(0,l.useLayoutEffect)(()=>{let n=new g.Y1({regexp:/\{\{([^\}\{]+)\}\}/g,decoration:e=>{var n;return g.p.replace({widget:new y({keyPath:(null==(n=e[1])?void 0:n.split("."))??[],scope:t})})}});return e.inject([g.lg.fromClass(class{update(){this.decorations=n.createDeco(this.view)}constructor(e){this.view=e,this.decorations=n.createDeco(e)}},{decorations:e=>e.decorations,provide:e=>g.tk.atomicRanges.of(t=>{var n;return(null==(n=t.plugin(e))?void 0:n.decorations)??g.p.none})})])},[e]),null}var k=(0,o.Gy)(e=>{let t=function(e,t){let n,r=new RegExp(t,t.flags.includes("g")?t.flags:t.flags+"g"),i=[];for(;null!==(n=r.exec(e));)n.index===r.lastIndex&&r.lastIndex++,i.push({match:n[0],range:[n.index,n.index+n[0].length]});return i}(e.toString(),/\{\{([^\}]*)\}\}/g);return t.length>0&&t.forEach(t=>{let{range:n}=t;e.replaceRange(n[0],n[1],"null")}),e});function b(e){return l.createElement(r.pq,{languageId:"json",activeLinePlaceholder:a.oci.t("Press '@' to Select variable"),...e,options:{transformer:k,...e.options||{}}},l.createElement(f,null),l.createElement(P,null))}}}]);