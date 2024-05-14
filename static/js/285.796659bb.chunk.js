"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[285],{713:function(e,n,r){r.d(n,{EC:function(){return c},IP:function(){return l},Ru:function(){return o},vw:function(){return u}});var t=r(861),a=r(687),i=r.n(a),s=r(294);s.Z.defaults.baseURL="https://66430a433c01a059ea213b70.mockapi.io/api";var u=function(){var e=(0,t.Z)(i().mark((function e(n,r){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL("/events",s.Z.defaults.baseURL),n&&t.searchParams.append("page",n),t.searchParams.append("limit",12),e.prev=3,e.next=6,s.Z.get(t.toString());case 6:return a=e.sent,e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e.catch(3),console.error("Failed to fetch events:",e.t0.message),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(n,r){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL("/users",s.Z.defaults.baseURL),e.prev=1,e.next=4,s.Z.get(t.toString());case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Failed to fetch users:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,r){return e.apply(this,arguments)}}(),c=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t,a,u,o,c,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.fullName,t=n.email,a=n.dateOfBirth,u=n.whereHeard,o=n.event,c=new URL("/users",s.Z.defaults.baseURL),e.prev=2,e.next=5,s.Z.post(c.toString(),{fullName:r,email:t,dateOfBirth:a,whereHeard:u,event:o});case 5:return l=e.sent,e.abrupt("return",l.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.error("Failed to fetch users:",e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("/events",s.Z.defaults.baseURL),e.prev=1,e.next=4,s.Z.get(n.toString());case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Failed to fetch events:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},274:function(e,n,r){r.d(n,{$0:function(){return b},E3:function(){return k},H1:function(){return g},H2:function(){return Z},Mo:function(){return x},P:function(){return w},Q:function(){return v},gj:function(){return m},kM:function(){return y},vT:function(){return j}});var t,a,i,s,u,o,c,l,d,p,f=r(168),h=r(487),v=h.ZP.div(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: center;\n"]))),x=h.ZP.div(a||(a=(0,f.Z)(["\n  border: 1px solid black;\n  width: 290px;\n  padding: 16px;\n"]))),m=h.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),g=h.ZP.h1(s||(s=(0,f.Z)(["\n  /* position: absolute; */\n  left: 420px;\n  top: 400px;\n  font-size: 24px;\n\n  margin: 0 0 20px 0;\n  padding-left: 12px;\n"]))),Z=h.ZP.h2(u||(u=(0,f.Z)([""]))),w=h.ZP.p(o||(o=(0,f.Z)(["\n  margin-bottom: 50px;\n"]))),b=h.ZP.main(c||(c=(0,f.Z)(["\n  position: relative;\n"]))),j=h.ZP.div(l||(l=(0,f.Z)(["\n  margin-top: 30px;\n  text-align: center;\n  padding-bottom: 80px;\n"]))),k=h.ZP.button(d||(d=(0,f.Z)(["\n  padding: 5px 10px;\n  margin: 0 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: transparent;\n  color: black;\n  cursor: pointer;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  &:hover:not(:disabled) {\n    background-color: #f0f0f0;\n  }\n"]))),y=h.ZP.span(p||(p=(0,f.Z)(["\n  margin: 0 10px;\n"])))},285:function(e,n,r){r.r(n);var t=r(861),a=r(942),i=r(413),s=r(433),u=r(439),o=r(687),c=r.n(o),l=r(791),d=r(689),p=r(87),f=r(274),h=r(713),v=r(184);n.default=function(){var e=(0,d.UO)().registerId,n=(0,l.useState)({fullName:"",email:"",dateOfBirth:"",whereHeard:"",event:(0,s.Z)(String(e))}),r=(0,u.Z)(n,2),o=r[0],x=r[1],m=(0,l.useState)(!1),g=(0,u.Z)(m,2),Z=g[0],w=g[1],b=function(e){var n=e.target,r=n.name,t=n.value;x((0,i.Z)((0,i.Z)({},o),{},(0,a.Z)({},r,t)))},j=function(){var n=(0,t.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,t=(0,i.Z)((0,i.Z)({},o),{},{event:[e]}),n.next=5,(0,h.EC)(t);case 5:w(!0),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.error("Failed to submit registration:",n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return Z?(0,v.jsxs)(f.$0,{children:[(0,v.jsx)(f.H1,{children:"Registration Successful!"}),(0,v.jsx)("p",{children:"Thank you for registering."}),(0,v.jsx)(p.rU,{to:"/",children:"Return to Home"})]}):(0,v.jsxs)(f.$0,{children:[(0,v.jsx)(f.H1,{children:"Event registration"}),(0,v.jsxs)("form",{onSubmit:j,children:[(0,v.jsxs)("label",{children:["Full Name:",(0,v.jsx)("input",{type:"text",name:"fullName",value:o.fullName,onChange:b,required:!0})]}),(0,v.jsxs)("label",{children:["Email:",(0,v.jsx)("input",{type:"email",name:"email",value:o.email,onChange:b,required:!0})]}),(0,v.jsxs)("label",{children:["Date of Birth:",(0,v.jsx)("input",{type:"date",name:"dateOfBirth",value:o.dateOfBirth,onChange:b,required:!0})]}),(0,v.jsxs)("label",{children:["Where did you hear about this event?",(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{type:"radio",name:"whereHeard",value:"Social media",checked:"Social media"===o.whereHeard,onChange:b}),(0,v.jsx)("span",{children:"Social media"})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{type:"radio",name:"whereHeard",value:"Friends",checked:"Friends"===o.whereHeard,onChange:b}),(0,v.jsx)("span",{children:"Friends"})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{type:"radio",name:"whereHeard",value:"Found myself",checked:"Found myself"===o.whereHeard,onChange:b}),(0,v.jsx)("span",{children:"Found myself"})]})]}),(0,v.jsx)("button",{type:"submit",children:"Register"}),(0,v.jsx)(p.rU,{to:"/",children:"Cancel"})]})]})}}}]);
//# sourceMappingURL=285.796659bb.chunk.js.map