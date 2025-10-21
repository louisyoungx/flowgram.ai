"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["466188"],{770290:function(e,l,t){t.d(l,{e:()=>U});var n=t(110239),i=t(908600),s=t(950454),o=t(852469),a=t(633988),d=t(687252),r=t(393767),c=t(461249),u=t(79367);c.ZP.div``;let p=c.ZP.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`,h=c.ZP.div`
  cursor: pointer;
  margin-right: 5px;
`,x=c.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;

  ${e=>{let{$shrink:l}=e;return l&&(0,c.iv)`
      padding-left: 3px;
      margin-top: 10px;
    `}}
`,v=c.ZP.div`
  grid-column: 1;
  position: relative;
  width: 16px;

  ${e=>{let{$showLine:l,$isLast:t,$showCollapse:n}=e;return l&&(0,c.iv)`
        &::before {
          /* 竖线 */
          content: '';
          height: ${t?"24px":"100%"};
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
`,m=c.ZP.div`
  grid-column: 2;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`,g=c.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,y=c.ZP.div`
  display: none;

  ${e=>{let{$collapse:l}=e;return l&&(0,c.iv)`
      display: block;
    `}}
`,C=c.ZP.div`
  white-space: nowrap;
`,f=(0,n.jsxs)("svg",{className:"icon-icon icon-icon-coz_add_node ",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 6.49988C11 8.64148 9.50397 10.4337 7.49995 10.8884V15.4998C7.49995 16.0521 7.94767 16.4998 8.49995 16.4998H11.208C11.0742 16.8061 11 17.1443 11 17.4998C11 17.8554 11.0742 18.1936 11.208 18.4998H8.49995C6.8431 18.4998 5.49995 17.1567 5.49995 15.4998V10.8884C3.49599 10.4336 2 8.64145 2 6.49988C2 4.0146 4.01472 1.99988 6.5 1.99988C8.98528 1.99988 11 4.0146 11 6.49988ZM6.5 8.99988C7.88071 8.99988 9 7.88059 9 6.49988C9 5.11917 7.88071 3.99988 6.5 3.99988C5.11929 3.99988 4 5.11917 4 6.49988C4 7.88059 5.11929 8.99988 6.5 8.99988Z"}),(0,n.jsx)("path",{d:"M17.5 12.4999C18.0523 12.4999 18.5 12.9476 18.5 13.4999V16.4999H21.5C22.0523 16.4999 22.5 16.9476 22.5 17.4999C22.5 18.0522 22.0523 18.4999 21.5 18.4999H18.5V21.4999C18.5 22.0522 18.0523 22.4999 17.5 22.4999C16.9477 22.4999 16.5 22.0522 16.5 21.4999V18.4999H13.5C12.9477 18.4999 12.5 18.0522 12.5 17.4999C12.5 16.9476 12.9477 16.4999 13.5 16.4999H16.5V13.4999C16.5 12.9476 16.9477 12.4999 17.5 12.4999Z"})]}),j=()=>(0,n.jsx)(u.ZPm,{size:"small",svg:f});var b=t(244897),k=t(61574),w=t(551503),Z=t(111886),P=t(137022),V=t(244359);let z={hit:e=>"object"===e.type,Renderer:()=>(0,n.jsx)(o.II,{size:"small",disabled:!0,style:{pointerEvents:"none"},value:s.oci.t("Configure via child fields")})};function $(e){let{keyName:l,value:t,$level:a=0,onUpdateKey:c,onUpdateValue:u,$isLast:f,onRemove:U,constantProps:H,hasError:K,readonly:M}=e,[_,I]=(0,i.useState)(!1),{canAddField:E,hasChildren:F,list:R,add:L,updateKey:O,updateValue:S,remove:B}=function(e,l){let t=(0,i.useMemo)(()=>{var l;return!!(0,Z.Z)(e)&&(!d.U.isFlowValue(e)||d.U.isConstant(e)&&(null==e||null==(l=e.schema)?void 0:l.type)==="object")},[e]),n=(0,i.useMemo)(()=>{if((0,Z.Z)(e)&&!d.U.isFlowValue(e))return e},[e]),{list:s,add:o,updateKey:a,updateValue:c,remove:u}=(0,r.S)({value:n,onChange:e=>{null==l||l(e)},sortIndexKey:e=>d.U.isFlowValue(e)?"extra.index":""}),p=(0,i.useMemo)(()=>t&&(s.length>0||Object.keys(n||{}).length>0),[t,s.length,Object.keys(n||{}).length]);return{canAddField:t,hasChildren:p,list:s,add:o,updateKey:a,updateValue:c,remove:u}}(t,u),N=(0,i.useMemo)(()=>[...F?[z]:[],...(null==H?void 0:H.strategies)||[]],[F,null==H?void 0:H.strategies]),A=(0,i.useMemo)(()=>F?{type:"constant",schema:{type:"object"}}:t,[F,t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{$isLast:f,$showLine:a>0,$showCollapse:F,children:F&&(0,n.jsx)(h,{onClick:()=>I(e=>!e),children:_?(0,n.jsx)(b.Z,{size:"small"}):(0,n.jsx)(k.Z,{size:"small"})})}),(0,n.jsxs)(m,{children:[(0,n.jsx)(g,{children:(0,n.jsxs)(p,{children:[(0,n.jsx)(V.A,{style:{width:100,minWidth:100,maxWidth:100},disabled:M,size:"small",value:l,onChange:e=>null==c?void 0:c(e),placeholder:s.oci.t("Input Key")}),(0,n.jsx)(P.t,{style:{flexGrow:1},readonly:M,value:A,onChange:e=>u(e),hasError:K,constantProps:{...H,strategies:N}}),(0,n.jsxs)(C,{children:[E&&(0,n.jsx)(o.hU,{disabled:M,size:"small",theme:"borderless",icon:(0,n.jsx)(j,{}),onClick:()=>{L({type:"constant",content:"",schema:{type:"string"}}),I(!0)}}),(0,n.jsx)(o.hU,{disabled:M,theme:"borderless",icon:(0,n.jsx)(w.Z,{size:"small"}),size:"small",onClick:()=>null==U?void 0:U()})]})]})}),F&&(0,n.jsx)(y,{$collapse:_,children:(0,n.jsx)(x,{$shrink:!0,children:R.map((e,l)=>(0,n.jsx)($,{readonly:M,hasError:K,constantProps:H,keyName:e.key,value:e.value,$level:a+1,onUpdateValue:l=>{S(e.id,l)},onUpdateKey:l=>{O(e.id,l)},onRemove:()=>{B(e.id)},$isLast:l===R.length-1},e.id))})})]})]})}function U(e){let{value:l,onChange:t,readonly:i,hasError:c,constantProps:u}=e,{list:p,updateKey:h,updateValue:v,remove:m,add:g}=(0,r.S)({value:l,onChange:e=>null==t?void 0:t(e),sortIndexKey:e=>d.U.isFlowValue(e)?"extra.index":""});return(0,n.jsxs)("div",{children:[(0,n.jsx)(x,{children:p.map(e=>(0,n.jsx)($,{keyName:e.key,value:e.value,onUpdateKey:l=>h(e.id,l),onUpdateValue:l=>v(e.id,l),onRemove:()=>m(e.id),readonly:i,hasError:c,constantProps:u},e.id))}),(0,n.jsx)(o.zx,{style:{marginTop:10,marginLeft:16},disabled:i,icon:(0,n.jsx)(a.Z,{}),size:"small",onClick:()=>{g({type:"constant",content:"",schema:{type:"string"}})},children:s.oci.t("Add")})]})}},789220:function(e,l,t){t.d(l,{V:()=>s});var n=t(937643),i=t(950454);let s=e=>[{event:i.zEJ.onValueInitOrChange,effect:l=>{let{context:t,value:s}=l;if((null==s?void 0:s.type)!=="ref")return()=>null;let o=(0,i.k6H)(t.node).available.trackByKeyPath((null==s?void 0:s.content)||[],t=>{e({...l,schema:n.Kz.astToSchema(t)})},{selector:e=>null==e?void 0:e.type});return()=>{o.dispose()}}}]},251430:function(e,l,t){t.d(l,{Z:()=>i});var n=t(950454);let i=e=>[{event:n.zEJ.onValueInitOrChange,effect:l=>{let{context:t,value:i}=l;if((null==i?void 0:i.type)!=="ref")return()=>null;let s=(0,n.k6H)(t.node).available.trackByKeyPath((null==i?void 0:i.content)||[],t=>{e({...l,variable:t})});return()=>{s.dispose()}}}]}}]);