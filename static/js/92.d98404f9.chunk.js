"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[92],{6713:function(e,n,t){t.d(n,{EC:function(){return u},Ru:function(){return c},le:function(){return p},vw:function(){return o}});var r=t(5861),a=t(4687),s=t.n(a),i=t(5294);i.Z.defaults.baseURL="https://66430a433c01a059ea213b70.mockapi.io/api";var o=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URL("/events",i.Z.defaults.baseURL),n&&r.searchParams.append("page",n),r.searchParams.append("limit",40),t&&r.searchParams.append("sortBy",t),e.prev=4,e.next=7,i.Z.get(r.toString());case 7:return a=e.sent,e.abrupt("return",a.data);case 11:throw e.prev=11,e.t0=e.catch(4),console.error("Failed to fetch events:",e.t0.message),e.t0;case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n,t){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("/users",i.Z.defaults.baseURL),e.prev=1,e.next=4,i.Z.get(n.toString());case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Failed to fetch users:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r,a,o,c,u,p;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.fullName,r=n.email,a=n.dateOfBirth,o=n.whereHeard,c=n.event,u=new URL("/users",i.Z.defaults.baseURL),e.prev=2,e.next=5,i.Z.post(u.toString(),{fullName:t,email:r,dateOfBirth:a,whereHeard:o,event:c});case 5:return p=e.sent,e.abrupt("return",p.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.error("Failed to fetch users:",e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URL("/users/".concat(n),i.Z.defaults.baseURL),e.prev=1,e.next=4,i.Z.put(r.toString(),{event:t});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Failed to fetch users:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}()},6092:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r,a,s,i,o,c,u,p,l,f,d,h,x=t(5861),v=t(9439),g=t(168),m=t(4687),Z=t.n(m),w=t(2791),b=t(1087),j=t(7689),k=t(6487),y=k.ZP.h1(r||(r=(0,g.Z)(["\n  /* left: 420px;\n  top: 400px; */\n  font-size: 24px;\n  padding-top: 50px;\n  /* margin: 40px 0 40px 0; */\n\n  padding-left: 12px;\n  margin-bottom: 35px;\n"]))),P=k.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: flex-start;\n  padding: 0 10px;\n  margin-top: 40px;\n"]))),L=k.ZP.div(s||(s=(0,g.Z)(["\n  border: 1px solid black;\n  width: 290px;\n  padding: 16px;\n"]))),C=k.ZP.p(i||(i=(0,g.Z)(["\n  margin-bottom: 14px;\n  font-size: 18px;\n"]))),R=k.ZP.p(o||(o=(0,g.Z)(["\n  margin-bottom: 14px;\n"]))),S=k.ZP.section(c||(c=(0,g.Z)([""]))),U=k.ZP.svg(u||(u=(0,g.Z)(["\n  margin-right: 0px;\n  width: 41px;\n  height: 10px;\n"]))),N=k.ZP.span(p||(p=(0,g.Z)([""]))),z=k.ZP.p(l||(l=(0,g.Z)(["\n  font-size: 24px;\n"]))),B=k.ZP.input(f||(f=(0,g.Z)(["\n  height: 30px;\n  width: 400px;\n  margin-top: 6px;\n"]))),E=k.ZP.div(d||(d=(0,g.Z)(["\n  display: flex;\n\n  gap: 20px;\n  margin-top: 50px;\n  margin-left: 10px;\n"]))),F=k.ZP.label(h||(h=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),_=t(6713);var A,H=t.p+"static/media/sprite.f79340501a3c93d876ae178ed3fa50d3.svg",O=t(3077),G=(t(550),t(184)),I=function(e){var n={labels:["Amount of registrations"],datasets:[{label:"Number of Participants",data:[e.data],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1}]};return(0,G.jsx)(O.$Q,{data:n})},Q=(0,k.ZP)(b.rU)(A||(A=(0,g.Z)(["\n  color: #3470ff;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  /* line-height: 143%; */\n  border-radius: 5px;\n  padding: 14px 44px;\n  width: 136px;\n  height: 48px;\n  background-color: #3470ff;\n  color: #ffffff;\n  margin-left: 10px;\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n\n  padding-left: 0px;\n"]))),T=function(){var e=(0,j.TH)(),n=(0,j.UO)().viewId,t=(0,w.useState)([]),r=(0,v.Z)(t,2),a=r[0],s=r[1],i=(0,w.useState)(""),o=(0,v.Z)(i,2),c=o[0],u=o[1],p=(0,w.useState)(""),l=(0,v.Z)(p,2),f=l[0],d=l[1],h=(0,w.useState)([]),g=(0,v.Z)(h,2),m=g[0],b=g[1],k=e.state.title,A=function(){var e=(0,x.Z)(Z().mark((function e(){var t,r;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.Ru)();case 3:t=e.sent,r=t.filter((function(e){return e.event.includes(n)})),s(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,w.useEffect)((function(){A()}),[n]),(0,w.useEffect)((function(){var e=a.filter((function(e){return e.fullName.toLowerCase().includes(c.toLowerCase())&&e.email.toLowerCase().includes(f.toLowerCase())}));b(e)}),[c,f,a]),(0,G.jsxs)(S,{children:[(0,G.jsxs)("div",{children:[(0,G.jsxs)(y,{children:["Awesome Event participants",(0,G.jsxs)("span",{style:{color:"#3470ff"},children:[" ",k]})]}),(0,G.jsx)(Q,{to:"/",children:(0,G.jsxs)(N,{children:[(0,G.jsx)(U,{className:"css.svgGoBack",children:(0,G.jsx)("use",{href:"".concat(H,"#icon-arrow-left-white")})}),"Go back"]})})]}),(0,G.jsxs)(E,{children:[(0,G.jsxs)(F,{children:["Search by name",(0,G.jsx)(B,{type:"text",placeholder:"Artem Sulimko",value:c,onChange:function(e){return u(e.target.value)}})]}),(0,G.jsxs)(F,{children:["Search by email",(0,G.jsx)(B,{type:"text",placeholder:"ivanov@gmail.com",value:f,onChange:function(e){return d(e.target.value)}})]})]}),(0,G.jsx)(P,{children:m.length>0?m.map((function(e,n){return(0,G.jsxs)(L,{children:[(0,G.jsx)(R,{children:e.email}),(0,G.jsx)(C,{children:e.fullName})]},n)})):(0,G.jsx)(z,{children:"No views found!!!"})}),(0,G.jsxs)("div",{style:{width:500},children:[(0,G.jsx)(y,{children:"Chart the amount of registrations per day for the given event."}),(0,G.jsx)(I,{data:m.length})]})]})}}}]);
//# sourceMappingURL=92.d98404f9.chunk.js.map