"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[945],{945:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(439),c=n(689),i=n(791),s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWNhZTlkZDZmNDIwODRkNWIxNTBlOGNhZmUzZDBmMSIsInN1YiI6IjY0OWY0NjQ3M2FmOTI5MDBjOGY0MmE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YZn_lK4ht5wkWyPYzyypO1pBwfY3ejbHkrGmxQwrBA4"}}).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))},a="Reviews_reviewsList__hDAQA",o="Reviews_reviewItem__ax7Fo",h="Reviews_author__CqYAZ",u="Reviews_content__13k0w",l=n(184),m=function(){var e=(0,c.UO)().movieId,t=(0,i.useState)([]),n=(0,r.Z)(t,2),m=n[0],f=n[1];return(0,i.useEffect)((function(){s(e).then((function(e){f(e.results)})).catch((function(e){return console.error(e)}))}),[e]),(0,l.jsx)(l.Fragment,{children:m.length>0?(0,l.jsx)("ul",{className:a,children:m.map((function(e){return(0,l.jsxs)("li",{className:o,children:[(0,l.jsxs)("h3",{className:h,children:["Author: ",e.author]}),(0,l.jsx)("p",{className:u,children:e.content})]},e.id)}))}):(0,l.jsx)("p",{children:"No reviews available."})})}}}]);
//# sourceMappingURL=945.5fab0e0a.chunk.js.map