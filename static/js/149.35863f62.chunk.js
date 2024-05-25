"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{6713:function(e,n,t){t.d(n,{EC:function(){return l},Ru:function(){return c},le:function(){return u},vw:function(){return o}});var r=t(5861),a=t(4687),i=t.n(a),s=t(5294);s.Z.defaults.baseURL="https://66430a433c01a059ea213b70.mockapi.io/api";var o=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URL("/events",s.Z.defaults.baseURL),n&&r.searchParams.append("page",n),r.searchParams.append("limit",40),t&&r.searchParams.append("sortBy",t),e.prev=4,e.next=7,s.Z.get(r.toString());case 7:return a=e.sent,e.abrupt("return",a.data);case 11:throw e.prev=11,e.t0=e.catch(4),console.error("Failed to fetch events:",e.t0.message),e.t0;case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n,t){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("/users",s.Z.defaults.baseURL),e.prev=1,e.next=4,s.Z.get(n.toString());case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Failed to fetch users:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,o,c,l,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.fullName,r=n.email,a=n.dateOfBirth,o=n.whereHeard,c=n.event,l=new URL("/users",s.Z.defaults.baseURL),e.prev=2,e.next=5,s.Z.post(l.toString(),{fullName:t,email:r,dateOfBirth:a,whereHeard:o,event:c});case 5:return u=e.sent,e.abrupt("return",u.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.error("Failed to fetch users:",e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URL("/users/".concat(n),s.Z.defaults.baseURL),e.prev=1,e.next=4,s.Z.put(r.toString(),{event:t});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Failed to fetch users:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}()},7149:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var r,a,i,s,o,c,l,u,d,p,f,h,g,m,x,v,Z=t(3433),b=t(4942),w=t(1413),j=t(5861),y=t(9439),k=t(168),P=t(4687),O=t.n(P),S=t(2791),C=t(1087),F=t(7689),B=t(6487),R=B.ZP.h1(r||(r=(0,k.Z)(["\n  font-size: 24px;\n  /* margin: 40px 0 40px 0; */\n  padding-top: 50px;\n"]))),U=B.ZP.h1(a||(a=(0,k.Z)(["\n  margin-top: 100px;\n\n  text-align: center;\n"]))),H=B.ZP.h1(i||(i=(0,k.Z)(["\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 100px;\n"]))),D=B.ZP.section(s||(s=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),L=B.ZP.form(o||(o=(0,k.Z)(["\n  font-size: 20px;\n"]))),T=B.ZP.label(c||(c=(0,k.Z)(["\n  display: block;\n  margin-bottom: 10px;\n\n  &:last-child {\n    margin-bottom: 20px;\n  }\n"]))),A=B.ZP.input(l||(l=(0,k.Z)(["\n  width: 100%;\n  padding: 10px;\n  margin-top: 5px;\n"]))),N=B.ZP.div(u||(u=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n\n  input {\n    margin-right: 5px;\n  }\n"]))),q=B.ZP.button(d||(d=(0,k.Z)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  /* line-height: 143%; */\n  border-radius: 5px;\n  padding: 14px 44px;\n  width: 136px;\n  height: 48px;\n  background-color: #3470ff;\n  color: #ffffff;\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),z=B.ZP.div(p||(p=(0,k.Z)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: space-around;\n"]))),E=B.ZP.div(f||(f=(0,k.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 100px;\n"]))),I=B.ZP.div(h||(h=(0,k.Z)(["\n  color: green;\n"]))),_=B.ZP.div(g||(g=(0,k.Z)(["\n  display: flex;\n  gap: 50px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n"]))),W=B.ZP.div(m||(m=(0,k.Z)(["\n  width: 450px;\n"]))),$=t(6713),G=t(5218),J=t(184),K=(0,B.ZP)(C.rU)(x||(x=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3470ff;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  border-radius: 5px;\n  width: 136px;\n  height: 48px;\n  background-color: #3470ff;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),M=(0,B.ZP)(C.rU)(v||(v=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3470ff;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  border-radius: 5px;\n  width: 136px;\n  height: 48px;\n  background-color: #3470ff;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),Q=function(){var e=(0,F.TH)(),n=(0,F.UO)().registerId,t=(0,S.useState)({fullName:"",email:"",dateOfBirth:"",whereHeard:"",event:[n]}),r=(0,y.Z)(t,2),a=r[0],i=r[1],s=(0,S.useState)(!1),o=(0,y.Z)(s,2),c=o[0],l=o[1],u=(0,S.useState)({}),d=(0,y.Z)(u,2),p=d[0],f=d[1],h=(0,S.useState)([]),g=(0,y.Z)(h,2),m=g[0],x=g[1],v=(0,S.useState)([]),k=(0,y.Z)(v,2),P=k[0],C=k[1],B=(0,S.useState)(!1),Q=(0,y.Z)(B,2),V=Q[0],X=Q[1],Y=e.state.title,ee=function(){var e=(0,j.Z)(O().mark((function e(){var t;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,$.Ru)();case 3:t=e.sent,C(t),x(t.filter((function(e){return e.event.includes(n)}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,S.useEffect)((function(){ee()}),[n]);var ne=function(e){var n=e.target,t=n.name,r=n.value;if(i((0,w.Z)((0,w.Z)({},a),{},(0,b.Z)({},t,r))),"email"===t){/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)?f((0,w.Z)((0,w.Z)({},p),{},(0,b.Z)({},t,""))):f((0,w.Z)((0,w.Z)({},p),{},(0,b.Z)({},t,"Invalid email address")))}if("dateOfBirth"===t){var s=(new Date).toISOString().split("T")[0];console.log(s);var o=r,c=new Date(s);new Date(o).getTime()-c.getTime()>0?(f((0,w.Z)((0,w.Z)({},p),{},(0,b.Z)({},t,"Date of birth cannot be in the future"))),X(!0)):(f((0,w.Z)((0,w.Z)({},p),{},(0,b.Z)({},t,"   "))),X(!1))}},te=function(){var e=(0,j.Z)(O().mark((function e(t){var r,i,s,o,c,u,d,p;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(P),console.log(m),console.log(a.email),r=P.filter((function(e){return e.email===a.email})),i=(new Date).toISOString().split("T")[0],s=a.dateOfBirth,o=new Date(i),c=new Date(s),!(c.getTime()-o.getTime()>0)){e.next=13;break}return G.Am.error("Date of birth cannot be in the future.",{duration:5e3}),e.abrupt("return");case 13:if(!(m.filter((function(e){return e.email===a.email})).length>0)){e.next=17;break}return G.Am.error("User with this email is already registered.",{duration:5e3}),e.abrupt("return");case 17:if(console.log(r.length),1!==r.length){e.next=32;break}return e.prev=19,u=r[0].id,e.next=23,(0,$.le)(u,[].concat((0,Z.Z)(r[0].event),[n]));case 23:l(!0),G.Am.success("User event updated successfully",{duration:5e3}),e.next=31;break;case 27:e.prev=27,e.t0=e.catch(19),G.Am.error("Failed to update user events: ".concat(e.t0.message),{duration:5e3}),console.error("Failed to update user events:",e.t0.message);case 31:return e.abrupt("return");case 32:if(d={},Object.entries(a).forEach((function(e){var n=(0,y.Z)(e,2),t=n[0];n[1]||(d[t]="".concat(t," is required"))})),!(Object.keys(d).length>0)){e.next=37;break}return f(d),e.abrupt("return");case 37:return e.prev=37,p=(0,w.Z)((0,w.Z)({},a),{},{event:[n]}),e.next=41,(0,$.EC)(p);case 41:l(!0),G.Am.success("Successfully adding a user!",{duration:4e3,position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),G.Am.success("Thank you for registering.",{duration:4e3,position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),e.next=50;break;case 46:e.prev=46,e.t1=e.catch(37),G.Am.error("Failed to submit registration: ".concat(e.t1.message),{duration:1500,position:"top-right",autoClose:5e3}),console.error("Failed to submit registration:",e.t1.message);case 50:case"end":return e.stop()}}),e,null,[[19,27],[37,46]])})));return function(n){return e.apply(this,arguments)}}();return(0,J.jsx)(J.Fragment,{children:c?(0,J.jsxs)(I,{children:[(0,J.jsx)(U,{children:"Registration Successful!"}),(0,J.jsx)(H,{children:"Thank you for registering."}),(0,J.jsxs)(E,{children:[(0,J.jsx)(M,{to:"/",children:"Return to events"}),(0,J.jsx)(q,{onClick:function(){l(!1)},style:{padding:0},children:"Register another"})]})]}):(0,J.jsxs)(D,{children:[(0,J.jsxs)(R,{children:["Event registration ",(0,J.jsx)("span",{style:{color:"#3470ff"},children:Y})]}),(0,J.jsxs)(L,{onSubmit:te,children:[(0,J.jsxs)(W,{children:[(0,J.jsxs)(T,{children:["Full Name",(0,J.jsx)(A,{type:"text",name:"fullName",value:a.fullName,onChange:ne,placeholder:"Anna Perfler",required:!0}),p.fullName&&(0,J.jsx)("span",{children:p.fullName})]}),(0,J.jsxs)(T,{children:["Email",(0,J.jsx)(A,{type:"email",name:"email",value:a.email,onChange:ne,placeholder:"ivanov@gmail.com",required:!0}),p.email&&(0,J.jsx)("span",{children:p.email})]}),(0,J.jsxs)(T,{children:["Date of Birth",(0,J.jsx)(A,{type:"date",name:"dateOfBirth",value:a.dateOfBirth,onChange:ne,required:!0,style:{color:V?"red":"inherit"}}),(0,J.jsxs)("div",{style:{height:20},children:[p.dateOfBirth&&(0,J.jsx)("span",{style:{color:"red"},children:p.dateOfBirth}),!p.dateOfBirth&&(0,J.jsx)("span",{children:"\xa0"})]})]})]}),(0,J.jsxs)(T,{children:["Where did you hear about this event?",(0,J.jsxs)(_,{children:[(0,J.jsxs)(N,{children:[(0,J.jsx)("input",{type:"radio",name:"whereHeard",value:"Social media",checked:"Social media"===a.whereHeard,onChange:ne,required:!0}),(0,J.jsx)("span",{children:"Social media"})]}),(0,J.jsxs)(N,{children:[(0,J.jsx)("input",{type:"radio",name:"whereHeard",value:"Friends",checked:"Friends"===a.whereHeard,onChange:ne,required:!0}),(0,J.jsx)("span",{children:"Friends"})]}),(0,J.jsxs)(N,{children:[(0,J.jsx)("input",{type:"radio",name:"whereHeard",value:"Found myself",checked:"Found myself"===a.whereHeard,onChange:ne,required:!0}),(0,J.jsx)("span",{children:"Found myself"})]})]})]}),(0,J.jsxs)(z,{children:[(0,J.jsx)(q,{type:"submit",children:"Ok"}),(0,J.jsx)(K,{to:"/",children:(0,J.jsx)("p",{children:"Cancel"})})]})]})]})})}}}]);
//# sourceMappingURL=149.35863f62.chunk.js.map