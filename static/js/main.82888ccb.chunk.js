(this.webpackJsonpcatelogue=this.webpackJsonpcatelogue||[]).push([[0],{16:function(e,t,n){e.exports={card:"SearchResult_card__2akdM",pokemon:"SearchResult_pokemon__1o7E3",title:"SearchResult_title__2ZkUz",link:"SearchResult_link__3eDNP",img:"SearchResult_img__1cjML"}},19:function(e,t,n){e.exports={app:"searchSubmit_app__2_GVU",input:"searchSubmit_input__5Je9Q",button:"searchSubmit_button__3NUjd",error:"searchSubmit_error__2W_z5"}},27:function(e,t,n){e.exports={navbar:"navbar_navbar__WLeDH",links:"navbar_links__awmZ7"}},38:function(e,t,n){e.exports={PokeInfo:"PokeInfo_PokeInfo__3189e"}},4:function(e,t,n){e.exports={info:"Info_info__KYH10",headers:"Info_headers__1uhP5",ul:"Info_ul__3YPF6",imgContainer:"Info_imgContainer__b04zW",basicInfo:"Info_basicInfo__qsy3Y",ability:"Info_ability__GZ7_X",moves:"Info_moves__OJa1d"}},50:function(e,t,n){},51:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),o=n.n(r),s=n(12),i=(n(50),n(11)),l=n(3),u=(n(51),n(18)),j=n.n(u),d=n(24),b=n(25),h=n.n(b),m={FetchPokeLoading:"FetchPokeLoading",FetchPokeSuccess:"FetchPokeSuccess",FetchPokeFailure:"FetchPokeFailure",FetchPokeInfoLoading:"FetchPokeInfoLoading",FetchPokeInfoSuccess:"FetchPokeInfoSuccess",FetchPokeInfoFailure:"FetchPokeInfoFailure"},p=n(16),f=n.n(p),O=n(1),k=function(e){var t=e.pokemon,n=e.id,a=t.name;return Object(O.jsxs)("div",{className:f.a.card,children:[Object(O.jsxs)("div",{className:f.a.pokemon,children:[Object(O.jsx)("img",{className:f.a.img,src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/".concat(n,".png"),alt:a}),Object(O.jsx)("span",{className:f.a.title,children:a})]}),Object(O.jsx)(i.b,{to:"/pokemon/".concat(a,"/").concat(n),value:n,className:f.a.link,children:"View"})]})},x=n(19),_=n.n(x),g=function(e){var t=c.a.createRef(),n=e.array;return Object(O.jsxs)("div",{className:_.a.app,children:[Object(O.jsx)("input",{ref:t,type:"text",className:_.a.input,placeholder:"POKEMON"}),Object(O.jsx)("button",{type:"button",onClick:function(e){e.preventDefault();var a=new RegExp("^".concat(t.current.value.toLowerCase())),c=n.map((function(e,t){return!a.test(e.name)||(document.getElementById("all").style.display="none",Object(O.jsx)(i.a,{basename:"/catelogue",children:Object(O.jsx)(k,{id:t+1,pokemon:e},e.url)}))}));o.a.render(c,document.getElementById("result"))},className:_.a.button,children:"Search Pokemon"}),Object(O.jsx)("div",{className:_.a.pokemons,id:"all",children:n.map((function(e,t){return Object(O.jsx)(k,{id:t+1,pokemon:e},e.url)}))}),Object(O.jsx)("div",{id:"result"})]})},v=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.PokeReducer}));Object(a.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m.FetchPokeLoading}),e.prev=1,e.next=4,h.a.get("https://pokeapi.co/api/v2/pokemon/?limit=300 ");case 4:n=e.sent,t({type:m.FetchPokeSuccess,payload:n.data.results}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:m.FetchPokeFailure,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);return Object(O.jsx)("div",{children:function(){if(t.loading)return Object(O.jsx)("h1",{children:"loading..."});if(t.items.length>0){var e=t.items;return Object(O.jsx)(g,{array:e})}return Object(O.jsx)("h1",{children:"cannot get pokemon list try again"})}()})},P=n(4),y=n.n(P),F=function(e){var t=e.pokemon,n=t.name,a=t.height,c=t.weight,r=t.base_experience,o=t.sprites,s=t.abilities,i=t.moves,l=o.back_default,u=o.back_shiny,j=o.front_default,d=o.front_shiny;return Object(O.jsxs)("section",{className:y.a.info,children:[Object(O.jsxs)("div",{className:y.a.imgContainer,children:[Object(O.jsx)("img",{src:l,alt:n}),Object(O.jsx)("img",{src:u,alt:n}),Object(O.jsx)("img",{src:j,alt:n}),Object(O.jsx)("img",{src:d,alt:n})]}),Object(O.jsxs)("div",{className:y.a.basicInfo,children:[Object(O.jsx)("h3",{className:y.a.headers,children:"BasicInfo: "}),Object(O.jsxs)("ol",{type:"I",className:y.a.ul,children:[Object(O.jsx)("li",{className:y.a.li,children:"name: ".concat(n)}),Object(O.jsx)("li",{className:y.a.li,children:"height: ".concat(a)}),Object(O.jsx)("li",{className:y.a.li,children:"weight: ".concat(c)}),Object(O.jsx)("li",{className:y.a.li,children:"base_experience: ".concat(r)})]})]}),Object(O.jsxs)("div",{className:y.a.ability,children:[Object(O.jsx)("h3",{className:y.a.headers,children:"Abilites: "}),Object(O.jsx)("ol",{type:"I",className:y.a.ul,children:s.map((function(e){return Object(O.jsx)("li",{className:y.a.li,children:e.ability.name},n)}))})]}),Object(O.jsxs)("div",{className:y.a.moves,children:[Object(O.jsx)("h3",{className:y.a.headers,children:"Moves: "}),Object(O.jsx)("ol",{type:"I",className:y.a.ul,children:i.map((function(e){return Object(O.jsx)("li",{className:y.a.li,children:e.move.name},n)}))})]})]})},I=n(38),N=n.n(I),S=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e})),n=Object(l.f)(),c=n.pokemon,r=n.id;Object(a.useEffect)((function(){e(function(e,t){return function(){var n=Object(d.a)(j.a.mark((function n(a){var c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:m.FetchPokeInfoLoading}),n.prev=1,n.next=4,h.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:c=n.sent,a({type:m.FetchPokeInfoSuccess,payload:c.data,pokemonName:t}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a({type:m.FetchPokeInfoFailure,error:n.t0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}(r,c))}),[]);var o=t.getInfoReducer.data,i=Object.values(o).filter((function(e){return e.name===c}));return Object(O.jsx)("div",{children:t.loading?Object(O.jsx)("h1",{className:N.a.loading,children:"Loading ..."}):i[0]?Object(O.jsx)(F,{pokemon:i[0]}):Object(O.jsx)("h1",{children:"Something went wrong try again!"})})},w=n(27),L=n.n(w),R=function(){return Object(O.jsx)("nav",{className:L.a.navbar,children:Object(O.jsx)(i.c,{className:L.a.links,to:"/",children:"Pokemon"})})};var C=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(R,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",component:v,exact:!0}),Object(O.jsx)(l.a,{path:"/pokemon/:pokemon/:id",component:S})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},M=n(15),B=n(39),D=n(40),J=n(5),W={items:[],loading:!1,error:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.FetchPokeLoading:return Object(J.a)(Object(J.a)({},e),{},{loading:!0,error:""});case m.FetchPokeFailure:return Object(J.a)(Object(J.a)({},e),{},{loading:!1,error:t.error});case m.FetchPokeSuccess:return Object(J.a)(Object(J.a)({},e),{},{items:t.payload,loading:!1,error:""});default:return e}},A=n(20),T={data:{},loading:!1,error:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,n=t.pokemonName,a={};switch(a[n]=t.payload,t.type){case m.FetchPokeInfoLoading:return Object(J.a)(Object(J.a)({},e),{},{loading:!0,error:null});case m.FetchPokeInfoSuccess:return Object(J.a)(Object(J.a)({},e),{},{data:Object(J.a)(Object(J.a)({},e.data),{},Object(A.a)({},t.pokemonName,t.payload)),loading:!1,error:null});case m.FetchPokeInfoFailure:return Object(J.a)(Object(J.a)({},e),{},{loading:!1,error:t.error});default:return e}},Y=Object(M.combineReducers)({PokeReducer:z,getInfoReducer:U}),Z=Object(M.createStore)(Y,Object(D.composeWithDevTools)(Object(M.applyMiddleware)(B.a)));o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(s.a,{store:Z,children:Object(O.jsx)(i.a,{basename:"/catelogue",children:Object(O.jsx)(C,{})})})}),document.getElementById("root")),E()}},[[77,1,2]]]);
//# sourceMappingURL=main.82888ccb.chunk.js.map