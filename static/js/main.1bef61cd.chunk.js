(this["webpackJsonpeditor-poc"]=this["webpackJsonpeditor-poc"]||[]).push([[0],{137:function(e,t,n){e.exports=n(291)},142:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(26),o=n.n(l),c=(n(142),n(24)),i=n(79),u=n(8),s=n(25),h=n(312),m=n(34),d=n(35),p=n(36),v=n(37),b=n(314),E=n(313),f=n(309);function g(){var e=Object(c.a)(["\n  opacity: 1;\n\n  .MuiTab-wrapper {\n    color: white !important;\n    font-weight: bold;\n    font-size: 1.1em;\n  }\n"]);return g=function(){return e},e}var O=Object(s.a)(f.a)(g()),j=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).getActiveTab=function(){return e.props.location.pathname.replace("/","")},e.handleChange=function(t,n){t.preventDefault(),e.props.history.push("/".concat(n))},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(b.a,{position:"static"},r.a.createElement(E.a,{onChange:this.handleChange,value:this.getActiveTab()},r.a.createElement(O,{label:"Broadcaster Editor POC",disabled:!0}),r.a.createElement(f.a,{label:"quill",value:"quill"}),r.a.createElement(f.a,{label:"editor js",value:"editor-js"})))}}]),n}(a.PureComponent),C=Object(u.g)(j),w=n(116),k=n.n(w),y=n(311),P=n(117),x=n.n(P);function S(){var e=Object(c.a)(["\n  word-wrap: break-word;\n  border: 1px solid #ccc;\n  height: 440px;\n  overflow: auto;\n"]);return S=function(){return e},e}function q(){var e=Object(c.a)(["\n  width: 50%;\n"]);return q=function(){return e},e}function J(){var e=Object(c.a)(["\n  margin-top: 50px;\n\n  .ql-editor {\n    height: 400px;\n  }\n"]);return J=function(){return e},e}var T=s.a.div(J()),M=Object(s.a)(x.a)(q()),N=s.a.div(S()),A=(n(277),function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleChange=function(e,t,n,r){if(console.log("[POC]: content",e),console.log("[POC]: delta",t),console.log("[POC]: source",n),console.log("[POC]: editor",r,r.getContents()),n&&r){var l=JSON.stringify(r.getContents());a.setState({value:e,output:l})}},a.state={value:"",output:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.output,n=e.value;return r.a.createElement(T,null,r.a.createElement("h1",null,"Quill"),r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(M,{item:!0},r.a.createElement("h2",null,"Editor"),r.a.createElement(k.a,{theme:"snow",value:n,onChange:this.handleChange})),r.a.createElement(M,{item:!0},r.a.createElement("h2",null,"JSON output"),r.a.createElement(N,null,t))))}}]),n}(a.PureComponent)),B=n(118),W=n(120),I=n.n(W),z=n(121),D=n.n(z),Q=n(62),$=n.n(Q),F=n(122),G=n.n(F),H=n(123),K=n.n(H),L=n(124),R=n.n(L),U=n(125),V=n.n(U),X=n(126),Y=n.n(X),Z=n(127),_=n.n(Z),ee=n(128),te=n.n(ee),ne=n(129),ae=n.n(ne),re=n(130),le=n.n(re),oe=n(131),ce=n.n(oe),ie=n(132),ue=n.n(ie),se={embed:I.a,table:D.a,paragraph:$.a,list:G.a,code:K.a,linkTool:R.a,image:V.a,raw:Y.a,header:{class:_.a,inlineToolbar:!0},quote:te.a,marker:ae.a,checklist:le.a,delimiter:ce.a,inlineCode:ue.a},he=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleChange=function(e,t){if(console.log("[POC]: event",e),console.log("[POC]: json",t),t&&t.blocks){var n=JSON.stringify(t.blocks);a.setState({output:n})}},a.state={value:{},output:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.output;return r.a.createElement(T,null,r.a.createElement("h1",null,"Editor.js"),r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(M,{item:!0},r.a.createElement("h2",null,"Editor"),r.a.createElement(B.a,{data:t,tools:se,onChange:this.handleChange}),";"),r.a.createElement(M,{item:!0},r.a.createElement("h2",null,"JSON output"),r.a.createElement(N,null,n))))}}]),n}(a.PureComponent);function me(){var e=Object(c.a)(["\n  .MuiTab-textColorInherit.Mui-disabled {\n    opacity: 1;\n  }\n"]);return me=function(){return e},e}var de=s.a.div(me());var pe=function(){return r.a.createElement(i.a,null,r.a.createElement(de,null,r.a.createElement(C,null),r.a.createElement(h.a,{maxWidth:"lg"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/quill"},r.a.createElement(A,null)),r.a.createElement(u.b,{path:"/editor-js"},r.a.createElement(he,null)),r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(u.a,{to:"/quill"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.1bef61cd.chunk.js.map