import{S as f,i as _,s as d,F as h,l as p,m as g,n as k,h as i,G as u,b,H as I,I as S,J as w,f as $,t as y,K as T}from"../chunks/index-7e308703.js";import{w as V}from"../chunks/index-c3e533a5.js";const q="dark";var m;const A=(m=window.localStorage.getItem("theme"))!=null?m:q,c=V(A==="dark");c.subscribe(a=>{a?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")});function C(a){let s,o;const n=a[3].default,t=h(n,a,a[2],null);return{c(){s=p("main"),t&&t.c(),this.h()},l(e){s=g(e,"MAIN",{});var l=k(s);t&&t.l(l),l.forEach(i),this.h()},h(){u(s,"dark",a[0])},m(e,l){b(e,s,l),t&&t.m(s,null),o=!0},p(e,[l]){t&&t.p&&(!o||l&4)&&I(t,n,e,e[2],o?w(n,e[2],l,null):S(e[2]),null),l&1&&u(s,"dark",e[0])},i(e){o||($(t,e),o=!0)},o(e){y(t,e),o=!1},d(e){e&&i(s),t&&t.d(e)}}}function E(a,s,o){let n,t;T(a,c,r=>o(1,t=r));let{$$slots:e={},$$scope:l}=s;return a.$$set=r=>{"$$scope"in r&&o(2,l=r.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&o(0,n=t)},[n,t,l,e]}class H extends f{constructor(s){super(),_(this,s,E,C,d,{})}}export{H as default};
