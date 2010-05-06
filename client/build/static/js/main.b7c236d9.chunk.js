(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,n,t){},43:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o=t(1),s=t.n(o),l=t(17),u=t.n(l),d=t(4),j=(t(37),t(25)),b=t(26),h=t(32),m=t(31),O=t(10),p=t(5),f=t(0),g=p.a.div(r||(r=Object(d.a)(["\n   width: 100vw;\n   background-color: var(--first-color);\n"]))),x=p.a.nav(c||(c=Object(d.a)(["\n   width: 100%;\n   max-width: 1200px;\n   color: var(--gray-light-color);\n   margin: 0 auto;\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n   padding: 1rem 1.5rem;\n\n   & a {\n      display: inline-block;\n      font-size: 1.25rem;\n      font-weight: bold;\n      padding: 0.5rem;\n      color: var(--text-light-color);\n      border-radius: 0.5rem;\n      cursor: pointer;\n      transition: ease all 0.3s;\n\n      & a:hover {\n         color: var(--gray-dark-color);\n         background-color: var(--gray-light-color);\n      }\n   }\n"]))),v=function(e){Object(h.a)(t,e);var n=Object(m.a)(t);function t(){return Object(j.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(f.jsx)(g,{children:Object(f.jsxs)(x,{children:[Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)(O.b,{to:"/index",children:"Inicio"})}),Object(f.jsxs)("div",{className:"nav-links",children:[Object(f.jsx)(O.b,{to:"/home",children:"Buscar Paises"}),Object(f.jsx)(O.b,{to:"/activity",children:"Crear Actividad"})]})]})})}}]),t}(o.Component),y=v,C=t(11),N=t(2),w=t(6),I=t(9),k="GET_COUNTRIES",A="ADD_ACTIVITY",D="GET_ACTIVITIES",E="GET_COUNTRIES_BY_NAME",T="ORDER_BY_NAME",S="FILTER_CONTINENT",z="FILTER_ACTIVITY",P="ORDER_BY_POBLATION",B="GET_LOAD_STATUS",_="https://find-countries.herokuapp.com";function R(e){return{type:B,payload:e}}function L(){return function(e){return e(R(!0)),fetch("".concat(_,"/countries/")).then((function(e){return e.json()})).then((function(n){return e(R(!1)),e({type:k,payload:n})}))}}var F,M,q=p.a.div(a||(a=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  background-color: var(--first-color);\n  color: var(--text-light-color);\n  cursor: pointer;\n  padding: 1rem;\n  transition: ease transform 0.5s;\n\n  &:hover {\n    transform: scale(1.08);\n  }\n\n  & h4 {\n    text-align: center;\n    text-transform: capitalize;\n    margin-top: 1rem;\n    font-size: 1.2rem;\n  }\n\n  & p {\n    text-align: center;\n    text-transform: capitalize;\n    font-size: 1.2rem;\n  }\n"]))),V=p.a.img(i||(i=Object(d.a)(["\n  && {\n    width: 120px;\n    height: 80px;\n  }\n"]))),Y=function(e){var n=e.name,t=e.flagImg,r=e.continent;return Object(f.jsxs)(q,{children:[Object(f.jsx)(V,{className:"countryImg",src:t,alt:n}),Object(f.jsx)("h4",{children:n}),Object(f.jsx)("p",{children:r})]})},G=p.a.ul(F||(F=Object(d.a)(["\n   display: flex;\n   flex-wrap: wrap;\n   justify-content: center;\n   align-items: center;\n\n   & li {\n      display: inline-block;\n      margin: 0 0.25rem 0.5rem 0.25rem;\n      padding: 0 0.25rem 0 0.25rem;\n      color: var(--gray-dark-color);\n      cursor: pointer;\n   }\n\n   & .active {\n      border: 1px solid var(--link-color);\n      border-radius: 2px;\n      color: var(--link-color);\n   }\n"]))),J=p.a.span(M||(M=Object(d.a)(["\n   transition: ease all 0.3s;\n   cursor: pointer;\n\n   &:hover {\n      color: var(--link-color);\n   }\n"])));function U(e){for(var n=e.countriesPage,t=e.allCountries,r=e.paginado,c=e.currentPage,a=[],i=1;i<=Math.ceil(t/n);i++)a.push(i);return Object(f.jsx)("div",{className:"paginate",children:Object(f.jsx)(G,{children:a&&a.map((function(e){return Object(f.jsx)("li",{className:e===c?"active":void 0,children:Object(f.jsx)(J,{onClick:function(){return r(e)},children:e})},e)}))})})}t(43);var H=t.p+"static/media/loader.a8a2f98b.svg",Q={};var $,K,W,X,Z,ee,ne,te,re,ce,ae,ie,oe,se,le,ue=function(){var e=Object(o.useState)({countriesName:""}),n=Object(w.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(Q),a=Object(w.a)(c,2),i=a[0],s=a[1],l=Object(I.c)((function(e){return e.countries})),u=Object(I.c)((function(e){return e.activities})),d=Object(I.c)((function(e){return e.isLoading})),j=Object(I.b)(),b=Object(o.useState)(1),h=Object(w.a)(b,2),m=h[0],p=h[1],g=Object(o.useState)(9),x=Object(w.a)(g,2),v=x[0],y=(x[1],Object(o.useState)({filter:"",order:""})),k=Object(w.a)(y,2),A=k[0],B=k[1],F=m*v,M=F-v,q=l.slice(M,F),V=Object(o.useRef)(null),G=Object(o.useRef)(null);function J(e){var n;e.preventDefault(),j((n=e.target.value,{type:T,payload:n})),p(1),"poblation"===A.filter&&V.current.selectedOptions[0].value&&(V.current.selectedOptions[0].selected=!1,V.current.firstElementChild.selected=!0,console.log("sort")),B({filter:"sort",order:e.target.value})}var $=function(e){var n;j((n=e.target.value,{type:P,payload:n})),p(1),"sort"===A.filter&&G.current.selectedOptions[0].value&&(G.current.selectedOptions[0].selected=!1,G.current.firstElementChild.selected=!0),console.log(e.target),B({filter:"poblation",order:e.target.value})};function K(e){var n;e.preventDefault(),j((n=e.target.value,{type:S,payload:n})),p(1),G.current.firstElementChild.selected=!0,V.current.firstElementChild.selected=!0}function W(e){var n;j((n=e.target.value,{type:z,payload:n})),G.current.firstElementChild.selected=!0,V.current.firstElementChild.selected=!0}Object(o.useEffect)((function(){j(L()),j((function(e){return fetch("".concat(_,"/activity/")).then((function(e){return e.json()})).then((function(n){return e({type:D,payload:n})}))}))}),[j]),Object(o.useEffect)((function(){i.countriesName||j(function(e){return function(n){return n(R(!0)),fetch("".concat(_,"/countries?name=").concat(e)).then((function(e){return e.json()})).then((function(e){return n(R(!1)),n({type:E,payload:e})}))}}(t.countriesName))}),[t.countriesName]);return Object(f.jsxs)("div",{className:"home container",style:{minHeight:"100vh"},children:[d&&Object(f.jsx)("div",{className:"preloader",children:Object(f.jsx)("img",{src:H,alt:"cargando..."})}),Object(f.jsx)("h2",{className:"margin-top text-center",children:"Consulte el Pais que Desee"}),Object(f.jsx)("input",{type:"text",name:"countriesName",value:t.countriesName,onChange:function(e){r(Object(N.a)(Object(N.a)({},t),{},Object(C.a)({},e.target.name,e.target.value))),s(function(e){var n={};return!/^[a-z ,.'-]+$/i.test(e.countriesName)&&e.countriesName&&(n.countriesName="Pais invalido"),n}(Object(N.a)(Object(N.a)({},t),{},Object(C.a)({},e.target.name,e.target.value))))},className:i.name&&"inputError"}),i.countriesName&&Object(f.jsx)("p",{className:"inputErrorMessage",children:i.countriesName}),Object(f.jsxs)("div",{className:"filterInputs",children:[Object(f.jsxs)("select",{ref:V,onChange:function(e){return $(e)},children:[Object(f.jsx)("option",{className:"option",value:"0",children:"Ordenar por poblacion"}),Object(f.jsx)("option",{value:"asc",children:"Ascendente"}),Object(f.jsx)("option",{value:"desc",children:"Descendente"})]}),Object(f.jsxs)("select",{ref:G,onChange:function(e){return J(e)},children:[Object(f.jsx)("option",{children:"Ordenar por nombre"}),Object(f.jsx)("option",{value:"asc",children:"Ascendente"}),Object(f.jsx)("option",{value:"desc",children:"Descendente"})]}),Object(f.jsxs)("select",{onChange:function(e){return K(e)},children:[Object(f.jsx)("option",{value:"All",children:"Todos"}),Object(f.jsx)("option",{value:"Africa",children:"Africa"}),Object(f.jsx)("option",{value:"North America",children:"America del Norte"}),Object(f.jsx)("option",{value:"South America",children:"America del Sur"}),Object(f.jsx)("option",{value:"Antarctica",children:"Antartica"}),Object(f.jsx)("option",{value:"Asia",children:"Asia"}),Object(f.jsx)("option",{value:"Europe",children:"Europa"}),Object(f.jsx)("option",{value:"Oceania",children:"Oceania"})]}),Object(f.jsxs)("select",{onChange:function(e){return W(e)},children:[Object(f.jsx)("option",{value:"All",children:"Todas"}),u&&u.map((function(e,n){return Object(f.jsx)("option",{value:e.name,children:e.name},n)}))]})]}),Object(f.jsx)("div",{className:"pagination margin-top margin-bottom magin-auto",children:Object(f.jsx)(U,{countriesPage:v,allCountries:l.length,paginado:function(e){p(e)},currentPage:m})}),Object(f.jsx)("div",{className:"cardsCountries",children:q&&!i.countriesName&&"string"!=typeof q?q.map((function(e){return Object(f.jsx)(O.b,{to:"/home/".concat(e.ID),children:Object(f.jsx)(Y,{name:e.name,flagImg:e.flagImg,continent:e.continent},e.ID)},e.ID)})):"string"==typeof q?Object(f.jsx)("strong",{style:{margin:"auto"},children:"Sin Coincidencias"}):null})]})},de=t(3),je=t.p+"static/media/world-banner-blue3.ff3447b0.jpg",be=t.p+"static/media/find-map-banner.f63bbcb3.jpg",he=p.a.section($||($=Object(d.a)(["\n   display: flex;\n   flex-direction: column;\n"]))),me=p.a.div(K||(K=Object(d.a)(["\n   position: relative;\n   background-color: var(--background-light);\n   background-image: url(",");\n   background-position: center;\n   background-size: cover;\n   min-height: 100vh;\n   margin-bottom: 2rem;\n"])),(function(e){return e.image})),Oe=p.a.aside(W||(W=Object(d.a)(["\n   background-color: ",";\n   color: var(--text-light-color);\n   min-height: 100vh;\n   width: 100%;\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n"])),(function(e){return e.opacityColor||"var(--black-alpha-color)"})),pe=p.a.section(X||(X=Object(d.a)(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   width: 95%;\n   max-width: var(--max-width);\n   min-height: 100vh;\n   background-color: ",";\n   margin: 0 auto 2rem auto;\n\n   .content-image {\n   }\n   .content-info {\n      h3 {\n         font-size: 1.25rem;\n         color: var(--first-color);\n      }\n\n      p {\n         letter-spacing: 1px;\n         line-height: 2rem;\n      }\n   }\n"])),(function(e){return e.backgroundColor||"inherit"})),fe=p.a.div(Z||(Z=Object(d.a)(["\n   display: grid;\n   grid-template-columns: repeat(",", 1fr);\n   justify-content: space-between;\n   align-content: center;\n   gap: 3rem;\n\n   h2 {\n      grid-column: span ",";\n   }\n"])),(function(e){return e.gridColumns}),(function(e){return e.gridColumns})),ge=p.a.button(ee||(ee=Object(d.a)(["\n   display: inline-block;\n   font-size: 1.2rem;\n   padding: 0.75rem 1.5rem;\n   margin-top: 2.5rem;\n   color: var(--text-light-color);\n   background-color: var(--first-color);\n   border: 1px solid var(--first-color);\n   border-radius: 5px;\n   text-align: center;\n   cursor: pointer;\n   outline: none;\n   transition: 0.3s ease-in-out all;\n\n   &:hover {\n      color: var(--first-color);\n      background-color: var(--white-color);\n   }\n"]))),xe=function(){return Object(f.jsxs)(he,{children:[Object(f.jsx)(me,{image:je,children:Object(f.jsxs)(Oe,{children:[Object(f.jsx)("h1",{children:"Bienvenid@ a InfoCountries"}),Object(f.jsx)(O.b,{to:"/home",children:Object(f.jsx)(ge,{children:"Comenzar ya"})})]})}),Object(f.jsx)(pe,{children:Object(f.jsxs)(fe,{gridColumns:"2",children:[Object(f.jsx)("h2",{className:"text-center margin-top margin-bottom",children:"\xbfQue puedo hacer en esta aplicaci\xf3n?"}),Object(f.jsx)("div",{className:"content-image",children:Object(f.jsx)("img",{src:be,alt:"Find Map Banner"})}),Object(f.jsxs)("div",{className:"content-info",children:[Object(f.jsx)("h3",{children:"Buscar paises"}),Object(f.jsx)("p",{children:"Busca el pais que quieras entre un numero de mas de 200 paises ofrecidos por la API de restcountries, seras capaz de encontrarlo mediante el nombre e iniciales del mismo, incluso puedes filtrar los paises utilizando las opciones que ofrece esta aplicacion para facilitar el procesos de busqueda, entre estas opciones estan el filtrado por continente, orden alfabetico o poblacion."}),Object(f.jsx)("a",{href:"https://restcountries.com",target:"_blank",rel:"noreferrer",children:Object(f.jsx)(ge,{children:"Restcountries"})})]})]})})]})},ve=p.a.div(ne||(ne=Object(d.a)(["\n  text-align: left;\n  width: 47%;\n  padding: 0 1rem;\n"]))),ye=p.a.p(te||(te=Object(d.a)(["\n  font-size: 1.15rem;\n  margin-bottom: 0.5rem;\n  letter-spacing: 2px;\n"]))),Ce=function(e){return Object(f.jsx)(f.Fragment,{children:e&&Object(f.jsxs)(ve,{children:[Object(f.jsxs)(ye,{children:[Object(f.jsx)("strong",{children:"Actividad: "}),e.name]}),Object(f.jsxs)(ye,{children:[Object(f.jsx)("strong",{children:"Dificultad: "}),e.difficulty]}),Object(f.jsxs)(ye,{children:[Object(f.jsx)("strong",{children:"Duracion: "}),e.duration]}),Object(f.jsxs)(ye,{children:[Object(f.jsx)("strong",{children:"Temporada: "}),e.season]})]})})},Ne=p.a.div(re||(re=Object(d.a)(["\n   width: 95%;\n   display: grid;\n   grid-template-columns: ",";\n   justify-content: space-around;\n   gap: 1rem;\n   margin: 2rem auto;\n\n   & .activitiesCard {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n   }\n"])),(function(e){return e.activities?"repeat(2, 1fr)":"repeat(1, 1fr)"})),we=p.a.p(ce||(ce=Object(d.a)(["\n   font-size: 1.15rem;\n   margin-bottom: 0.5rem;\n   letter-spacing: 2px;\n"]))),Ie=p.a.img(ae||(ae=Object(d.a)(["\n   width: 100%;\n   max-width: 350px;\n   margin-top: 1rem;\n"]))),ke=function(){var e=Object(de.g)().id,n=Object(o.useState)({}),t=Object(w.a)(n,2),r=t[0],c=t[1],a=Object(I.c)((function(e){return e.isLoading})),i=Object(I.b)();return Object(o.useEffect)((function(){i(R(!0)),fetch("".concat(_,"/countries/").concat(e)).then((function(e){return e.json()})).then((function(e){return i(R(!1)),c(e)})).catch((function(e){return console.log(e)}))}),[e]),Object(f.jsxs)("div",{className:"countryDetails container margin-auto",style:{minHeight:"100vh"},children:[a&&Object(f.jsxs)("div",{className:"preloader",children:[" ",Object(f.jsx)("img",{src:H,alt:"cargando..."})]}),Object(f.jsx)("h2",{className:"text-center",style:{marginTop:"2.5rem",marginBottom:"2.5rem"},children:"Detalles del pais ".concat(r.name)}),Object(f.jsxs)(Ne,{activities:!(r.activities&&!r.activities[0]),children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)(we,{children:[Object(f.jsx)("strong",{children:"Identificador de pais: "})," ",r.ID]}),Object(f.jsxs)(we,{children:[Object(f.jsx)("strong",{children:"Nombre: "})," ",r.name]}),Object(f.jsxs)(we,{children:[Object(f.jsx)("strong",{children:"Subregion: "})," ",r.subregion]}),Object(f.jsxs)(we,{children:[Object(f.jsx)("strong",{children:"Capita: "})," ",r.capital]}),Object(f.jsxs)(we,{children:[Object(f.jsx)("strong",{children:"Continente: "})," ",r.continent]}),Object(f.jsxs)(we,{children:[Object(f.jsx)("strong",{children:"Area: "})," ",r.area+" km2"]}),Object(f.jsxs)(we,{children:[Object(f.jsx)("strong",{children:"Poblacion: "})," ",r.population]}),Object(f.jsx)(Ie,{src:r.flagImg,alt:r.name})]}),Object(f.jsx)("div",{className:"activitiesCard",children:r.activities&&r.activities.map((function(e){return Object(f.jsx)(Ce,{name:e.name,difficulty:e.difficulty,season:e.season,duration:e.duration},r.ID)}))})]})]})},Ae=t(16),De=t(18),Ee=t.n(De),Te=p.a.div(ie||(ie=Object(d.a)(["\n   margin-top: 2rem;\n   min-height: 100vh;\n\n   h2 {\n      color: var(--first-color);\n   }\n\n   form {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n\n      .btnSubmit {\n         width: 30%;\n         height: 100%;\n         font-size: 1rem;\n         padding: 0.5rem 1rem;\n         margin-top: 2.5rem;\n         color: var(--text-light-color);\n         background-color: var(--first-color);\n         border: 1px solid var(--first-color);\n         border-radius: 5px;\n         text-align: center;\n         cursor: pointer;\n         outline: none;\n         transition: 0.3s ease-in-out all;\n\n         &:hover {\n            color: var(--first-color);\n            background-color: var(--white-color);\n         }\n      }\n   }\n\n   label {\n      display: block;\n      font-size: 1.2rem;\n      font-weight: bold;\n      margin-top: 1.5rem;\n      margin-bottom: 1rem;\n   }\n"]))),Se=p.a.div(oe||(oe=Object(d.a)(["\n   width: 47%;\n\n   .activityName {\n      width: 100%;\n      margin-bottom: 1.5rem;\n      text-align: left;\n\n      input {\n         width: 80%;\n         margin-left: 0;\n         margin-right: 0;\n         box-shadow: 2px 1px 4px var(--black-alpha-color);\n      }\n\n      .inputError {\n         border: solid 2px #df1313;\n      }\n\n      .inputErrorMessage {\n         width: 80%;\n      }\n   }\n\n   .duration,\n   .selectDifficulty,\n   .selectCountries {\n      width: 100%;\n   }\n"]))),ze=p.a.div(se||(se=Object(d.a)(["\n   width: 47%;\n   heigth: 100%;\n   padding: 2rem 0 0 1rem;\n\n   input {\n      display: inline-block;\n      margin-right: 1rem;\n   }\n\n   label {\n      cursor: pointer;\n   }\n"]))),Pe=p.a.div(le||(le=Object(d.a)(["\n   width: 47%;\n   order: 1;\n   margin-top: -4rem;\n\n   li {\n      display: inline-block;\n      width: 50px;\n      margin: 0.5rem;\n      cursor: pointer;\n   }\n"]))),Be={};function _e(e){var n={};return e.name?/^[a-z ,.'-]+$/i.test(e.name)||(n.name="Actividad invalida"):n.name="Nombre de actividad es requerido",n}var Re,Le=function(){var e=Object(I.b)(),n=Object(o.useState)(Be),t=Object(w.a)(n,2),r=t[0],c=t[1],a=Object(o.useState)({countries:[],name:"",duracion:"",dificultad:"",temporada:""}),i=Object(w.a)(a,2),s=i[0],l=i[1],u=Object(o.useState)([]),d=Object(w.a)(u,2),j=d[0],b=d[1],h=Object(I.c)((function(e){return e.allCountries})),m=function(e){l(Object(N.a)(Object(N.a)({},s),{},Object(C.a)({},e.target.name,e.target.value))),c(_e(Object(N.a)(Object(N.a)({},s),{},Object(C.a)({},e.target.name,e.target.value))))},O=function(e){e.target.checked&&l(Object(N.a)(Object(N.a)({},s),{},{temporada:e.target.value})),c(_e(Object(N.a)(Object(N.a)({},s),{},Object(C.a)({},e.target.name,e.target.value))))},p=function(n){n.preventDefault(),s.name?Ee.a.fire({title:"\xbfQuieres guardar la actividad?",showCancelButton:!0,confirmButtonText:"Save"}).then((function(n){var t;n.isConfirmed&&(e((t=s,function(e){fetch("".concat(_,"/activity/"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(e){return console.log("Success:",e),e}))})),l({countries:[],name:"",duracion:"",dificultad:"",temporada:""}),b([]),Ee.a.fire("\xa1Actividad guardada!","","success"))})):Ee.a.fire({icon:"error",title:"Oops...",text:"Escriba una actividad para agregarla"})};return Object(o.useEffect)((function(){e(L())}),[e]),Object(f.jsx)("div",{className:"formActivities container margin-auto",children:Object(f.jsxs)(Te,{children:[Object(f.jsx)("h2",{children:"Crea tu Actividad "}),Object(f.jsxs)("form",{onSubmit:function(e){return p(e)},children:[Object(f.jsxs)(Se,{children:[Object(f.jsxs)("div",{className:"activityName",children:[Object(f.jsx)("label",{children:"Actividad:"}),Object(f.jsx)("input",{className:"inputActivity ".concat(r.name&&"inputError"),type:"text",value:s.name,name:"name",onChange:function(e){return m(e)}}),r.name&&Object(f.jsx)("p",{className:"inputErrorMessage",children:r.name})]}),Object(f.jsxs)("div",{className:"selectCountries",children:[Object(f.jsx)("label",{children:"Pais:"}),Object(f.jsx)("select",{onChange:function(e){return function(e){var n=h&&h.filter((function(n){return n.ID===e.target.value}));s.countries.includes(e.target.value)||(b([].concat(Object(Ae.a)(j),[{flag:n[0].flagImg,countryID:n[0].ID}])),l(Object(N.a)(Object(N.a)({},s),{},{countries:[].concat(Object(Ae.a)(s.countries),[e.target.value])})))}(e)},children:h&&h.map((function(e,n){return Object(f.jsx)("option",{value:e.ID,children:e.name},e.ID+"countryOption")}))})]}),Object(f.jsxs)("div",{className:"duration",children:[Object(f.jsx)("label",{children:"Duracion:"}),Object(f.jsxs)("select",{name:"duracion",value:s.duracion,onChange:function(e){return m(e)},children:[Object(f.jsx)("option",{value:"0",children:"Seleccionar Duraci\xf3n"}),Object(f.jsx)("option",{value:"30",children:"30 min"}),Object(f.jsx)("option",{value:"1",children:"1 horas"}),Object(f.jsx)("option",{value:"2",children:"2 horas"}),Object(f.jsx)("option",{value:"3",children:"3 horas"}),Object(f.jsx)("option",{value:"4",children:"4 horas"}),Object(f.jsx)("option",{value:"5",children:"mas de 5 hours"})]})]}),Object(f.jsxs)("div",{className:"selectDifficulty",children:[Object(f.jsx)("label",{children:"Dificultad:"}),Object(f.jsxs)("select",{name:"dificultad",value:s.dificultad,onChange:function(e){return m(e)},children:[Object(f.jsx)("option",{value:"0",children:"Seleccionar Dificultad"}),Object(f.jsx)("option",{value:"1",children:"1- Inicial"}),Object(f.jsx)("option",{value:"2",children:"2- Baja"}),Object(f.jsx)("option",{value:"3",children:"3- Media"}),Object(f.jsx)("option",{value:"4",children:"4- Dificil"}),Object(f.jsx)("option",{value:"5",children:"5- Profesional"})]})]})]}),Object(f.jsxs)(ze,{children:[Object(f.jsx)("label",{children:"Temporada: "}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",value:"Verano",name:"season",onChange:function(e){return O(e)}}),"Verano"," "]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",value:"Primavera",name:"season",onChange:function(e){return O(e)}}),"Primavera"," "]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",value:"Oto\xf1o",name:"season",onChange:function(e){return O(e)}}),"Oto\xf1o"," "]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",value:"Invierno",name:"season",onChange:function(e){return O(e)}}),"Invierno"," "]})]}),Object(f.jsx)(Pe,{children:Object(f.jsx)("ul",{children:s.countries&&j.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)("img",{src:e.flag,alt:"Flag"+e.countryID,onClick:function(){return function(e){var n=j&&j.filter((function(n){return n.countryID!==e}));b(Object(Ae.a)(n));var t=s.countries.filter((function(n){return n!==e}));console.log(e,n,t),l(Object(N.a)(Object(N.a)({},s),{},{countries:Object(Ae.a)(t)}))}(e.countryID)}})},e.countryID+"flagCountry")}))})}),Object(f.jsx)("button",{className:"btnSubmit",type:"submit",disabled:r.name&&!0,children:"Crear Actividad"})]})]})})},Fe=p.a.footer(Re||(Re=Object(d.a)(["\n   background-color: var(--gray-dark-color);\n   color: var(--text-light-color);\n   display: flex;\n   justify-content: center;\n   width: 100vw;\n   padding: 3rem 0;\n"])));var Me=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(y,{}),Object(f.jsxs)(de.c,{children:[Object(f.jsx)(de.a,{path:"/",element:Object(f.jsx)(xe,{})}),Object(f.jsx)(de.a,{path:"/home",element:Object(f.jsx)(ue,{})}),Object(f.jsx)(de.a,{path:"/home/:id",element:Object(f.jsx)(ke,{})}),Object(f.jsx)(de.a,{path:"/activity",element:Object(f.jsx)(Le,{})})]}),Object(f.jsx)(Fe,{children:Object(f.jsx)("p",{className:"text-center",children:"\xa9 ecgonzalez | Todos los derechos reservados"})})]})})},qe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))},Ve=t(19),Ye={allCountries:[],countries:[],activities:[],isLoading:!1};var Ge=t(30),Je=Ve.b,Ue=Object(Ve.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case B:return Object(N.a)(Object(N.a)({},e),{},{isLoading:n.payload});case k:return Object(N.a)(Object(N.a)({},e),{},{countries:n.payload,allCountries:n.payload});case A:return Object(N.a)({},e);case E:return Object(N.a)(Object(N.a)({},e),{},{countries:n.payload});case D:return Object(N.a)(Object(N.a)({},e),{},{activities:n.payload});case T:var t="asc"===n.payload?e.countries.sort((function(e,n){return e.name.localeCompare(n.name)})):"desc"===n.payload?e.countries.sort((function(e,n){return n.name.localeCompare(e.name)})):e.countries;return Object(N.a)(Object(N.a)({},e),{},{countries:t});case P:var r="asc"===n.payload?e.countries.sort((function(e,n){return e.population-n.population})):"desc"===n.payload?e.countries.sort((function(e,n){return n.population-e.population})):e.countries;return Object(N.a)(Object(N.a)({},e),{},{countries:r});case S:var c=e.allCountries,a="All"===n.payload?c:c.filter((function(e){return e.continent===n.payload}));return Object(N.a)(Object(N.a)({},e),{},{countries:a});case z:var i=e.allCountries,o="All"===n.payload?i:i.filter((function(e){return e.activities&&e.activities.map((function(e){return e.name})).includes(n.payload)}));return Object(N.a)(Object(N.a)({},e),{},{countries:o});default:return Object(N.a)({},e)}}),Je(Object(Ve.a)(Ge.a))),He=Ue;u.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(I.a,{store:He,children:Object(f.jsx)(Me,{})})}),document.getElementById("root")),qe()}},[[54,1,2]]]);
//# sourceMappingURL=main.b7c236d9.chunk.js.map