(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,a){e.exports=a(52)},31:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),u=(a(31),a(6)),o=a.n(u),s=a(10),m=a(2),i=a(9),d=a.n(i),f=(a(50),a(11)),h=a(3),g=a(5),b=a.n(g),p=a(23),E=a.n(p);var v=function(e){var t=Object(n.useState)({offset:0,numberPerPage:100,pageCount:0,pageNum:0,currentData:[]}),a=Object(m.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){c.pageNum>e.matches.data.length/c.numberPerPage?l((function(t){return Object(h.a)(Object(h.a)({},t),{},{pageNum:0,offset:0,pageCount:0,currentData:e.matches.data.slice(0,c.numberPerPage)})})):l((function(t){return Object(h.a)(Object(h.a)({},t),{},{pageCount:e.matches.data.length/t.numberPerPage,currentData:e.matches.data.slice(c.offset,c.offset+c.numberPerPage)})}))}),[c.numberPerPage,c.offset,c.pageNum,e.matches.data]),r.a.createElement("div",null,c.currentData&&r.a.createElement("table",{className:"match-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"match-head"},"match"),b.a.times(e.matches.num_of_groups,(function(e){return r.a.createElement("th",{className:e>5?"match-head":"group".concat(e+1,"-head"),key:"groupstring".concat(e)},"group ",e+1)})))),r.a.createElement("tbody",null,c.currentData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,Object(f.a)(e.text_area).slice(t.match.start,t.match.end).join("")),t.groups.map((function(t,a){return r.a.createElement("td",{key:"groupstart".concat(t.start,"end").concat(t.end,"index").concat(a)},Object(f.a)(e.text_area).slice(t.start,t.end).join(""))})))})))),r.a.createElement(E.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",pageCount:e.matches.data.length/c.numberPerPage,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected,a=t*c.numberPerPage,n=t;l(Object(h.a)(Object(h.a)({},c),{},{offset:a,pageNum:n}))},containerClassName:"pagination",activeClassName:"active",forcePage:c.pageNum}))};var j=function(e){return r.a.createElement("nav",{className:"flags"},r.a.createElement("ul",{className:"flags-nav"},e.children))};var O=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1],u=Object(n.useRef)();return Object(n.useEffect)((function(){function e(e){u.current&&!u.current.contains(e.target)&&c&&l(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[u,c]),r.a.createElement("li",{className:"flag-item",ref:u},r.a.createElement("button",{className:"icon-button",onClick:function(){return l(!c)}},e.icon),c&&e.children)},N=a(8);var k=function(e){var t=e.setFlags;function a(e){var a=e.clicked,n=e.name,c=a?{backgroundColor:"crimson"}:{};return r.a.createElement("button",{className:"menu-item",style:c,onClick:function(){return t((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(N.a)({},n,!a))}))}},e.children)}var n=e.flags,c=n.i,l=n.s,u=n.l,o=n.x,s=n.m,m=n.u;return r.a.createElement("div",{className:"dropdown"},r.a.createElement(a,{clicked:c,name:"i"}," I "),r.a.createElement(a,{clicked:l,name:"s"}," S "),r.a.createElement(a,{clicked:u,name:"l"}," L "),r.a.createElement(a,{clicked:o,name:"x"}," X "),r.a.createElement(a,{clicked:m,name:"u"}," U "),r.a.createElement(a,{clicked:s,name:"m"}," M "))},x=a(25);var y=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(m.a)(l,2),i=u[0],f=u[1],h=Object(n.useState)(null),g=Object(m.a)(h,2),p=g[0],E=g[1],N=Object(n.useState)(!1),y=Object(m.a)(N,2),C=y[0],P=y[1],w=Object(n.useState)(0),S=Object(m.a)(w,2),D=S[0],_=S[1],T=Object(n.useState)(!1),L=Object(m.a)(T,2),R=L[0],F=L[1],M=Object(n.useState)({i:!0,s:!0,l:!1,x:!1,u:!1,m:!1}),W=Object(m.a)(M,2),q=W[0],A=W[1],I=Object(n.useState)(!1),B=Object(m.a)(I,2),J=B[0],H=B[1],U=Object(n.useRef)(),X=Object(n.useRef)();function $(){return($=Object(s.a)(o.a.mark((function e(t){var a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!p){e.next=11;break}return a=document.getElementById("backdrop"),n=document.querySelectorAll(".match")[D],e.next=6,n.offsetTop;case 6:for(a.scrollTop=e.sent,D===p.data.length-1&&_(0),r=!0,c=D;r;)c+1>=document.querySelectorAll(".match").length?(r=!1,_(0)):document.querySelectorAll(".match")[c].offsetTop===document.querySelectorAll(".match")[c+1].offsetTop?c++:(_(c+1),r=!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return G.apply(this,arguments)}function G(){return(G=Object(s.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target,n=a.name,r=a.value,e.t0=n,e.next="text-area"===e.t0?5:"regex-area"===e.t0?10:15;break;case 5:return P(!0),_(0),c(r),b.a.debounce((function(){return P(!1)}),1e3)(),e.abrupt("break",18);case 10:return P(!0),_(0),b.a.debounce((function(){return P(!1)}),1e3)(),f(r),e.abrupt("break",18);case 15:return f(""),c(""),e.abrupt("break",18);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e;0!==i.length&&0!==a.length||F(!1);var t={regex_area:i,text_area:a,flags:q};if(a&&i&&function(e){if(e.includes("[]"))return!1;if(e.endsWith(".*?")||e.endsWith(".*")||e.endsWith("|"))return!1;try{new RegExp(e)}catch(t){return!1}return!0}(i)&&!C&&!R)return H(!0),d()({method:"POST",url:"http://localhost:8000/api/",data:t,cancelToken:new d.a.CancelToken((function(t){return e=t}))}).then((function(e){return E(e.data)})).catch((function(e){d.a.isCancel(e)})),H(!1),function(){return e()};i&&a||E(null)}),[i,a,C,q,R]),r.a.createElement(r.a.Fragment,null,J&&r.a.createElement("div",{className:"loader"},r.a.createElement(x.a,{animation:"border",variant:"danger"})),r.a.createElement(j,null,r.a.createElement(O,{icon:r.a.createElement("i",{className:"far fa-flag"})},r.a.createElement(k,{flags:q,setFlags:A}))),r.a.createElement("main",{className:"main-container"},r.a.createElement("div",{className:"container"},i.length<=0||!p||p.newContent<=0||R?r.a.createElement("textarea",{className:"text-area",onChange:z,value:a,name:"text-area",id:"text-area",placeholder:"Content goes here...",ref:U}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"backdrop",className:"backdrop",ref:X},r.a.createElement("div",{className:"highlights",id:"highlights",dangerouslySetInnerHTML:{__html:p.newContent}})))),r.a.createElement("div",{className:"right-area"},r.a.createElement("textarea",{className:"regex-area",onChange:z,value:i,name:"regex-area",placeholder:"Regex goes here..."}),r.a.createElement("div",{className:"data-area"},p&&p.data.length>0&&!R?r.a.createElement("button",{className:"btn next-match-btn",onClick:function(e){return $.apply(this,arguments)}},"Next Match "):r.a.createElement("div",null),p?r.a.createElement("button",{className:"btn search-btn",onClick:function(){return F((function(e){return!e}))}},R?"Search For Matches":"Edit Content"):r.a.createElement("div",null),p&&p.data.length>1&&!R&&r.a.createElement("div",{className:"num-matches"},"".concat(p.data.length," matches found")),p&&1===p.data.length&&!R&&r.a.createElement("div",{className:"num-matches"},"".concat(p.data.length," match found")),p&&p.data.length<1&&!R&&r.a.createElement("div",{className:"num-matches"},"No matches found"),p&&p.data.length>0&&!R&&r.a.createElement("div",{className:"duration"},"duration: ".concat(p.duration))),p&&p.data.length>0&&!R&&r.a.createElement(v,{matches:p,text_area:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.2228d6f0.chunk.js.map