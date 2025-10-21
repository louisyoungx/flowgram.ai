"use strict";(self.webpackChunk_flowgram_ai_docs=self.webpackChunk_flowgram_ai_docs||[]).push([["148651"],{789638:function(e,t,l){l.d(t,{a:()=>a});var r=l(297674);function a(e,t){var l=e.append("foreignObject").attr("width","100000"),a=l.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":a.insert(o);break;case"object":a.insert(function(){return o});break;default:a.html(o)}r.bg(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var n=a.node().getBoundingClientRect();return l.attr("width",n.width).attr("height",n.height),l}},297674:function(e,t,l){l.d(t,{$p:()=>c,O1:()=>n,WR:()=>p,bF:()=>o,bg:()=>d});var r=l(111886),a=l(314112);function o(e,t){return!!e.children(t).length}function n(e){return s(e.v)+":"+s(e.w)+":"+s(e.name)}var i=/:/g;function s(e){return e?String(e).replace(i,"\\:"):""}function d(e,t){t&&e.attr("style",t)}function c(e,t,l){t&&e.attr("class",t).attr("class",l+" "+e.attr("class"))}function p(e,t){var l=t.graph();if(r.Z(l)){var o=l.transition;if(a.Z(o))return o(e)}return e}},800693:function(e,t,l){l.d(t,{Z:()=>o});var r=l(101917),a=l(200749);let o=(e,t)=>r.Z.lang.round(a.Z.parse(e)[t])},927213:function(e,t,l){l.d(t,{diagram:()=>h});var r=l(148854),a=l(184127),o=l(869039),n=l(702056),i=l(4171),s=l(88019),d=l(297674),c=l(789638);l(220732),l(551069);l(976826);a.c_6;var p=l(804625),b=l(328019),f=l(80438);l(768382),l(879302),l(531560),l(153634);let w={},u=function(e){for(let t of Object.keys(e))w[t]=e[t]},h={parser:r.p,db:r.f,renderer:f.f,styles:f.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,u(e.flowchart),r.f.clear(),r.f.setGen("gen-1")}}},80438:function(e,t,l){l.d(t,{a:()=>u,f:()=>w});var r=l(184127),a=l(789638),o=l(804625),n=l(886312),i=l(328019),s=l(800693),d=l(213925);let c={},p=async function(e,t,l,r,o,n){let s=r.select(`[id="${l}"]`);for(let l of Object.keys(e)){let r,d=e[l],c="default";d.classes.length>0&&(c=d.classes.join(" ")),c+=" flowchart-label";let p=(0,i.k)(d.styles),b=void 0!==d.text?d.text:d.id;if(i.l.info("vertex",d,d.labelType),"markdown"===d.labelType)i.l.info("vertex",d,d.labelType);else if((0,i.m)((0,i.c)().flowchart.htmlLabels)){let e={label:b};(r=(0,a.a)(s,e).node()).parentNode.removeChild(r)}else{let e=o.createElementNS("http://www.w3.org/2000/svg","text");for(let t of(e.setAttribute("style",p.labelStyle.replace("color:","fill:")),b.split(i.e.lineBreakRegex))){let l=o.createElementNS("http://www.w3.org/2000/svg","tspan");l.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),l.setAttribute("dy","1em"),l.setAttribute("x","1"),l.textContent=t,e.appendChild(l)}r=e}let f=0,w="";switch(d.type){case"round":f=5,w="rect";break;case"square":case"group":default:w="rect";break;case"diamond":w="question";break;case"hexagon":w="hexagon";break;case"odd":case"odd_right":w="rect_left_inv_arrow";break;case"lean_right":w="lean_right";break;case"lean_left":w="lean_left";break;case"trapezoid":w="trapezoid";break;case"inv_trapezoid":w="inv_trapezoid";break;case"circle":w="circle";break;case"ellipse":w="ellipse";break;case"stadium":w="stadium";break;case"subroutine":w="subroutine";break;case"cylinder":w="cylinder";break;case"doublecircle":w="doublecircle"}let u=await (0,i.r)(b,(0,i.c)());t.setNode(d.id,{labelStyle:p.labelStyle,shape:w,labelText:u,labelType:d.labelType,rx:f,ry:f,class:c,style:p.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:n.db.getTooltip(d.id)||"",domId:n.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,i.c)().flowchart.padding}),i.l.info("setNode",{labelStyle:p.labelStyle,labelType:d.labelType,shape:w,labelText:u,rx:f,ry:f,class:c,style:p.style,id:d.id,domId:n.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,i.c)().flowchart.padding})}},b=async function(e,t,l){let a,o;i.l.info("abc78 edges = ",e);let n=0,s={};if(void 0!==e.defaultStyle){let t=(0,i.k)(e.defaultStyle);a=t.style,o=t.labelStyle}for(let l of e){n++;let d="L-"+l.start+"-"+l.end;void 0===s[d]?s[d]=0:s[d]++,i.l.info("abc78 new entry",d,s[d]);let p=d+"-"+s[d];i.l.info("abc78 new link id to be used is",d,p,s[d]);let b="LS-"+l.start,f="LE-"+l.end,w={style:"",labelStyle:""};switch(w.minlen=l.length||1,"arrow_open"===l.type?w.arrowhead="none":w.arrowhead="normal",w.arrowTypeStart="arrow_open",w.arrowTypeEnd="arrow_open",l.type){case"double_arrow_cross":w.arrowTypeStart="arrow_cross";case"arrow_cross":w.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":w.arrowTypeStart="arrow_point";case"arrow_point":w.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":w.arrowTypeStart="arrow_circle";case"arrow_circle":w.arrowTypeEnd="arrow_circle"}let u="",h="";switch(l.stroke){case"normal":u="fill:none;",void 0!==a&&(u=a),void 0!==o&&(h=o),w.thickness="normal",w.pattern="solid";break;case"dotted":w.thickness="normal",w.pattern="dotted",w.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":w.thickness="thick",w.pattern="solid",w.style="stroke-width: 3.5px;fill:none;";break;case"invisible":w.thickness="invisible",w.pattern="solid",w.style="stroke-width: 0;fill:none;"}if(void 0!==l.style){let e=(0,i.k)(l.style);u=e.style,h=e.labelStyle}w.style=w.style+=u,w.labelStyle=w.labelStyle+=h,void 0!==l.interpolate?w.curve=(0,i.n)(l.interpolate,r.c_6):void 0!==e.defaultInterpolate?w.curve=(0,i.n)(e.defaultInterpolate,r.c_6):w.curve=(0,i.n)(c.curve,r.c_6),void 0===l.text?void 0!==l.style&&(w.arrowheadStyle="fill: #333"):(w.arrowheadStyle="fill: #333",w.labelpos="c"),w.labelType=l.labelType,w.label=await (0,i.r)(l.text.replace(i.e.lineBreakRegex,"\n"),(0,i.c)()),void 0===l.style&&(w.style=w.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),w.labelStyle=w.labelStyle.replace("color:","fill:"),w.id=p,w.classes="flowchart-link "+b+" "+f,t.setEdge(l.start,l.end,w,n)}},f=async function(e,t,l,a){let s,d;i.l.info("Drawing flowchart");let c=a.db.getDirection();void 0===c&&(c="TD");let{securityLevel:f,flowchart:w}=(0,i.c)(),u=w.nodeSpacing||50,h=w.rankSpacing||50;"sandbox"===f&&(s=(0,r.Ys)("#i"+t));let g="sandbox"===f?(0,r.Ys)(s.nodes()[0].contentDocument.body):(0,r.Ys)("body"),y="sandbox"===f?s.nodes()[0].contentDocument:document,k=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:u,ranksep:h,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x=a.db.getSubGraphs();i.l.info("Subgraphs - ",x);for(let e=x.length-1;e>=0;e--)d=x[e],i.l.info("Subgraph - ",d),a.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let v=a.db.getVertices(),m=a.db.getEdges();i.l.info("Edges",m);let S=0;for(S=x.length-1;S>=0;S--){d=x[S],(0,r.td_)("cluster").append("text");for(let e=0;e<d.nodes.length;e++)i.l.info("Setting up subgraphs",d.nodes[e],d.id),k.setParent(d.nodes[e],d.id)}await p(v,k,t,g,y,a),await b(m,k);let _=g.select(`[id="${t}"]`),T=g.select("#"+t+" g");if(await (0,n.r)(T,k,["point","circle","cross"],"flowchart",t),i.u.insertTitle(_,"flowchartTitleText",w.titleTopMargin,a.db.getDiagramTitle()),(0,i.o)(k,_,w.diagramPadding,w.useMaxWidth),a.db.indexNodes("subGraph"+S),!w.htmlLabels)for(let e of y.querySelectorAll('[id="'+t+'"] .edgeLabel .label')){let t=e.getBBox(),l=y.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("rx",0),l.setAttribute("ry",0),l.setAttribute("width",t.width),l.setAttribute("height",t.height),e.insertBefore(l,e.firstChild)}Object.keys(v).forEach(function(e){let l=v[e];if(l.link){let a=(0,r.Ys)("#"+t+' [id="'+e+'"]');if(a){let e=y.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",l.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",l.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===f?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):l.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",l.linkTarget);let t=a.insert(function(){return e},":first-child"),r=a.select(".label-container");r&&t.append(function(){return r.node()});let o=a.select(".label");o&&t.append(function(){return o.node()})}}})},w={setConf:function(e){for(let t of Object.keys(e))c[t]=e[t]},addVertices:p,addEdges:b,getClasses:function(e,t){return t.db.getClasses()},draw:f},u=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${((e,t)=>{let l=s.Z,r=l(e,"r"),a=l(e,"g"),o=l(e,"b");return d.Z(r,a,o,t)})(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`}}]);