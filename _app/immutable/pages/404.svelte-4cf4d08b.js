import{S as j,i as A,s as B,l as b,a as _,w as v,M as H,m as y,h as c,c as h,n as z,x as w,p as g,H as d,b as k,y as N,f as E,t as T,B as F,r as M,u as V}from"../chunks/index-5f758c8e.js";import{N as O,T as D,F as G}from"../chunks/Footer-a3a5cd77.js";import{b as J}from"../chunks/env-ecd0797b.js";import"../chunks/theme-3638b14c.js";import"../chunks/index-698eae7f.js";function K(i){let t;return{c(){t=M("404 Not Found")},l(n){t=V(n,"404 Not Found")},m(n,a){k(n,t,a)},d(n){n&&c(t)}}}function L(i){let t;return{c(){t=M("The page you requested could not be found")},l(n){t=V(n,"The page you requested could not be found")},m(n,a){k(n,t,a)},d(n){n&&c(t)}}}function P(i){let t,n,a,m,q,s,u,C,p,I,f,S,$,x;return m=new O({}),u=new D({props:{weight:"bold",size:"3xl",$$slots:{default:[K]},$$scope:{ctx:i}}}),f=new D({props:{color:"secondary",size:"xl",$$slots:{default:[L]},$$scope:{ctx:i}}}),$=new G({}),{c(){t=b("meta"),n=_(),a=b("section"),v(m.$$.fragment),q=_(),s=b("div"),v(u.$$.fragment),C=_(),p=b("div"),I=_(),v(f.$$.fragment),S=_(),v($.$$.fragment),this.h()},l(e){const o=H('[data-svelte="svelte-1f7lijv"]',document.head);t=y(o,"META",{name:!0,content:!0}),o.forEach(c),n=h(e),a=y(e,"SECTION",{class:!0});var r=z(a);w(m.$$.fragment,r),q=h(r),s=y(r,"DIV",{class:!0});var l=z(s);w(u.$$.fragment,l),C=h(l),p=y(l,"DIV",{class:!0}),z(p).forEach(c),I=h(l),w(f.$$.fragment,l),l.forEach(c),S=h(r),w($.$$.fragment,r),r.forEach(c),this.h()},h(){document.title="404 Not Found",g(t,"name","description"),g(t,"content","Not found"),g(p,"class","h-2"),g(s,"class","mx-4 my-4 flex flex-col"),g(a,"class",i[0])},m(e,o){d(document.head,t),k(e,n,o),k(e,a,o),N(m,a,null),d(a,q),d(a,s),N(u,s,null),d(s,C),d(s,p),d(s,I),N(f,s,null),d(a,S),N($,a,null),x=!0},p(e,[o]){const r={};o&2&&(r.$$scope={dirty:o,ctx:e}),u.$set(r);const l={};o&2&&(l.$$scope={dirty:o,ctx:e}),f.$set(l)},i(e){x||(E(m.$$.fragment,e),E(u.$$.fragment,e),E(f.$$.fragment,e),E($.$$.fragment,e),x=!0)},o(e){T(m.$$.fragment,e),T(u.$$.fragment,e),T(f.$$.fragment,e),T($.$$.fragment,e),x=!1},d(e){c(t),e&&c(n),e&&c(a),F(m),F(u),F(f),F($)}}}const Z=!0,ee=J,te=!0;function Q(i){return[`
    text-black dark:text-white
    bg-gray-200 dark:bg-black
    w-full
    min-h-screen
    duration-200
  `]}class ne extends j{constructor(t){super(),A(this,t,Q,P,B,{})}}export{ne as default,Z as hydrate,te as prerender,ee as router};
