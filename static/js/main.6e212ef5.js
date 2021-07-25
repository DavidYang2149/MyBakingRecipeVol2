(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){"use strict";(function(e){var r=a(1),s=a.n(r),c=a(16),n=a(7);a(45);t.a=({userId:t,onSignIn:a,onSignOut:r})=>s.a.createElement("nav",{className:"header"},s.a.createElement("div",null,s.a.createElement(c.b,{to:"/"},s.a.createElement("img",{className:"homeImg",src:(e.env.PUBLIC_URL||"http://localhost:9092/")+"assets/images/home.svg",alt:"Home"})),s.a.createElement(c.b,{to:"/"},s.a.createElement("h1",{className:"homeH1"},"My Baking Recipe"))),t?s.a.createElement("div",{className:"userInfo"},s.a.createElement("p",{className:"userName"},s.a.createElement(c.b,{to:"/"},Object(n.e)(t)("@"))),s.a.createElement("button",{className:"headerButton",type:"button"},"New Recipe"),s.a.createElement("button",{className:"headerButton",type:"button",onClick:r},"Logout"),s.a.createElement("img",{className:"userIcon",src:"assets/images/new-recipe.svg",alt:"New Recipe"}),s.a.createElement("img",{className:"userIcon",src:"assets/images/close-outline.svg",onClick:r,alt:"Logout"})):s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"headerButton",type:"button",onClick:a},"Sign in (Google)"),s.a.createElement("img",{className:"userIcon",src:"assets/images/login-google.svg",onClick:a,alt:"singIn"})))}).call(this,a(28))},37:function(e,t,a){"use strict";(function(e){var r=a(1),s=a.n(r);a(51);t.a=()=>s.a.createElement("div",{className:"theNotFoundModal"},s.a.createElement("img",{className:"theNotFoundImage",src:(e.env.PUBLIC_URL||"http://localhost:9092/")+"assets/images/page-not-found.svg",alt:"recipe"}),s.a.createElement("p",{className:"theNotFoundTitle"},"해당 페이지를 찾을 수 없습니다."))}).call(this,a(28))},45:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),c=a(24),n=a.n(c),l=a(15),i=a(16),o=a(5);var m=()=>s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"loadingAnimation"})),u=a(34),d=a(19),p=a(20);a(47),a(53),a(49);var g={apiKey:"AIzaSyBWq2ijQg3f9QqIx3gDKsYda0wIeed5zqE",authDomain:"mybakingrecipe.firebaseapp.com",databaseURL:"https://mybakingrecipe-default-rtdb.firebaseio.com",projectId:"mybakingrecipe",storageBucket:"mybakingrecipe.appspot.com",messagingSenderId:"915152243690",appId:"1:915152243690:web:eabd6afc6124e887434093",measurementId:"G-R8B8QCRYLB",status:"production"};p.a.initializeApp(g);const b=p.a.auth(),E=p.a.firestore,v=p.a.firestore(),I=new p.a.auth.GoogleAuthProvider,h=(p.a.storage(),(e,t)=>{sessionStorage.setItem(e,t)});var f=a(7);const y={userId:"",displayName:""},{actions:N,reducer:O}=Object(d.b)({name:"user",initialState:y,reducers:{setUser:(e,{payload:{name:t,value:a}})=>({...e,[t]:a}),clearUser:e=>({...e,...y})}}),j=()=>async e=>{try{const{user:t}=await(async()=>await b.signInWithPopup(I))(),a=(null==t?void 0:t.email)||"";h("user",a),e(N.setUser({name:"userId",value:a}))}catch(e){throw new Error(e.message)}},k=()=>async e=>{var t;await(async()=>{await b.signOut()})(),t="user",sessionStorage.removeItem(t),e(N.clearUser())},w=()=>e=>{setTimeout(()=>{const t=b.currentUser,a=(null==t?void 0:t.email)||(r="user",sessionStorage.getItem(r))||"";var r;Object(f.d)(a)?(h("user",a),e(N.setUser({name:"userId",value:a}))):e(N.clearUser())},500)},{setUser:R,clearUser:B}=N;var L=O;var S=()=>{const e=Object(l.b)(),{user:{userId:t}}=Object(l.c)(e=>({user:e.user}));return s.a.createElement(u.a,{userId:t,onSignIn:()=>{e(j())},onSignOut:()=>{e(k())}})},U=a(37);var C=()=>s.a.createElement(U.a,null);var F=({root:e=null,target:t,onIntersect:a,threshold:s=1,rootMargin:c="50px"})=>{Object(r.useEffect)(()=>{const r=new IntersectionObserver(a,{root:e,rootMargin:c,threshold:s});if(!Object(f.c)(t))return r.observe(t),()=>r.unobserve(t)},[t,e,c,a,s])};var A=({recipe:e})=>{const{id:t,image:a,title:r,description:c,created:n,userId:l}=e;return s.a.createElement("li",{className:"recipeItem"},s.a.createElement(i.b,{to:"/recipe/"+t},s.a.createElement("figure",{className:"card-image",style:{backgroundImage:`url(${a||"assets/images/cookie.jpeg"})`}},s.a.createElement("img",{src:a||"assets/images/cookie.jpeg",alt:"recipe"})),s.a.createElement("div",{className:"card-desc"},s.a.createElement("h1",null,r),s.a.createElement("p",null,c.length>30?c.substring(0,30)+"...":c),s.a.createElement("p",{className:"card-created"},null==n?void 0:n.substr(0,10)),s.a.createElement("p",null,"by"," ",s.a.createElement("strong",null,Object(f.e)(l)("@"))))))};const D=({recipesBook:e})=>Object(f.c)(e.length)?s.a.createElement("div",null,"Empty"):s.a.createElement("ul",{className:"recipeList"},e.map(e=>s.a.createElement(A,{key:e.id,recipe:e})));var M=s.a.memo(D);var P=()=>{const{recipes:e}=Object(l.c)(e=>({recipes:e.recipes})),{recipesBook:t}=e;return Object(f.c)(t.length)?s.a.createElement(m,null):s.a.createElement("article",null,s.a.createElement(M,{recipesBook:t}))};const q=async e=>{const t=v.collection("recipes");let a;var r;return a=Object(f.c)(e)?await t.orderBy("created","desc").limit(12).get():await t.orderBy("created","desc").startAfter((r=(null==e?void 0:e.created)||"",E.Timestamp.fromDate(new Date(r)))).limit(12).get(),a.docs},{actions:x,reducer:z}=Object(d.b)({name:"recipes",initialState:{recipesBook:[],lastRecipe:{recipe:null,isLast:!1}},reducers:{setRecipes:(e,{payload:t})=>({...e,recipesBook:[...t]}),setLastRecipe:(e,{payload:{name:t,value:a}})=>({...e,lastRecipe:{...e.lastRecipe,[t]:a}}),addRecipes:(e,{payload:t})=>({...e,recipesBook:[...e.recipesBook,...t]})}}),{setRecipes:G,setLastRecipe:Q,addRecipes:T}=x;var H=z;var J=()=>{const e=Object(l.b)(),[t,a]=Object(r.useState)(null);return F({target:t,onIntersect:([{isIntersecting:t}])=>{t&&e(async(e,t)=>{const{recipes:{lastRecipe:{recipe:a,isLast:r}}}=t();if(r)return;const s=await q(a);if(Object(f.c)(s))return void e(x.setRecipes([]));const c=s.map(e=>Object(f.b)(e)),n=c.length<f.a;e(x.addRecipes(c)),e(x.setLastRecipe({name:"recipe",value:c.splice(-1)[0]})),e(x.setLastRecipe({name:"isLast",value:n}))})}}),s.a.createElement(s.a.Fragment,null,s.a.createElement(P,null),s.a.createElement("div",{ref:a}))};var K=()=>{const e=Object(l.b)();return Object(r.useEffect)(()=>{e(w())},[e]),s.a.createElement(s.a.Fragment,null,s.a.createElement(r.Suspense,{fallback:s.a.createElement(m,null)},s.a.createElement(S,null),s.a.createElement("div",{className:"main"},s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:J}),s.a.createElement(o.a,{component:C})))))},W=a(18);var Y=Object(W.b)({user:L,recipes:H});var _=Object(d.a)({reducer:Y});n.a.render(s.a.createElement(l.a,{store:_},s.a.createElement(i.a,null,s.a.createElement(K,null))),document.getElementById("app"))},7:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return n})),a.d(t,"b",(function(){return i}));const r=12,s=e=>!e,c=e=>!s(e),n=e=>t=>e.split(t)[0],l=e=>e.toDate().toISOString(),i=e=>{const{created:t,updated:a}=e.data();return{...e.data(),id:e.id,created:l(t),updated:l(a)}}}},[[52,1,4,11,8,7,12,10,5,14,9,6,13,3,2]]]);