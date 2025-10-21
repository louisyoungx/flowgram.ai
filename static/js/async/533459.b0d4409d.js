"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["533459"],{244359:function(e,t,r){r.d(t,{A:()=>i});var n=r(110239),l=r(908600),a=r(852469);function i(e){let[t,r]=(0,l.useState)("");return(0,l.useEffect)(()=>{r(e.value)},[e.value]),(0,n.jsx)(a.II,{ref:e.ref,...e,value:t,onChange:e=>{r(e)},onBlur:r=>{var n;return null==(n=e.onChange)?void 0:n.call(e,t,r)}})}},980317:function(e,t,r){r.d(t,{V:()=>o,v:()=>i});var n=r(690542),l=r(948225),a=r(370516);let i=()=>Promise.all([r.e("11731"),r.e("676809")]).then(r.bind(r,101337)).then(e=>{n.Mj.register("json",{language:(0,l.ut)({outerLanguage:e.json.language}),languageService:e.json.languageService})}),o=(0,a.h)(i,{displayName:"JsonCodeEditor",fixLanguageId:"json"})},370516:function(e,t,r){r.d(t,{h:()=>s});var n=r(110239),l=r(908600),a=r(690542),i=r(852469);let o=(0,r(47430).d)(()=>Promise.all([Promise.all([r.e("942362"),r.e("34779")]).then(r.bind(r,199209)),r.e("445133").then(r.bind(r,40863))]).then(e=>{let[t]=e;return{default:t.BaseCodeEditor}})),s=(e,t)=>{let{displayName:r,fixLanguageId:s}=t,d=t=>{let{languageId:r=s}=t;if(!r)throw Error("CodeEditorFactory: languageId is required");let[d,u]=(0,l.useState)((0,l.useMemo)(()=>!!a.Mj.get(r),[r]));return((0,l.useEffect)(()=>{!d&&e&&e(r).then(()=>{u(!0)})},[r,d]),d)?(0,n.jsx)(o,{...t,languageId:s||r}):(0,n.jsx)(i.Od,{})};return d.displayName=r,d}},906387:function(e,t,r){r.d(t,{r:()=>l,s:()=>a});var n,l=((n={}).EQ="eq",n.NEQ="neq",n.GT="gt",n.GTE="gte",n.LT="lt",n.LTE="lte",n.IN="in",n.NIN="nin",n.CONTAINS="contains",n.NOT_CONTAINS="not_contains",n.IS_EMPTY="is_empty",n.IS_NOT_EMPTY="is_not_empty",n.IS_TRUE="is_true",n.IS_FALSE="is_false",n);let a={eq:{label:"Equal",abbreviation:"="},neq:{label:"Not Equal",abbreviation:"≠"},gt:{label:"Greater Than",abbreviation:">"},gte:{label:"Greater Than or Equal",abbreviation:">="},lt:{label:"Less Than",abbreviation:"<"},lte:{label:"Less Than or Equal",abbreviation:"<="},in:{label:"In",abbreviation:"∈"},nin:{label:"Not In",abbreviation:"∉"},contains:{label:"Contains",abbreviation:"⊇"},not_contains:{label:"Not Contains",abbreviation:"⊉"},is_empty:{label:"Is Empty",abbreviation:"=",rightDisplay:"Empty"},is_not_empty:{label:"Is Not Empty",abbreviation:"≠",rightDisplay:"Empty"},is_true:{label:"Is True",abbreviation:"=",rightDisplay:"True"},is_false:{label:"Is False",abbreviation:"=",rightDisplay:"False"}}},436767:function(e,t,r){r.d(t,{B:()=>o});var n=r(110239),l=r(908600),a=r(852469),i=r(164910);function o(e){let{value:t,onChange:r,schema:o,strategies:s,fallbackRenderer:d,readonly:u,...c}=e,y=(0,i.M)(),p=(0,l.useMemo)(()=>{var e;let t=(s||[]).find(e=>e.hit(o));return t?null==t?void 0:t.Renderer:null==(e=y.getTypeBySchema(o))?void 0:e.ConstantRenderer},[s,o]);return p?(0,n.jsx)(p,{value:t,onChange:r,readonly:u,...c}):d?l.createElement(d,{value:t,onChange:r,readonly:u,...c}):(0,n.jsx)(a.II,{size:"small",disabled:!0,placeholder:"Unsupported type"})}},137022:function(e,t,r){r.d(t,{X:()=>f,t:()=>x});var n=r(110239),l=r(908600),a=r(937643),i=r(852469),o=r(190990),s=r(843091),d=r(352708),u=r(125241),c=r(436767),y=r(461249);let p=y.ZP.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--semi-color-border);
  line-height: normal;

  overflow: hidden;

  background-color: var(--semi-color-fill-0);
`,v=y.ZP.div`
  flex-grow: 1;
  overflow: hidden;
  min-width: 0;
  border-left: 1px solid var(--semi-color-border);
  border-right: 1px solid var(--semi-color-border);

  & .semi-tree-select,
  & .semi-input-number,
  & .semi-select {
    width: 100%;
    border: none;
    border-radius: 0;
  }

  & .semi-input-wrapper {
    border: none;
    border-radius: 0;
  }

  & .semi-input-textarea-wrapper {
    border: none;
    border-radius: 0;
  }

  & .semi-input-textarea {
    padding: 2px 6px;
    border: none;
    border-radius: 0;
    word-break: break-all;
  }
`,m=y.ZP.div`
  & .semi-button {
    border-radius: 0;
  }
`,h=y.ZP.div`
  & .semi-button {
    border-radius: 0;
  }
`;var b=r(950454);let g={type:"constant",content:"",schema:{type:"string"}};function f(e){let{value:t,onChange:r,readonly:s,style:y,schema:f,constantProps:x}=e,j=function(e){let t=(0,b.rVg)();return(0,l.useMemo)(()=>{if((null==e?void 0:e.type)==="ref")return t.getByKeyPath(e.content)},[e,t])}(t),[T,E]=function(e,t,r){let n=e||(null==t?void 0:t.schema)||{type:"string"};(null==r?void 0:r.type)==="constant"&&(n=(null==r?void 0:r.schema)||n);let a=(0,l.useRef)(0),i=(0,l.useRef)(0),[o,s]=(0,l.useState)(n);return(0,l.useEffect)(()=>{if(i.current+=1,a.current!==i.current&&(i.current=a.current,(null==r?void 0:r.type)==="constant"&&(null==r?void 0:r.schema)))return void s(null==r?void 0:r.schema)},[r]),[o,e=>{s(e),a.current+=1}]}(f,x,t),I=(0,l.useMemo)(()=>{if(f)return(null==f?void 0:f.type)==="number"?[f,{type:"integer"}]:{...f,extra:{weak:!0,...null==f?void 0:f.extra}}},[f]),S=(0,a.MT)();return(0,n.jsxs)(p,{style:y,children:[(0,n.jsx)(m,{children:(()=>{if(f)return(0,n.jsx)(u.Sj,{value:f,readonly:!0});if((null==t?void 0:t.type)==="ref"){let e=(null==j?void 0:j.type)?a.Kz.astToSchema(null==j?void 0:j.type):void 0;return(0,n.jsx)(u.Sj,{value:e,readonly:!0})}return(0,n.jsx)(u.Sj,{value:T,onChange:e=>{E(e||{type:"string"});let t=e||{type:"string"},n=S.getDefaultValue(t);(null==e?void 0:e.type)==="object"&&(n="{}"),(null==e?void 0:e.type)==="array"&&(n="[]"),r({type:"constant",content:n,schema:t})},readonly:s})})()}),(0,n.jsx)(v,{children:(()=>{if((null==t?void 0:t.type)==="ref")return(0,n.jsx)(d.NB,{style:{width:"100%"},value:null==t?void 0:t.content,onChange:e=>r(e?{type:"ref",content:e}:g),includeSchema:I,readonly:s});let e=f||T||{type:"string"};return(0,n.jsx)(c.B,{value:null==t?void 0:t.content,onChange:t=>r({type:"constant",content:t,schema:e}),schema:e||{type:"string"},readonly:s,fallbackRenderer:()=>(0,n.jsx)(d.NB,{style:{width:"100%"},onChange:e=>r(e?{type:"ref",content:e}:g),includeSchema:I,readonly:s}),...x,strategies:[...(null==x?void 0:x.strategies)||[]]})})()}),(0,n.jsx)(h,{children:(0,n.jsx)(d.NB,{style:{width:"100%"},value:(null==t?void 0:t.type)==="ref"?null==t?void 0:t.content:void 0,onChange:e=>r({type:"ref",content:e}),includeSchema:I,readonly:s,triggerRender:()=>(0,n.jsx)(i.hU,{disabled:s,size:"small",icon:(0,n.jsx)(o.Z,{size:"small"})})})})]})}f.renderKey="dynamic-value-input-render-key";let x=(0,s.f)(f)},125241:function(e,t,r){r.d(t,{E6:()=>y,HZ:()=>d,Sj:()=>c,Ys:()=>u});var n=r(110239),l=r(908600),a=r(937643),i=r(852469),o=r(843091);let s={display:"flex",alignItems:"center",gap:5},d=e=>(null==e?void 0:e.type)==="array"&&(null==e?void 0:e.items)?[e.type,...d(e.items)||[]]:(null==e?void 0:e.type)?[e.type]:void 0,u=e=>{let[t,...r]=e||[];return"array"===t?{type:"array",items:u(r)}:{type:t}};function c(e){let{value:t,onChange:r,readonly:o,disabled:c,style:y}=e,p=(0,l.useMemo)(()=>d(t),[t]),v=(0,a.MT)(),m=v.getDisplayIcon(t||{}),h=(0,l.useMemo)(()=>v.getTypeRegistriesWithParentType().map(e=>{var t;let r="array"===e.type;return{label:(0,n.jsxs)("div",{style:s,children:[(0,n.jsx)(i.JO,{size:"small",svg:e.icon}),(null==(t=v.getTypeBySchema(e))?void 0:t.label)||e.type]}),value:e.type,children:r?v.getTypeRegistriesWithParentType("array").map(e=>{var t;return{label:(0,n.jsxs)("div",{style:s,children:[(0,n.jsx)(i.JO,{size:"small",svg:v.getDisplayIcon({type:"array",items:{type:e.type}})}),(null==(t=v.getTypeBySchema(e))?void 0:t.label)||e.type]}),value:e.type}}):[]}}),[]),b=o||c;return(0,n.jsx)(i.vT,{disabled:b,size:"small",triggerRender:()=>(0,n.jsx)(i.hU,{size:"small",style:{...b?{pointerEvents:"none"}:{},...y||{}},disabled:b,icon:m}),treeData:h,value:p,leafOnly:!0,onChange:e=>{null==r||r(u(e))}})}c.renderKey="type-selector-render-key";let y=(0,o.f)(c)},980812:function(e,t,r){r.d(t,{WT:()=>i,yA:()=>o});var n=r(110239),l=r(908600);let a=(0,l.createContext)({}),i=()=>(0,l.useContext)(a),o=e=>{let{children:t,skipVariable:r}=e,i=(0,l.useMemo)(()=>({skipVariable:r}),[r]);return(0,n.jsx)(a.Provider,{value:i,children:t})}},352708:function(e,t,r){r.d(t,{W3:()=>g,NB:()=>f});var n=r(110239),l=r(908600),a=r(950454),i=r(852469),o=r(498080),s=r(521419),d=r(843091),u=r(117280),c=r(461249);let y=c.ZP.div`
  margin-right: 4px;
  min-width: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--semi-color-text-2);
`,p=c.ZP.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${e=>{let{$inSelector:t}=e;return t&&(0,c.iv)`
      min-width: 50%;
    `}}
`,v=(0,c.ZP)(i.Vp)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & .semi-tag-content-center {
    justify-content: flex-start;
  }

  &.semi-tag {
    margin: 0;
    height: 22px;
  }
`,m=(0,c.ZP)(i.mP)`
  outline: ${e=>{let{$error:t}=e;return t?"1px solid red":"none"}};

  & .semi-tree-select-selection {
    padding: 0px;
    height: 22px;
  }

  & .semi-tree-select-selection-content {
    width: 100%;
  }

  & .semi-tree-select-selection-placeholder {
    padding-left: 10px;
  }
`,h=c.ZP.div`
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
`;var b=r(980812);let g=e=>{let{value:t,config:r={},onChange:d,style:c,readonly:g=!1,includeSchema:f,excludeSchema:x,hasError:j,triggerRender:T}=e,{skipVariable:E}=(0,b.WT)(),I=(0,u.V)({includeSchema:f,excludeSchema:x,skipVariable:E}),S=(0,l.useMemo)(()=>"string"==typeof t?(console.warn("The Value of VariableSelector is a string, it should be an ARRAY. \n","Please check the value of VariableSelector \n"),t):null==t?void 0:t.join("."),[t]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m,{dropdownMatchSelectWidth:!1,disabled:g,treeData:I,size:"small",value:S,clearIcon:null,$error:j,style:c,validateStatus:j?"error":void 0,onChange:(e,t)=>{d(t.keyPath)},renderSelectedItem:e=>{var t,l,a,s;if(!(null==e?void 0:e.keyPath))return(0,n.jsx)(v,{prefixIcon:(0,n.jsx)(o.Z,{}),color:"amber",closable:!g,onClose:()=>d(void 0),children:(null==r?void 0:r.notFoundContent)??"Undefined"});let u="string"==typeof(s=(null==(t=e.rootMeta)?void 0:t.icon)||(null==e?void 0:e.icon))?(0,n.jsx)("img",{style:{marginRight:8},width:12,height:12,src:s}):s,c=(0,n.jsx)(y,{children:(null==(l=e.rootMeta)?void 0:l.title)?`${null==(a=e.rootMeta)?void 0:a.title} ${e.isRoot?"":"-"} `:null});return(0,n.jsx)("div",{children:(0,n.jsx)(i.J2,{content:(0,n.jsxs)(h,{children:[u,c,(0,n.jsx)(p,{children:e.keyPath.slice(1).join(".")})]}),children:(0,n.jsxs)(v,{prefixIcon:u,closable:!g,onClose:()=>d(void 0),children:[c,!e.isRoot&&(0,n.jsx)(p,{$inSelector:!0,children:e.label})]})})})},showClear:!1,arrowIcon:(0,n.jsx)(s.Z,{size:"small"}),triggerRender:T,placeholder:(null==r?void 0:r.placeholder)??a.oci.t("Select Variable")})})};g.renderKey="variable-selector-render-key";let f=(0,d.f)(g)},117280:function(e,t,r){r.d(t,{V:()=>s});var n=r(110239),l=r(908600),a=r(937643),i=r(950454),o=r(852469);function s(e){let{includeSchema:t,excludeSchema:r,skipVariable:s}=e,d=(0,a.MT)(),u=(0,i.LF0)(),c=(0,l.useCallback)(e=>{var t;if(null==(t=e.meta)?void 0:t.icon)return"string"==typeof e.meta.icon?(0,n.jsx)("img",{style:{marginRight:8},width:12,height:12,src:e.meta.icon}):e.meta.icon;let r=a.Kz.astToSchema(e.type,{drilldownObject:!1});return(0,n.jsx)(o.JO,{size:"small",svg:d.getDisplayIcon(r||{})})},[]),y=function(e){var n,l,o;let d,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],p=null==e?void 0:e.type;if(!p)return null;i.GwP.isObject(p)&&(d=(p.properties||[]).map(t=>y(t,[...u,e])).filter(Boolean));let v=[...u.map(e=>e.key),e.key],m=v.join("."),h=!t||a.Kz.isASTMatchSchema(p,t),b=!!r&&a.Kz.isASTMatchSchema(p,r),g=!!s&&s(e),f=null==(n=e.meta)?void 0:n.disabled,x=h&&!b&&!g&&!f;return x||(null==d?void 0:d.length)?{key:m,label:(null==(l=e.meta)?void 0:l.title)||e.key,value:m,keyPath:v,icon:c(e),children:d,disabled:!x,rootMeta:(null==(o=u[0])?void 0:o.meta)||e.meta,isRoot:!(null==u?void 0:u.length)}:null};return[...u.slice(0).reverse()].map(e=>y(e)).filter(Boolean)}},393767:function(e,t,r){r.d(t,{S:()=>d});var n=r(908600),l=r(129034),a=r(969134),i=r(697497),o=r(325486),s=r(383909);function d(e){let{value:t,onChange:r,sortIndexKey:d}=e,[u,c]=(0,n.useState)([]),y=(0,n.useRef)(0),p=(0,n.useRef)(0),v=e=>"function"==typeof d?(0,a.Z)(e,d(e))||0:(0,a.Z)(e,d||"")||0;return(0,n.useEffect)(()=>{y.current=y.current+1,y.current!==p.current&&(y.current=p.current,c(e=>{let r=Object.entries(t||{}).sort((e,t)=>v(e[1])-v(t[1])).map(e=>{let[t]=e;return t}),n=e.map(e=>e.key).filter(Boolean),a=(0,i.Z)(r,n);return e.filter(e=>!e.key||r.includes(e.key)).map(e=>({id:e.id,key:e.key,value:e.key?null==t?void 0:t[e.key]:e.value})).concat(a.map(e=>({id:(0,l.x0)(),key:e,value:null==t?void 0:t[e]})))}))},[t]),{list:u,add:e=>{c(t=>[...t,{id:(0,l.x0)(),value:e}])},updateKey:(e,t)=>{p.current=p.current+1,c(n=>{let l=n.map(r=>r.id===e?{...r,key:t}:r);return r(Object.fromEntries(l.filter(e=>e.key).map(e=>[e.key,e.value]))),l})},updateValue:(e,t)=>{p.current=p.current+1,c(n=>{let l=n.map(r=>r.id===e?{...r,value:t}:r);return r(Object.fromEntries(l.filter(e=>e.key).map(e=>[e.key,e.value]).map((e,t)=>{let r="function"==typeof d?d(e[1]):d;return(0,o.Z)(e[1])&&r&&(0,s.Z)(e[1],r,t),e}))),l})},remove:e=>{p.current=p.current+1,c(t=>{let n=t.filter(t=>t.id!==e);return r(Object.fromEntries(n.filter(e=>e.key).map(e=>[e.key,e.value]))),n})}}}},164910:function(e,t,r){r.d(t,{M:()=>i,V:()=>o});var n=r(110239);r(908600);var l=r(937643),a=r(333762);(0,a.s)();let i=()=>(0,l.MT)(),o=e=>{let{types:t=[],children:r}=e;return(0,n.jsx)(l.A,{types:[...a.K,...t],children:r})}},333762:function(e,t,r){r.d(t,{K:()=>h,s:()=>b});var n=r(937643),l=r(110239);r(908600);var a=r(950454),i=r(852469),o=r(906387);let s={type:"string",ConstantRenderer:e=>(null==e?void 0:e.enableMultiLineStr)?(0,l.jsx)(i.Kx,{autosize:!0,rows:1,placeholder:a.oci.t("Please Input String"),disabled:e.readonly,...e}):(0,l.jsx)(i.II,{size:"small",placeholder:a.oci.t("Please Input String"),disabled:e.readonly,...e}),conditionRule:{[o.r.EQ]:{type:"string"},[o.r.NEQ]:{type:"string"},[o.r.CONTAINS]:{type:"string"},[o.r.NOT_CONTAINS]:{type:"string"},[o.r.IN]:{type:"array",items:{type:"string"}},[o.r.NIN]:{type:"array",items:{type:"string"}},[o.r.IS_EMPTY]:null,[o.r.IS_NOT_EMPTY]:null}};var d=r(980317);let u={type:"object",ConstantRenderer:e=>(0,l.jsx)(d.V,{mini:!0,value:e.value,onChange:t=>{var r;return null==(r=e.onChange)?void 0:r.call(e,t)},placeholder:a.oci.t("Please Input Object"),readonly:e.readonly}),conditionRule:{[o.r.IS_EMPTY]:null,[o.r.IS_NOT_EMPTY]:null}},c={type:"number",ConstantRenderer:e=>(0,l.jsx)(i.Rn,{placeholder:a.oci.t("Please Input Number"),size:"small",disabled:e.readonly,hideButtons:!0,...e}),conditionRule:{[o.r.EQ]:{type:"number"},[o.r.NEQ]:{type:"number"},[o.r.GT]:{type:"number"},[o.r.GTE]:{type:"number"},[o.r.LT]:{type:"number"},[o.r.LTE]:{type:"number"},[o.r.IN]:{type:"array",extra:{weak:!0}},[o.r.NIN]:{type:"array",extra:{weak:!0}}}},y={type:"map",ConstantRenderer:e=>(0,l.jsx)(d.V,{mini:!0,value:e.value,onChange:t=>{var r;return null==(r=e.onChange)?void 0:r.call(e,t)},placeholder:a.oci.t("Please Input Map"),readonly:e.readonly}),conditionRule:{[o.r.IS_EMPTY]:null,[o.r.IS_NOT_EMPTY]:null}},p={type:"integer",ConstantRenderer:e=>(0,l.jsx)(i.Rn,{placeholder:a.oci.t("Please Input Integer"),size:"small",disabled:e.readonly,precision:0,...e}),conditionRule:{[o.r.EQ]:{type:"number"},[o.r.NEQ]:{type:"number"},[o.r.GT]:{type:"number"},[o.r.GTE]:{type:"number"},[o.r.LT]:{type:"number"},[o.r.LTE]:{type:"number"},[o.r.IN]:{type:"array",extra:{weak:!0}},[o.r.NIN]:{type:"array",extra:{weak:!0}}}};var v=r(810927);let m={type:"date-time",ConstantRenderer:e=>(0,l.jsx)(i.Mt,{size:"small",type:"dateTime",density:"compact",defaultValue:Date.now(),style:{width:"100%",...e.style||{}},disabled:e.readonly,...e,onChange:t=>{var r;null==(r=e.onChange)||r.call(e,(0,v.WU)(t,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))},value:e.value}),conditionRule:{[o.r.EQ]:{type:"date-time"},[o.r.NEQ]:{type:"date-time"},[o.r.GT]:{type:"date-time"},[o.r.GTE]:{type:"date-time"},[o.r.LT]:{type:"date-time"},[o.r.LTE]:{type:"date-time"},[o.r.IS_EMPTY]:null,[o.r.IS_NOT_EMPTY]:null}},h=[s,u,c,p,{type:"boolean",ConstantRenderer:e=>{let{value:t,onChange:r,...n}=e;return(0,l.jsx)(i.Ph,{placeholder:a.oci.t("Please Select Boolean"),size:"small",disabled:e.readonly,optionList:[{label:a.oci.t("True"),value:1},{label:a.oci.t("False"),value:0}],value:+!!t,onChange:e=>null==r?void 0:r(!!e),...n})},conditionRule:{[o.r.EQ]:{type:"boolean"},[o.r.NEQ]:{type:"boolean"},[o.r.IS_TRUE]:null,[o.r.IS_FALSE]:null,[o.r.IN]:{type:"array",items:{type:"boolean"}},[o.r.NIN]:{type:"array",items:{type:"boolean"}}}},{type:"array",ConstantRenderer:e=>(0,l.jsx)(d.V,{mini:!0,value:e.value,onChange:t=>{var r;return null==(r=e.onChange)?void 0:r.call(e,t)},placeholder:a.oci.t("Please Input Array"),readonly:e.readonly}),conditionRule:{[o.r.IS_EMPTY]:null,[o.r.IS_NOT_EMPTY]:null,[o.r.CONTAINS]:{type:"array",extra:{weak:!0}},[o.r.NOT_CONTAINS]:{type:"array",extra:{weak:!0}},[o.r.EQ]:{type:"array",extra:{weak:!0}},[o.r.NEQ]:{type:"array",extra:{weak:!0}}}},y,m],b=()=>{var e;null!=(e=n.tK.getTypeByName("string"))&&e.ConstantRenderer||h.forEach(e=>n.tK.register(e))}},843091:function(e,t,r){r.d(t,{f:()=>a});var n=r(908600),l=r(950454);function a(e,t){let r=(null==t?void 0:t.renderKey)||e.renderKey||e.name||"",a=t=>{let a=(0,l.KUq)();if(!(null==a?void 0:a.isBound(l.Rf1)))return n.createElement(e,{...t});let i=a.get(l.Rf1).tryToGetRendererComponent(r);return(null==i?void 0:i.type)!==l.PiV.REACT?n.createElement(e,{...t}):n.createElement(i.renderer,{...t})};return a.renderKey=r,a}},47430:function(e,t,r){r.d(t,{d:()=>o,y:()=>i});var n=r(110239),l=r(908600),a=r(852469);function i(e,t){return r=>(0,n.jsx)(l.Suspense,{fallback:t||(0,n.jsx)(a.Od.Paragraph,{style:{width:"100%"},rows:1}),children:(0,n.jsx)(e,{...r})})}function o(e,t){return i((0,l.lazy)(e),t)}}}]);