"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["642876"],{770290:function(e,t,n){n.d(t,{e:()=>U});var l=n(110239),i=n(908600),o=n(950454),s=n(852469),a=n(633988),r=n(687252),c=n(393767),d=n(461249),u=n(79367);d.ZP.div``;let p=d.ZP.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`,h=d.ZP.div`
  cursor: pointer;
  margin-right: 5px;
`,f=d.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;

  ${e=>{let{$shrink:t}=e;return t&&(0,d.iv)`
      padding-left: 3px;
      margin-top: 10px;
    `}}
`,v=d.ZP.div`
  grid-column: 1;
  position: relative;
  width: 16px;

  ${e=>{let{$showLine:t,$isLast:n,$showCollapse:l}=e;return t&&(0,d.iv)`
        &::before {
          /* 竖线 */
          content: '';
          height: ${n?"24px":"100%"};
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
          width: ${l?"12px":"30px"}; // 横线长度
          height: 1px;
          background: #d9d9d9;
          display: block;
        }
      `}}
`,m=d.ZP.div`
  grid-column: 2;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`,y=d.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,x=d.ZP.div`
  display: none;

  ${e=>{let{$collapse:t}=e;return t&&(0,d.iv)`
      display: block;
    `}}
`,g=d.ZP.div`
  white-space: nowrap;
`,j=(0,l.jsxs)("svg",{className:"icon-icon icon-icon-coz_add_node ",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 6.49988C11 8.64148 9.50397 10.4337 7.49995 10.8884V15.4998C7.49995 16.0521 7.94767 16.4998 8.49995 16.4998H11.208C11.0742 16.8061 11 17.1443 11 17.4998C11 17.8554 11.0742 18.1936 11.208 18.4998H8.49995C6.8431 18.4998 5.49995 17.1567 5.49995 15.4998V10.8884C3.49599 10.4336 2 8.64145 2 6.49988C2 4.0146 4.01472 1.99988 6.5 1.99988C8.98528 1.99988 11 4.0146 11 6.49988ZM6.5 8.99988C7.88071 8.99988 9 7.88059 9 6.49988C9 5.11917 7.88071 3.99988 6.5 3.99988C5.11929 3.99988 4 5.11917 4 6.49988C4 7.88059 5.11929 8.99988 6.5 8.99988Z"}),(0,l.jsx)("path",{d:"M17.5 12.4999C18.0523 12.4999 18.5 12.9476 18.5 13.4999V16.4999H21.5C22.0523 16.4999 22.5 16.9476 22.5 17.4999C22.5 18.0522 22.0523 18.4999 21.5 18.4999H18.5V21.4999C18.5 22.0522 18.0523 22.4999 17.5 22.4999C16.9477 22.4999 16.5 22.0522 16.5 21.4999V18.4999H13.5C12.9477 18.4999 12.5 18.0522 12.5 17.4999C12.5 16.9476 12.9477 16.4999 13.5 16.4999H16.5V13.4999C16.5 12.9476 16.9477 12.4999 17.5 12.4999Z"})]}),b=()=>(0,l.jsx)(u.ZPm,{size:"small",svg:j});var Z=n(244897),C=n(61574),P=n(551503),k=n(111886),w=n(137022),V=n(244359);let $={hit:e=>"object"===e.type,Renderer:()=>(0,l.jsx)(s.II,{size:"small",disabled:!0,style:{pointerEvents:"none"},value:o.oci.t("Configure via child fields")})};function z(e){let{keyName:t,value:n,$level:a=0,onUpdateKey:d,onUpdateValue:u,$isLast:j,onRemove:U,constantProps:K,hasError:I,readonly:E}=e,[F,H]=(0,i.useState)(!1),{canAddField:M,hasChildren:R,list:S,add:_,updateKey:O,updateValue:T,remove:J}=function(e,t){let n=(0,i.useMemo)(()=>{var t;return!!(0,k.Z)(e)&&(!r.U.isFlowValue(e)||r.U.isConstant(e)&&(null==e||null==(t=e.schema)?void 0:t.type)==="object")},[e]),l=(0,i.useMemo)(()=>{if((0,k.Z)(e)&&!r.U.isFlowValue(e))return e},[e]),{list:o,add:s,updateKey:a,updateValue:d,remove:u}=(0,c.S)({value:l,onChange:e=>{null==t||t(e)},sortIndexKey:e=>r.U.isFlowValue(e)?"extra.index":""}),p=(0,i.useMemo)(()=>n&&(o.length>0||Object.keys(l||{}).length>0),[n,o.length,Object.keys(l||{}).length]);return{canAddField:n,hasChildren:p,list:o,add:s,updateKey:a,updateValue:d,remove:u}}(n,u),A=(0,i.useMemo)(()=>[...R?[$]:[],...(null==K?void 0:K.strategies)||[]],[R,null==K?void 0:K.strategies]),B=(0,i.useMemo)(()=>R?{type:"constant",schema:{type:"object"}}:n,[R,n]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{$isLast:j,$showLine:a>0,$showCollapse:R,children:R&&(0,l.jsx)(h,{onClick:()=>H(e=>!e),children:F?(0,l.jsx)(Z.Z,{size:"small"}):(0,l.jsx)(C.Z,{size:"small"})})}),(0,l.jsxs)(m,{children:[(0,l.jsx)(y,{children:(0,l.jsxs)(p,{children:[(0,l.jsx)(V.A,{style:{width:100,minWidth:100,maxWidth:100},disabled:E,size:"small",value:t,onChange:e=>null==d?void 0:d(e),placeholder:o.oci.t("Input Key")}),(0,l.jsx)(w.t,{style:{flexGrow:1},readonly:E,value:B,onChange:e=>u(e),hasError:I,constantProps:{...K,strategies:A}}),(0,l.jsxs)(g,{children:[M&&(0,l.jsx)(s.hU,{disabled:E,size:"small",theme:"borderless",icon:(0,l.jsx)(b,{}),onClick:()=>{_({type:"constant",content:"",schema:{type:"string"}}),H(!0)}}),(0,l.jsx)(s.hU,{disabled:E,theme:"borderless",icon:(0,l.jsx)(P.Z,{size:"small"}),size:"small",onClick:()=>null==U?void 0:U()})]})]})}),R&&(0,l.jsx)(x,{$collapse:F,children:(0,l.jsx)(f,{$shrink:!0,children:S.map((e,t)=>(0,l.jsx)(z,{readonly:E,hasError:I,constantProps:K,keyName:e.key,value:e.value,$level:a+1,onUpdateValue:t=>{T(e.id,t)},onUpdateKey:t=>{O(e.id,t)},onRemove:()=>{J(e.id)},$isLast:t===S.length-1},e.id))})})]})]})}function U(e){let{value:t,onChange:n,readonly:i,hasError:d,constantProps:u}=e,{list:p,updateKey:h,updateValue:v,remove:m,add:y}=(0,c.S)({value:t,onChange:e=>null==n?void 0:n(e),sortIndexKey:e=>r.U.isFlowValue(e)?"extra.index":""});return(0,l.jsxs)("div",{children:[(0,l.jsx)(f,{children:p.map(e=>(0,l.jsx)(z,{keyName:e.key,value:e.value,onUpdateKey:t=>h(e.id,t),onUpdateValue:t=>v(e.id,t),onRemove:()=>m(e.id),readonly:i,hasError:d,constantProps:u},e.id))}),(0,l.jsx)(s.zx,{style:{marginTop:10,marginLeft:16},disabled:i,icon:(0,l.jsx)(a.Z,{}),size:"small",onClick:()=>{y({type:"constant",content:"",schema:{type:"string"}})},children:o.oci.t("Add")})]})}},623631:function(e,t,n){n.d(t,{g:()=>o});var l=n(950454),i=n(687252);let o=[{event:l.zEJ.onValueInit,effect:e=>{let{context:t,form:n,name:o}=e,a=t.node.getService(l.qmw).onRename(e=>{let{before:t,after:l}=e,a=[...t.parentFields.map(e=>e.key).reverse(),t.key],r=[...l.parentFields.map(e=>e.key).reverse(),l.key];var c=o,d=n.getValueIn(o),u=(e,t)=>{if("ref"===t.type){if(s(t.content,a)){var l;t.content=[...r,...null==(l=t.content||[])?void 0:l.slice(a.length)],n.setValueIn(e,t)}}else if("template"===t.type){let l=i.U.getTemplateKeyPaths(t),o=!1;l.forEach(e=>{if(s(e,a)){var n,l;o=!0;let i=[...r,...null==(n=e||[])?void 0:n.slice(a.length)];t.content=null==(l=t.content)?void 0:l.replace(`{{${e.join(".")}}`,`{{${i.join(".")}}`)}}),o&&n.setValueIn(e,{...t})}};for(let{value:e,path:t}of i.U.traverse(d,{includeTypes:["ref","template"],path:c}))u(t,e)});return()=>{a.dispose()}}}];function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.every((t,n)=>t===e[n])}},789220:function(e,t,n){n.d(t,{V:()=>o});var l=n(937643),i=n(950454);let o=e=>[{event:i.zEJ.onValueInitOrChange,effect:t=>{let{context:n,value:o}=t;if((null==o?void 0:o.type)!=="ref")return()=>null;let s=(0,i.k6H)(n.node).available.trackByKeyPath((null==o?void 0:o.content)||[],n=>{e({...t,schema:l.Kz.astToSchema(n)})},{selector:e=>null==e?void 0:e.type});return()=>{s.dispose()}}}]},251430:function(e,t,n){n.d(t,{Z:()=>i});var l=n(950454);let i=e=>[{event:l.zEJ.onValueInitOrChange,effect:t=>{let{context:n,value:i}=t;if((null==i?void 0:i.type)!=="ref")return()=>null;let o=(0,l.k6H)(n.node).available.trackByKeyPath((null==i?void 0:i.content)||[],n=>{e({...t,variable:n})});return()=>{o.dispose()}}}]},687252:function(e,t,n){n.d(t,{U:()=>l});var l,i=n(111886),o=n(13721),s=n(721855),a=n(325486),r=n(937643),c=n(123387);let d=c.ZP.object({index:c.ZP.number().optional()}).optional(),u=c.ZP.object({type:c.ZP.literal("constant"),content:c.ZP.any().optional(),schema:c.ZP.any().optional(),extra:d}),p=c.ZP.object({type:c.ZP.literal("ref"),content:c.ZP.array(c.ZP.string()).optional(),extra:d}),h=c.ZP.object({type:c.ZP.literal("expression"),content:c.ZP.string().optional(),extra:d}),f=c.ZP.object({type:c.ZP.literal("template"),content:c.ZP.string().optional(),extra:d});!function(e){function t(e){return u.safeParse(e).success}function n(e){return p.safeParse(e).success}function l(e){return h.safeParse(e).success}function c(e){return f.safeParse(e).success}function d(e){return(null==e?void 0:e.schema)?e.schema:"string"==typeof e.content?{type:"string"}:"number"==typeof e.content?{type:"number"}:"boolean"==typeof e.content?{type:"boolean"}:(0,a.Z)(e.content)?{type:"object"}:void 0}e.isConstant=t,e.isRef=n,e.isExpression=l,e.isTemplate=c,e.isConstantOrRef=function(e){return t(e)||n(e)},e.isFlowValue=function(e){return t(e)||n(e)||l(e)||c(e)},e.traverse=function* e(s,a){let{includeTypes:r=["ref","template","expression","constant"],path:d="",pathArr:u=[]}=a||{};if((0,i.Z)(s)){if(n(s)&&r.includes("ref")||c(s)&&r.includes("template")||l(s)&&r.includes("expression")||t(s)&&r.includes("constant"))return void(yield{value:s,path:d,pathArr:u});for(let[t,n]of Object.entries(s))yield*e(n,{...a,path:d?`${d}.${t}`:t,pathArr:[...u,t]});return}if((0,o.Z)(s))for(let[t,n]of s.entries())yield*e(n,{...a,path:d?`${d}[${t}]`:`[${t}]`,pathArr:[...u,`[${t}]`]})},e.getTemplateKeyPaths=function(e){var t;return(0,s.Z)((null==(t=e.content)?void 0:t.match(/\{\{([^\}\{]+)\}\}/g))||[]).map(e=>e.slice(2,-2).split("."))},e.inferConstantJsonSchema=d,e.inferJsonSchema=function e(l,o){if((0,i.Z)(l)){if(t(l))return d(l);if(n(l)){let e=o.available.getByKeyPath(null==l?void 0:l.content);return(null==e?void 0:e.type)?r.Kz.astToSchema(null==e?void 0:e.type):void 0}return c(l)?{type:"string"}:{type:"object",properties:Object.keys(l).reduce((t,n)=>{let i=e(l[n],o);return i&&(t[n]=i),t},{})}}}}(l||(l={}))}}]);