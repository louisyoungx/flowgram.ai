(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["316516"],{241108:function(e){function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=241108,e.exports=t},994003:function(e,t,n){"use strict";n.d(t,{VX:()=>ew,WY:()=>nm,B1:()=>tB,FT:()=>nu,VZ:()=>ns,iB:()=>ty,_R:()=>e5,Xp:()=>na,US:()=>tE,s1:()=>t3,n4:()=>np,Hs:()=>ni,Sd:()=>no,sb:()=>tA,kk:()=>nd,PF:()=>t$,y3:()=>t5,pq:()=>eC,uA:()=>te,H:()=>nt,Kz:()=>l,LE:()=>t2,XA:()=>ti,gB:()=>nl,lz:()=>nn});var l,r,a=n(908600),i=n(950454),o=n(245803),s=n(523076),c=n(95160),u=n(362270),d=n(461932),p=n(832176),m=n(319428),g=n(893740),h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,v=(e,t,n,l)=>{for(var r,a=l>1?void 0:l?y(t,n):t,i=e.length-1;i>=0;i--)(r=e[i])&&(a=(l?r(t,n,a):r(a))||a);return l&&a&&h(t,n,a),a},f=class{getTypeByName(e){return this.typeRegistryMap.get(e)}getTypeBySchema(e){let t=this.getTypeNameFromSchema(e);return this.typeRegistryMap.get(t)}getDefaultTypeRegistry(){return this.typeRegistryMap.get("default")}register(e){let t="function"==typeof e?e({typeManager:this}):e,n=t.type;if(!n)return;let l=this.getTypeByName(n),r=t.extend?this.getTypeByName(t.extend):this.getDefaultTypeRegistry();l?this.typeRegistryMap.set(n,{...r,...l,...t}):this.typeRegistryMap.set(n,{...r,...t})}triggerChanges(){this.onTypeRegistryChangeEmitter.fire(Array.from(this.typeRegistryMap.values()))}getAllTypeRegistries(){return Array.from(this.typeRegistryMap.values())}unregister(e){this.typeRegistryMap.delete(e)}constructor(){this.typeRegistryMap=new Map,this.onTypeRegistryChangeEmitter=new p.Q5,this.onTypeRegistryChange=this.onTypeRegistryChangeEmitter.event}};f=v([(0,d.b2)()],f);var C=e=>{let{typeManager:t}=e;return{type:"default",label:"",icon:a.createElement(a.Fragment,null),container:!1,getJsonPaths:()=>[],getDisplayIcon:e=>{var n;return(null==(n=t.getTypeBySchema(e))?void 0:n.icon)||a.createElement(a.Fragment,null)},getPropertiesParent:()=>void 0,canAddField:()=>!1,getDefaultValue:()=>void 0,getValueText:()=>"",getStringValueByTypeSchema:e=>e.type,getTypeSchemaProperties:()=>void 0,getDisplayLabel:e=>{var n;return a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",gap:8}},null==(n=t.getTypeBySchema(e))?void 0:n.label,a.createElement("span",{style:{fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},t.getComplexText(e)))},getDisplayText:e=>t.getComplexText(e)}},E=()=>({type:"string",label:"String",icon:a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M9.3342 3.33321C8.96601 3.33321 8.66753 3.63169 8.66753 3.99988C8.66753 4.36807 8.96601 4.66655 9.3342 4.66655H14.6675C15.0357 4.66655 15.3342 4.36807 15.3342 3.99988C15.3342 3.63169 15.0357 3.33321 14.6675 3.33321H9.3342Z",fill:"currentColor"}),a.createElement("path",{d:"M10.0009 7.99988C10.0009 7.63169 10.2993 7.33321 10.6675 7.33321H14.6675C15.0357 7.33321 15.3342 7.63169 15.3342 7.99988C15.3342 8.36807 15.0357 8.66655 14.6675 8.66655H10.6675C10.2993 8.66655 10.0009 8.36807 10.0009 7.99988Z",fill:"currentColor"}),a.createElement("path",{d:"M12.0009 11.3332C11.6327 11.3332 11.3342 11.6317 11.3342 11.9999C11.3342 12.3681 11.6327 12.6665 12.0009 12.6665H14.6675C15.0357 12.6665 15.3342 12.3681 15.3342 11.9999C15.3342 11.6317 15.0357 11.3332 14.6675 11.3332H12.0009Z",fill:"currentColor"}),a.createElement("path",{d:"M9.86659 14.1482L8.23444 10.1844H3.18136C3.13868 10.1844 3.09685 10.1808 3.05616 10.1738L1.66589 14.1129C1.53049 14.4965 1.10971 14.6978 0.726058 14.5624C0.342408 14.427 0.141166 14.0062 0.276572 13.6225L4.37566 2.00848C4.71323 1.05202 6.05321 1.01763 6.4394 1.95552L11.2289 13.5872C11.3838 13.9634 11.2044 14.394 10.8282 14.5489C10.452 14.7038 10.0215 14.5244 9.86659 14.1482ZM5.44412 3.40791L3.57241 8.71109H7.62778L5.44412 3.40791Z",fill:"currentColor"})),getDefaultSchema:()=>({type:"string"}),getValueText:e=>e?`${e}`:"",getDefaultValue:()=>""}),b=()=>({type:"object",label:"Object",icon:a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M5.33893 1.5835C5.66613 1.5835 5.93137 1.88142 5.93137 2.20862C5.93137 2.53582 5.66613 2.76838 5.33893 2.76838H4.9099C4.34717 2.76838 4.08062 3.07557 4.08062 3.71921V6.58633C4.08062 7.30996 3.80723 7.84734 3.26798 8.19105C3.11426 8.28902 3.10884 8.55273 3.26068 8.65359C3.80476 9.01503 4.08062 9.53994 4.08062 10.2434V13.1251C4.08062 13.7395 4.34717 14.0613 4.9099 14.0613H5.33893C5.66613 14.0613 5.93137 14.3435 5.93137 14.6707C5.93137 14.9979 5.66613 15.2462 5.33893 15.2462H4.64335C3.99177 15.2462 3.48828 15.0268 3.13287 14.6172C2.80708 14.2369 2.64419 13.7103 2.64419 13.0666V10.3165C2.64419 9.8923 2.55534 9.58511 2.37764 9.39494C2.26816 9.27135 1.80618 9.17938 1.38154 9.11602C1.02726 9.06315 0.759057 8.76744 0.765747 8.4093C0.772379 8.0543 1.03439 7.7566 1.38545 7.70346C1.80778 7.63952 2.26906 7.54968 2.37764 7.43477C2.55534 7.22997 2.64419 6.92278 2.64419 6.51319V3.77772C2.64419 3.11945 2.80708 2.59284 3.13287 2.21251C3.48828 1.78829 3.99177 1.5835 4.64335 1.5835H5.33893Z",fill:"currentColor"}),a.createElement("path",{d:"M10.962 15.2463C10.6348 15.2463 10.3696 14.9483 10.3696 14.6211C10.3696 14.2939 10.6348 14.0614 10.962 14.0614H11.391C11.9538 14.0614 12.2203 13.7542 12.2203 13.1105V10.2434C12.2203 9.51979 12.4937 8.98241 13.033 8.6387C13.1867 8.54073 13.1921 8.27703 13.0403 8.17616C12.4962 7.81472 12.2203 7.28982 12.2203 6.58638V3.70463C12.2203 3.09024 11.9538 2.76842 11.391 2.76842L10.962 2.76842C10.6348 2.76842 10.3696 2.48627 10.3696 2.15907C10.3696 1.83188 10.6348 1.58354 10.962 1.58354L11.6576 1.58354C12.3092 1.58354 12.8127 1.80296 13.1681 2.21255C13.4939 2.59289 13.6568 3.1195 13.6568 3.76314V6.51324C13.6568 6.93745 13.7456 7.24464 13.9233 7.43481C14.03 7.5553 14.4328 7.64858 14.8186 7.71393C15.1718 7.77376 15.4401 8.06977 15.4334 8.42791C15.4268 8.78291 15.1646 9.08018 14.814 9.13633C14.4306 9.19774 14.0291 9.28303 13.9233 9.39499C13.7456 9.59978 13.6568 9.90697 13.6568 10.3166V13.052C13.6568 13.7103 13.4939 14.2369 13.1681 14.6172C12.8127 15.0415 12.3092 15.2463 11.6576 15.2463H10.962Z",fill:"currentColor"})),getTypeSchemaProperties:e=>e.properties||{},getPropertiesParent:e=>e,canAddField:()=>!0,getDefaultSchema:()=>({type:"object",required:[],properties:{}}),getIJsonSchemaPropertiesParent:e=>e,getValueText:()=>"",getJsonPaths:()=>["properties"],getDefaultValue:()=>({})}),x=()=>({type:"number",label:"Number",extend:"integer",icon:a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M3.44151 5.3068C3.44151 3.83404 4.71542 2.64014 6.18818 2.64014C7.66094 2.64014 8.93484 3.83404 8.93484 5.3068V10.6135C8.93484 12.0862 7.66094 13.2801 6.18818 13.2801C4.71542 13.2801 3.44151 12.0862 3.44151 10.6135V5.3068ZM7.60151 5.3068C7.60151 4.57042 6.92456 3.97347 6.18818 3.97347C5.4518 3.97347 4.77484 4.57042 4.77484 5.3068V10.6135C4.77484 11.3498 5.4518 11.9468 6.18818 11.9468C6.92456 11.9468 7.60151 11.3498 7.60151 10.6135V5.3068Z",fill:"currentColor"}),a.createElement("path",{d:"M12.9882 2.64014C11.5154 2.64014 10.2415 3.83404 10.2415 5.3068V10.6135C10.2415 12.0862 11.5154 13.2801 12.9882 13.2801C14.4609 13.2801 15.7348 12.0862 15.7348 10.6135V5.3068C15.7348 3.83404 14.4609 2.64014 12.9882 2.64014ZM14.4015 10.6135C14.4015 11.3498 13.7246 11.9468 12.9882 11.9468C12.2518 11.9468 11.5748 11.3498 11.5748 10.6135V5.3068C11.5748 4.57042 12.2518 3.97347 12.9882 3.97347C13.7246 3.97347 14.4015 4.57042 14.4015 5.3068V10.6135Z",fill:"currentColor"}),a.createElement("path",{d:"M1.21484 13.2001C1.76713 13.2001 2.21484 12.7524 2.21484 12.2001C2.21484 11.6479 1.76713 11.2001 1.21484 11.2001C0.662559 11.2001 0.214844 11.6479 0.214844 12.2001C0.214844 12.7524 0.662559 13.2001 1.21484 13.2001Z",fill:"currentColor"})),getValueText:e=>e?`${e}`:"",getDefaultSchema:()=>({type:"number"})}),V=()=>({type:"boolean",label:"Boolean",icon:a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.668 4.66683H5.33463C3.49369 4.66683 2.0013 6.15921 2.0013 8.00016C2.0013 9.84111 3.49369 11.3335 5.33463 11.3335H10.668C12.5089 11.3335 14.0013 9.84111 14.0013 8.00016C14.0013 6.15921 12.5089 4.66683 10.668 4.66683ZM5.33463 3.3335C2.75731 3.3335 0.667969 5.42283 0.667969 8.00016C0.667969 10.5775 2.75731 12.6668 5.33463 12.6668H10.668C13.2453 12.6668 15.3346 10.5775 15.3346 8.00016C15.3346 5.42283 13.2453 3.3335 10.668 3.3335H5.33463Z",fill:"currentColor"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.66797 8.00016C8.66797 6.89559 9.5634 6.00016 10.668 6.00016C11.7725 6.00016 12.668 6.89559 12.668 8.00016C12.668 9.10473 11.7725 10.0002 10.668 10.0002C9.5634 10.0002 8.66797 9.10473 8.66797 8.00016ZM10.668 7.3335C10.2998 7.3335 10.0013 7.63197 10.0013 8.00016C10.0013 8.36835 10.2998 8.66683 10.668 8.66683C11.0362 8.66683 11.3346 8.36835 11.3346 8.00016C11.3346 7.63197 11.0362 7.3335 10.668 7.3335Z",fill:"currentColor"})),getDefaultSchema:()=>({type:"boolean"}),getValueText:e=>void 0===e?"":e?"True":"False",getDefaultValue:()=>!1}),w=e=>{let{typeManager:t}=e,n=a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M5.23759 1.00342H2.00391V14.997H5.23759V13.6251H3.35127V2.37534H5.23759V1.00342Z",fill:"currentColor"}),a.createElement("path",{d:"M10.7624 1.00342H13.9961V14.997H10.7624V13.6251H12.6487V2.37534H10.7624V1.00342Z",fill:"currentColor"})),l=e=>{let r=e.items,i=t.getTypeBySchema(r);switch(null==i?void 0:i.type){case"object":return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.58105H3.6139V2.87326H1.36702V13.1264H3.6139V14.4186H0V1.58105ZM3.41656 13.3264V13.3266H1.17155V13.3264H3.41656ZM0.197344 14.2186H0.199219V1.78125H3.41656V1.78105H0.197344V14.2186ZM12.3861 1.58105H16V14.4186H12.3861V13.1264H14.633V2.87326H12.3861V1.58105ZM12.5834 2.67326V1.78105H15.8027V1.78125H12.5853V2.67326H12.5834ZM12.5853 13.3266V14.2186H12.5834V13.3264H14.8303V2.67345H14.8322V13.3266H12.5853ZM3.82031 5.9091C3.82031 5.18535 4.40703 4.59863 5.13078 4.59863C5.85453 4.59863 6.44124 5.18535 6.44124 5.9091C6.44124 6.56485 5.9596 7.1081 5.33078 7.2044V8.70018H5.32877C5.32982 8.75093 5.33078 8.80912 5.33078 8.87034V9.72111C5.33078 10.0195 5.57268 10.2614 5.87109 10.2614H6.24124C6.55613 10.2614 6.8114 10.5167 6.8114 10.8316C6.8114 11.1465 6.55613 11.4017 6.24124 11.4017H5.87109C4.94291 11.4017 4.19047 10.6493 4.19047 9.72111V6.82186C3.96158 6.58607 3.82031 6.26397 3.82031 5.9091ZM7.33679 5.9091C7.33679 5.59421 7.59205 5.33894 7.90694 5.33894H11.6085C11.9234 5.33894 12.1786 5.59421 12.1786 5.9091C12.1786 6.22399 11.9234 6.47925 11.6085 6.47925H7.90694C7.59205 6.47925 7.33679 6.22399 7.33679 5.9091ZM7.33679 9.86846C7.33679 9.55357 7.59205 9.2983 7.90694 9.2983H11.6085C11.9234 9.2983 12.1786 9.55357 12.1786 9.86846C12.1786 10.1833 11.9234 10.4386 11.6085 10.4386H7.90694C7.59205 10.4386 7.33679 10.1833 7.33679 9.86846Z",fill:"currentColor"}));case"string":return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.58105H3.6139V2.87326H1.36702V13.1264H3.6139V14.4186H0V1.58105ZM3.41656 13.3264V13.3266H1.17155V13.3264H3.41656ZM0.197344 14.2186H0.199219V1.78125H3.41656V1.78105H0.197344V14.2186ZM12.3861 1.58105H16V14.4186H12.3861V13.1264H14.633V2.87326H12.3861V1.58105ZM12.5834 2.67326V1.78105H15.8027V1.78125H12.5853V2.67326H12.5834ZM12.5853 13.3266V14.2186H12.5834V13.3264H14.8303V2.67345H14.8322V13.3266H12.5853ZM5.23701 4.07158C5.50364 3.3161 6.56205 3.28894 6.86709 4.02974L10 11.6383C10.1329 11.9609 9.979 12.3302 9.65631 12.4631C9.33363 12.596 8.96434 12.4421 8.83147 12.1194L7.8021 9.61951H4.61903L3.7474 12.0891C3.63126 12.4182 3.27034 12.5908 2.94127 12.4747C2.6122 12.3585 2.43958 11.9976 2.55573 11.6685L5.23701 4.07158ZM6.08814 5.45704L5.06505 8.35579H7.28174L6.08814 5.45704ZM8.81938 6.07534C8.81938 5.75166 9.08177 5.48926 9.40545 5.48926H12.8941C13.2178 5.48926 13.4802 5.75166 13.4802 6.07534C13.4802 6.39902 13.2178 6.66142 12.8941 6.66142H9.40545C9.08177 6.66142 8.81938 6.39902 8.81938 6.07534ZM10.2668 9.69181C10.2668 9.36812 10.5292 9.10573 10.8529 9.10573H12.8941C13.2178 9.10573 13.4802 9.36812 13.4802 9.69181C13.4802 10.0155 13.2178 10.2779 12.8941 10.2779H10.8529C10.5292 10.2779 10.2668 10.0155 10.2668 9.69181Z",fill:"currentColor"}));case"enum":return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6139 1.58105H0V14.4186H3.6139V13.1264H1.36702V2.87326H3.6139V1.58105ZM3.41656 13.3266V13.3264H1.16987V13.3266H3.41656ZM0.197537 14.2186H0.197344V1.78105H3.41656V1.78125H0.197537V14.2186ZM16 1.58105H12.3861V2.87326H14.633V13.1264H12.3861V14.4186H16V1.58105ZM12.5834 1.78105V2.67326H12.5836V1.78125H15.8027V1.78105H12.5834ZM12.5836 14.2186V13.3266H14.8305V2.67345H14.8303V13.3264H12.5834V14.2186H12.5836Z",fill:"currentColor"}),a.createElement("path",{d:"M6.01442 7.34421C5.89401 7.46462 5.89401 7.65985 6.01442 7.78026L7.78218 9.54802C7.9026 9.66844 8.09782 9.66844 8.21823 9.54802L9.986 7.78026C10.1064 7.65985 10.1064 7.46462 9.986 7.34421L9.69137 7.04958C9.57096 6.92917 9.37573 6.92917 9.25532 7.04958L8.00021 8.3047L6.74509 7.04958C6.62468 6.92917 6.42946 6.92917 6.30904 7.04958L6.01442 7.34421ZM3.31699 7.99984C3.31699 10.5864 5.41379 12.6832 8.00033 12.6832C10.5869 12.6832 12.6837 10.5864 12.6837 7.99984C12.6837 5.4133 10.5869 3.3165 8.00033 3.3165C5.41379 3.3165 3.31699 5.4133 3.31699 7.99984ZM11.6503 7.99984C11.6503 10.0157 10.0162 11.6498 8.00033 11.6498C5.98449 11.6498 4.35033 10.0157 4.35033 7.99984C4.35033 5.984 5.98449 4.34984 8.00033 4.34984C10.0162 4.34984 11.6503 5.984 11.6503 7.99984Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.2"}));case"integer":return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.58105H3.6139V2.87326H1.36702V13.1264H3.6139V14.4186H0V1.58105ZM3.41656 13.3264V13.3266H1.17155V13.3264H3.41656ZM0.197344 14.2186H0.199219V1.78125H3.41656V1.78105H0.197344V14.2186ZM12.3861 1.58105H16V14.4186H12.3861V13.1264H14.633V2.87326H12.3861V1.58105ZM12.5834 2.67326V1.78105H15.8027V1.78125H12.5853V2.67326H12.5834ZM12.5853 13.3266V14.2186H12.5834V13.3264H14.8303V2.67345H14.8322V13.3266H12.5853ZM10.3614 5.22374C10.7161 4.90585 11.1581 4.75 11.6762 4.75C12.2173 4.75 12.6723 4.91467 13.0281 5.25207L13.0291 5.253C13.3852 5.59688 13.561 6.03946 13.561 6.56767C13.561 6.89 13.4945 7.17448 13.3539 7.41445C13.2572 7.57972 13.1279 7.71948 12.9685 7.83428C13.1575 7.95643 13.3099 8.11182 13.4225 8.30109C13.5793 8.5644 13.6531 8.88311 13.6531 9.24936C13.6531 9.83787 13.4612 10.3151 13.0656 10.6612C12.6982 10.9795 12.2305 11.1341 11.6762 11.1341C11.1356 11.1341 10.6805 10.9925 10.324 10.6977C9.92124 10.3691 9.71723 9.90026 9.69942 9.31256L9.69473 9.15802H10.846L10.8539 9.2997C10.8689 9.5698 10.9591 9.75553 11.1096 9.87941L11.1106 9.88027C11.2519 9.99882 11.4365 10.0631 11.6762 10.0631C11.9765 10.0631 12.1743 9.98692 12.2984 9.86071C12.4229 9.73404 12.4984 9.53136 12.4984 9.22422C12.4984 8.92116 12.4215 8.72127 12.2939 8.59581C12.1658 8.46989 11.961 8.39373 11.6511 8.39373H11.3586V7.34788H11.6511C11.9297 7.34788 12.111 7.27834 12.2238 7.16555C12.3366 7.05276 12.4062 6.87138 12.4062 6.59281C12.4062 6.30696 12.3378 6.12041 12.2277 6.00501C12.1188 5.89092 11.9446 5.82098 11.6762 5.82098C11.4248 5.82098 11.2539 5.88537 11.1407 5.99325C11.0268 6.10185 10.9497 6.27522 10.9291 6.5375L10.9183 6.67577H9.76788L9.77492 6.51904C9.79886 5.98644 9.99237 5.54989 10.3614 5.22374ZM5.91032 5.26037C6.26612 4.92297 6.72112 4.7583 7.26219 4.7583C7.80751 4.7583 8.26297 4.91938 8.61401 5.25194L8.61501 5.25289C8.96719 5.59272 9.13852 6.04185 9.13852 6.58435C9.13852 6.84997 9.08709 7.09565 8.9817 7.31883L8.98114 7.31999C8.89563 7.49712 8.74775 7.71415 8.54418 7.96862L8.54322 7.96981L6.87446 10.0127H9.13852V11.0753H5.36909V10.1089L7.69946 7.27679C7.89456 7.04062 7.98374 6.80773 7.98374 6.57597C7.98374 6.29602 7.91626 6.11385 7.8078 6.00122C7.70036 5.88964 7.52811 5.8209 7.26219 5.8209C7.04017 5.8209 6.87439 5.88173 6.75075 5.99193C6.61227 6.11766 6.53226 6.30918 6.53226 6.59273V6.74273H5.37747V6.59273C5.37747 6.05443 5.55248 5.60586 5.90934 5.2613L5.91032 5.26037ZM3.50907 4.80865H4.56964V11.0754H3.41486V6.2201L2.25 7.24249V5.89561L3.50907 4.80865Z",fill:"currentColor"}));case"number":return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6139 1.58154H0V14.4191H3.6139V13.1269H1.36702V2.87375H3.6139V1.58154ZM3.41656 13.3271V13.3269H1.17155V13.3271H3.41656ZM0.199219 14.2191H0.197344V1.78154H3.41656V1.78174H0.199219V14.2191ZM16 1.58154H12.3861V2.87375H14.633V13.1269H12.3861V14.4191H16V1.58154ZM12.5834 1.78154V2.67375H12.5853V1.78174H15.8027V1.78154H12.5834ZM12.5853 14.2191V13.3271H14.8322V2.67394H14.8303V13.3269H12.5834V14.2191H12.5853ZM6.86771 4.5C5.87019 4.5 5.00104 5.30767 5.00104 6.31667V9.63333C5.00104 10.6423 5.87019 11.45 6.86771 11.45C7.86523 11.45 8.73438 10.6423 8.73438 9.63333V6.31667C8.73438 5.30767 7.86523 4.5 6.86771 4.5ZM11.1177 4.5C10.1202 4.5 9.25104 5.30767 9.25104 6.31667V9.63333C9.25104 10.6423 10.1202 11.45 11.1177 11.45C12.1152 11.45 12.9844 10.6423 12.9844 9.63333V6.31667C12.9844 5.30767 12.1152 4.5 11.1177 4.5ZM6.13438 6.31667C6.13438 5.9503 6.47884 5.63333 6.86771 5.63333C7.25657 5.63333 7.60104 5.9503 7.60104 6.31667V9.63333C7.60104 9.9997 7.25657 10.3167 6.86771 10.3167C6.47884 10.3167 6.13438 9.9997 6.13438 9.63333V6.31667ZM10.3844 6.31667C10.3844 5.9503 10.7288 5.63333 11.1177 5.63333C11.5066 5.63333 11.851 5.9503 11.851 6.31667V9.63333C11.851 9.9997 11.5066 10.3167 11.1177 10.3167C10.7288 10.3167 10.3844 9.9997 10.3844 9.63333V6.31667ZM3.75938 9.85C3.33135 9.85 2.98438 10.197 2.98438 10.625C2.98438 11.053 3.33135 11.4 3.75938 11.4C4.1874 11.4 4.53438 11.053 4.53438 10.625C4.53438 10.197 4.1874 9.85 3.75938 9.85Z",fill:"currentColor"}));case"boolean":return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.58105H3.6139V2.87326H1.36702V13.1264H3.6139V14.4186H0V1.58105ZM3.41656 13.3264V13.3266H1.17155V13.3264H3.41656ZM0.197344 14.2186H0.199219V1.78125H3.41656V1.78105H0.197344V14.2186ZM12.3861 1.58105H16V14.4186H12.3861V13.1264H14.633V2.87326H12.3861V1.58105ZM12.5834 2.67326V1.78105H15.8027V1.78125H12.5853V2.67326H12.5834ZM12.5853 13.3266V14.2186H12.5834V13.3264H14.8303V2.67345H14.8322V13.3266H12.5853ZM2.75 7.99993C2.75 6.14518 4.25358 4.6416 6.10833 4.6416H9.775C11.6298 4.6416 13.1333 6.14518 13.1333 7.99993C13.1333 9.85469 11.6298 11.3583 9.775 11.3583H6.10833C4.25358 11.3583 2.75 9.85469 2.75 7.99993ZM6.10833 5.85827C4.92552 5.85827 3.96667 6.81713 3.96667 7.99993C3.96667 9.18274 4.92552 10.1416 6.10833 10.1416H9.775C10.9578 10.1416 11.9167 9.18274 11.9167 7.99993C11.9167 6.81713 10.9578 5.85827 9.775 5.85827H6.10833ZM8.25 7.99993C8.25 7.1577 8.93277 6.47493 9.775 6.47493C10.6172 6.47493 11.3 7.1577 11.3 7.99993C11.3 8.84217 10.6172 9.52493 9.775 9.52493C8.93277 9.52493 8.25 8.84217 8.25 7.99993ZM9.775 7.6916C9.60471 7.6916 9.46667 7.82965 9.46667 7.99993C9.46667 8.17022 9.60471 8.30827 9.775 8.30827C9.94529 8.30827 10.0833 8.17022 10.0833 7.99993C10.0833 7.82965 9.94529 7.6916 9.775 7.6916Z",fill:"currentColor"}));case"stream":case"map":return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6139 1.58105H0V14.4186H3.6139V13.1264H1.36702V2.87326H3.6139V1.58105ZM3.41656 13.3266V13.3264H1.16987V13.3266H3.41656ZM0.197537 14.2186H0.197344V1.78105H3.41656V1.78125H0.197537V14.2186ZM16 1.58105H12.3861V2.87326H14.633V13.1264H12.3861V14.4186H16V1.58105ZM12.5834 1.78105V2.67326H12.5836V1.78125H15.8027V1.78105H12.5834ZM12.5836 14.2186V13.3266H14.8305V2.67345H14.8303V13.3264H12.5834V14.2186H12.5836Z",fill:"currentColor"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.02962 3.6001H10.7696C11.0983 3.6001 11.4119 3.73574 11.6424 3.97635C11.8719 4.21592 11.9994 4.53988 11.9994 4.87541V10.0898C12.0056 10.2146 11.9675 10.3376 11.8918 10.4372L11.8662 10.4709L11.8287 10.4905C11.6508 10.5836 11.5323 10.6684 11.4581 10.7562C11.3893 10.8377 11.3538 10.9274 11.3538 11.0488C11.3538 11.2093 11.3914 11.285 11.4495 11.3472C11.5199 11.4227 11.6265 11.4867 11.8093 11.5964C11.8188 11.6022 11.8286 11.608 11.8385 11.614L11.8704 11.6331L11.8927 11.6629C11.9509 11.7407 11.9869 11.8329 11.997 11.9295C12.007 12.0258 11.9909 12.123 11.9503 12.2109C11.9101 12.2996 11.8454 12.375 11.7639 12.4282C11.682 12.4817 11.5865 12.5106 11.4887 12.5114L11.487 12.5114H5.02962C4.70105 12.5114 4.38727 12.3758 4.1573 12.1349C3.92697 11.8925 3.79871 11.5702 3.79981 11.2358V4.87541C3.79981 4.54075 3.92717 4.21692 4.15725 3.97736C4.26942 3.85898 4.40438 3.76453 4.55403 3.69969C4.7039 3.63476 4.86629 3.60087 5.02962 3.6001ZM5.03192 4.65263C5.00441 4.65342 4.97731 4.65952 4.95211 4.6706C4.92641 4.6819 4.90318 4.69816 4.88376 4.71845C4.86435 4.73874 4.84912 4.76266 4.83897 4.78884C4.82881 4.81502 4.82391 4.84295 4.82456 4.87103L4.82467 4.87541L4.82461 9.64304C4.94924 9.6064 5.07861 9.5878 5.2092 9.58824L10.9746 9.58755V4.87065C10.9752 4.8426 10.9703 4.81472 10.9602 4.78858C10.95 4.76244 10.9348 4.73857 10.9153 4.71832C10.8959 4.69807 10.8727 4.68184 10.847 4.67056C10.8219 4.65951 10.7948 4.65342 10.7673 4.65263H10.7696V4.46303L10.7657 4.65259L10.7673 4.65263H5.03192ZM5.2088 10.6401C5.00466 10.6401 4.82461 10.8155 4.82461 11.0498C4.82461 11.2833 5.00452 11.4589 5.2088 11.4589H10.4698C10.4687 11.456 10.4676 11.4531 10.4665 11.4502C10.4145 11.3112 10.4004 11.1647 10.4 11.0496C10.4 10.9312 10.4101 10.7838 10.4699 10.6401L5.2088 10.6401Z",fill:"currentColor"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.71924 4.53617C5.71924 4.25475 5.94738 4.02661 6.2288 4.02661C6.51022 4.02661 6.73835 4.25475 6.73835 4.53617V9.65545C6.73835 9.93688 6.51022 10.165 6.2288 10.165C5.94737 10.165 5.71924 9.93688 5.71924 9.65545V4.53617Z",fill:"currentColor"}));case"array":return l(r);default:return n}};return{type:"array",label:"Array",icon:n,container:!0,getJsonPaths:e=>{let n=e.items&&t.getTypeBySchema(e.items);return["items",...(null==n?void 0:n.getJsonPaths)?n.getJsonPaths(e.items):[]]},getDefaultValue:()=>[],getSupportedItemTypes:()=>t.getTypeRegistriesWithParentType("array"),getTypeSchemaProperties:e=>{var n;let l=e.items&&t.getTypeBySchema(e.items);return l&&(null==(n=l.getTypeSchemaProperties)?void 0:n.call(l,e.items))||{}},canAddField:e=>{var n;if(!e.items)return!1;let l=t.getTypeBySchema(e.items);return(null==l||null==(n=l.canAddField)?void 0:n.call(l,e.items))||!1},getItemType:e=>e.items,getStringValueByTypeSchema:e=>{var n;if(!e.items)return e.type||"";let l=t.getTypeBySchema(e.items);return[e.type,null==l||null==(n=l.getStringValueByTypeSchema)?void 0:n.call(l,e.items)].join("-")},getTypeSchemaByStringValue:e=>{if(!e)return{type:"array"};let[n,...l]=e.split("-"),r=t.getTypeByName(n);return r?{type:"array",items:r.getTypeSchemaByStringValue?r.getTypeSchemaByStringValue(l.join("-")):null==r?void 0:r.getDefaultSchema()}:{type:"array"}},getDefaultSchema:()=>({type:"array",items:{type:"string"}}),getPropertiesParent:e=>{let n=e.items&&t.getTypeBySchema(e.items);return n&&n.getPropertiesParent?n.getPropertiesParent(e.items):e},getDisplayIcon:l}},H=()=>({type:"integer",label:"Integer",icon:a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M15.132 11.4601C15.644 11.0121 15.9 10.3921 15.9 9.60007C15.9 8.60807 15.5 7.93607 14.7 7.58407C15.412 7.23207 15.768 6.62407 15.768 5.76007C15.768 5.05607 15.536 4.48007 15.072 4.03207C14.608 3.59207 14.012 3.37207 13.284 3.37207C12.588 3.37207 12.008 3.58007 11.544 3.99607C11.064 4.42007 10.808 4.98807 10.776 5.70007H12C12.064 4.88407 12.492 4.47607 13.284 4.47607C14.124 4.47607 14.544 4.91607 14.544 5.79607C14.544 6.66007 14.112 7.09207 13.248 7.09207H13.044V8.16007H13.248C14.2 8.16007 14.676 8.62807 14.676 9.56407C14.676 10.5081 14.212 10.9801 13.284 10.9801C12.9 10.9801 12.584 10.8761 12.336 10.6681C12.064 10.4441 11.916 10.1161 11.892 9.68407H10.668C10.692 10.4761 10.964 11.0841 11.484 11.5081C11.948 11.8921 12.548 12.0841 13.284 12.0841C14.036 12.0841 14.652 11.8761 15.132 11.4601Z",fill:"currentColor"}),a.createElement("path",{d:"M4.46875 12.0003V10.9083L7.75675 6.91228C8.06075 6.54428 8.21275 6.16428 8.21275 5.77228C8.21275 4.90828 7.79675 4.47628 6.96475 4.47628C6.60475 4.47628 6.31275 4.57628 6.08875 4.77628C5.83275 5.00828 5.70475 5.34828 5.70475 5.79628H4.48075C4.48075 5.07628 4.71275 4.49228 5.17675 4.04428C5.64075 3.60428 6.23675 3.38428 6.96475 3.38428C7.70075 3.38428 8.29675 3.60028 8.75275 4.03228C9.20875 4.47228 9.43675 5.05628 9.43675 5.78428C9.43675 6.13628 9.36875 6.45628 9.23275 6.74428C9.12075 6.97628 8.92075 7.27228 8.63275 7.63228L5.95675 10.9083H9.43675V12.0003H4.46875Z",fill:"currentColor"}),a.createElement("path",{d:"M1.668 12.0001V4.78805L0 6.25205V4.89605L1.668 3.45605H2.892V12.0001H1.668Z",fill:"currentColor"})),getDefaultSchema:()=>({type:"integer"}),getValueText:e=>void 0!==e?`${e}`:"",getDefaultValue:()=>0}),P=()=>({type:"unknown",label:"Unknown",parentType:[],icon:a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182L19.0711 4.92893L19.7782 4.22183C21.7677 6.21136 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782L4.92893 19.0711L4.22182 19.7782C2.23231 17.7886 1 15.0373 1 12C1 8.96273 2.23232 6.21136 4.22182 4.22183L4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00627 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00627 14.4855 3 12 3Z",fill:"currentColor"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 9.31245C8 7.10331 9.79086 5.31245 12 5.31245C14.2091 5.31245 16 7.10331 16 9.31245C16 11.1763 14.7252 12.7424 13 13.1864V14.3124C13 14.8647 12.5523 15.3124 12 15.3124C11.4477 15.3124 11 14.8647 11 14.3124V12.3124C11 11.7602 11.4477 11.3124 12 11.3124C13.1046 11.3124 14 10.417 14 9.31245C14 8.20788 13.1046 7.31245 12 7.31245C10.8954 7.31245 10 8.20788 10 9.31245C10 9.86473 9.55228 10.3124 9 10.3124C8.44772 10.3124 8 9.86473 8 9.31245Z",fill:"currentColor"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 18.8125C12.6904 18.8125 13.25 18.2528 13.25 17.5625C13.25 16.8721 12.6904 16.3125 12 16.3125C11.3097 16.3125 10.75 16.8721 10.75 17.5625C10.75 18.2528 11.3097 18.8125 12 18.8125Z",fill:"currentColor"})),getDefaultSchema:()=>({type:"unknown"}),getDefaultValue:()=>void 0}),Z=e=>{let{typeManager:t}=e;return{type:"map",label:"Map",icon:a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},a.createElement("path",{d:"M877.860571 938.642286h-645.851428c-27.574857 0-54.052571-11.337143-73.508572-31.744a110.957714 110.957714 0 0 1-30.500571-76.8V193.828571c0-28.745143 10.971429-56.32 30.500571-76.726857a101.888 101.888 0 0 1 73.508572-31.817143h574.171428c27.501714 0 53.979429 11.337143 73.508572 31.744 19.529143 20.333714 30.500571 48.054857 30.500571 76.8v522.020572a34.157714 34.157714 0 0 1-6.948571 22.820571c-37.156571 19.382857-57.636571 39.350857-57.636572 72.630857 0 39.716571 19.894857 50.029714 57.636572 72.777143a34.816 34.816 0 0 1-8.045714 49.298286 32.256 32.256 0 0 1-17.334858 5.193143z m-32.256-254.537143V193.828571a40.228571 40.228571 0 0 0-39.497142-41.179428H232.009143a40.301714 40.301714 0 0 0-39.497143 41.252571V699.245714c17.773714-9.874286 37.449143-14.994286 57.417143-14.921143h595.675428v-0.073142z m-595.675428 187.245714h566.198857c-22.893714-11.190857-27.940571-39.497143-28.013714-59.977143 0-20.260571 3.218286-43.885714 28.013714-59.904h-566.125714c-31.670857 0-57.417143 26.843429-57.417143 59.977143 0 33.060571 25.746286 59.904 57.344 59.904z",fill:"currentColor"}),a.createElement("path",{d:"M320 128m32.036571 0l-0.073142 0q32.036571 0 32.036571 32.036571l0 511.926858q0 32.036571-32.036571 32.036571l0.073142 0q-32.036571 0-32.036571-32.036571l0-511.926858q0-32.036571 32.036571-32.036571Z",fill:"currentColor"})),container:!0,getJsonPaths:e=>{let n=e.additionalProperties&&t.getTypeBySchema(e.additionalProperties);return["additionalProperties",...(null==n?void 0:n.getJsonPaths)?n.getJsonPaths(e.additionalProperties):[]]},getDefaultValue:()=>[],getSupportedItemTypes:()=>t.getTypeRegistriesWithParentType("map"),getTypeSchemaProperties:e=>{var n;let l=e.additionalProperties&&t.getTypeBySchema(e.additionalProperties);return l&&(null==(n=l.getTypeSchemaProperties)?void 0:n.call(l,e.additionalProperties))||{}},canAddField:e=>{var n;if(!e.additionalProperties)return!1;let l=t.getTypeBySchema(e.additionalProperties);return(null==l||null==(n=l.canAddField)?void 0:n.call(l,e.additionalProperties))||!1},getItemType:e=>e.additionalProperties,getStringValueByTypeSchema:e=>{var n;if(!e.additionalProperties)return e.type||"";let l=t.getTypeBySchema(e.additionalProperties);return[e.type,null==l||null==(n=l.getStringValueByTypeSchema)?void 0:n.call(l,e.additionalProperties)].join("-")},getTypeSchemaByStringValue:e=>{if(!e)return{type:"map"};let[n,...l]=e.split("-"),r=t.getTypeByName(n);return r?{type:"map",additionalProperties:r.getTypeSchemaByStringValue?r.getTypeSchemaByStringValue(l.join("-")):null==r?void 0:r.getDefaultSchema()}:{type:"map"}},getDefaultSchema:()=>({type:"map",additionalProperties:{type:"string"}}),getPropertiesParent:e=>{let n=e.additionalProperties&&t.getTypeBySchema(e.additionalProperties);return n&&n.getPropertiesParent?n.getPropertiesParent(e.additionalProperties):e}}},k=class extends f{getTypeNameFromSchema(e){return e?e.enum?"enum":e.type||e.$ref||"unknown":"unknown"}constructor(){var e;super(),e=this,this.getTypeRegistriesWithParentType=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.getAllTypeRegistries().filter(e=>"default"!==e.type).filter(e=>!e.parentType||e.parentType.includes(t))},this.getTypeSchemaDeepChildField=e=>{let t=this.getTypeBySchema(e),n=e;for(;(null==t?void 0:t.getItemType)&&t.getItemType(n);)n=t.getItemType(n),t=this.getTypeBySchema(n);return n},this.getComplexText=e=>{let t=this.getTypeBySchema(e);return(null==t?void 0:t.customComplexText)?t.customComplexText(e):(null==t?void 0:t.container)&&e.items?`${t.label}<${this.getComplexText(e.items)}>`:(null==t?void 0:t.container)&&e.additionalProperties?`${t.label}<String, ${this.getComplexText(e.additionalProperties)}>`:(null==t?void 0:t.label)||e.type||"unknown"},this.getDisplayIcon=e=>{let t=this.getTypeBySchema(e);return(null==t?void 0:t.getDisplayIcon(e))||(null==t?void 0:t.icon)||a.createElement(a.Fragment,null)},this.getTypeSchemaProperties=e=>{let t=this.getTypeBySchema(e);return null==t?void 0:t.getTypeSchemaProperties(e)},this.getPropertiesParent=e=>{let t=this.getTypeBySchema(e);return null==t?void 0:t.getPropertiesParent(e)},this.getJsonPaths=e=>{let t=this.getTypeBySchema(e);return null==t?void 0:t.getJsonPaths(e)},this.canAddField=e=>{let t=this.getTypeBySchema(e);return null==t?void 0:t.canAddField(e)},this.getDefaultValue=e=>{let t=this.getTypeBySchema(e);return null==t?void 0:t.getDefaultValue()},[C,E,x,H,V,b,w,P,Z].forEach(e=>{this.register(e)})}};k=v([(0,d.b2)()],k);var T=l||(l={});function M(e){let{type:t,extra:n,required:l}=e||{},{weak:r=!1}=n||{};if(t)switch(t){case"object":if(r)return{kind:m.Hx.Object,weak:!0};return m.qR.createObject({properties:Object.entries(e.properties||{}).sort((e,t)=>((0,u.get)(null==e?void 0:e[1],"extra.index")||0)-((0,u.get)(null==t?void 0:t[1],"extra.index")||0)).map(e=>{let[t,n]=e;return{key:t,type:M(n),meta:{title:n.title,description:n.description,required:!!(null==l?void 0:l.includes(t)),default:n.default}}})});case"array":if(r)return{kind:m.Hx.Array,weak:!0};return m.qR.createArray({items:M(e.items)});case"map":if(r)return{kind:m.Hx.Map,weak:!0};return m.qR.createMap({valueType:M(e.additionalProperties)});case"string":return m.qR.createString();case"number":return m.qR.createNumber();case"boolean":return m.qR.createBoolean();case"integer":return m.qR.createInteger();default:return m.qR.createCustomType({typeName:t})}}T.schemaToAST=M,T.astToSchema=function e(t,n){let{drilldown:l=!0,drilldownMap:r=l,drilldownObject:a=l,drilldownArray:i=l}=n||{};if(t){if(m.Gw.isString(t))return{type:"string"};if(m.Gw.isBoolean(t))return{type:"boolean"};if(m.Gw.isNumber(t))return{type:"number"};if(m.Gw.isInteger(t))return{type:"integer"};if(m.Gw.isObject(t))return{type:"object",required:t.properties.filter(e=>{var t;return null==(t=e.meta)?void 0:t.required}).map(e=>e.key),properties:a?Object.fromEntries(t.properties.map(t=>{var n,l,r;let a=e(t.type);return(null==(n=t.meta)?void 0:n.title)&&a&&(a.title=t.meta.title),(null==(l=t.meta)?void 0:l.description)&&a&&(a.description=t.meta.description),(null==(r=t.meta)?void 0:r.default)&&a&&(a.default=t.meta.default),[t.key,a]})):{}};if(m.Gw.isArray(t))return{type:"array",items:i?e(t.items):void 0};if(m.Gw.isMap(t))return{type:"map",items:r?e(t.valueType):void 0};if(m.Gw.isCustomType(t))return{type:t.typeName}}},T.isASTMatchSchema=function(e,t){return Array.isArray(t)?e.isTypeEqual(m.qR.createUnion({types:t.map(e=>M(e)).filter(Boolean)})):e.isTypeEqual(M(t))};var S=new k,R=(0,a.createContext)(null),B=()=>{var e;let t=(0,a.useContext)(R),n=(0,g.KU)();return t||((null==n||null==(e=n.isBound)?void 0:e.call(n,f))?n.get(f):S)};Symbol("TypeManager");var D=new d.nZ(e=>{e(f).to(k).inSingletonScope()}),j=n(196130),I=n(89802),F=n(261513),L=n(172566),J=n(62869),q=n(641004),z=n(711294),A=n(845129),N=n(366020),O=n(65275),$=n(709949),K=n(853691),_=n(218364),G=n(312278),U=n(898803),W=n(889814),X=n(929060),Y=n(253718),Q=n(800827),ee=n(129112),et=n(297225),en=n(132797),el=n(266022),er=n(272488),ea=n(433210),ei=n(335571);function eo(e,t){return n=>{let l=(0,i.KUq)();if(!(null==l?void 0:l.isBound(i.Rf1)))return a.createElement(e,{...n});let r=l.get(i.Rf1),o=(null==t?void 0:t.renderKey)||e.renderKey||e.name||"",s=r.tryToGetRendererComponent(o);return(null==s?void 0:s.type)!==i.PiV.REACT?a.createElement(e,{...n}):a.createElement(s.renderer,{...n})}}var es=j.ZP.object({index:j.ZP.number().optional()}).optional(),ec=j.ZP.object({type:j.ZP.literal("constant"),content:j.ZP.any().optional(),schema:j.ZP.any().optional(),extra:es}),eu=j.ZP.object({type:j.ZP.literal("ref"),content:j.ZP.array(j.ZP.string()).optional(),extra:es}),ed=j.ZP.object({type:j.ZP.literal("expression"),content:j.ZP.string().optional(),extra:es}),ep=j.ZP.object({type:j.ZP.literal("template"),content:j.ZP.string().optional(),extra:es});function em(e){return{render(t){I.render(t,e)},unmount(){I.unmountComponentAtNode(e)}}}(e=>{function t(e){return ec.safeParse(e).success}function n(e){return eu.safeParse(e).success}function r(e){return ed.safeParse(e).success}function a(e){return ep.safeParse(e).success}function i(e){return(null==e?void 0:e.schema)?e.schema:"string"==typeof e.content?{type:"string"}:"number"==typeof e.content?{type:"number"}:"boolean"==typeof e.content?{type:"boolean"}:(0,u.isObject)(e.content)?{type:"object"}:void 0}e.isConstant=t,e.isRef=n,e.isExpression=r,e.isTemplate=a,e.isConstantOrRef=function(e){return t(e)||n(e)},e.isFlowValue=function(e){return t(e)||n(e)||r(e)||a(e)},e.traverse=function* e(l,i){let{includeTypes:o=["ref","template"],path:s=""}=i;if((0,u.isPlainObject)(l)){if(n(l)&&o.includes("ref")||a(l)&&o.includes("template")||r(l)&&o.includes("expression")||t(l)&&o.includes("constant"))return void(yield{value:l,path:s});for(let[t,n]of Object.entries(l))yield*e(n,{...i,path:`${s}.${t}`});return}if((0,u.isArray)(l))for(let[t,n]of l.entries())yield*e(n,{...i,path:`${s}[${t}]`})},e.getTemplateKeyPaths=function(e){var t;return(0,u.uniq)((null==(t=e.content)?void 0:t.match(/\{\{([^\}\{]+)\}\}/g))||[]).map(e=>e.slice(2,-2).split("."))},e.inferConstantJsonSchema=i,e.inferJsonSchema=function e(r,o){if((0,u.isPlainObject)(r)){if(t(r))return i(r);if(n(r)){let e=o.available.getByKeyPath(null==r?void 0:r.content);return(null==e?void 0:e.type)?l.astToSchema(null==e?void 0:e.type):void 0}return a(r)?{type:"string"}:{type:"object",properties:Object.keys(r).reduce((t,n)=>{let l=e(r[n],o);return l&&(t[n]=l),t},{})}}}})(r||(r={})),q.Mj.register("python",O.Vs),q.Mj.register("shell",N.IZ),q.Mj.register("typescript",A.NN),q.Mj.register("json",{language:(0,K.ut)({outerLanguage:$.AV.language}),languageService:$.AV.languageService});var eg=!1,eh=(0,q.jG)({variant:"light",settings:{background:"#FFFFFF",foreground:"#1F2937",caret:"#2563EB",selection:"#E5E7EB",gutterBackground:"#F9FAFB",gutterForeground:"#6B7280",gutterBorderColor:"transparent",gutterBorderWidth:0,lineHighlight:"#F3F4F680",bracketColors:["#F59E0B","#8B5CF6","#06B6D4"],tooltip:{backgroundColor:"#FFFFFF",color:"#1F2937",border:"1px solid #E5E7EB",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"},link:{color:"#2563EB"},completionItemHover:{backgroundColor:"#F3F4F6"},completionItemSelected:{backgroundColor:"#E5E7EB"},completionItemIcon:{color:"#4B5563"},completionItemLabel:{color:"#1F2937"},completionItemInfo:{color:"#4B5563"},completionItemDetail:{color:"#6B7280"}},styles:[{tag:_.pJ.comment,color:"#6B7280"},{tag:[_.pJ.propertyName],color:"#2563EB"},{tag:[_.pJ.variableName],color:"#DC2626"},{tag:[_.pJ.string],color:"#059669"},{tag:[_.pJ.number],color:"#EA580C"},{tag:[_.pJ.bool],color:"#7C3AED"},{tag:[_.pJ.null],color:"#7C3AED"},{tag:[_.pJ.separator],color:"#374151"},{tag:[_.pJ.heading],color:"#2563EB"},{tag:[_.pJ.processingInstruction],color:"#2563EB"},{tag:[_.pJ.definitionKeyword],color:"#9333EA"},{tag:[_.pJ.modifier],color:"#9333EA"},{tag:[_.pJ.controlKeyword],color:"#9333EA"},{tag:[_.pJ.operatorKeyword],color:"#9333EA"},{tag:[_.pJ.standard(_.pJ.variableName)],color:"#059669"},{tag:[_.pJ.attributeName],color:"#EA580C"},{tag:[_.pJ.special(_.pJ.string)],color:"#2563EB"}]}),ey="#0D1117",ev=(0,q.jG)({variant:"dark",settings:{background:ey,foreground:"#E6EDF3",caret:"#7DD3FC",selection:"#264F7833",gutterBackground:ey,gutterForeground:"#6E7681",gutterBorderColor:"transparent",gutterBorderWidth:0,lineHighlight:"#21262D",bracketColors:["#FBBF24","#A78BFA","#7DD3FC"],tooltip:{backgroundColor:"#21262D",color:"#E6EDF3",border:"1px solid #30363D"},link:{color:"#58A6FF"},completionItemHover:{backgroundColor:"#21262D"},completionItemSelected:{backgroundColor:"#1F6EEB"},completionItemIcon:{color:"#8B949E"},completionItemLabel:{color:"#E6EDF3"},completionItemInfo:{color:"#8B949E"},completionItemDetail:{color:"#6E7681"}},styles:[{tag:_.pJ.comment,color:"#8B949E"},{tag:[_.pJ.propertyName],color:"#7DD3FC"},{tag:[_.pJ.string],color:"#34D399"},{tag:[_.pJ.number],color:"#FBBF24"},{tag:[_.pJ.bool],color:"#A78BFA"},{tag:[_.pJ.null],color:"#A78BFA"},{tag:[_.pJ.separator],color:"#E6EDF3"},{tag:[_.pJ.definitionKeyword],color:"#C084FC"},{tag:[_.pJ.modifier],color:"#C084FC"},{tag:[_.pJ.controlKeyword],color:"#C084FC"},{tag:[_.pJ.operatorKeyword],color:"#C084FC"},{tag:[_.pJ.heading],color:"#7DD3FC"},{tag:[_.pJ.processingInstruction],color:"#7DD3FC"},{tag:[_.pJ.standard(_.pJ.variableName)],color:"#34D399"},{tag:[_.pJ.attributeName],color:"#FBBF24"},{tag:[_.pJ.special(_.pJ.string)],color:"#7DD3FC"}]});q.np.register("dark",ev),q.np.register("light",eh);var ef=(0,L.Us)(q.ZP,[z.tk.theme({"&.cm-focused":{outline:"none"}})]);function eC(e){let{value:t,onChange:l,languageId:r="python",theme:i="light",children:o,placeholder:s,activeLinePlaceholder:c,options:u,readonly:d}=e,p=(0,a.useRef)(null);return(0,a.useEffect)(()=>{"typescript"===r&&(()=>{if(eg)return;eg=!0;let e=new Worker(new URL(n.p+n.u("423219"),n.b),Object.assign({},{type:"module"},{type:void 0}));A.NN.languageService.initialize(e,{compilerOptions:{lib:["es2015","dom"],noImplicitAny:!1}})})()},[r]),(0,a.useEffect)(()=>{var e,n;(null==(e=p.current)?void 0:e.getValue())!==t&&(null==(n=p.current)||n.setValue(String(t||"")))},[t]),a.createElement(L.KU,null,a.createElement(ef,{defaultValue:String(t||""),options:{uri:`file:///untitled${"python"===r?".py":"typescript"===r?".ts":"shell"===r?".sh":"json"===r?".json":""}`,languageId:r,theme:i,placeholder:s,readOnly:d,editable:!d,...u||{}},didMount:e=>{p.current=e},onChange:e=>null==l?void 0:l(e.value)},c&&a.createElement(J.GH,null,c),o))}var eE=F.ZP.div`
  .ͼ1 .cm-content {
  }
`;function eb(e){return a.createElement(eE,null,a.createElement(eC,{...e,options:{lineNumbersGutter:!1,foldGutter:!1,minHeight:24,...e.options||{}}}))}var ex=[{type:"string",ConstantRenderer:e=>(null==e?void 0:e.enableMultiLineStr)?a.createElement(o.Kx,{autosize:!0,rows:1,placeholder:i.oci.t("Please Input String"),disabled:e.readonly,...e}):a.createElement(o.II,{size:"small",placeholder:i.oci.t("Please Input String"),disabled:e.readonly,...e})},{type:"object",ConstantRenderer:e=>a.createElement(eb,{value:e.value,onChange:t=>{var n;return null==(n=e.onChange)?void 0:n.call(e,t)},languageId:"json",placeholder:i.oci.t("Please Input Object"),readonly:e.readonly})},{type:"number",ConstantRenderer:e=>a.createElement(o.Rn,{placeholder:i.oci.t("Please Input Number"),size:"small",disabled:e.readonly,hideButtons:!0,...e})},{type:"integer",ConstantRenderer:e=>a.createElement(o.Rn,{placeholder:i.oci.t("Please Input Integer"),size:"small",disabled:e.readonly,precision:0,...e})},{type:"boolean",ConstantRenderer:e=>{let{value:t,onChange:n,...l}=e;return a.createElement(o.Ph,{placeholder:i.oci.t("Please Select Boolean"),size:"small",disabled:e.readonly,optionList:[{label:i.oci.t("True"),value:1},{label:i.oci.t("False"),value:0}],value:+!!t,onChange:e=>null==n?void 0:n(!!e),...l})}},{type:"array",ConstantRenderer:e=>a.createElement(eb,{value:e.value,languageId:"json",onChange:t=>{var n;return null==(n=e.onChange)?void 0:n.call(e,t)},placeholder:i.oci.t("Please Input Array"),readonly:e.readonly})}];ex.forEach(e=>S.register(e)),(0,i.M1y)({onInit(e,t){var n,l;let r=e.get(f);ex.forEach(e=>r.register(e)),null==(n=t.types)||n.forEach(e=>r.register(e)),null==(l=t.unregisterTypes)||l.forEach(e=>r.unregister(e))},containerModules:[D]});var eV=()=>B();function ew(e){let{includeSchema:t,excludeSchema:n,customSkip:r}=e,s=eV(),c=(0,i.LF0)(),u=(0,a.useCallback)(e=>{var t;if(null==(t=e.meta)?void 0:t.icon)return"string"==typeof e.meta.icon?a.createElement("img",{style:{marginRight:8},width:12,height:12,src:e.meta.icon}):e.meta.icon;let n=l.astToSchema(e.type,{drilldownObject:!1});return a.createElement(o.JO,{size:"small",svg:s.getDisplayIcon(n||{})})},[]),d=function(e){var a,o,s;let c,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],m=null==e?void 0:e.type;if(!m)return null;i.GwP.isObject(m)&&(c=(m.properties||[]).map(t=>d(t,[...p,e])).filter(Boolean));let g=[...p.map(e=>e.key),e.key],h=g.join("."),y=!t||l.isASTMatchSchema(m,t),v=!!n&&l.isASTMatchSchema(m,n),f=!!r&&r(e),C=null==(a=e.meta)?void 0:a.disabled,E=y&&!v&&!f&&!C;return E||(null==c?void 0:c.length)?{key:h,label:(null==(o=e.meta)?void 0:o.title)||e.key,value:h,keyPath:g,icon:u(e),children:c,disabled:!E,rootMeta:(null==(s=p[0])?void 0:s.meta)||e.meta,isRoot:!(null==p?void 0:p.length)}:null};return[...c.slice(0).reverse()].map(e=>d(e)).filter(Boolean)}(0,i.M1y)({onInit(e){let t=e.get(i.i2z),n=e=>{if(i.GwP.isVariableDeclaration(e.ast)){var t;(null==(t=e.ast.meta)?void 0:t.disabled)||e.ast.updateMeta({...e.ast.meta||{},disabled:!0})}};t.onGlobalEvent("NewAST",n),t.onGlobalEvent("UpdateAST",n)}});var eH=F.ZP.div`
  margin-right: 4px;
  min-width: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--semi-color-text-2);
`,eP=F.ZP.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${e=>{let{$inSelector:t}=e;return t&&(0,F.iv)`
      min-width: 50%;
    `}}
`,eZ=(0,F.ZP)(o.Vp)`
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
`,ek=(0,F.ZP)(o.mP)`
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
`,eT=F.ZP.div`
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
`,eM=e=>{let{value:t,config:n={},onChange:l,style:r,readonly:u=!1,includeSchema:d,excludeSchema:p,hasError:m,triggerRender:g}=e,h=ew({includeSchema:d,excludeSchema:p}),y=(0,a.useMemo)(()=>"string"==typeof t?(console.warn("The Value of VariableSelector is a string, it should be an ARRAY. \n","Please check the value of VariableSelector \n"),t):null==t?void 0:t.join("."),[t]);return a.createElement(a.Fragment,null,a.createElement(ek,{dropdownMatchSelectWidth:!1,disabled:u,treeData:h,size:"small",value:y,clearIcon:null,$error:m,style:r,validateStatus:m?"error":void 0,onChange:(e,t)=>{l(t.keyPath)},renderSelectedItem:e=>{var t,r,i,c;if(!(null==e?void 0:e.keyPath))return a.createElement(eZ,{prefixIcon:a.createElement(s.Z,null),color:"amber",closable:!u,onClose:()=>l(void 0)},(null==n?void 0:n.notFoundContent)??"Undefined");let d="string"==typeof(c=(null==(t=e.rootMeta)?void 0:t.icon)||(null==e?void 0:e.icon))?a.createElement("img",{style:{marginRight:8},width:12,height:12,src:c}):c,p=a.createElement(eH,null,(null==(r=e.rootMeta)?void 0:r.title)?`${null==(i=e.rootMeta)?void 0:i.title} ${e.isRoot?"":"-"} `:null);return a.createElement("div",null,a.createElement(o.J2,{content:a.createElement(eT,null,d,p,a.createElement(eP,null,e.keyPath.slice(1).join(".")))},a.createElement(eZ,{prefixIcon:d,closable:!u,onClose:()=>l(void 0)},p,!e.isRoot&&a.createElement(eP,{$inSelector:!0},e.label))))},showClear:!1,arrowIcon:a.createElement(c.Z,{size:"small"}),triggerRender:g,placeholder:(null==n?void 0:n.placeholder)??i.oci.t("Select Variable")}))};eM.renderKey="variable-selector-render-key";var eS=eo(eM),eR={display:"flex",alignItems:"center",gap:5},eB=e=>(null==e?void 0:e.type)==="array"&&(null==e?void 0:e.items)?[e.type,...eB(e.items)||[]]:(null==e?void 0:e.type)?[e.type]:void 0,eD=e=>{let[t,...n]=e||[];return"array"===t?{type:"array",items:eD(n)}:{type:t}};function ej(e){let{value:t,onChange:n,readonly:l,disabled:r,style:i}=e,s=(0,a.useMemo)(()=>eB(t),[t]),c=eV(),u=c.getDisplayIcon(t||{}),d=(0,a.useMemo)(()=>c.getTypeRegistriesWithParentType().map(e=>{var t;let n="array"===e.type;return{label:a.createElement("div",{style:eR},a.createElement(o.JO,{size:"small",svg:e.icon}),(null==(t=c.getTypeBySchema(e))?void 0:t.label)||e.type),value:e.type,children:n?c.getTypeRegistriesWithParentType("array").map(e=>{var t;return{label:a.createElement("div",{style:eR},a.createElement(o.JO,{size:"small",svg:c.getDisplayIcon({type:"array",items:{type:e.type}})}),(null==(t=c.getTypeBySchema(e))?void 0:t.label)||e.type),value:e.type}}):[]}}),[]),p=l||r;return a.createElement(o.vT,{disabled:p,size:"small",triggerRender:()=>a.createElement(o.hU,{size:"small",style:{...p?{pointerEvents:"none"}:{},...i||{}},disabled:p,icon:u}),treeData:d,value:s,leafOnly:!0,onChange:e=>{null==n||n(eD(e))}})}ej.renderKey="type-selector-render-key";var eI=eo(ej);function eF(e){let[t,n]=(0,a.useState)("");return(0,a.useEffect)(()=>{n(e.value)},[e.value]),a.createElement(ee.Z,{...e,value:t,onChange:e=>{n(e)},onBlur:n=>{var l;return null==(l=e.onChange)?void 0:l.call(e,t,n)}})}var eL=F.ZP.div`
  /* & .semi-input {
    background-color: #fff;
    border-radius: 6px;
    height: 24px;
  } */
`,eJ=F.ZP.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,eq=F.ZP.div`
  cursor: pointer;
  margin-right: 5px;
`,ez=F.ZP.div`
  display: flex;
  flex-direction: column;
`,eA=F.ZP.div`
  font-size: 12px;
  color: #999;
  font-weight: 400;
  margin-bottom: 2px;
`,eN=F.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;

  ${e=>{let{$shrink:t}=e;return t&&(0,F.iv)`
      padding-left: 3px;
      margin-top: 10px;
    `}}
`,eO=F.ZP.div`
  grid-column: 1;
  position: relative;
  width: 16px;

  ${e=>{let{$showLine:t,$isLast:n,$showCollapse:l}=e;return t&&(0,F.iv)`
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
`,e$=F.ZP.div`
  grid-column: 2;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`,eK=F.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,e_=F.ZP.div`
  display: none;

  ${e=>{let{$collapse:t}=e;return t&&(0,F.iv)`
      display: block;
    `}}
`,eG=F.ZP.div`
  flex-grow: 1;
`,eU=F.ZP.div``,eW=F.ZP.div``,eX=F.ZP.div`
  white-space: nowrap;
`,eY=a.createElement("svg",{className:"icon-icon icon-icon-coz_add_node ",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 6.49988C11 8.64148 9.50397 10.4337 7.49995 10.8884V15.4998C7.49995 16.0521 7.94767 16.4998 8.49995 16.4998H11.208C11.0742 16.8061 11 17.1443 11 17.4998C11 17.8554 11.0742 18.1936 11.208 18.4998H8.49995C6.8431 18.4998 5.49995 17.1567 5.49995 15.4998V10.8884C3.49599 10.4336 2 8.64145 2 6.49988C2 4.0146 4.01472 1.99988 6.5 1.99988C8.98528 1.99988 11 4.0146 11 6.49988ZM6.5 8.99988C7.88071 8.99988 9 7.88059 9 6.49988C9 5.11917 7.88071 3.99988 6.5 3.99988C5.11929 3.99988 4 5.11917 4 6.49988C4 7.88059 5.11929 8.99988 6.5 8.99988Z"}),a.createElement("path",{d:"M17.5 12.4999C18.0523 12.4999 18.5 12.9476 18.5 13.4999V16.4999H21.5C22.0523 16.4999 22.5 16.9476 22.5 17.4999C22.5 18.0522 22.0523 18.4999 21.5 18.4999H18.5V21.4999C18.5 22.0522 18.0523 22.4999 17.5 22.4999C16.9477 22.4999 16.5 22.0522 16.5 21.4999V18.4999H13.5C12.9477 18.4999 12.5 18.0522 12.5 17.4999C12.5 16.9476 12.9477 16.4999 13.5 16.4999H16.5V13.4999C16.5 12.9476 16.9477 12.4999 17.5 12.4999Z"})),eQ=()=>a.createElement(et.ZPm,{size:"small",svg:eY}),e1=F.ZP.div`
  margin: 0;
`,e0=F.ZP.div`
  flex-grow: 1;

  & .semi-tree-select,
  & .semi-input-number,
  & .semi-select {
    width: 100%;
  }
`,e3=0;function e6(e,t){let n=B(),l=n.getPropertiesParent(e||{}),r=n.canAddField(e||{}),[i,o]=(0,a.useState)([]),s=(0,a.useRef)(0),c=(0,a.useRef)(0);(0,a.useEffect)(()=>{s.current=s.current+1,s.current!==c.current&&(s.current=c.current,o(e=>{let t=Object.entries((null==l?void 0:l.properties)||{}).sort((e,t)=>{var n,l;let[,r]=e,[,a]=t;return((null==(n=r.extra)?void 0:n.index)??0)-((null==(l=a.extra)?void 0:l.index)??0)}).map(e=>{let[t]=e;return t}),n=e.map(e=>e.name).filter(Boolean),r=(0,u.difference)(t,n);return e.filter(e=>!e.name||t.includes(e.name)).map(e=>{var t,n;return{key:e.key,name:e.name,isPropertyRequired:(null==l||null==(t=l.required)?void 0:t.includes(e.name||""))||!1,...(null==l||null==(n=l.properties)?void 0:n[e.name||""])||e||{}}}).concat(r.map(e=>{var t,n;return{key:e3++,name:e,isPropertyRequired:(null==l||null==(t=l.required)?void 0:t.includes(e))||!1,...(null==l||null==(n=l.properties)?void 0:n[e])||{}}}))}))},[l]);let d=l=>{c.current=c.current+1,o(r=>{let a=l(r),i={},o=[];for(let e of a)e.name&&(i[e.name]=(0,u.omit)(e,["key","name","isPropertyRequired"]),e.isPropertyRequired&&o.push(e.name));return null==t||t((0,en.Uy)(e||{},e=>{let t=n.getPropertiesParent(e);if(t){t.properties=i,t.required=o;return}})),a})};return(0,a.useEffect)(()=>{r||o([])},[r]),{propertyList:i,canAddField:r,onAddProperty:()=>{o(e=>[...e,{key:e3++,name:"",type:"string",extra:{index:e.length+1}}])},onRemoveProperty:e=>{d(t=>t.filter(t=>t.key!==e))},onEditProperty:(e,t)=>{d(n=>n.map(n=>n.key===e?t:n))}}}function e2(e){let{value:t,onChange:n,schema:l,strategies:r,fallbackRenderer:i,readonly:s,...c}=e,u=eV(),d=(0,a.useMemo)(()=>{let e=(r||[]).find(e=>e.hit(l));if(!e){var t;return null==(t=u.getTypeBySchema(l))?void 0:t.ConstantRenderer}return null==e?void 0:e.Renderer},[r,l]);return d?a.createElement(d,{value:t,onChange:n,readonly:s,...c}):i?a.createElement(i,{value:t,onChange:n,readonly:s,...c}):a.createElement(o.II,{size:"small",disabled:!0,placeholder:"Unsupported type"})}function e4(e){let{value:t,schema:n,onChange:l,placeholder:r}=e;return a.createElement(e0,null,a.createElement(e2,{value:t,onChange:e=>l(e),schema:n||{type:"string"},placeholder:r??i.oci.t("Default value if parameter is not provided"),enableMultiLineStr:!0}))}var e8={type:"object"};function e5(e){let{value:t=e8,config:n={},onChange:l,readonly:r}=e,{propertyList:s,onAddProperty:c,onRemoveProperty:u,onEditProperty:d}=e6(t,l);return a.createElement(eL,{className:e.className},a.createElement(eN,null,s.map(e=>a.createElement(e9,{readonly:r,key:e.key,value:e,config:n,onChange:t=>{d(e.key,t)},onRemove:()=>{u(e.key)}}))),a.createElement(o.zx,{disabled:r,size:"small",style:{marginTop:10,marginLeft:16},icon:a.createElement(G.Z,null),onClick:c},(null==n?void 0:n.addButtonText)??i.oci.t("Add")))}function e9(e){let{value:t,config:n,readonly:l,$level:r=0,onChange:s,onRemove:c,$isLast:u}=e,[d,p]=(0,a.useState)(!1),[m,g]=(0,a.useState)(!1),{name:h,type:y,items:v,default:f,description:C,isPropertyRequired:E}=t||{},b=(0,a.useMemo)(()=>({type:y,items:v}),[y,v]),{propertyList:x,canAddField:V,onAddProperty:w,onRemoveProperty:H,onEditProperty:P}=e6(t,s),Z=(e,n)=>{null==s||s({...t||{},[e]:n})},k=V&&x.length>0;return a.createElement(a.Fragment,null,a.createElement(eO,{$isLast:u,$showLine:r>0,$showCollapse:k},k&&a.createElement(eq,{onClick:()=>g(e=>!e)},m?a.createElement(U.Z,{size:"small"}):a.createElement(W.Z,{size:"small"}))),a.createElement(e$,null,a.createElement(eK,null,a.createElement(eJ,null,a.createElement(eG,null,a.createElement(eF,{disabled:l,placeholder:(null==n?void 0:n.placeholder)??i.oci.t("Input Variable Name"),size:"small",value:h,onChange:e=>Z("name",e)})),a.createElement(eU,null,a.createElement(eI,{value:b,readonly:l,onChange:e=>{null==s||s({...t||{},...e})}})),a.createElement(eW,null,a.createElement(o.XZ,{disabled:l,checked:E,onChange:e=>Z("isPropertyRequired",e.target.checked)})),a.createElement(eX,null,a.createElement(o.hU,{disabled:l,size:"small",theme:"borderless",icon:d?a.createElement(X.Z,{size:"small"}):a.createElement(Y.Z,{size:"small"}),onClick:()=>{p(e=>!e)}}),V&&a.createElement(o.hU,{disabled:l,size:"small",theme:"borderless",icon:a.createElement(eQ,null),onClick:()=>{w(),g(!0)}}),a.createElement(o.hU,{disabled:l,size:"small",theme:"borderless",icon:a.createElement(Q.Z,{size:"small"}),onClick:c}))),d&&a.createElement(ez,null,a.createElement(eA,null,(null==n?void 0:n.descTitle)??i.oci.t("Description")),a.createElement(eF,{disabled:l,size:"small",value:C,onChange:e=>Z("description",e),placeholder:(null==n?void 0:n.descPlaceholder)??i.oci.t("Help LLM to understand the property")}),0===r&&a.createElement(a.Fragment,null,a.createElement(eA,{style:{marginTop:10}},(null==n?void 0:n.defaultValueTitle)??i.oci.t("Default Value")),a.createElement(e1,null,a.createElement(e4,{value:f,schema:t,placeholder:(null==n?void 0:n.defaultValuePlaceholder)??i.oci.t("Default Value"),onChange:e=>Z("default",e)}))))),k&&a.createElement(e_,{$collapse:m},a.createElement(eN,{$shrink:!0},x.map((e,t)=>a.createElement(e9,{readonly:l,key:e.key,value:e,config:n,$level:r+1,onChange:t=>{P(e.key,t)},onRemove:()=>{H(e.key)},$isLast:t===x.length-1}))))))}var e7={type:"array",extra:{weak:!0}};function te(e){return a.createElement(i._cB,null,a.createElement(eM,{...e,includeSchema:e7}))}var tt=F.ZP.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--semi-color-border);

  overflow: hidden;

  background-color: var(--semi-color-fill-0);
`,tn=F.ZP.div`
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
`,tl=F.ZP.div`
  & .semi-button {
    border-radius: 0;
  }
`,tr=F.ZP.div`
  & .semi-button {
    border-radius: 0;
  }
`,ta={type:"constant",content:"",schema:{type:"string"}};function ti(e){let{value:t,onChange:n,readonly:r,style:s,schema:c,constantProps:u}=e,d=function(e){let t=(0,i.rVg)();return(0,a.useMemo)(()=>{if((null==e?void 0:e.type)==="ref")return t.getByKeyPath(e.content)},[e,t])}(t),[p,m]=function(e,t,n){let l=e||(null==t?void 0:t.schema)||{type:"string"};(null==n?void 0:n.type)==="constant"&&(l=(null==n?void 0:n.schema)||l);let r=(0,a.useRef)(0),i=(0,a.useRef)(0),[o,s]=(0,a.useState)(l);return(0,a.useEffect)(()=>{if(i.current+=1,r.current!==i.current&&(i.current=r.current,(null==n?void 0:n.type)==="constant"&&(null==n?void 0:n.schema)))return void s(null==n?void 0:n.schema)},[n]),[o,e=>{s(e),r.current+=1}]}(c,u,t),g=(0,a.useMemo)(()=>{if(c)return(null==c?void 0:c.type)==="number"?[c,{type:"integer"}]:{...c,extra:{...null==c?void 0:c.extra,weak:!0}}},[c]),h=B();return a.createElement(tt,{style:s},a.createElement(tl,null,(()=>{if(c)return a.createElement(ej,{value:c,readonly:!0});if((null==t?void 0:t.type)==="ref"){let e=(null==d?void 0:d.type)?l.astToSchema(null==d?void 0:d.type):void 0;return a.createElement(ej,{value:e,readonly:!0})}return a.createElement(ej,{value:p,onChange:e=>{m(e||{type:"string"});let t=e||{type:"string"},l=h.getDefaultValue(t);(null==e?void 0:e.type)==="object"&&(l="{}"),(null==e?void 0:e.type)==="array"&&(l="[]"),n({type:"constant",content:l,schema:t})},readonly:r})})()),a.createElement(tn,null,(()=>{if((null==t?void 0:t.type)==="ref")return a.createElement(eS,{style:{width:"100%"},value:null==t?void 0:t.content,onChange:e=>n(e?{type:"ref",content:e}:ta),includeSchema:g,readonly:r});let e=c||p||{type:"string"};return a.createElement(e2,{value:null==t?void 0:t.content,onChange:t=>n({type:"constant",content:t,schema:e}),schema:e||{type:"string"},readonly:r,fallbackRenderer:()=>a.createElement(eS,{style:{width:"100%"},onChange:e=>n(e?{type:"ref",content:e}:ta),includeSchema:g,readonly:r}),...u,strategies:[...(null==u?void 0:u.strategies)||[]]})})()),a.createElement(tr,null,a.createElement(eS,{style:{width:"100%"},value:(null==t?void 0:t.type)==="ref"?null==t?void 0:t.content:void 0,onChange:e=>n({type:"ref",content:e}),includeSchema:g,readonly:r,triggerRender:()=>a.createElement(o.hU,{disabled:r,size:"small",icon:a.createElement(el.Z,{size:"small"})})})))}ti.renderKey="dynamic-value-input-render-key";var to=eo(ti),ts=F.ZP.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,tc=F.ZP.div``,tu=F.ZP.div`
  width: 100%;
`,td=F.ZP.div`
  width: 100%;
`,tp=F.ZP.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,tm={string:{eq:"string",neq:"string",contains:"string",not_contains:"string",in:"array",nin:"array",is_empty:null,is_not_empty:null},number:{eq:"number",neq:"number",gt:"number",gte:"number",lt:"number",lte:"number",in:"array",nin:"array"},integer:{eq:"number",neq:"number",gt:"number",gte:"number",lt:"number",lte:"number",in:"array",nin:"array"},boolean:{eq:"boolean",neq:"boolean",is_true:null,is_false:null,in:"array",nin:"array"},object:{is_empty:null,is_not_empty:null},array:{is_empty:null,is_not_empty:null,contains:"array",not_contains:"array",eq:"array",neq:"array"},map:{is_empty:null,is_not_empty:null}},tg={eq:{label:"Equal",abbreviation:"="},neq:{label:"Not Equal",abbreviation:"≠"},gt:{label:"Greater Than",abbreviation:">"},gte:{label:"Greater Than or Equal",abbreviation:">="},lt:{label:"Less Than",abbreviation:"<"},lte:{label:"Less Than or Equal",abbreviation:"<="},in:{label:"In",abbreviation:"∈"},nin:{label:"Not In",abbreviation:"∉"},contains:{label:"Contains",abbreviation:"⊇"},not_contains:{label:"Not Contains",abbreviation:"⊉"},is_empty:{label:"Is Empty",abbreviation:"=",rightDisplay:"Empty"},is_not_empty:{label:"Is Not Empty",abbreviation:"≠",rightDisplay:"Empty"},is_true:{label:"Is True",abbreviation:"=",rightDisplay:"True"},is_false:{label:"Is False",abbreviation:"=",rightDisplay:"False"}},th={ops:{},rules:{}};function ty(e){let{style:t,value:n,onChange:r,readonly:s,ruleConfig:u=th}=e,{left:d,operator:p,right:m}=n||{},{rule:g}=function(e,t){let n=(0,i.rVg)(),r=(0,a.useMemo)(()=>({...tm,...t||{}}),[t]),o=(0,a.useMemo)(()=>{if(e)return n.getByKeyPath(e.content)},[n,e]);return{rule:(0,a.useMemo)(()=>{if(!o)return;let e=l.astToSchema(o.type,{drilldown:!1});return r[null==e?void 0:e.type]},[null==o?void 0:o.type,r])}}(d,u.rules),{renderOpSelect:h,opConfig:y}=function(e){let{rule:t,op:n,onChange:l,readonly:r,userOps:s}=e,u=(0,a.useMemo)(()=>Object.keys(t||{}).map(e=>{var t,n;return{...tg[e]||{},...(null==s?void 0:s[e])||{},value:e,label:i.oci.t((null==s||null==(t=s[e])?void 0:t.label)||(null==(n=tg[e])?void 0:n.label))}}),[t,s]),d=(0,a.useMemo)(()=>tg[n],[n]);return{renderOpSelect:()=>a.createElement(o.Ph,{style:{height:22},disabled:r,size:"small",value:n,optionList:u,onChange:e=>{l(e)},triggerRender:e=>{let{value:n}=e;return a.createElement(o.zx,{size:"small",disabled:!t},(null==d?void 0:d.abbreviation)||a.createElement(c.Z,{size:"small"}))}}),opConfig:d}}({rule:g,op:p,onChange:e=>r({...n,operator:e}),readonly:s,userOps:u.ops}),v=(0,a.useMemo)(()=>{let e=(null==g?void 0:g[p||""])||null;return e?{type:e,extra:{weak:!0}}:null},[g,y]);return a.createElement(ts,{style:t},a.createElement(tc,null,h()),a.createElement(tp,null,a.createElement(tu,null,a.createElement(eS,{readonly:s,style:{width:"100%"},value:null==d?void 0:d.content,onChange:e=>r({...n,left:{type:"ref",content:e}})})),a.createElement(td,null,v?a.createElement(to,{readonly:s||!g,value:m,schema:v,onChange:e=>r({...n,right:e})}):a.createElement(o.II,{size:"small",disabled:!0,style:{pointerEvents:"none"},value:(null==y?void 0:y.rightDisplay)||i.oci.t("Empty")}))))}function tv(e){let{value:t,onChange:n,sortIndexKey:l}=e,[r,i]=(0,a.useState)([]),o=(0,a.useRef)(0),s=(0,a.useRef)(0),c=e=>"function"==typeof l?(0,u.get)(e,l(e))||0:(0,u.get)(e,l||"")||0;return(0,a.useEffect)(()=>{o.current=o.current+1,o.current!==s.current&&(o.current=s.current,i(e=>{let n=Object.entries(t||{}).sort((e,t)=>c(e[1])-c(t[1])).map(e=>{let[t]=e;return t}),l=e.map(e=>e.key).filter(Boolean),r=(0,u.difference)(n,l);return e.filter(e=>!e.key||n.includes(e.key)).map(e=>({id:e.id,key:e.key,value:e.key?null==t?void 0:t[e.key]:e.value})).concat(r.map(e=>({id:(0,ea.x0)(),key:e,value:null==t?void 0:t[e]})))}))},[t]),{list:r,add:e=>{i(t=>[...t,{id:(0,ea.x0)(),value:e}])},updateKey:(e,t)=>{s.current=s.current+1,i(l=>{let r=l.map(n=>n.id===e?{...n,key:t}:n);return n(Object.fromEntries(r.filter(e=>e.key).map(e=>[e.key,e.value]))),r})},updateValue:(e,t)=>{s.current=s.current+1,i(r=>{let a=r.map(n=>n.id===e?{...n,value:t}:n);return n(Object.fromEntries(a.filter(e=>e.key).map(e=>[e.key,e.value]).map((e,t)=>{let n="function"==typeof l?l(e[1]):l;return(0,u.isObject)(e[1])&&n&&(0,u.set)(e[1],n,t),e}))),a})},remove:e=>{s.current=s.current+1,i(t=>{let l=t.filter(t=>t.id!==e);return n(Object.fromEntries(l.filter(e=>e.key).map(e=>[e.key,e.value]))),l})}}}var tf=F.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`,tC=F.ZP.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;function tE(e){let{readonly:t,style:n}=e,{list:l,add:r,updateKey:s,updateValue:c,remove:u}=tv(e);return a.createElement("div",null,a.createElement(tf,{style:n},l.map(e=>{var n;return a.createElement(tC,{key:e.id},a.createElement(o.II,{style:{width:100},disabled:t,size:"small",value:e.key,onChange:t=>s(e.id,t)}),a.createElement(eS,{style:{flexGrow:1},readonly:t,value:null==(n=e.value)?void 0:n.content,onChange:t=>c(e.id,{type:"ref",content:t})}),a.createElement(o.zx,{disabled:t,icon:a.createElement(er.Z,null),size:"small",onClick:()=>u(e.id)}))})),a.createElement(o.zx,{disabled:t,icon:a.createElement(G.Z,null),size:"small",onClick:()=>r()},i.oci.t("Add")))}var tb=F.ZP.div`
  background-color: var(--semi-color-fill-0);
  padding-left: 10px;
  padding-right: 6px;

  ${e=>{let{$hasError:t}=e;return t&&(0,F.iv)`
      border: 1px solid var(--semi-color-danger-6);
    `}}
`,tx=function(){let e=(0,L.G6)();return(0,a.useLayoutEffect)(()=>e.inject([K.Cj.whole.of(e=>e.name.startsWith("ATXHeading")?{type:"className",className:"heading"}:"Emphasis"===e.name?{type:"className",className:"emphasis"}:"StrongEmphasis"===e.name?{type:"className",className:"strong-emphasis"}:"ListMark"===e.name||"QuoteMark"===e.name?{type:"className",className:"mark"}:void 0),z.tk.theme({".heading":{color:"#00818C",fontWeight:"bold"},".emphasis":{fontStyle:"italic"},".strong-emphasis":{fontWeight:"bold"},".mark":{color:"#4E40E5"}})]),[e]),null},tV=function(){let e=(0,L.G6)();return(0,a.useLayoutEffect)(()=>e.inject([ei.Q$]),[e]),null},tw=function(){let e=(0,L.G6)();return(0,a.useLayoutEffect)(()=>e.inject([K.Cj.whole.of(e=>"JinjaStatementStart"===e.name||"JinjaStatementEnd"===e.name?{type:"className",className:"jinja-statement-bracket"}:"JinjaComment"===e.name?{type:"className",className:"jinja-comment"}:"JinjaExpression"===e.name?{type:"className",className:"jinja-expression"}:void 0),z.tk.theme({".jinja-statement-bracket":{color:"#D1009D"},".jinja-comment":{color:"#0607094D"},".jinja-expression":{color:"#4E40E5"}})]),[e]),null};function tH(e){let{value:t,onChange:n,readonly:l,placeholder:r,activeLinePlaceholder:i,style:o,hasError:s,children:c,disableMarkdownHighlight:u,options:d}=e||{},p=(0,a.useRef)(null);return(0,a.useEffect)(()=>{var e,n;(null==(e=p.current)?void 0:e.getValue())!==(null==t?void 0:t.content)&&(null==(n=p.current)||n.setValue(String((null==t?void 0:t.content)||"")))},[t]),a.createElement(tb,{$hasError:s,style:o},a.createElement(L.KU,null,a.createElement(L.Th,{didMount:e=>{p.current=e},plugins:ei.ZP,defaultValue:String(null==t?void 0:t.content),options:{readOnly:l,editable:!l,placeholder:r,...d},onChange:e=>{n({type:"template",content:e.value})}}),i&&a.createElement(J.GH,null,i),!u&&a.createElement(tx,null),a.createElement(tV,null),a.createElement(tw,null),c))}function tP(){let[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)(!1),[r,i]=(0,a.useState)(-1),s=(0,L.jE)();(0,a.useEffect)(()=>{if(!s)return},[s,n]);let c=ew({});return a.createElement(a.Fragment,null,a.createElement(J.pf,{triggerCharacters:["{","{}","@"],onOpenChange:function(e){i(e.state.selection.main.head),l(e.value)}}),a.createElement(o.J2,{visible:n,trigger:"custom",position:"topLeft",rePosKey:e,content:a.createElement("div",{style:{width:300}},a.createElement(o.mp,{treeData:c,onSelect:e=>{!function(e){let t=(0,J.m4)(s.$view.state);if(!t)return;let{from:n,to:r}=t;for(;"{"===s.$view.state.doc.sliceString(n-1,n);)n--;for(;"}"===s.$view.state.doc.sliceString(r,r+1);)r++;s.replaceText({from:n,to:r,text:"{{"+e+"}}"}),l(!1)}(e)}}))},a.createElement(J.Iq,{position:r,onChange:()=>t(String(Math.random()))})))}var tZ=F.ZP.div`
  margin-right: 4px;
  min-width: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--semi-color-text-2);
`,tk=F.ZP.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tT=(0,F.ZP)(o.Vp)`
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
`,tM=F.ZP.div`
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`,tS=class extends z.l9{renderVariable(e){if(!e)return void this.root.render(a.createElement(tT,{prefixIcon:a.createElement(s.Z,null),color:"amber"},"Unknown"));let t=(0,u.last)(e.parentFields),n=a.createElement(tZ,null,(null==t?void 0:t.meta.title)?`${t.meta.title} -`:""),l=this.renderIcon(null==t?void 0:t.meta.icon);this.root.render(a.createElement(o.J2,{content:a.createElement(tM,null,l,n,a.createElement(tk,null,null==e?void 0:e.keyPath.slice(1).join(".")))},a.createElement(tT,{prefixIcon:l},n,a.createElement(tk,null,null==e?void 0:e.key))))}toDOM(e){let t=document.createElement("span");return this.root=em(t),this.toDispose.push(i.JTr.create(()=>{this.root.unmount()})),this.toDispose.push(this.scope.available.trackByKeyPath(this.keyPath,e=>{this.renderVariable(e)},{triggerOnInit:!1})),this.renderVariable(this.scope.available.getByKeyPath(this.keyPath)),t}eq(e){return(0,u.isEqual)(this.keyPath,e.keyPath)}ignoreEvent(){return!1}destroy(e){this.toDispose.dispose()}constructor({keyPath:e,scope:t}){super(),this.toDispose=new i.K46,this.renderIcon=e=>"string"==typeof e?a.createElement("img",{style:{marginRight:8},width:12,height:12,src:e}):e,this.keyPath=e,this.scope=t}};function tR(){let e=(0,L.G6)(),t=(0,i.$eD)();return(0,a.useLayoutEffect)(()=>{let n=new z.Y1({regexp:/\{\{([^\}\{]+)\}\}/g,decoration:e=>{var n;return z.p.replace({widget:new tS({keyPath:(null==(n=e[1])?void 0:n.split("."))??[],scope:t})})}});return e.inject([z.lg.fromClass(class{update(){this.decorations=n.createDeco(this.view)}constructor(e){this.view=e,this.decorations=n.createDeco(e)}},{decorations:e=>e.decorations,provide:e=>z.tk.atomicRanges.of(t=>{var n;return(null==(n=t.plugin(e))?void 0:n.decorations)??z.p.none})})])},[e]),null}function tB(e){return a.createElement(tH,{...e},a.createElement(tP,null),a.createElement(tR,null))}function tD(){let[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)(!1),[r,i]=(0,a.useState)(-1),s=(0,L.jE)();(0,a.useEffect)(()=>{if(!s)return},[s,n]);let c=ew({});return a.createElement(a.Fragment,null,a.createElement(J.pf,{triggerCharacters:["@"],onOpenChange:function(e){i(e.state.selection.main.head),l(e.value)}}),a.createElement(o.J2,{visible:n,trigger:"custom",position:"topLeft",rePosKey:e,content:a.createElement("div",{style:{width:300}},a.createElement(o.mp,{treeData:c,onSelect:e=>{let t=(0,J.m4)(s.$view.state);t&&(s.replaceText({...t,text:"{{"+e+"}}"}),l(!1))}}))},a.createElement(J.Iq,{position:r,onChange:()=>t(String(Math.random()))})))}var tj=F.ZP.div`
  margin-right: 4px;
  min-width: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--semi-color-text-2);
`,tI=F.ZP.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tF=(0,F.ZP)(o.Vp)`
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
`,tL=F.ZP.div`
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`,tJ=class extends z.l9{renderVariable(e){if(!e)return void this.root.render(a.createElement(tF,{prefixIcon:a.createElement(s.Z,null),color:"amber"},"Unknown"));let t=(0,u.last)(e.parentFields),n=a.createElement(tj,null,(null==t?void 0:t.meta.title)?`${t.meta.title} -`:""),l=this.renderIcon(null==t?void 0:t.meta.icon);this.root.render(a.createElement(o.J2,{content:a.createElement(tL,null,l,n,a.createElement(tI,null,null==e?void 0:e.keyPath.slice(1).join(".")))},a.createElement(tF,{prefixIcon:l},n,a.createElement(tI,null,null==e?void 0:e.key))))}toDOM(e){let t=document.createElement("span");return this.root=em(t),this.toDispose.push(i.JTr.create(()=>{this.root.unmount()})),this.toDispose.push(this.scope.available.trackByKeyPath(this.keyPath,e=>{this.renderVariable(e)},{triggerOnInit:!1})),this.renderVariable(this.scope.available.getByKeyPath(this.keyPath)),t}eq(e){return(0,u.isEqual)(this.keyPath,e.keyPath)}ignoreEvent(){return!1}destroy(e){this.toDispose.dispose()}constructor({keyPath:e,scope:t}){super(),this.toDispose=new i.K46,this.renderIcon=e=>"string"==typeof e?a.createElement("img",{style:{marginRight:8},width:12,height:12,src:e}):e,this.keyPath=e,this.scope=t}};function tq(){let e=(0,L.G6)(),t=(0,i.$eD)();return(0,a.useLayoutEffect)(()=>{let n=new z.Y1({regexp:/\{\{([^\}\{]+)\}\}/g,decoration:e=>{var n;return z.p.replace({widget:new tJ({keyPath:(null==(n=e[1])?void 0:n.split("."))??[],scope:t})})}});return e.inject([z.lg.fromClass(class{update(){this.decorations=n.createDeco(this.view)}constructor(e){this.view=e,this.decorations=n.createDeco(e)}},{decorations:e=>e.decorations,provide:e=>z.tk.atomicRanges.of(t=>{var n;return(null==(n=t.plugin(e))?void 0:n.decorations)??z.p.none})})])},[e]),null}var tz=(0,q.Gy)(e=>{let t=function(e,t){let n,l=new RegExp(t,t.flags.includes("g")?t.flags:t.flags+"g"),r=[];for(;null!==(n=l.exec(e));)n.index===l.lastIndex&&l.lastIndex++,r.push({match:n[0],range:[n.index,n.index+n[0].length]});return r}(e.toString(),/\{\{([^\}]*)\}\}/g);return t.length>0&&t.forEach(t=>{let{range:n}=t;e.replaceRange(n[0],n[1],"null")}),e});function tA(e){return a.createElement(eC,{languageId:"json",activeLinePlaceholder:i.oci.t("Press '@' to Select variable"),...e,options:{transformer:tz,...e.options||{}}},a.createElement(tD,null),a.createElement(tq,null))}var tN=F.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`,tO=F.ZP.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;function t$(e){let{value:t,onChange:n,style:l,readonly:r,constantProps:s,schema:c,hasError:u}=e,{list:d,updateKey:p,updateValue:m,remove:g,add:h}=tv({value:t,onChange:n,sortIndexKey:"extra.index"});return a.createElement("div",null,a.createElement(tN,{style:l},d.map(e=>a.createElement(tO,{key:e.id},a.createElement(eF,{style:{width:100,minWidth:100,maxWidth:100},disabled:r,size:"small",value:e.key,onChange:t=>p(e.id,t),placeholder:i.oci.t("Input Key")}),a.createElement(to,{style:{flexGrow:1},readonly:r,value:e.value,onChange:t=>m(e.id,t),schema:c,hasError:u,constantProps:{...s,strategies:[...(null==s?void 0:s.strategies)||[]]}}),a.createElement(o.hU,{disabled:r,theme:"borderless",icon:a.createElement(er.Z,{size:"small"}),size:"small",onClick:()=>g(e.id)})))),a.createElement(o.zx,{disabled:r,icon:a.createElement(G.Z,null),size:"small",onClick:()=>h({type:"constant",content:"",schema:{type:"string"}})},i.oci.t("Add")))}var tK=F.ZP.div`
  display: flex;
  align-items: center;

  .tree-icon {
    margin-right: 8px;
    width: 14px;
    height: 14px;
  }

  height: 27px;
  white-space: nowrap;
`,t_=F.ZP.div`
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
`,tG=F.ZP.div`
  // overflow: hidden;
  // text-overflow: ellipsis;
`,tU=F.ZP.div`
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
`,tW=F.ZP.div`
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

  ${e=>0===e.depth&&(0,F.iv)`
      &::before {
        width: 0px !important;
      }
    `}
`;function tX(e){return a.createElement(tY,{...e})}function tY(e){let{value:t={},drilldown:n=!0,depth:l=0,showIcon:r=!0,parentKey:i=""}=e||{},o=eV(),s=o.getTypeBySchema(t),c=o.getComplexText(t),u=null==o?void 0:o.getDisplayIcon(t),d=Object.entries((n&&s?s.getTypeSchemaProperties(t):{})||{});return a.createElement(tW,{depth:l,key:i||"root"},a.createElement(tK,null,0!==l&&a.createElement(t_,null),r&&u&&a.cloneElement(u,{className:"tree-icon"}),a.createElement(tG,null,i?a.createElement(a.Fragment,null,`${i} (`,c,")"):c)),(null==d?void 0:d.length)?a.createElement(tU,null,d.map(t=>{let[n,r]=t;return a.createElement(tY,{key:n,...e,parentKey:n,value:r,depth:l+1})})):null)}var tQ=F.ZP.div`
  padding: 10px;
`,t1=(0,F.ZP)(o.Vp)`
  padding: 4px;

  .tag-icon {
    width: 12px;
    height: 12px;
  }
`,t0=F.ZP.span`
  display: inline-block;
  margin-left: 4px;
  margin-top: -1px;
  overflow: hidden;
  text-overflow: ellipsis;
`;function t3(e){let{value:t={},showIconInTree:n,title:l,warning:r}=e,i=eV(),s=(null==i?void 0:i.getDisplayIcon(t))||i.getDisplayIcon({type:"unknown"});return a.createElement(o.J2,{content:a.createElement(tQ,null,a.createElement(tX,{value:t,typeManager:i,showIcon:n}))},a.createElement(t1,{color:r?"amber":"white"},s&&a.cloneElement(s,{className:"tag-icon"}),l&&a.createElement(t0,null,l)))}var t6=F.ZP.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;function t2(e){var t;let{value:n,showIconInTree:r,displayFromScope:o}=e,s=(0,i.$eD)(),c=(0,i.JAk)();(0,a.useEffect)(()=>{if(!o)return()=>null;let e=s.output.onListOrAnyVarChange(()=>{c()});return()=>{e.dispose()}},[o]);let u=Object.entries((o?null==(t=s.output.variables)?void 0:t.reduce((e,t)=>{var n;return e={...e,...(null==(n=l.astToSchema(t.type))?void 0:n.properties)||{}}},{}):(null==n?void 0:n.properties)||{})||{});return a.createElement(t6,null,u.map(e=>{let[t,n]=e;return a.createElement(t3,{key:t,title:t,value:n,showIconInTree:r,warning:!n})}))}function t4(e){let{value:t,title:n,showIconInTree:o}=e,s=(0,i.rVg)(),c=(null==t?void 0:t.type)==="ref"?s.getByKeyPath(null==t?void 0:t.content):void 0,u=(0,a.useMemo)(()=>(null==t?void 0:t.type)==="ref"?l.astToSchema(null==c?void 0:c.type):(null==t?void 0:t.type)==="template"?{type:"string"}:(null==t?void 0:t.type)==="constant"?r.inferConstantJsonSchema(t):{type:"unknown"},[t,null==c?void 0:c.hash]);return a.createElement(t3,{title:n,value:u,showIconInTree:o,warning:(null==t?void 0:t.type)==="ref"&&!c})}var t8=F.ZP.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;function t5(e){let{value:t,showIconInTree:n}=e,l=Object.entries(t||{});return a.createElement(t8,null,l.map(e=>{let[t,l]=e;return r.isFlowValue(l)?a.createElement(t4,{key:t,title:t,value:l,showIconInTree:n}):(0,u.isPlainObject)(l)?a.createElement(t9,{key:t,title:t,value:l,showIconInTree:n}):null}))}function t9(e){let{value:t,title:n,showIconInTree:l}=e,o=(0,i.rVg)(),s=(0,a.useMemo)(()=>r.inferJsonSchema(t,o.scope),[o.version,t]);return a.createElement(t3,{title:n,value:s,showIconInTree:l})}function t7(e){let[t,n]=(0,a.useState)("");return(0,a.useEffect)(()=>{n(e.value)},[e.value]),a.createElement(ee.Z,{...e,value:t,onChange:e=>{n(e)},onBlur:n=>{var l;return null==(l=e.onChange)?void 0:l.call(e,t,n)}})}function ne(e){var t;let{value:n={operator:"assign"},onChange:l,onDelete:r,readonly:i}=e;return a.createElement("div",{style:{display:"flex",alignItems:"center",gap:5}},a.createElement("div",{style:{width:150,minWidth:150,maxWidth:150}},(null==n?void 0:n.operator)==="assign"?a.createElement(eS,{style:{width:"100%",height:26},value:null==n||null==(t=n.left)?void 0:t.content,config:{placeholder:"Select Left"},onChange:e=>null==l?void 0:l({...n,left:{type:"ref",content:e}})}):a.createElement(t7,{style:{height:26},size:"small",placeholder:"Input Name",value:null==n?void 0:n.left,onChange:e=>null==l?void 0:l({...n,left:e})})),a.createElement("div",{style:{flexGrow:1}},a.createElement(to,{readonly:i,value:null==n?void 0:n.right,onChange:e=>null==l?void 0:l({...n,right:e})})),r&&a.createElement("div",null,a.createElement(o.hU,{size:"small",theme:"borderless",icon:a.createElement(Q.Z,null),onClick:()=>null==r?void 0:r()})))}function nt(e){let{name:t,readonly:n}=e;return a.createElement(i.F26,{name:t},e=>{let{field:t}=e;return a.createElement(a.Fragment,null,t.map((e,l)=>a.createElement(ne,{key:e.key,readonly:n,value:e.value,onChange:t=>{e.onChange(t)},onDelete:()=>t.remove(l)})),a.createElement("div",{style:{display:"flex",gap:5}},a.createElement(o.zx,{size:"small",theme:"borderless",icon:a.createElement(G.Z,null),onClick:()=>t.append({operator:"assign"})},"Assign"),a.createElement(o.zx,{size:"small",theme:"borderless",icon:a.createElement(G.Z,null),onClick:()=>t.append({operator:"declare"})},"Declaration")))})}F.ZP.div``,F.ZP.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`,F.ZP.div`
  cursor: pointer;
  margin-right: 5px;
`,F.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;

  ${e=>{let{$shrink:t}=e;return t&&(0,F.iv)`
      padding-left: 3px;
      margin-top: 10px;
    `}}
`,F.ZP.div`
  grid-column: 1;
  position: relative;
  width: 16px;

  ${e=>{let{$showLine:t,$isLast:n,$showCollapse:l}=e;return t&&(0,F.iv)`
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
`,F.ZP.div`
  grid-column: 2;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`,F.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,F.ZP.div`
  display: none;

  ${e=>{let{$collapse:t}=e;return t&&(0,F.iv)`
      display: block;
    `}}
`,F.ZP.div`
  white-space: nowrap;
`;var nn=(0,i.W2M)({private:!0,parse:(e,t)=>{var n,l;return[i.qRT.createVariableDeclaration({key:`${t.node.id}_locals`,meta:{title:null==(n=(0,i.CMu)(t.node))?void 0:n.getValueIn("title"),icon:null==(l=t.node.getNodeRegistry().info)?void 0:l.icon},type:i.qRT.createObject({properties:[i.qRT.createProperty({key:"item",initializer:i.qRT.createEnumerateExpression({enumerateFor:i.qRT.createKeyPathExpression({keyPath:e.content||[]})})}),i.qRT.createProperty({key:"index",type:i.qRT.createNumber()})]})})]}}),nl=[{event:i.zEJ.onValueInit,effect:e=>{let{context:t,form:n,name:l}=e,a=t.node.getService(i.qmw).onRename(e=>{let{before:t,after:a}=e,i=[...t.parentFields.map(e=>e.key).reverse(),t.key],o=[...a.parentFields.map(e=>e.key).reverse(),a.key];var s=l,c=n.getValueIn(l),u=(e,t)=>{if("ref"===t.type){if(nr(t.content,i)){var l;t.content=[...o,...null==(l=t.content||[])?void 0:l.slice(i.length)],n.setValueIn(e,t)}}else if("template"===t.type){let l=r.getTemplateKeyPaths(t),a=!1;l.forEach(e=>{if(nr(e,i)){var n,l;a=!0;let r=[...o,...null==(n=e||[])?void 0:n.slice(i.length)];t.content=null==(l=t.content)?void 0:l.replace(`{{${e.join(".")}}`,`{{${r.join(".")}}`)}}),a&&n.setValueIn(e,{...t})}};for(let{value:e,path:t}of r.traverse(c,{includeTypes:["ref","template"],path:s}))u(t,e)});return()=>{a.dispose()}}}];function nr(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.every((t,n)=>t===e[n])}var na=(0,i.W2M)({parse:(e,t)=>{var n,r;return[i.qRT.createVariableDeclaration({key:`${t.node.id}`,meta:{title:(null==(n=(0,i.CMu)(t.node))?void 0:n.getValueIn("title"))||t.node.id,icon:null==(r=t.node.getNodeRegistry().info)?void 0:r.icon},type:l.schemaToAST(e)})]}}),ni=[{event:i.zEJ.onValueChange,effect:e=>{let{value:t,context:n}=e;n.node.getData(i._J4).allScopes.forEach(e=>{e.output.variables.forEach(e=>{var l;e.updateMeta({...e.meta||{},title:t||n.node.id,icon:null==(l=n.node.getNodeRegistry().info)?void 0:l.icon})})})}}],no=function(){let{scope:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{event:i.zEJ.onValueInit,effect:t=>{let{context:n,form:l}=t,r=("private"===e?(0,i.u$R)(n.node):(0,i.k6H)(n.node)).available.onListOrAnyVarChange(()=>{(0,u.isEmpty)(l.state.errors)||l.validate()});return()=>r.dispose()}}]},ns=e=>[{event:i.zEJ.onValueInitOrChange,effect:t=>{let{context:n,value:r}=t;if((null==r?void 0:r.type)!=="ref")return()=>null;let a=(0,i.k6H)(n.node).available.trackByKeyPath((null==r?void 0:r.content)||[],n=>{e({...t,schema:l.astToSchema(n)})},{selector:e=>null==e?void 0:e.type});return()=>{a.dispose()}}}],nc=(0,i.W2M)({parse:(e,t)=>{var n,l;return[i.qRT.createVariableDeclaration({key:`${t.node.id}`,meta:{title:null==(n=(0,i.CMu)(t.node))?void 0:n.getValueIn("title"),icon:null==(l=t.node.getNodeRegistry().info)?void 0:l.icon},type:i.qRT.createObject({properties:Object.entries(e).map(e=>{let[t,n]=e;return i.qRT.createProperty({key:t,initializer:i.qRT.createWrapArrayExpression({wrapFor:i.qRT.createKeyPathExpression({keyPath:(null==n?void 0:n.content)||[]})})})})})})]}}),nu=(0,i.CR5)({name:"batch-outputs-plugin",onSetupFormMeta(e,t){let{mergeEffect:n}=e,{outputKey:l}=t;n({[l]:nc})},onInit(e,t){let{outputKey:n}=t,l=e.node.getService(i.Aub),r=e.node.flowNodeType,a=`${r}-outputs`;l.hasTransformer(a)||l.registerTransformer(a,{transformCovers:(e,t)=>{var n,l;let a=null==(n=t.scope.meta)?void 0:n.node;return(null==a||null==(l=a.parent)?void 0:l.flowNodeType)===r?[...e,(0,i.k6H)(a.parent)]:e},transformDeps(e,t){let n=t.scope.meta;if((null==n?void 0:n.type)===i.loc.private)return e;let l=null==n?void 0:n.node;if((null==l?void 0:l.flowNodeType)===r){let e=l.blocks;return[(0,i.u$R)(l),...e.map(e=>(0,i.k6H)(e))]}return e}})}}),nd=(0,i.CR5)({onSetupFormMeta(e,t){let{addFormatOnSubmit:n}=e,{sourceKey:l,targetKey:a,scope:o}=t;l&&a&&n((e,t)=>((0,u.set)(e,a,r.inferJsonSchema((0,u.get)(e,l),"private"===o?(0,i.u$R)(t.node):(0,i.k6H)(t.node))),e))}}),np=(0,i.CR5)({onSetupFormMeta(e,t){let{addFormatOnSubmit:n,mergeEffect:r}=e,{assignKey:a,outputKey:o}=t;a&&o&&(r({[a]:(0,i.W2M)({parse:(e,t)=>{var n,r;let a=(0,u.uniqBy)(e.filter(e=>"declare"===e.operator&&e.left&&e.right),"left");return[i.qRT.createVariableDeclaration({key:`${t.node.id}`,meta:{title:null==(n=(0,i.CMu)(t.node))?void 0:n.getValueIn("title"),icon:null==(r=t.node.getNodeRegistry().info)?void 0:r.icon},type:i.qRT.createObject({properties:a.map(e=>{var t,n,r,a;return i.qRT.createProperty({key:e.left,type:(null==(t=e.right)?void 0:t.type)==="constant"?l.schemaToAST((null==(n=e.right)?void 0:n.schema)||{}):void 0,initializer:(null==(r=e.right)?void 0:r.type)==="ref"?i.qRT.createKeyPathExpression({keyPath:(null==(a=e.right)?void 0:a.content)||[]}):{}})})})})]}})}),n((e,t)=>{var n,r;return(0,u.set)(e,o,l.astToSchema(null==(r=(0,i.k6H)(t.node).output.variables)||null==(n=r[0])?void 0:n.type)),e}))}});function nm(e,t){let{node:n,required:l,errorMessages:a}=t,{required:o="Field is required",unknownVariable:s="Unknown Variable"}=a||{};if(l&&((0,u.isNil)(e)||(0,u.isNil)(null==e?void 0:e.content)||(null==e?void 0:e.content)===""))return{level:i.Odm.Error,message:o};if((null==e?void 0:e.type)==="ref"&&!(0,i.k6H)(n).available.getByKeyPath((null==e?void 0:e.content)||[]))return{level:i.Odm.Error,message:s};if((null==e?void 0:e.type)==="template"){for(let t of r.getTemplateKeyPaths(e))if(!(0,i.k6H)(n).available.getByKeyPath(t))return{level:i.Odm.Error,message:s}}}},842365:function(){},179724:function(){},533205:function(){},701124:function(){},117094:function(){},588495:function(){},46515:function(){}}]);