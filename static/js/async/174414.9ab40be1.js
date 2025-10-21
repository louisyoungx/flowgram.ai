"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["174414"],{744596:function(e,t,n){n.d(t,{K:()=>d});var l=n(110239);n(908600);var i=n(852469),r=n(499164),o=n(352708),a=n(137022),s=n(244359);function d(e){var t;let{value:n={operator:"assign"},onChange:d,onDelete:u,readonly:c}=e;return(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,l.jsx)("div",{style:{width:150,minWidth:150,maxWidth:150},children:(null==n?void 0:n.operator)==="assign"?(0,l.jsx)(o.NB,{style:{width:"100%",height:26},value:null==n||null==(t=n.left)?void 0:t.content,config:{placeholder:"Select Left"},onChange:e=>null==d?void 0:d({...n,left:{type:"ref",content:e}})}):(0,l.jsx)(s.A,{style:{height:26},size:"small",placeholder:"Input Name",value:null==n?void 0:n.left,onChange:e=>null==d?void 0:d({...n,left:e})})}),(0,l.jsx)("div",{style:{flexGrow:1},children:(0,l.jsx)(a.t,{readonly:c,value:null==n?void 0:n.right,onChange:e=>null==d?void 0:d({...n,right:e})})}),u&&(0,l.jsx)("div",{children:(0,l.jsx)(i.hU,{size:"small",theme:"borderless",icon:(0,l.jsx)(r.Z,{}),onClick:()=>null==u?void 0:u()})})]})}},986377:function(e,t,n){n.d(t,{H:()=>s});var l=n(110239);n(908600);var i=n(950454),r=n(852469),o=n(633988),a=n(744596);function s(e){let{name:t,readonly:n}=e;return(0,l.jsx)(i.F26,{name:t,children:e=>{let{field:t}=e;return(0,l.jsxs)(l.Fragment,{children:[t.map((e,i)=>(0,l.jsx)(a.K,{readonly:n,value:e.value,onChange:t=>{e.onChange(t)},onDelete:()=>t.remove(i)},e.key)),(0,l.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,l.jsx)(r.zx,{size:"small",theme:"borderless",icon:(0,l.jsx)(o.Z,{}),onClick:()=>t.append({operator:"assign"}),children:"Assign"}),(0,l.jsx)(r.zx,{size:"small",theme:"borderless",icon:(0,l.jsx)(o.Z,{}),onClick:()=>t.append({operator:"declare"}),children:"Declaration"})]})]})}})}},899324:function(e,t,n){n.d(t,{U:()=>v});var l=n(110239);n(908600);var i=n(950454),r=n(852469),o=n(551503),a=n(633988),s=n(393767),d=n(352708),u=n(461249);let c=u.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`,p=u.ZP.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;function v(e){let{readonly:t,style:n}=e,{list:u,add:v,updateKey:h,updateValue:f,remove:x}=(0,s.S)(e);return(0,l.jsxs)("div",{children:[(0,l.jsx)(c,{style:n,children:u.map(e=>{var n;return(0,l.jsxs)(p,{children:[(0,l.jsx)(r.II,{style:{width:100},disabled:t,size:"small",value:e.key,onChange:t=>h(e.id,t)}),(0,l.jsx)(d.NB,{style:{flexGrow:1},readonly:t,value:null==(n=e.value)?void 0:n.content,onChange:t=>f(e.id,{type:"ref",content:t})}),(0,l.jsx)(r.zx,{disabled:t,icon:(0,l.jsx)(o.Z,{}),size:"small",onClick:()=>x(e.id)})]},e.id)})}),(0,l.jsx)(r.zx,{disabled:t,icon:(0,l.jsx)(a.Z,{}),size:"small",onClick:()=>v(),children:i.oci.t("Add")})]})}},683411:function(e,t,n){n.d(t,{u:()=>a});var l=n(110239);n(908600);var i=n(950454),r=n(352708);let o={type:"array",extra:{weak:!0}};function a(e){return(0,l.jsx)(i._cB,{children:(0,l.jsx)(r.W3,{...e,includeSchema:o})})}},168059:function(e,t,n){n.d(t,{T:()=>o,y:()=>r});var l=n(690542),i=n(370516);let r=()=>Promise.all([n.e("363844"),n.e("662322"),n.e("279539")]).then(n.bind(n,984654)).then(e=>{l.Mj.register("typescript",e.typescript);let t=new Worker(new URL(n.p+n.u("780328"),n.b),Object.assign({},{type:"module"},{type:void 0}));e.typescript.languageService.initialize(t,{compilerOptions:{lib:["es2015","dom"],noImplicitAny:!1}})}),o=(0,i.h)(r,{displayName:"TypeScriptCodeEditor",fixLanguageId:"typescript"})},240835:function(e,t,n){n.d(t,{Id:()=>s,J_:()=>a});var l=n(110239),i=n(908600),r=n(906387);let o=(0,i.createContext)({rules:{},ops:r.s}),a=e=>{let{rules:t,ops:n}=e;return(0,l.jsx)(o.Provider,{value:{rules:t,ops:n},children:e.children})},s=()=>(0,i.useContext)(o)},548034:function(e,t,n){n.d(t,{k:()=>a});var l=n(908600),i=n(950454),r=n(164910),o=n(240835);function a(e){let{leftSchema:t,operator:n,ruleConfig:a}=e,s=(0,r.M)(),{rules:d,ops:u}=(0,o.Id)(),c=(0,l.useMemo)(()=>(null==a?void 0:a.rules)||d||{},[d,null==a?void 0:a.rules]),p=(0,l.useMemo)(()=>(null==a?void 0:a.ops)||u||{},[u,null==a?void 0:a.ops]),v=(0,l.useMemo)(()=>t?s.getTypeBySchema(t):void 0,[t,s]),h=(0,l.useMemo)(()=>{if(v)return c[v.type]?c[v.type]:"function"==typeof v.conditionRule?v.conditionRule(t):v.conditionRule},[c,t,v]),f=(0,l.useMemo)(()=>Object.keys(h||{}).filter(e=>p[e]).map(e=>{var t;return{...(null==p?void 0:p[e])||{},value:e,label:i.oci.t((null==p||null==(t=p[e])?void 0:t.label)||e)}}),[h,p]),x=(0,l.useMemo)(()=>{let e=(null==h?void 0:h[n||""])||null;if(e)return"string"==typeof e?{type:e,extra:{weak:!0}}:e},[h,n]);return{rule:h,opConfig:(0,l.useMemo)(()=>p[n||""],[n,p]),opOptionList:f,targetSchema:x}}},983847:function(e,t,n){n.d(t,{i:()=>g});var l=n(110239),i=n(908600),r=n(937643),o=n(950454),a=n(852469),s=n(521419),d=n(352708),u=n(137022),c=n(548034),p=n(461249);let v=p.ZP.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,h=p.ZP.div``,f=p.ZP.div`
  width: 100%;
`,x=p.ZP.div`
  width: 100%;
`,y=p.ZP.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  overflow: hidden;
`,m={ops:{},rules:{}};function g(e){var t;let{style:n,value:p,onChange:g,readonly:j,ruleConfig:b=m}=e,{left:w,operator:k,right:T}=p||{},Z=(0,o.rVg)(),P=(0,i.useMemo)(()=>{if(w)return Z.getByKeyPath(w.content)},[Z,w]),C=(0,i.useMemo)(()=>{if(P)return r.Kz.astToSchema(P.type,{drilldown:!1})},[null==P||null==(t=P.type)?void 0:t.hash]),{rule:R,opConfig:z,opOptionList:I,targetSchema:M}=(0,c.k)({leftSchema:C,operator:k});return(0,l.jsxs)(v,{style:n,children:[(0,l.jsx)(h,{children:(0,l.jsx)(a.Ph,{style:{height:22},disabled:j,size:"small",value:k,optionList:I,onChange:e=>{g({...p,operator:e})},triggerRender:e=>{let{value:t}=e;return(0,l.jsx)(a.zx,{size:"small",disabled:!R,children:(null==z?void 0:z.abbreviation)||(0,l.jsx)(s.Z,{size:"small"})})}})}),(0,l.jsxs)(y,{children:[(0,l.jsx)(f,{children:(0,l.jsx)(d.NB,{readonly:j,style:{width:"100%"},value:null==w?void 0:w.content,onChange:e=>g({...p,left:{type:"ref",content:e}})})}),(0,l.jsx)(x,{children:M?(0,l.jsx)(u.t,{readonly:j||!R,value:T,schema:M,onChange:e=>g({...p,right:e})}):(0,l.jsx)(a.II,{size:"small",disabled:!0,style:{pointerEvents:"none"},value:(null==z?void 0:z.rightDisplay)||o.oci.t("Empty")})})]})]})}},795486:function(e,t,n){n.d(t,{t:()=>d});var l=n(110239),i=n(908600),r=n(937643),o=n(950454),a=n(687252),s=n(246132);function d(e){let{value:t,title:n,showIconInTree:d}=e,u=(0,o.rVg)(),c=(null==t?void 0:t.type)==="ref"?u.getByKeyPath(null==t?void 0:t.content):void 0,p=(0,i.useMemo)(()=>(null==t?void 0:t.type)==="ref"?r.Kz.astToSchema(null==c?void 0:c.type):(null==t?void 0:t.type)==="template"?{type:"string"}:(null==t?void 0:t.type)==="constant"?a.U.inferConstantJsonSchema(t):{type:"unknown"},[t,null==c?void 0:c.hash]);return(0,l.jsx)(s.s,{title:n,value:p,showIconInTree:d,warning:(null==t?void 0:t.type)==="ref"&&!c})}},207121:function(e,t,n){n.d(t,{l:()=>v,y:()=>p});var l=n(110239),i=n(908600),r=n(111886),o=n(950454),a=n(687252),s=n(795486),d=n(461249);let u=d.ZP.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;var c=n(246132);function p(e){let{value:t,showIconInTree:n}=e,i=Object.entries(t||{});return(0,l.jsx)(u,{children:i.map(e=>{let[t,i]=e;return a.U.isFlowValue(i)?(0,l.jsx)(s.t,{title:t,value:i,showIconInTree:n},t):(0,r.Z)(i)?(0,l.jsx)(v,{title:t,value:i,showIconInTree:n},t):null})})}function v(e){let{value:t,title:n,showIconInTree:r}=e,s=(0,o.rVg)(),d=(0,i.useMemo)(()=>a.U.inferJsonSchema(t,s.scope),[s.version,t]);return(0,l.jsx)(c.s,{title:n,value:d,showIconInTree:r})}},720392:function(e,t,n){n.d(t,{L:()=>u});var l=n(110239),i=n(908600),r=n(937643),o=n(950454),a=n(246132),s=n(461249);let d=s.ZP.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;function u(e){var t;let{value:n,showIconInTree:s,displayFromScope:u}=e,c=(0,o.$eD)(),p=(0,o.JAk)();(0,i.useEffect)(()=>{if(!u)return()=>null;let e=c.output.onListOrAnyVarChange(()=>{p()});return()=>{e.dispose()}},[u]);let v=Object.entries((u?null==(t=c.output.variables)?void 0:t.reduce((e,t)=>{var n;return e={...e,...(null==(n=r.Kz.astToSchema(t.type))?void 0:n.properties)||{}}},{}):(null==n?void 0:n.properties)||{})||{});return(0,l.jsx)(d,{children:v.map(e=>{let[t,n]=e;return(0,l.jsx)(a.s,{title:t,value:n,showIconInTree:s,warning:!n},t)})})}},246132:function(e,t,n){n.d(t,{s:()=>p});var l=n(110239),i=n(908600),r=n(852469),o=n(164910),a=n(227103),s=n(461249);let d=s.ZP.div`
  padding: 10px;
`,u=(0,s.ZP)(r.Vp)`
  padding: 4px;

  .tag-icon {
    width: 12px;
    height: 12px;
  }
`,c=s.ZP.span`
  display: inline-block;
  margin-left: 4px;
  margin-top: -1px;
  overflow: hidden;
  text-overflow: ellipsis;
`;function p(e){let{value:t={},showIconInTree:n,title:s,warning:p}=e,v=(0,o.M)(),h=(null==v?void 0:v.getDisplayIcon(t))||v.getDisplayIcon({type:"unknown"});return(0,l.jsx)(r.J2,{content:(0,l.jsx)(d,{children:(0,l.jsx)(a.u,{value:t,typeManager:v,showIcon:n})}),children:(0,l.jsxs)(u,{color:p?"amber":"white",children:[h&&i.cloneElement(h,{className:"tag-icon"}),s&&(0,l.jsx)(c,{children:s})]})})}},227103:function(e,t,n){n.d(t,{u:()=>p});var l=n(110239),i=n(908600),r=n(937643),o=n(461249);let a=o.ZP.div`
  display: flex;
  align-items: center;

  .tree-icon {
    margin-right: 8px;
    width: 14px;
    height: 14px;
  }

  height: 27px;
  white-space: nowrap;
`,s=o.ZP.div`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: var(--semi-color-text-3);
  }

  &::after {
    top: 0px;
    right: 6px;
    width: 15px;
    height: 1px;
  }
`,d=o.ZP.div`
  // overflow: hidden;
  // text-overflow: ellipsis;
`,u=o.ZP.div`
  padding-left: 30px;
  position: relative;

  /* &::before {
    content: '';
    position: absolute;
    background-color: var(--semi-color-text-3);
    top: 0px;
    bottom: 0px;
    left: -22px;
    width: 1px;
  } */
`,c=o.ZP.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: var(--semi-color-text-3);
  }

  &:not(:last-child)::before {
    width: 1px;
    top: 0;
    bottom: 0;
    left: -22px;
  }

  &:last-child::before {
    width: 1px;
    top: 0;
    height: 14px;
    left: -22px;
  }

  ${e=>0===e.depth&&(0,o.iv)`
      &::before {
        width: 0px !important;
      }
    `}
`;function p(e){return(0,l.jsx)(v,{...e})}function v(e){let{value:t={},drilldown:n=!0,depth:o=0,showIcon:p=!0,parentKey:h=""}=e||{},f=(0,r.MT)(),x=f.getTypeBySchema(t),y=f.getComplexText(t),m=null==f?void 0:f.getDisplayIcon(t),g=Object.entries((n&&x?x.getTypeSchemaProperties(t):{})||{});return(0,l.jsxs)(c,{depth:o,children:[(0,l.jsxs)(a,{children:[0!==o&&(0,l.jsx)(s,{}),p&&m&&i.cloneElement(m,{className:"tree-icon"}),(0,l.jsx)(d,{children:h?(0,l.jsxs)(l.Fragment,{children:[`${h} (`,y,")"]}):y})]}),(null==g?void 0:g.length)?(0,l.jsx)(u,{children:g.map(t=>{let[n,i]=t;return(0,l.jsx)(v,{...e,parentKey:n,value:i,depth:o+1},n)})}):null]},h||"root")}},800274:function(e,t,n){n.d(t,{s:()=>l});let l=(0,n(47430).d)(()=>n.e("642722").then(n.bind(n,499576)).then(e=>({default:e.JsonEditorWithVariables})))},637298:function(e,t,n){n.d(t,{B:()=>l});let l=(0,n(47430).d)(()=>n.e("211346").then(n.bind(n,695345)).then(e=>({default:e.PromptEditorWithVariables})))},316374:function(e,t,n){n.d(t,{l:()=>i});var l=n(950454);let i=(0,l.W2M)({private:!0,parse:(e,t)=>{var n,i;return[l.qRT.createVariableDeclaration({key:`${t.node.id}_locals`,meta:{title:null==(n=t.node.form)?void 0:n.getValueIn("title"),icon:null==(i=t.node.getNodeRegistry().info)?void 0:i.icon},type:l.qRT.createObject({properties:[l.qRT.createProperty({key:"item",initializer:l.qRT.createEnumerateExpression({enumerateFor:l.qRT.createKeyPathExpression({keyPath:e.content||[]})})}),l.qRT.createProperty({key:"index",type:l.qRT.createNumber()})]})})]}})},236831:function(e,t,n){n.d(t,{H:()=>i});var l=n(950454);let i=[{event:l.zEJ.onValueChange,effect:e=>{let{value:t,context:n}=e;n.node.getData(l._J4).allScopes.forEach(e=>{e.output.variables.forEach(e=>{var l;e.updateMeta({...e.meta||{},title:t||n.node.id,icon:null==(l=n.node.getNodeRegistry().info)?void 0:l.icon})})})}}]},183173:function(e,t,n){n.d(t,{S:()=>r});var l=n(437104),i=n(950454);let r=function(){let{scope:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{event:i.zEJ.onValueInit,effect:t=>{let{context:n,form:r}=t,o=("private"===e?(0,i.u$R)(n.node):(0,i.k6H)(n.node)).available.onListOrAnyVarChange(()=>{(0,l.Z)(r.state.errors)||r.validate()});return()=>o.dispose()}}]}},48557:function(e,t,n){n.d(t,{F:()=>a,m:()=>o});var l=n(383909),i=n(937643),r=n(950454);let o=(0,r.W2M)({parse:(e,t)=>{var n,l;return[r.qRT.createVariableDeclaration({key:`${t.node.id}`,meta:{title:null==(n=t.node.form)?void 0:n.getValueIn("title"),icon:null==(l=t.node.getNodeRegistry().info)?void 0:l.icon},type:r.qRT.createObject({properties:Object.entries(e).map(e=>{let[t,n]=e;return r.qRT.createProperty({key:t,initializer:r.qRT.createWrapArrayExpression({wrapFor:r.qRT.createKeyPathExpression({keyPath:(null==n?void 0:n.content)||[]})})})})})})]}}),a=(0,r.CR5)({name:"batch-outputs-plugin",onSetupFormMeta(e,t){let{mergeEffect:n,addFormatOnSubmit:a}=e,{outputKey:s,inferTargetKey:d}=t;n({[s]:o}),d&&a((e,t)=>{var n;let o=null==(n=(0,r.k6H)(t.node).output.variables)?void 0:n[0];return(null==o?void 0:o.type)&&(0,l.Z)(e,d,i.Kz.astToSchema(null==o?void 0:o.type)),e})},onInit(e,t){let{outputKey:n}=t,l=e.node.getService(r.Aub),i=e.node.flowNodeType,o=`${i}-outputs`;l.hasTransformer(o)||l.registerTransformer(o,{transformCovers:(e,t)=>{var n,l;let o=null==(n=t.scope.meta)?void 0:n.node;return(null==o||null==(l=o.parent)?void 0:l.flowNodeType)===i?[...e,(0,r.k6H)(o.parent)]:e},transformDeps(e,t){let n=t.scope.meta;if((null==n?void 0:n.type)===r.loc.private)return e;let l=null==n?void 0:n.node;if((null==l?void 0:l.flowNodeType)===i){let e=l.blocks;return[(0,r.u$R)(l),...e.map(e=>(0,r.k6H)(e))]}return e}})}})},769424:function(e,t,n){n.d(t,{n:()=>s});var l=n(689478),i=n(241787),r=n(383909),o=n(937643),a=n(950454);let s=(0,a.CR5)({onSetupFormMeta(e,t){let{addFormatOnSubmit:n,mergeEffect:s}=e,{assignKey:d,outputKey:u}=t;d&&u&&(s({[d]:(0,a.W2M)({parse:(e,t)=>{var n,r,s;let d=(s=e.filter(e=>"declare"===e.operator&&e.left&&e.right),s&&s.length?(0,i.Z)(s,(0,l.Z)("left",2)):[]);return[a.qRT.createVariableDeclaration({key:`${t.node.id}`,meta:{title:null==(n=t.node.form)?void 0:n.getValueIn("title"),icon:null==(r=t.node.getNodeRegistry().info)?void 0:r.icon},type:a.qRT.createObject({properties:d.map(e=>{var t,n,l,i;return a.qRT.createProperty({key:e.left,type:(null==(t=e.right)?void 0:t.type)==="constant"?o.Kz.schemaToAST((null==(n=e.right)?void 0:n.schema)||{}):void 0,initializer:(null==(l=e.right)?void 0:l.type)==="ref"?a.qRT.createKeyPathExpression({keyPath:(null==(i=e.right)?void 0:i.content)||[]}):{}})})})})]}})}),n((e,t)=>{var n,l;return(0,r.Z)(e,u,o.Kz.astToSchema(null==(l=(0,a.k6H)(t.node).output.variables)||null==(n=l[0])?void 0:n.type)),e}))}})},401255:function(e,t,n){n.d(t,{k:()=>u});var l=n(969134),i=n(383909),r=n(492320),o=n(631952),a=n(950454),s=n(687252);let{produce:d}=new o.Ve({autoFreeze:!1}),u=(0,a.CR5)({onSetupFormMeta(e,t){let{addFormatOnSubmit:n,addFormatOnInit:o}=e,{sourceKey:u,targetKey:c,scope:p,ignoreConstantSchema:v}=t;u&&c&&(n((e,t)=>d(e,n=>{let o=(0,l.Z)(e,u);if((0,i.Z)(n,c,s.U.inferJsonSchema(o,"private"===p?(0,a.u$R)(t.node):(0,a.k6H)(t.node))),v)for(let{value:t,path:n}of s.U.traverse(o,{includeTypes:["constant"]}))s.U.isConstant(t)&&(null==t?void 0:t.schema)&&(0,i.Z)(e,`${u}.${n}`,(0,r.Z)(t,["schema"]))})),v&&o((e,t)=>{let n=(0,l.Z)(e,c);if(!n)return e;for(let{value:t,pathArr:r}of s.U.traverse((0,l.Z)(e,u),{includeTypes:["constant"]}))if(s.U.isConstant(t)&&!(null==t?void 0:t.schema)){let e=r.map(e=>`properties.${e}`).join("."),o=(0,l.Z)(n,e);o&&(0,i.Z)(t,"schema",o)}return e}))}})},38643:function(e,t,n){n.d(t,{W:()=>o});var l=n(863875),i=n(950454),r=n(687252);function o(e,t){let{node:n,required:o,errorMessages:a}=t,{required:s="Field is required",unknownVariable:d="Unknown Variable"}=a||{};if(o&&((0,l.Z)(e)||(0,l.Z)(null==e?void 0:e.content)||(null==e?void 0:e.content)===""))return{level:i.Odm.Error,message:s};if((null==e?void 0:e.type)==="ref"&&!(0,i.k6H)(n).available.getByKeyPath((null==e?void 0:e.content)||[]))return{level:i.Odm.Error,message:d};if((null==e?void 0:e.type)==="template"){for(let t of r.U.getTemplateKeyPaths(e))if(!(0,i.k6H)(n).available.getByKeyPath(t))return{level:i.Odm.Error,message:d}}}}}]);