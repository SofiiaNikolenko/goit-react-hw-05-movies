"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{278:function(e,t,n){n.r(t);var r=n(439),a=n(791),i=n(87),u=n(689),c=n(184);t.default=function(){var e,t=(0,a.useState)(""),n=(0,r.Z)(t,2),o=n[0],l=n[1],h=(0,a.useState)([]),s=(0,r.Z)(h,2),f=s[0],m=s[1],d=(0,i.lr)(),p=(0,r.Z)(d,2),j=p[0],I=p[1],v=null!==(e=j.get("query"))&&void 0!==e?e:"",x=(0,u.TH)(),y=(0,a.useState)(!1),Z=(0,r.Z)(y,2),g=Z[0],k=Z[1];(0,a.useEffect)((function(){if(g){fetch("https://api.themoviedb.org/3/search/movie?query=".concat(o,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWNhZTlkZDZmNDIwODRkNWIxNTBlOGNhZmUzZDBmMSIsInN1YiI6IjY0OWY0NjQ3M2FmOTI5MDBjOGY0MmE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YZn_lK4ht5wkWyPYzyypO1pBwfY3ejbHkrGmxQwrBA4"}}).then((function(e){return e.json()})).then((function(e){m(e.results)})).catch((function(e){return console.error(e)}))}}),[g,o]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(!0)},children:[(0,c.jsx)("input",{type:"text",name:"movie",value:v,placeholder:"Search movie",onChange:function(e){if(l(e.currentTarget.value.toLowerCase()),""===e.target.value)return I({});I({query:e.target.value})}}),(0,c.jsx)("button",{type:"submit",children:"Search"})]}),(0,c.jsx)("ul",{children:f.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:x},children:(0,c.jsx)("h3",{children:e.title})})},e.id)}))})]})}}}]);
//# sourceMappingURL=278.85cd04e4.chunk.js.map