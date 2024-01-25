import{s as C,a as B,o as U,b as D,t as j}from"../chunks/scheduler.O8VUTp4Y.js";import{S as z,i as M,s as W,n as p,f as F,g as v,o as h,p as P,q as w,d as g,e as G,c as H,a as J,m as I,r as d,t as K,b as Q,j as X,u as L,v as E,w as k,x as O,y,z as R}from"../chunks/index.UnHeaH3S.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},b=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=Z(t,i),t in T)return;T[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,c(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&y(e,t,r),v(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{R(l,1)}),P()}s?(e=E(s,c(t)),t[12](e),k(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&R(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,c(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&y(e,t,r),v(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{R(l,1)}),P()}s?(e=E(s,c(t)),t[11](e),k(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&R(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,c(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&y(e,t,r),v(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{R(l,1)}),P()}s?(e=E(s,c(t)),t[10](e),k(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&R(e,t)}}}function V(a){let e,n=a[6]&&A(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(g),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){v(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function A(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,s,c;const t=[x,$],r=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=r[e]=t[e](a);let _=a[5]&&V(a);return{c(){n.c(),i=W(),_&&_.c(),s=p()},l(o){n.l(o),i=F(o),_&&_.l(o),s=p()},m(o,u){r[e].m(o,u),v(o,i,u),_&&_.m(o,u),v(o,s,u),c=!0},p(o,[u]){let m=e;e=l(o),e===m?r[e].p(o,u):(L(),h(r[m],1,1,()=>{r[m]=null}),P(),n=r[e],n?n.p(o,u):(n=r[e]=t[e](o),n.c()),w(n,1),n.m(i.parentNode,i)),o[5]?_?_.p(o,u):(_=V(o),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(o){c||(w(n),c=!0)},o(o){h(n),c=!1},d(o){o&&(g(i),g(s)),r[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;B(i.page.notify);let o=!1,u=!1,m=null;U(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function q(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,c,r,l,_,o,u,m,i,s,N,S,q]}class oe extends z{constructor(e){super(),M(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>b(()=>import("../nodes/0.ohD8sztV.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>b(()=>import("../nodes/1.ZA4709Rx.js"),__vite__mapDeps([7,1,2,3,4,5]),import.meta.url),()=>b(()=>import("../nodes/2.7z-g_X3h.js"),__vite__mapDeps([8,1,2,5,9]),import.meta.url),()=>b(()=>import("../nodes/3.Ll1x2-AT.js"),__vite__mapDeps([10,11,1,2]),import.meta.url),()=>b(()=>import("../nodes/4.fMGU6qR8.js"),__vite__mapDeps([12,11,1,2]),import.meta.url),()=>b(()=>import("../nodes/5.5y8qjAej.js"),__vite__mapDeps([13,1,2,4,5,14]),import.meta.url),()=>b(()=>import("../nodes/6.wId_edqp.js"),__vite__mapDeps([15,11,1,2,16]),import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/faq":[4],"/sverdle":[-6],"/sverdle/how-to-play":[6]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.ohD8sztV.js","../chunks/scheduler.O8VUTp4Y.js","../chunks/index.UnHeaH3S.js","../chunks/stores.WE2Bf3wH.js","../chunks/entry.FelrrvHQ.js","../chunks/index.Czk_y0aN.js","../assets/0.oZYpT5lw.css","../nodes/1.ZA4709Rx.js","../nodes/2.7z-g_X3h.js","../assets/2.QZaFlqNh.css","../nodes/3.Ll1x2-AT.js","../chunks/environment.30ImaL5r.js","../nodes/4.fMGU6qR8.js","../nodes/5.5y8qjAej.js","../assets/5.zpJKtCAG.css","../nodes/6.wId_edqp.js","../assets/6.lOqbKfPA.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
