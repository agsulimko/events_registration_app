"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[650],{650:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r=t(861),a=t(439),o=t(687),s=t.n(o),i=t(294);i.Z.defaults.baseURL="https://65b95a82b71048505a8ab881.mockapi.io/api";var c=function(){var n=(0,r.Z)(s().mark((function n(e,t){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URL("/events",i.Z.defaults.baseURL),e&&r.searchParams.append("page",e),r.searchParams.append("limit",12),n.prev=3,n.next=6,i.Z.get(r.toString());case 6:return a=n.sent,console.log(a.data),n.abrupt("return",a.data);case 11:throw n.prev=11,n.t0=n.catch(3),console.error("Failed to fetch events:",n.t0.message),n.t0;case 15:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e,t){return n.apply(this,arguments)}}(),p=t(274),u=t(791),l=t(689),d=t(87),h="Events_pagination__RGtl-",x="Events_span_pagination__eVG1s",f=t(184),g=function(){var n=(0,l.TH)(),e=(0,u.useState)([]),t=(0,a.Z)(e,2),o=t[0],i=t[1],g=(0,u.useState)(1),m=(0,a.Z)(g,2),b=m[0],v=m[1],k=(0,u.useState)(1),Z=(0,a.Z)(k,2),w=Z[0],j=Z[1];(0,u.useEffect)((function(){_(b)}),[b]);var _=function(){var n=(0,r.Z)(s().mark((function n(e){var t,r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c(e);case 3:return t=n.sent,n.next=6,c(e);case 6:r=n.sent,a=r.total_pages,console.log(t),i(t),j(a),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}();(0,u.useEffect)((function(){_(b)}),[b]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(p.$0,{children:[(0,f.jsx)(p.H1,{children:"Welcome to Rent a Car"}),(0,f.jsx)(p.H2,{children:"The Rent a Car app is an easy to use app that created for a company that provides car rental services in Ukraine. Try today!"}),(0,f.jsx)("div",{className:"css.home",children:o&&o.length>0?o.map((function(e,t){return(0,f.jsx)(d.rU,{to:"".concat(e.id),state:{from:n},children:(0,f.jsxs)("div",{className:"css.home_div",children:[(0,f.jsx)("h1",{children:e.title}),(0,f.jsx)("p",{children:e.description})]})},t)})):(0,f.jsx)("p",{children:"No events found"})}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("button",{onClick:function(){v((function(n){return n-1}))},disabled:1===b,children:"Previous"}),(0,f.jsxs)("span",{className:x,children:["Page ",b," of ",w]}),(0,f.jsx)("button",{onClick:function(){v((function(n){return n+1}))},disabled:b===w,children:"Next"})]})]})})}},274:function(n,e,t){t.d(e,{$0:function(){return d},H1:function(){return u},H2:function(){return l}});var r,a,o,s,i,c=t(168),p=t(487),u=p.ZP.h1(r||(r=(0,c.Z)(["\n  /* position: absolute; */\n  left: 420px;\n  top: 400px;\n  font-size: 56px;\n\n  text-align: center;\n  /* color: white; */\n  margin: 0;\n  &:hover {\n    font-size: 86px;\n    color: #3470ff;\n    left: 280px;\n    top: 380px;\n  }\n"]))),l=p.ZP.h2(a||(a=(0,c.Z)(["\n  /* position: absolute; */\n  /* color: rgb(200, 233, 235);\n  color: #9da0b1; */\n  text-align: center;\n  width: 800px;\n  margin: 0 auto;\n  left: 0px;\n  bottom: 70px;\n"]))),d=(p.ZP.img(o||(o=(0,c.Z)(["\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 400px;\n  border-radius: 20px;\n  /* transform: rotate(-20deg); */\n  border: 1px solid gray;\n  &:hover {\n    width: 500px;\n    left: -50px;\n    top: 0px;\n  }\n"]))),p.ZP.img(s||(s=(0,c.Z)(["\n  position: absolute;\n\n  width: 400px;\n  right: 0px;\n  bottom: 125px;\n  border-radius: 20px;\n  border: 1px solid gray;\n\n  /* transform: rotate(-20deg); */\n  &:hover {\n    width: 500px;\n    right: -25px;\n    bottom: 100px;\n  }\n"]))),p.ZP.main(i||(i=(0,c.Z)(["\n  position: relative;\n  /* height: 1000px; */\n  /* background-color: dimgray; */\n\n  /* background-repeat: no-repeat;\n  max-width: 1440px; */\n  /* border: 2px solid gray;\n  border-radius: 15px; */\n  /* background-position: center;\n  background-size: cover;\n  background-image: linear-gradient(\n      rgba(46, 47, 66, 0.1),\n      rgba(46, 47, 66, 0.7)\n    ),\n    url('https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg'); */\n"]))))}}]);
//# sourceMappingURL=650.41445223.chunk.js.map