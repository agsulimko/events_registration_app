"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[762],{6713:function(n,e,t){t.d(e,{EC:function(){return u},Ru:function(){return s},le:function(){return l},vw:function(){return a}});var r=t(5861),o=t(4687),i=t.n(o),c=t(5294);c.Z.defaults.baseURL="https://66430a433c01a059ea213b70.mockapi.io/api";var a=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URL("/events",c.Z.defaults.baseURL),e&&r.searchParams.append("page",e),r.searchParams.append("limit",40),t&&r.searchParams.append("sortBy",t),n.prev=4,n.next=7,c.Z.get(r.toString());case 7:return o=n.sent,n.abrupt("return",o.data);case 11:throw n.prev=11,n.t0=n.catch(4),console.error("Failed to fetch events:",n.t0.message),n.t0;case 15:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URL("/users",c.Z.defaults.baseURL),n.prev=1,n.next=4,c.Z.get(e.toString());case 4:return t=n.sent,n.abrupt("return",t.data);case 8:throw n.prev=8,n.t0=n.catch(1),console.error("Failed to fetch users:",n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,o,a,s,u,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.fullName,r=e.email,o=e.dateOfBirth,a=e.whereHeard,s=e.event,u=new URL("/users",c.Z.defaults.baseURL),n.prev=2,n.next=5,c.Z.post(u.toString(),{fullName:t,email:r,dateOfBirth:o,whereHeard:a,event:s});case 5:return l=n.sent,n.abrupt("return",l.data);case 9:throw n.prev=9,n.t0=n.catch(2),console.error("Failed to fetch users:",n.t0.message),n.t0;case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URL("/users/".concat(e),c.Z.defaults.baseURL),n.prev=1,n.next=4,c.Z.put(r.toString(),{event:t});case 4:return o=n.sent,n.abrupt("return",o.data);case 8:throw n.prev=8,n.t0=n.catch(1),console.error("Failed to fetch users:",n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()},6762:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,o,i,c,a,s,u,l,p,d,f,h,x,v,g,Z,b,w=t(3433),m=t(5861),k=t(9439),j=t(168),y=t(4687),P=t.n(y),S=t(2791),L=t(1087),R=t(7689),U=t(6487),E=t(6713),z=U.ZP.div(r||(r=(0,j.Z)(["\n  padding-top: 55px;\n  background-color: white;\n"]))),C=U.ZP.div(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: center;\n  padding-top: 65px;\n"]))),F=U.ZP.div(i||(i=(0,j.Z)(["\n  border: 1px solid black;\n  width: 290px;\n  padding: 16px;\n"]))),N=U.ZP.div(c||(c=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),H=U.ZP.h1(a||(a=(0,j.Z)(["\n  left: 420px;\n  top: 400px;\n  font-size: 24px;\n  margin: 0;\n"]))),_=U.ZP.h2(s||(s=(0,j.Z)([""]))),B=U.ZP.p(u||(u=(0,j.Z)(["\n  margin-bottom: 50px;\n"]))),T=U.ZP.section(l||(l=(0,j.Z)([""]))),O=(U.ZP.div(p||(p=(0,j.Z)(["\n  margin-top: 30px;\n  text-align: center;\n  padding-bottom: 80px;\n"]))),U.ZP.button(d||(d=(0,j.Z)(["\n  padding: 5px 10px;\n  margin: 0 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n\n  background-color: #3470ff;\n  color: #ffffff;\n  cursor: pointer;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  &:hover:not(:disabled) {\n    background-color: #0b44cd;\n  }\n"]))),U.ZP.span(f||(f=(0,j.Z)(["\n  margin: 0 10px;\n"]))),U.ZP.button(h||(h=(0,j.Z)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  /* line-height: 143%; */\n  border-radius: 5px;\n\n  width: 136px;\n  height: 48px;\n  background-color: #3470ff;\n  color: #ffffff;\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"])))),Y=U.ZP.div(x||(x=(0,j.Z)(["\n  display: flex;\n  padding-right: 460px;\n\n  background-color: rgba(255, 255, 255, 0.9);\n  gap: 200px;\n  align-items: center;\n  padding-left: 10px;\n  padding-bottom: 20px;\n  padding-top: 20px;\n"]))),$=U.ZP.div(v||(v=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 50px;\n"]))),V=(U.ZP.button(g||(g=(0,j.Z)(["\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  display: ",";\n  background-color: #3470ff;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  font-size: 24px;\n  line-height: 50px;\n  text-align: center;\n  z-index: 1000;\n"])),(function(n){return n.visible?"block":"none"})),t(184)),q=(0,U.ZP)(L.rU)(Z||(Z=(0,j.Z)(["\n  color: #3470ff;\n  font-weight: 600;\n\n  &:hover {\n    color: #0b44cd;\n  }\n\n  &:focus {\n    color: #0b44cd;\n  }\n"]))),A=U.ZP.button(b||(b=(0,j.Z)(["\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  display: ",";\n  background-color: #3470ff;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  font-size: 24px;\n  line-height: 50px;\n  text-align: center;\n  z-index: 1000;\n"])),(function(n){return n.$visible?"block":"none"})),D=function(){var n=(0,R.TH)(),e=(0,S.useState)([]),t=(0,k.Z)(e,2),r=t[0],o=t[1],i=(0,S.useState)(1),c=(0,k.Z)(i,2),a=c[0],s=c[1],u=(0,S.useState)(""),l=(0,k.Z)(u,2),p=l[0],d=l[1],f=(0,S.useState)(!1),h=(0,k.Z)(f,2),x=h[0],v=h[1],g=(0,S.useState)(!1),Z=(0,k.Z)(g,2),b=Z[0],j=Z[1],y=(0,S.useState)(!0),L=(0,k.Z)(y,2),U=L[0],D=L[1],G=(0,S.useState)(!1),I=(0,k.Z)(G,2),J=I[0],K=I[1],M=(0,S.useState)(!1),Q=(0,k.Z)(M,2),W=Q[0],X=Q[1],nn=function(){var n=(0,m.Z)(P().mark((function n(e,t){var r,i,c=arguments;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=c.length>2&&void 0!==c[2]&&c[2],j(!0),n.prev=2,n.next=5,(0,E.vw)(e,t);case 5:(i=n.sent).length>0?o((function(n){return r?i:[].concat((0,w.Z)(n),(0,w.Z)(i))})):D(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0.message);case 12:return n.prev=12,j(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,9,12,15]])})));return function(e,t){return n.apply(this,arguments)}}();(0,S.useEffect)((function(){var n=function(){var n=(0,m.Z)(P().mark((function n(){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o([]),s(1),D(!0),n.next=5,nn(1,p,!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[p,x]),(0,S.useEffect)((function(){var n=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-100&&!b&&U&&s((function(n){return n+1})),window.scrollY>100?X(!0):X(!1),window.scrollY>300?K(!0):K(!1)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[b,U]),(0,S.useEffect)((function(){a>1&&nn(a,p)}),[a]);return(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)(T,{children:[(0,V.jsx)(z,{children:(0,V.jsxs)(Y,{style:{position:"fixed"},className:W?"scrolled":"",children:[(0,V.jsxs)($,{children:[(0,V.jsx)(H,{children:"Events"}),(0,V.jsx)(O,{onClick:function(){d("title")},children:"Sort by title"}),(0,V.jsx)(O,{onClick:function(){d("eventdate")},children:"Sort by event date"}),(0,V.jsx)(O,{onClick:function(){d("organizer")},children:"Sort by organizer"})]}),(0,V.jsx)(O,{onClick:function(){v((function(n){return!n})),d("")},children:"Reset Filters"})]})}),(0,V.jsxs)(C,{className:"css.events",children:[r&&r.length>0?r.map((function(e,t){return(0,V.jsxs)(F,{className:"css.event_div",children:[(0,V.jsx)(_,{children:e.title}),(0,V.jsx)(B,{children:e.description}),(0,V.jsxs)(N,{children:[(0,V.jsx)(q,{to:"/register/".concat(e.id),state:{from:n,title:e.title},children:"Register"}),(0,V.jsx)(q,{to:"/view/".concat(e.id),state:{from:n,title:e.title},children:"View"})]})]},t)})):(0,V.jsx)("p",{children:"No events found"}),b&&(0,V.jsx)("p",{children:"Loading more events..."})]}),(0,V.jsx)(A,{$visible:J,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"\u2191"})]})})}}}]);
//# sourceMappingURL=762.b829007f.chunk.js.map