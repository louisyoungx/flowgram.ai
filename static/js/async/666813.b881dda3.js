"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["666813"],{37156:function(e,l,i){i.d(l,{P:()=>h});var n=i(110239);i(908600);var t=i(950454),r=i(852469),s=i(551503),a=i(633988),o=i(393767),d=i(137022),c=i(244359),u=i(461249);let p=u.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`,x=u.ZP.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;function h(e){let{value:l,onChange:i,style:u,readonly:h,constantProps:m,schema:v,hasError:g}=e,{list:f,updateKey:j,updateValue:y,remove:C,add:b}=(0,o.S)({value:l,onChange:i,sortIndexKey:"extra.index"});return(0,n.jsxs)("div",{children:[(0,n.jsx)(p,{style:u,children:f.map(e=>(0,n.jsxs)(x,{children:[(0,n.jsx)(c.A,{style:{width:100,minWidth:100,maxWidth:100},disabled:h,size:"small",value:e.key,onChange:l=>j(e.id,l),placeholder:t.oci.t("Input Key")}),(0,n.jsx)(d.t,{style:{flexGrow:1},readonly:h,value:e.value,onChange:l=>y(e.id,l),schema:v,hasError:g,constantProps:{...m,strategies:[...(null==m?void 0:m.strategies)||[]]}}),(0,n.jsx)(r.hU,{disabled:h,theme:"borderless",icon:(0,n.jsx)(s.Z,{size:"small"}),size:"small",onClick:()=>C(e.id)})]},e.id))}),(0,n.jsx)(r.zx,{disabled:h,icon:(0,n.jsx)(a.Z,{}),size:"small",onClick:()=>b({type:"constant",content:"",schema:{type:"string"}}),children:t.oci.t("Add")})]})}},969560:function(e,l,i){i.d(l,{_:()=>I});var n=i(110239),t=i(908600),r=i(950454),s=i(852469),a=i(633988),o=i(244897),d=i(61574),c=i(77696),u=i(665114),p=i(499164),x=i(125241),h=i(244359),m=i(461249),v=i(79367);let g=m.ZP.div`
  /* & .semi-input {
    background-color: #fff;
    border-radius: 6px;
    height: 24px;
  } */
`,f=m.ZP.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,j=m.ZP.div`
  cursor: pointer;
  margin-right: 5px;
`,y=m.ZP.div`
  display: flex;
  flex-direction: column;
`,C=m.ZP.div`
  font-size: 12px;
  color: #999;
  font-weight: 400;
  margin-bottom: 2px;
`,b=m.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;

  ${e=>{let{$shrink:l}=e;return l&&(0,m.iv)`
      padding-left: 3px;
      margin-top: 10px;
    `}}
`,k=m.ZP.div`
  grid-column: 1;
  position: relative;
  width: 16px;

  ${e=>{let{$showLine:l,$isLast:i,$showCollapse:n}=e;return l&&(0,m.iv)`
        &::before {
          /* 竖线 */
          content: '';
          height: ${i?"24px":"100%"};
          position: absolute;
          left: -14px;
          top: -16px;
          width: 1px;
          background: #d9d9d9;
          display: block;
        }

        &::after {
          /* 横线 */
          content: '';
          position: absolute;
          left: -14px; // 横线起点和竖线对齐
          top: 8px; // 跟随你的行高调整
          width: ${n?"12px":"30px"}; // 横线长度
          height: 1px;
          background: #d9d9d9;
          display: block;
        }
      `}}
`,P=m.ZP.div`
  grid-column: 2;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`,Z=m.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,w=m.ZP.div`
  display: none;

  ${e=>{let{$collapse:l}=e;return l&&(0,m.iv)`
      display: block;
    `}}
`,z=m.ZP.div`
  flex-grow: 1;
`,R=m.ZP.div``,V=m.ZP.div``,$=m.ZP.div`
  white-space: nowrap;
`,q=(0,n.jsxs)("svg",{className:"icon-icon icon-icon-coz_add_node ",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 6.49988C11 8.64148 9.50397 10.4337 7.49995 10.8884V15.4998C7.49995 16.0521 7.94767 16.4998 8.49995 16.4998H11.208C11.0742 16.8061 11 17.1443 11 17.4998C11 17.8554 11.0742 18.1936 11.208 18.4998H8.49995C6.8431 18.4998 5.49995 17.1567 5.49995 15.4998V10.8884C3.49599 10.4336 2 8.64145 2 6.49988C2 4.0146 4.01472 1.99988 6.5 1.99988C8.98528 1.99988 11 4.0146 11 6.49988ZM6.5 8.99988C7.88071 8.99988 9 7.88059 9 6.49988C9 5.11917 7.88071 3.99988 6.5 3.99988C5.11929 3.99988 4 5.11917 4 6.49988C4 7.88059 5.11929 8.99988 6.5 8.99988Z"}),(0,n.jsx)("path",{d:"M17.5 12.4999C18.0523 12.4999 18.5 12.9476 18.5 13.4999V16.4999H21.5C22.0523 16.4999 22.5 16.9476 22.5 17.4999C22.5 18.0522 22.0523 18.4999 21.5 18.4999H18.5V21.4999C18.5 22.0522 18.0523 22.4999 17.5 22.4999C16.9477 22.4999 16.5 22.0522 16.5 21.4999V18.4999H13.5C12.9477 18.4999 12.5 18.0522 12.5 17.4999C12.5 16.9476 12.9477 16.4999 13.5 16.4999H16.5V13.4999C16.5 12.9476 16.9477 12.4999 17.5 12.4999Z"})]}),T=()=>(0,n.jsx)(v.ZPm,{size:"small",svg:q}),_=m.ZP.div`
  margin: 0;
`,A=m.ZP.div`
  flex-grow: 1;

  & .semi-tree-select,
  & .semi-input-number,
  & .semi-select {
    width: 100%;
  }
`;var M=i(697497),H=i(492320),L=i(631952),S=i(937643);let D=0;function E(e,l){let i=(0,S.MT)(),n=i.getPropertiesParent(e||{}),r=i.canAddField(e||{}),[s,a]=(0,t.useState)([]),o=(0,t.useRef)(s),d=(0,t.useRef)(0),c=(0,t.useRef)(0);(0,t.useEffect)(()=>{if(d.current=d.current+1,d.current===c.current)return;d.current=c.current;let e=o.current,l=Object.entries((null==n?void 0:n.properties)||{}).sort((e,l)=>{var i,n;let[,t]=e,[,r]=l;return((null==(i=t.extra)?void 0:i.index)??0)-((null==(n=r.extra)?void 0:n.index)??0)}).map(e=>{let[l]=e;return l}),i=e.map(e=>e.name).filter(Boolean),t=(0,M.Z)(l,i),r=e.filter(e=>!e.name||l.includes(e.name)).map(e=>{var l,i;return{key:e.key,name:e.name,isPropertyRequired:(null==n||null==(l=n.required)?void 0:l.includes(e.name||""))||!1,...(null==n||null==(i=n.properties)?void 0:i[e.name||""])||e||{}}}).concat(t.map(e=>{var l,i;return{key:D++,name:e,isPropertyRequired:(null==n||null==(l=n.required)?void 0:l.includes(e))||!1,...(null==n||null==(i=n.properties)?void 0:i[e])||{}}}));o.current=r,a(r)},[n]);let u=n=>{c.current=c.current+1;let t=n(o.current);o.current=t,a(t);let r={},s=[];for(let e of t)e.name&&(r[e.name]=(0,H.Z)(e,["key","name","isPropertyRequired"]),e.isPropertyRequired&&s.push(e.name));null==l||l((0,L.Uy)(e||{},e=>{let l=i.getPropertiesParent(e);if(l){l.properties=r,l.required=s;return}}))};return(0,t.useEffect)(()=>{r||(o.current=[],a([]))},[r]),{propertyList:s,canAddField:r,onAddProperty:()=>{let e=o.current,l=[...e,{key:D++,name:"",type:"string",extra:{index:e.length+1}}];o.current=l,a(l)},onRemoveProperty:e=>{u(l=>l.filter(l=>l.key!==e))},onEditProperty:(e,l)=>{u(i=>i.map(i=>i.key===e?l:i))}}}var N=i(436767);function U(e){let{value:l,schema:i,onChange:t,placeholder:s}=e;return(0,n.jsx)(A,{children:(0,n.jsx)(N.B,{value:l,onChange:e=>t(e),schema:i||{type:"string"},placeholder:s??r.oci.t("Default value if parameter is not provided"),enableMultiLineStr:!0})})}let B={type:"object"};function I(e){let{value:l=B,config:i={},onChange:t,readonly:o}=e,{propertyList:d,onAddProperty:c,onRemoveProperty:u,onEditProperty:p}=E(l,t);return(0,n.jsxs)(g,{className:e.className,children:[(0,n.jsx)(b,{children:d.map(e=>(0,n.jsx)(F,{readonly:o,value:e,config:i,onChange:l=>{p(e.key,l)},onRemove:()=>{u(e.key)}},e.key))}),(0,n.jsx)(s.zx,{disabled:o,size:"small",style:{marginTop:10,marginLeft:16},icon:(0,n.jsx)(a.Z,{}),onClick:c,children:(null==i?void 0:i.addButtonText)??r.oci.t("Add")})]})}function F(e){let{value:l,config:i,readonly:a,$level:m=0,onChange:v,onRemove:g,$isLast:q}=e,[A,M]=(0,t.useState)(!1),[H,L]=(0,t.useState)(!1),{name:S,type:D,items:N,default:B,description:I,isPropertyRequired:K}=l||{},W=(0,t.useMemo)(()=>({type:D,items:N}),[D,N]),{propertyList:X,canAddField:G,onAddProperty:O,onRemoveProperty:J,onEditProperty:Q}=E(l,v),Y=(e,i)=>{null==v||v({...l||{},[e]:i})},ee=G&&X.length>0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k,{$isLast:q,$showLine:m>0,$showCollapse:ee,children:ee&&(0,n.jsx)(j,{onClick:()=>L(e=>!e),children:H?(0,n.jsx)(o.Z,{size:"small"}):(0,n.jsx)(d.Z,{size:"small"})})}),(0,n.jsxs)(P,{children:[(0,n.jsxs)(Z,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(z,{children:(0,n.jsx)(h.A,{disabled:a,placeholder:(null==i?void 0:i.placeholder)??r.oci.t("Input Variable Name"),size:"small",value:S,onChange:e=>Y("name",e)})}),(0,n.jsx)(R,{children:(0,n.jsx)(x.E6,{value:W,readonly:a,onChange:e=>{null==v||v({...l||{},...e})}})}),(0,n.jsx)(V,{children:(0,n.jsx)(s.XZ,{disabled:a,checked:K,onChange:e=>Y("isPropertyRequired",e.target.checked)})}),(0,n.jsxs)($,{children:[(0,n.jsx)(s.hU,{disabled:a,size:"small",theme:"borderless",icon:A?(0,n.jsx)(c.Z,{size:"small"}):(0,n.jsx)(u.Z,{size:"small"}),onClick:()=>{M(e=>!e)}}),G&&(0,n.jsx)(s.hU,{disabled:a,size:"small",theme:"borderless",icon:(0,n.jsx)(T,{}),onClick:()=>{O(),L(!0)}}),(0,n.jsx)(s.hU,{disabled:a,size:"small",theme:"borderless",icon:(0,n.jsx)(p.Z,{size:"small"}),onClick:g})]})]}),A&&(0,n.jsxs)(y,{children:[(0,n.jsx)(C,{children:(null==i?void 0:i.descTitle)??r.oci.t("Description")}),(0,n.jsx)(h.A,{disabled:a,size:"small",value:I,onChange:e=>Y("description",e),placeholder:(null==i?void 0:i.descPlaceholder)??r.oci.t("Help LLM to understand the property")}),0===m&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C,{style:{marginTop:10},children:(null==i?void 0:i.defaultValueTitle)??r.oci.t("Default Value")}),(0,n.jsx)(_,{children:(0,n.jsx)(U,{value:B,schema:l,placeholder:(null==i?void 0:i.defaultValuePlaceholder)??r.oci.t("Default Value"),onChange:e=>Y("default",e)})})]})]})]}),ee&&(0,n.jsx)(w,{$collapse:H,children:(0,n.jsx)(b,{$shrink:!0,children:X.map((e,l)=>(0,n.jsx)(F,{readonly:a,value:e,config:i,$level:m+1,onChange:l=>{Q(e.key,l)},onRemove:()=>{J(e.key)},$isLast:l===X.length-1},e.key))})})]})]})}},125812:function(e,l,i){i.d(l,{X:()=>r});var n=i(937643),t=i(950454);let r=(0,t.W2M)({parse:(e,l)=>{var i,r;return[t.qRT.createVariableDeclaration({key:`${l.node.id}`,meta:{title:(null==(i=l.node.form)?void 0:i.getValueIn("title"))||l.node.id,icon:null==(r=l.node.getNodeRegistry().info)?void 0:r.icon},type:n.Kz.schemaToAST(e)})]}})}}]);