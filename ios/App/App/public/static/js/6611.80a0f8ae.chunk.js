"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[6611],{80272:function(e,t,n){n.d(t,{Z:function(){return l}});n(72791);var r=n(11087),s=n(6827),a=n(97045),i=n(72412),o=n(80184),l=function(e){e.title,e.btnlink;var t=[{title:"Why Mentoring Matters: Why Angel Investors Should Prioritize Mentorship Before Investing in a Startup",btnlink:"/blog/startupOne",image:s,id:1},{title:"8 Tips to start raising Angel investments for startups",btnlink:"/blog/startupTwo",image:a,id:2},{title:"HOW TO BUILD A GREAT STARTUP by Pramod Badiger",btnlink:"/blog/startupThree",image:i,id:3}];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"newscorner_container",children:(0,o.jsx)("div",{className:"col-12 newscorner_card",children:(0,o.jsxs)("div",{className:"card mt-2 right_view_profile_card right_view_profile",children:[(0,o.jsx)("div",{className:"card-header",children:(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("span",{children:"News Corner"})})}),t.map((function(e,t){return(0,o.jsx)(r.rU,{to:e.btnlink?e.btnlink:"",style:{textDecoration:"none"},target:"_blank",className:"card-body newscorner_card_body ",children:(0,o.jsxs)("div",{className:"newscorner_card_text d-flex align-items-center gap-1",children:[(0,o.jsx)("h4",{className:"smallest_typo",children:e.title?e.title:" Cellbell startup has raised to $10 million dollor funding"}),(0,o.jsx)("div",{className:"newsImage__container",children:(0,o.jsx)("img",{src:e.image,alt:"News",style:{width:"100px",height:"auto",objectFit:"contain"}})})]})},e.id)}))]})})})})}},17160:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(1413),s=(n(72791),n(80184));function a(e){return(0,s.jsx)("svg",(0,r.Z)((0,r.Z)({viewBox:"0 0 512 512",fill:"currentColor",height:"1em",width:"1em"},e),{},{children:(0,s.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M328 112L184 256l144 144"})}))}},86611:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(29439),s=n(72791),a=n(32328),i=n(91535),o=n(80272),l=n(16294),c=n(59434),u=n(97827),d=n(57689),h=(n(17160),n(74165)),p=n(93433),m=n(15861),f={targetMarket:"What market is your startup targeting?",whyRightTimeForYourStartUp:"Why is this the right time for your startup?",competitiveAdvantage:"What competitive advantage does your startup have?",biggestCompetitors:"Who are the biggest competitors of your startups?",revenueGenerated:"What is the revenue that you have generated?"},g=n(92986),x=n(80184),v=250;function b(e){var t=e.question,n=(0,c.v9)(g.JD),a=(0,s.useState)(!1),i=(0,r.Z)(a,2),o=i[0],l=i[1],u=(0,s.useRef)();return(0,x.jsxs)("div",{className:"funding_form_field d-flex flex-column gap-2",children:[(0,x.jsxs)("fieldset",{children:[(0,x.jsxs)("legend",{className:"fs-5 d-flex align-items-center gap-3 flex-wrap",children:[(0,x.jsx)("span",{children:f[t]})," "]}),(0,x.jsx)("textarea",{name:t,id:t,rows:n?8:5,className:"funding_textarea",onChange:function(e){u.current.style.height="auto",u.current.style.height=u.current.scrollHeight+2+"px";var t=e.target.value.split(" ");t.length>v&&(u.current.value=t.slice(0,t.length-1).join(" "),l(!0),setTimeout((function(){l(!1)}),3e3))},ref:u,style:{resize:"none"},required:!0})]}),o&&(0,x.jsx)("div",{className:"alert alert-danger py-2",role:"alert",children:"Word limit exceeded! Please complete in 250 words or less."})]})}var j=n(71781),w=n(89254),y=n(65218),N=n(95568),k=n(25274);function _(e){var t=e.setShowForm,n=(0,c.v9)((function(e){return e.user.loggedInUser})),a=(0,c.v9)(u.o1),i=(0,c.v9)(u.zr),o=(0,c.v9)(u.I_),l=(0,c.I0)(),d=(0,s.useState)(!1),g=(0,r.Z)(d,2),v=g[0],_=g[1];function C(){return(C=(0,m.Z)((0,h.Z)().mark((function e(r){var s,c,d,m,f,g,v,b,j,C,S,Z,T;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),_(!0),s=r.target,c=s.targetMarket,d=s.whyRightTimeForYourStartUp,m=s.competitiveAdvantage,f=s.biggestCompetitors,g=s.revenueGenerated,v={fundingViaCapitalhubQuestions:{targetMarket:c.value,whyRightTimeForYourStartUp:d.value,competitiveAdvantage:m.value,biggestCompetitors:f.value,revenueGenerated:g.value}},e.prev=4,e.next=7,(0,w.TP)(a,v);case 7:b=e.sent,j=b.data,l((0,u.he)(j.data)),n.achievements.includes("65683ff0270e585d456c961a")||((C=(0,p.Z)(n.achievements)).push("65683ff0270e585d456c961a"),S={achievements:C},(0,w.TP)(n._id,S).then((function(e){var t=e.data;l((0,u.he)(t.data));var r={recipient:n._id,type:"achievementCompleted",achievementId:"65683ff0270e585d456c961a"};(0,w.qp)(r).then((function(e){return console.log("Added")})).catch((function(e){return console.error(e.message)})),y.ZP.custom((function(e){return(0,x.jsx)(N.Z,{type:k.R.hereWeGo})}))})).catch((function(e){console.error("Error updating user:",e)}))),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error("Error Saving funding info:",e.t0);case 16:return e.prev=16,Z={fundingViaCapitalhubQuestions:{targetMarket:c.value,whyRightTimeForYourStartUp:d.value,competitiveAdvantage:m.value,biggestCompetitors:f.value,revenueGenerated:g.value},name:i,email:o},e.next=20,(0,w.zY)(Z);case 20:T=e.sent,console.log(T),y.ZP.success(T.message,{duration:3e3,position:"top-center"}),e.next=28;break;case 25:e.prev=25,e.t1=e.catch(16),console.error("Error Submitting to email:",e.t1);case 28:return e.prev=28,_(!1),t(!1),e.finish(28);case 32:case"end":return e.stop()}}),e,null,[[4,13],[16,25,28,32]])})))).apply(this,arguments)}return(0,x.jsxs)("form",{onSubmit:function(e){return C.apply(this,arguments)},className:"px-3 px-lg-5 d-flex flex-column gap-4 ",children:[Object.keys(f).map((function(e,t){return(0,x.jsx)(b,{question:e},e)})),(0,x.jsxs)("div",{className:"d-flex align-items-center gap-4",children:[(0,x.jsx)("button",{type:"button",className:"btn btn-secondary py-2 fs-6 w-50",onClick:function(){return t(!1)},children:"Cancel"}),(0,x.jsx)("button",{type:"submit",className:"btn btn-startup text-white py-2 fs-6 d-flex align-items-center justify-content-center gap-2 w-50",disabled:v,children:v?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j.Z,{colorClass:"text-white",spinnerSizeClass:"spinner-border-sm"}),(0,x.jsx)("span",{children:"Please wait..."})]}):"Save All"})]})]})}function C(e){var t=e.setShowForm,n=(0,c.v9)(u.Cy);return(0,x.jsxs)("div",{className:"funding-previous-wrapper px-3 px-lg-5 d-flex flex-column gap-4",children:[Object.keys(f).map((function(e,t){return(0,x.jsxs)("fieldset",{children:[(0,x.jsx)("legend",{className:"fs-5",children:f[e]}),(0,x.jsx)("p",{className:"",children:n[e]})]},e)})),(0,x.jsx)("button",{type:"button",className:"btn btn-startup fs-6 d-flex align-items-center justify-content-center gap-2 w-50 mx-auto",onClick:function(){return t(!0)},"data-bs-theme":"dark",children:"New Submission"})]})}function S(){var e=(0,c.v9)(u.Cy),t=(0,c.I0)(),n=((0,d.s0)(),(0,s.useState)(!1)),h=(0,r.Z)(n,2),p=h[0],m=h[1];return(0,s.useEffect)((function(){document.title="Funding | The Capital Hub",t((0,g.Iw)("Funding"))}),[t]),(0,x.jsx)("div",{className:"funding_wrapper my-4 mx-lg-3 mx-xl-0",children:(0,x.jsx)(a.Z,{children:(0,x.jsxs)("div",{className:"two_col_wrapper",children:[(0,x.jsxs)("div",{className:"funding_form_container d-flex flex-column gap-3 rounded-4 shadow-sm py-4 overflow-hidden",children:[(0,x.jsx)("div",{className:"px-4 border-bottom pb-4 d-flex align-items-center justify-content-between",children:(0,x.jsxs)("h2",{className:"m-0",children:['"Apply for Funding" with'," ",(0,x.jsx)("span",{style:{color:"#fd5901"},children:"Capital HUB"})]})}),!p&&e?(0,x.jsx)(C,{setShowForm:m}):(0,x.jsx)(_,{setShowForm:m})]}),(0,x.jsxs)("div",{className:"d-none d-xl-block",children:[(0,x.jsx)(i.Z,{}),(0,x.jsx)(l.Z,{}),(0,x.jsx)(o.Z,{})]})]})})})}},6827:function(e,t,n){e.exports=n.p+"static/media/1 AsPGU1Q42C9lsVRoMg91Nw.2aa841960ef85135bd85.webp"},97045:function(e,t,n){e.exports=n.p+"static/media/eighttips.ce78416442f6ad7404cc.webp"},72412:function(e,t,n){e.exports=n.p+"static/media/threefive.3af5c9f283a3ec55c790.webp"}}]);
//# sourceMappingURL=6611.80a0f8ae.chunk.js.map