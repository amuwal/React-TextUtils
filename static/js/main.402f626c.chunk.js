(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=(a(13),a(14),a(1));function s(e){var t=Object(n.useState)(e.mode),a=Object(l.a)(t,2),c=a[0],o=a[1],s=function(e){return"light"===e?"dark":"light"};return r.a.createElement("button",{type:"button",className:"btn btn-dark border border-warning ",onClick:function(){var e=c,t=s(e),a=document.getElementById("nav");a.classList.remove("navbar-".concat(t),"bg-".concat(t)),a.classList.add("navbar-".concat(e),"bg-".concat(e));try{var n=document.getElementById("myBox"),r=document.getElementById("root"),l=document.getElementById("main"),m=document.getElementById("heading"),d=document.getElementById("summary");n.classList.remove("bg-".concat(t),"border-".concat(e),"text-".concat(e)),n.classList.add("border-".concat(t),"text-".concat(t),"bg-".concat(e)),r.classList.remove("bg-".concat(t)),r.classList.add("bg-".concat(e)),l.classList.remove("bg-".concat(t),"border-".concat(e)),l.classList.add("border-".concat(t)),m.classList.remove("text-".concat(e)),m.classList.add("text-".concat(t)),d.classList.remove("text-".concat(e)),d.classList.add("text-".concat(t))}catch(i){console.log("okay")}o(t)}},"Enable ",c," mode")}function m(){return r.a.createElement("nav",{id:"nav",className:"navbar navbar-expand-lg navbar-dark bg-dark border-bottom mb-4"},r.a.createElement("a",{className:"navbar-brand",href:""},"TextUtils"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:""},"Home"))),r.a.createElement(s,{mode:"light"})))}function d(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)("Copy To Clipboard"),m=Object(l.a)(s,2),d=m[0],i=m[1];return r.a.createElement("div",{className:"container  border border-light bg-dark",id:"main"},r.a.createElement("h1",{className:"text-light",id:"heading"},e.heading),r.a.createElement("textarea",{className:"form-control bg-dark text-light border border-light",value:c,onChange:function(e){o(e.target.value)},id:"myBox",rows:"8"}),r.a.createElement("button",{className:"my-3 mx-2 btn btn-dark border border-light",onClick:function(){var e=c.toUpperCase();o(e)}},"Convert to Uppercase"),r.a.createElement("button",{className:"my-3 mx-2 btn btn-dark border border-light",onClick:function(){var e=c.toLowerCase();o(e)}},"Convert to Lowercase"),r.a.createElement("button",{className:"my-3 mx-2 btn btn-dark border border-light",onClick:function(){o("")}},"Clear Area"),r.a.createElement("button",{className:"my-3 mx-2 btn btn-dark border border-light",onClick:function(e){navigator.clipboard.writeText(c),e.currentTarget.classList.remove("btn-primary"),e.currentTarget.classList.add("btn-dark"),i("Copied!!")}},d),r.a.createElement("h1",{className:"text-warning"},"Your Text Summary:"),r.a.createElement("p",{id:"summary",className:"text-light"},c.replace(/\s{2,}/g," ").trim().split(" ").length," words and ",c.replace(/\s{2,}/g," ").trim().length," characters"))}var i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(d,{heading:"Enter Your text below"}))},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null))),b()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.402f626c.chunk.js.map