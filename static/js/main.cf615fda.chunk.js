(this.webpackJsonpchat_app=this.webpackJsonpchat_app||[]).push([[0],{25:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var a=s(5),c=s(19),o=s.n(c),r=s(10),n=(s(25),s(11)),i=n.a.initializeApp({apiKey:"AIzaSyBK2LntkUvYMH2NH00AHbydIoaYpMV5cS4",authDomain:"chat-app-9a401.firebaseapp.com",projectId:"chat-app-9a401",storageBucket:"chat-app-9a401.appspot.com",messagingSenderId:"152940242080",appId:"1:152940242080:web:c48c8d04b16e8d8465d5c5",measurementId:"G-NFJ4WKEJBE"}),d=i.firestore(),l=i.auth(),b=s(3);var u=function(){return Object(b.jsx)("div",{className:"SignIn",children:Object(b.jsx)("button",{onClick:function(){var e=new n.a.auth.GoogleAuthProvider;l.signInWithPopup(e)},children:"Sign In With Google"})})},f=s(20),j=s(13),m=s.n(j),p=s(14);var y=function(e){var t=Object(a.useState)(""),s=Object(r.a)(t,2),c=s[0],o=s[1];function i(){return(i=Object(p.a)(m.a.mark((function t(s){var a,r,i,b,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===c){t.next=6;break}return s.preventDefault(),a=l.currentUser,r=a.uid,i=a.photoURL,b=a.email,u=a.displayName,t.next=5,d.collection(e.database).add({text:c,photoURL:i,uid:r,email:b,displayName:u,createdAt:n.a.firestore.FieldValue.serverTimestamp()});case 5:o("");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsx)("div",{onSubmit:function(e){return i.apply(this,arguments)},children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{className:"SendMsg",type:"text",value:c,placeholder:"Message..",onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("button",{className:"SendMsgBtn",type:"submit",children:Object(b.jsx)("i",{class:"fa fa-paper-plane"})})]})})};var h=function(e){var t=Object(a.useState)([]),s=Object(r.a)(t,2),c=s[0],o=s[1],n=Object(a.useState)(e.lim),i=Object(r.a)(n,2),u=i[0],f=i[1];return Object(a.useEffect)((function(){f(e.lim)}),[e.database]),Object(a.useEffect)((function(){d.collection(e.database).orderBy("createdAt","desc").limit(u).onSnapshot((function(e){o(e.docs.map((function(e){return e.data()})))}))})),Object(b.jsxs)("div",{className:"ChatArea",children:[Object(b.jsxs)("button",{className:"LoadMore",onClick:function(){f(u+2),d.collection(e.database).orderBy("createdAt","desc").limit(u).onSnapshot((function(e){o(e.docs.map((function(e){return e.data()})))}))},children:[Object(b.jsx)("i",{class:"fa fa-spinner","aria-hidden":"true"})," Load More"]}),c.reverse().map((function(e){var t,s=e.idx,a=e.text,c=e.photoURL,o=e.displayName,r=e.email;return Object(b.jsxs)("div",{className:(t=r,t===l.currentUser.email?"self":"other"),children:[Object(b.jsx)("img",{src:c,alt:""}),Object(b.jsx)("h4",{children:o}),Object(b.jsx)("p",{children:a})]},s)})),Object(b.jsx)(y,{database:e.database})]})};var O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"SignOutBtn",onClick:function(){l.signOut(),window.location.reload()},children:Object(b.jsx)("i",{class:"fa fa-sign-out"})})})};var x=function(e){var t=Object(a.useState)([{Room:"messages"}]),s=Object(r.a)(t,2),c=s[0],o=s[1],n=Object(a.useState)(c),i=Object(r.a)(n,2),u=i[0],f=i[1],j=Object(a.useState)(c[0].Room),m=Object(r.a)(j,2),p=m[0],y=m[1],x=["#37A163","#7854A1","#41A4C9","#EB5211","#2C7DB2","#DE0077","#6C67AC"];Object(a.useEffect)((function(){}),[p]);var v=l.currentUser,g=v.photoURL,P=(v.email,v.displayName,Object(a.useState)("")),N=Object(r.a)(P,2),S=N[0],C=N[1];Object(a.useEffect)((function(){S.length>0?f(c.filter((function(e){return e.Room.toLowerCase().includes(S.toLowerCase())}))):f(c)}),[S]);var k=Object(a.useState)(!0),A=Object(r.a)(k,2),R=A[0],B=A[1];return Object(a.useEffect)((function(){R?(document.body.style.setProperty("--bg","#ffffff"),document.body.style.setProperty("--bg"," #ffffff"),document.body.style.setProperty("--sidebar"," #4849a1"),document.body.style.setProperty("--left"," #f9f9fc"),document.body.style.setProperty("--heading"," #31324e"),document.body.style.setProperty("--search"," #ffffff"),document.body.style.setProperty("--text-box"," #ffffff"),document.body.style.setProperty("--search-text"," #63636d"),document.body.style.setProperty("--text-light"," #b4b6cb"),document.body.style.setProperty("--roomlist-txt"," #13145c"),document.body.style.setProperty("--chat-self"," #f0f0f6"),document.body.style.setProperty("--btn"," #6364af"),document.body.style.setProperty("--base","#000000")):(document.body.style.setProperty("--bg"," #1B1F22"),document.body.style.setProperty("--sidebar"," #6364AF"),document.body.style.setProperty("--left"," #363940"),document.body.style.setProperty("--heading"," #ffffff"),document.body.style.setProperty("--search"," #363940"),document.body.style.setProperty("--text-box"," #363940"),document.body.style.setProperty("--search-text"," #63636d"),document.body.style.setProperty("--text-light"," #b4b6cb"),document.body.style.setProperty("--roomlist-txt"," #ffffff"),document.body.style.setProperty("--chat-self"," #f0f0f6"),document.body.style.setProperty("--btn"," #7879D5"),document.body.style.setProperty("--base","#ffffff"))}),[R]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"barleft",children:[Object(b.jsx)("img",{className:"profilePic",src:g,alt:""}),Object(b.jsxs)("div",{className:"bottom",children:[Object(b.jsx)("hr",{}),Object(b.jsx)(O,{}),Object(b.jsx)("button",{className:"darkmode",onClick:function(){return B(!R)},children:Object(b.jsx)("i",{class:"fa fa-moon-o"})})]})]}),Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)("h1",{children:"iChating"}),Object(b.jsx)("input",{type:"text",placeholder:"Search...",className:"search",value:S,onChange:function(e){return C(e.target.value)}}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)("h3",{children:"Rooms"}),Object(b.jsx)("button",{className:"refreshRooms",onClick:function(){d.collection("Database").onSnapshot((function(e){o(e.docs.map((function(e){return e.data()}))),f(c)}))},children:Object(b.jsx)("i",{className:"fa fa-refresh"})})]}),u.map((function(e,t){return Object(b.jsxs)("div",{className:(s=e.Room,p===s?"roomlist active":"roomlist"),onClick:function(){return y(e.Room)},children:[Object(b.jsx)("div",{className:"name",style:{backgroundColor:x[Math.floor(7*Math.random())]},children:Object(b.jsx)("h3",{children:e.Room[0].toUpperCase()})}),Object(b.jsxs)("h4",{children:[e.Room," "]})]},t);var s}))]}),Object(b.jsxs)("div",{className:"right",children:[Object(b.jsx)("h1",{children:p}),Object(b.jsx)(h,{database:p,lim:20})]})]})};var v=function(){var e=Object(f.a)(l),t=Object(r.a)(e,1)[0];return Object(b.jsx)(b.Fragment,{children:t?Object(b.jsx)(x,{database:"Database"}):Object(b.jsx)(u,{})})};o.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cf615fda.chunk.js.map