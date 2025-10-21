"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["394151"],{427183:function(e,t,n){n.d(t,{w:()=>d});var i=n(110239),l=n(908600),s=n(770290),o=n(916530),a=n(132288);let r=l.lazy(()=>Promise.all([n.e("942362"),n.e("800699"),n.e("666813"),n.e("174414"),n.e("289371"),n.e("732412")]).then(n.bind(n,694664)).then(e=>({default:e.PromptEditorWithInputs}))),d=()=>(0,i.jsx)(a.y,{filterEndNode:!0,formMeta:{render:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{}),(0,i.jsx)(o.gNt,{name:"inputsValues",defaultValue:{a:{type:"constant",content:"123"},b:{type:"ref",content:["start_0","obj"]}},children:e=>{let{field:t}=e;return(0,i.jsx)(s.e,{value:t.value,onChange:e=>t.onChange(e)})}}),(0,i.jsx)("br",{}),(0,i.jsx)(o.gNt,{name:"inputsValues",children:e=>{let{field:t}=e;return(0,i.jsx)(o.gNt,{name:"prompt_editor_with_inputs",defaultValue:{type:"template",content:"# Query \n {{b.obj2.num}}"},children:e=>{let{field:n}=e;return(0,i.jsx)(r,{value:n.value,onChange:e=>n.onChange(e),inputsValues:t.value||{}})}})}})]})}})},132288:function(e,t,n){n.d(t,{p:()=>o,y:()=>a});var i=n(110239),l=n(908600);let s=l.lazy(()=>Promise.all([n.e("386212"),n.e("443911"),n.e("737443"),n.e("767597"),n.e("800699"),n.e("541460"),n.e("428647"),n.e("533459"),n.e("666813"),n.e("534505")]).then(n.bind(n,417587)).then(e=>({default:e.FreeFormMetaStoryBuilder}))),o=l.lazy(()=>Promise.all([n.e("386212"),n.e("443911"),n.e("737443"),n.e("767597"),n.e("800699"),n.e("541460"),n.e("428647"),n.e("533459"),n.e("666813"),n.e("534505")]).then(n.bind(n,417587)).then(e=>({default:e.FormHeader}))),a=e=>(0,i.jsx)("div",{style:{position:"relative",height:e.height||400},children:(0,i.jsx)(s,{...e})})},770290:function(e,t,n){n.d(t,{e:()=>U});var i=n(110239),l=n(908600),s=n(950454),o=n(852469),a=n(633988),r=n(687252),d=n(393767),c=n(461249),u=n(79367);c.ZP.div``;let p=c.ZP.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`,h=c.ZP.div`
  cursor: pointer;
  margin-right: 5px;
`,m=c.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;

  ${e=>{let{$shrink:t}=e;return t&&(0,c.iv)`
      padding-left: 3px;
      margin-top: 10px;
    `}}
`,x=c.ZP.div`
  grid-column: 1;
  position: relative;
  width: 16px;

  ${e=>{let{$showLine:t,$isLast:n,$showCollapse:i}=e;return t&&(0,c.iv)`
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
          width: ${i?"12px":"30px"}; // 横线长度
          height: 1px;
          background: #d9d9d9;
          display: block;
        }
      `}}
`,f=c.ZP.div`
  grid-column: 2;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`,y=c.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,v=c.ZP.div`
  display: none;

  ${e=>{let{$collapse:t}=e;return t&&(0,c.iv)`
      display: block;
    `}}
`,g=c.ZP.div`
  white-space: nowrap;
`,j=(0,i.jsxs)("svg",{className:"icon-icon icon-icon-coz_add_node ",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 6.49988C11 8.64148 9.50397 10.4337 7.49995 10.8884V15.4998C7.49995 16.0521 7.94767 16.4998 8.49995 16.4998H11.208C11.0742 16.8061 11 17.1443 11 17.4998C11 17.8554 11.0742 18.1936 11.208 18.4998H8.49995C6.8431 18.4998 5.49995 17.1567 5.49995 15.4998V10.8884C3.49599 10.4336 2 8.64145 2 6.49988C2 4.0146 4.01472 1.99988 6.5 1.99988C8.98528 1.99988 11 4.0146 11 6.49988ZM6.5 8.99988C7.88071 8.99988 9 7.88059 9 6.49988C9 5.11917 7.88071 3.99988 6.5 3.99988C5.11929 3.99988 4 5.11917 4 6.49988C4 7.88059 5.11929 8.99988 6.5 8.99988Z"}),(0,i.jsx)("path",{d:"M17.5 12.4999C18.0523 12.4999 18.5 12.9476 18.5 13.4999V16.4999H21.5C22.0523 16.4999 22.5 16.9476 22.5 17.4999C22.5 18.0522 22.0523 18.4999 21.5 18.4999H18.5V21.4999C18.5 22.0522 18.0523 22.4999 17.5 22.4999C16.9477 22.4999 16.5 22.0522 16.5 21.4999V18.4999H13.5C12.9477 18.4999 12.5 18.0522 12.5 17.4999C12.5 16.9476 12.9477 16.4999 13.5 16.4999H16.5V13.4999C16.5 12.9476 16.9477 12.4999 17.5 12.4999Z"})]}),b=()=>(0,i.jsx)(u.ZPm,{size:"small",svg:j});var C=n(244897),Z=n(61574),P=n(551503),w=n(111886),k=n(137022),V=n(244359);let $={hit:e=>"object"===e.type,Renderer:()=>(0,i.jsx)(o.II,{size:"small",disabled:!0,style:{pointerEvents:"none"},value:s.oci.t("Configure via child fields")})};function z(e){let{keyName:t,value:n,$level:a=0,onUpdateKey:c,onUpdateValue:u,$isLast:j,onRemove:U,constantProps:_,hasError:F,readonly:M}=e,[K,E]=(0,l.useState)(!1),{canAddField:H,hasChildren:N,list:R,add:S,updateKey:I,updateValue:O,remove:A}=function(e,t){let n=(0,l.useMemo)(()=>{var t;return!!(0,w.Z)(e)&&(!r.U.isFlowValue(e)||r.U.isConstant(e)&&(null==e||null==(t=e.schema)?void 0:t.type)==="object")},[e]),i=(0,l.useMemo)(()=>{if((0,w.Z)(e)&&!r.U.isFlowValue(e))return e},[e]),{list:s,add:o,updateKey:a,updateValue:c,remove:u}=(0,d.S)({value:i,onChange:e=>{null==t||t(e)},sortIndexKey:e=>r.U.isFlowValue(e)?"extra.index":""}),p=(0,l.useMemo)(()=>n&&(s.length>0||Object.keys(i||{}).length>0),[n,s.length,Object.keys(i||{}).length]);return{canAddField:n,hasChildren:p,list:s,add:o,updateKey:a,updateValue:c,remove:u}}(n,u),L=(0,l.useMemo)(()=>[...N?[$]:[],...(null==_?void 0:_.strategies)||[]],[N,null==_?void 0:_.strategies]),T=(0,l.useMemo)(()=>N?{type:"constant",schema:{type:"object"}}:n,[N,n]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{$isLast:j,$showLine:a>0,$showCollapse:N,children:N&&(0,i.jsx)(h,{onClick:()=>E(e=>!e),children:K?(0,i.jsx)(C.Z,{size:"small"}):(0,i.jsx)(Z.Z,{size:"small"})})}),(0,i.jsxs)(f,{children:[(0,i.jsx)(y,{children:(0,i.jsxs)(p,{children:[(0,i.jsx)(V.A,{style:{width:100,minWidth:100,maxWidth:100},disabled:M,size:"small",value:t,onChange:e=>null==c?void 0:c(e),placeholder:s.oci.t("Input Key")}),(0,i.jsx)(k.t,{style:{flexGrow:1},readonly:M,value:T,onChange:e=>u(e),hasError:F,constantProps:{..._,strategies:L}}),(0,i.jsxs)(g,{children:[H&&(0,i.jsx)(o.hU,{disabled:M,size:"small",theme:"borderless",icon:(0,i.jsx)(b,{}),onClick:()=>{S({type:"constant",content:"",schema:{type:"string"}}),E(!0)}}),(0,i.jsx)(o.hU,{disabled:M,theme:"borderless",icon:(0,i.jsx)(P.Z,{size:"small"}),size:"small",onClick:()=>null==U?void 0:U()})]})]})}),N&&(0,i.jsx)(v,{$collapse:K,children:(0,i.jsx)(m,{$shrink:!0,children:R.map((e,t)=>(0,i.jsx)(z,{readonly:M,hasError:F,constantProps:_,keyName:e.key,value:e.value,$level:a+1,onUpdateValue:t=>{O(e.id,t)},onUpdateKey:t=>{I(e.id,t)},onRemove:()=>{A(e.id)},$isLast:t===R.length-1},e.id))})})]})]})}function U(e){let{value:t,onChange:n,readonly:l,hasError:c,constantProps:u}=e,{list:p,updateKey:h,updateValue:x,remove:f,add:y}=(0,d.S)({value:t,onChange:e=>null==n?void 0:n(e),sortIndexKey:e=>r.U.isFlowValue(e)?"extra.index":""});return(0,i.jsxs)("div",{children:[(0,i.jsx)(m,{children:p.map(e=>(0,i.jsx)(z,{keyName:e.key,value:e.value,onUpdateKey:t=>h(e.id,t),onUpdateValue:t=>x(e.id,t),onRemove:()=>f(e.id),readonly:l,hasError:c,constantProps:u},e.id))}),(0,i.jsx)(o.zx,{style:{marginTop:10,marginLeft:16},disabled:l,icon:(0,i.jsx)(a.Z,{}),size:"small",onClick:()=>{y({type:"constant",content:"",schema:{type:"string"}})},children:s.oci.t("Add")})]})}},687252:function(e,t,n){n.d(t,{U:()=>i});var i,l=n(111886),s=n(13721),o=n(721855),a=n(325486),r=n(937643),d=n(123387);let c=d.ZP.object({index:d.ZP.number().optional()}).optional(),u=d.ZP.object({type:d.ZP.literal("constant"),content:d.ZP.any().optional(),schema:d.ZP.any().optional(),extra:c}),p=d.ZP.object({type:d.ZP.literal("ref"),content:d.ZP.array(d.ZP.string()).optional(),extra:c}),h=d.ZP.object({type:d.ZP.literal("expression"),content:d.ZP.string().optional(),extra:c}),m=d.ZP.object({type:d.ZP.literal("template"),content:d.ZP.string().optional(),extra:c});!function(e){function t(e){return u.safeParse(e).success}function n(e){return p.safeParse(e).success}function i(e){return h.safeParse(e).success}function d(e){return m.safeParse(e).success}function c(e){return(null==e?void 0:e.schema)?e.schema:"string"==typeof e.content?{type:"string"}:"number"==typeof e.content?{type:"number"}:"boolean"==typeof e.content?{type:"boolean"}:(0,a.Z)(e.content)?{type:"object"}:void 0}e.isConstant=t,e.isRef=n,e.isExpression=i,e.isTemplate=d,e.isConstantOrRef=function(e){return t(e)||n(e)},e.isFlowValue=function(e){return t(e)||n(e)||i(e)||d(e)},e.traverse=function* e(o,a){let{includeTypes:r=["ref","template","expression","constant"],path:c="",pathArr:u=[]}=a||{};if((0,l.Z)(o)){if(n(o)&&r.includes("ref")||d(o)&&r.includes("template")||i(o)&&r.includes("expression")||t(o)&&r.includes("constant"))return void(yield{value:o,path:c,pathArr:u});for(let[t,n]of Object.entries(o))yield*e(n,{...a,path:c?`${c}.${t}`:t,pathArr:[...u,t]});return}if((0,s.Z)(o))for(let[t,n]of o.entries())yield*e(n,{...a,path:c?`${c}[${t}]`:`[${t}]`,pathArr:[...u,`[${t}]`]})},e.getTemplateKeyPaths=function(e){var t;return(0,o.Z)((null==(t=e.content)?void 0:t.match(/\{\{([^\}\{]+)\}\}/g))||[]).map(e=>e.slice(2,-2).split("."))},e.inferConstantJsonSchema=c,e.inferJsonSchema=function e(i,s){if((0,l.Z)(i)){if(t(i))return c(i);if(n(i)){let e=s.available.getByKeyPath(null==i?void 0:i.content);return(null==e?void 0:e.type)?r.Kz.astToSchema(null==e?void 0:e.type):void 0}return d(i)?{type:"string"}:{type:"object",properties:Object.keys(i).reduce((t,n)=>{let l=e(i[n],s);return l&&(t[n]=l),t},{})}}}}(i||(i={}))}}]);