import{S as W,i as F,s as x,l as v,a as w,w as L,M as G,m as C,h as m,c as E,n as U,x as S,p as $,H as y,b as _,y as D,f as p,t as b,B as T,e as j,g as M,d as O,O as A,E as Y}from"../chunks/index-d3f232d6.js";import{S as B}from"../chunks/SidePadding-f8a41436.js";import{C as H}from"../chunks/Card-63fde530.js";import{S as g,N as P,F as q}from"../chunks/Footer-d5da6f3c.js";import"../chunks/theme-03facba7.js";import"../chunks/index-5d5b2a9e.js";const k=[{title:"Feeding the Lion",subtitle:" Hold tight! The lions will eat a bundle of lettuce, representing good fortune. Then watch out! The lion will spread that good fortune right back to you!",imageUrl:`${g}/wedding_001.jpg`},{title:"Chinese New Year at Walmart",subtitle:"Celebrate Chinese New Year with us and show your employees and customers your cultural appreciation. Interactive performances that bring a smile to your employees day and good luck to the company for the year ahead!",imageUrl:`${g}/walmart_001.jpg`},{title:"Festival Performances",subtitle:"We are honored to bring exciting performances to our community, performing for cultural festivals across the country.",imageUrl:`${g}/dragon_001.jpg`},{title:"Pacific Mall Chinese New Year",subtitle:"",imageUrl:`${g}/pacific_mall_001.jpg`},{title:"Our Fleet",subtitle:"Our fleet of vehicles are prepared to show up at your venue ready to perform!",imageUrl:`${g}/cars_002.jpg`},{title:"HSBC Store Opening",subtitle:"Welcoming good luck and fortune to the new businesses and branches in our community.",imageUrl:`${g}/hsbc_001.jpg`},{title:"First in Canada LED Dragon and Lions",subtitle:"Wow your audience with a stunning performance of LED Dragons and Lions. Whether in the daytime or evening, this modern twist will add to the excitement! We have performed at night markets, evening festivals, and even night clubs!",imageUrl:`${g}/LED_dragonlion.jpg`},{title:"Cultural Events at Schools",subtitle:"We love getting into our community! The lion dance is one to remember for many kids, helping them learn about cultural diversity and traditions around the world while bringing some fun to their day.",imageUrl:`${g}/small_lion_002.jpg`}];function I(u,n,l){const c=u.slice();return c[0]=n[l],c[2]=l,c}function N(u){let n,l,c,s;return l=new H({props:{align:u[2]%2===0?"left":"right",title:u[0].title,subtitle:u[0].subtitle,imageUrl:u[0].imageUrl}}),{c(){n=v("div"),L(l.$$.fragment),c=w(),this.h()},l(r){n=C(r,"DIV",{class:!0});var e=U(n);S(l.$$.fragment,e),c=E(e),e.forEach(m),this.h()},h(){$(n,"class","sm:mb-12 mb-8")},m(r,e){_(r,n,e),D(l,n,null),y(n,c),s=!0},p:Y,i(r){s||(p(l.$$.fragment,r),s=!0)},o(r){b(l.$$.fragment,r),s=!1},d(r){r&&m(n),T(l)}}}function K(u){let n,l,c,s,r=k,e=[];for(let t=0;t<r.length;t+=1)e[t]=N(I(u,r,t));const h=t=>b(e[t],1,1,()=>{e[t]=null});return{c(){n=v("div"),l=w();for(let t=0;t<e.length;t+=1)e[t].c();c=j(),this.h()},l(t){n=C(t,"DIV",{class:!0}),U(n).forEach(m),l=E(t);for(let a=0;a<e.length;a+=1)e[a].l(t);c=j(),this.h()},h(){$(n,"class","h-8")},m(t,a){_(t,n,a),_(t,l,a);for(let o=0;o<e.length;o+=1)e[o].m(t,a);_(t,c,a),s=!0},p(t,a){if(a&0){r=k;let o;for(o=0;o<r.length;o+=1){const i=I(t,r,o);e[o]?(e[o].p(i,a),p(e[o],1)):(e[o]=N(i),e[o].c(),p(e[o],1),e[o].m(c.parentNode,c))}for(M(),o=r.length;o<e.length;o+=1)h(o);O()}},i(t){if(!s){for(let a=0;a<r.length;a+=1)p(e[a]);s=!0}},o(t){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)b(e[a]);s=!1},d(t){t&&m(n),t&&m(l),A(e,t),t&&m(c)}}}function R(u){let n,l,c,s,r,e,h,t,a,o;return r=new P({}),h=new B({props:{$$slots:{default:[K]},$$scope:{ctx:u}}}),a=new q({}),{c(){n=v("meta"),l=v("meta"),c=w(),s=v("section"),L(r.$$.fragment),e=w(),L(h.$$.fragment),t=w(),L(a.$$.fragment),this.h()},l(i){const f=G('[data-svelte="svelte-1r6l7tm"]',document.head);n=C(f,"META",{name:!0,content:!0}),l=C(f,"META",{name:!0,content:!0}),f.forEach(m),c=E(i),s=C(i,"SECTION",{});var d=U(s);S(r.$$.fragment,d),e=E(d),S(h.$$.fragment,d),t=E(d),S(a.$$.fragment,d),d.forEach(m),this.h()},h(){document.title="Gallery | CLK Lion Dance",$(n,"name","title"),$(n,"content","Gallery | CLK Lion Dance"),$(l,"name","description"),$(l,"content","Gallery")},m(i,f){y(document.head,n),y(document.head,l),_(i,c,f),_(i,s,f),D(r,s,null),y(s,e),D(h,s,null),y(s,t),D(a,s,null),o=!0},p(i,[f]){const d={};f&8&&(d.$$scope={dirty:f,ctx:i}),h.$set(d)},i(i){o||(p(r.$$.fragment,i),p(h.$$.fragment,i),p(a.$$.fragment,i),o=!0)},o(i){b(r.$$.fragment,i),b(h.$$.fragment,i),b(a.$$.fragment,i),o=!1},d(i){m(n),m(l),i&&m(c),i&&m(s),T(r),T(h),T(a)}}}class ee extends W{constructor(n){super(),F(this,n,null,R,x,{})}}export{ee as default};
