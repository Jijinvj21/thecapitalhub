"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[7736],{1526:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(4942),i=t(1413),o=t(29439),s=t(72791),r=t(59434),l=t(89254),c=t(80184),d=function(e){var n=e.company,t=e.page,d=(0,r.v9)((function(e){return e.user.loggedInUser})),u=(0,s.useState)({}),m=(0,o.Z)(u,2),h=m[0],f=m[1],p=(0,s.useState)(null),x=(0,o.Z)(p,2),v=x[0],j=x[1],g=(0,s.useState)(!1),w=(0,o.Z)(g,2),k=w[0],b=w[1],_=[{field:"problem",title:"Problem",content:(null===n||void 0===n?void 0:n.problem)||"Enter the problem statement your startup is addressing"},{field:"solution",title:"Solution",content:(null===n||void 0===n?void 0:n.solution)||"Enter the solution your startup is offering"},{field:"marketLandscape",title:"Market Landscape",content:(null===n||void 0===n?void 0:n.competitiveLandscape)||"Mention your competitors"}];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"onepage_card_container",children:_.map((function(e,n){return(0,c.jsx)("div",{className:"card_item",children:(0,c.jsx)("div",{className:"card m-0",children:(0,c.jsxs)("div",{className:"card-body",onClick:function(){return j(n)},children:[(0,c.jsx)("h5",{className:"card-title",children:e.title}),"oneLinkEdit"===t?v===n?(0,c.jsx)("textarea",{type:"text",className:"card-text m-0 fs-6",placeholder:e.field,value:k||e.content,onChange:function(e){return b(e.target.value)},onBlur:function(){!function(e,n){var t;console.log("field, newValue",e,n),n&&(f((0,i.Z)((0,i.Z)({},h),{},(0,a.Z)({},e,n))),(0,l.Xi)((t={},(0,a.Z)(t,e,n),(0,a.Z)(t,"founderId",d._id),t)).then((function(e){console.log("saved data",e),window.location.reload()})).catch((function(e){return console.log(e)})))}(e.field,k),j(null)},autoFocus:!0}):(0,c.jsx)("h6",{style:{wordBreak:"break-word"},children:e.content}):(0,c.jsx)("h6",{style:{wordBreak:" break-word"},children:e.content})]})})},n)}))})})}},47736:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var a=t(72791),i=t(93433),o=t(74165),s=t(15861),r=t(4942),l=t(1413),c=t(29439),d=t(1526),u=t(49783),m=t(96234),h=t(57689),f=t(83060),p=t(59434),x=t(89254),v=t(25498),j=t.n(v),g=t(35125),w=t(93178),k=(t(17702),t(17425)),b=t(97827),_=t(65218),N=t(95568),y=t(25274),Z=t(17160),C=t(80184),S=function(){var e,n,t=(0,p.I0)(),v=(0,p.v9)((function(e){return e.user.loggedInUser})),S=v._id,L=(0,a.useState)({}),A=(0,c.Z)(L,2),M=A[0],E=A[1],P=(0,a.useState)({company:"",description:"",location:"",logo:"",keyFocus:"",socialLinks:"",TAM:"",SAM:"",SOM:""}),B=(0,c.Z)(P,2),R=B[0],T=B[1],I=(0,a.useState)(null),F=(0,c.Z)(I,2),O=F[0],q=F[1],D=(0,a.useState)([{required:"",amount:""}]),G=(0,c.Z)(D,2),U=G[0],W=G[1],z=(0,a.useState)([{date:"",milestone:""}]),X=(0,c.Z)(z,2),H=X[0],V=X[1],$=(0,a.useState)([{name:""}]),J=(0,c.Z)($,2),K=J[0],Q=J[1],Y=(0,a.useState)({rows:[{label:"Revenue",values:[""]},{label:"Expense",values:[""]}]}),ee=(0,c.Z)(Y,2),ne=ee[0],te=ee[1],ae=(0,h.s0)();(0,a.useEffect)((function(){(0,x.dW)(S).then((function(e){var n=e.data;E(n),T({company:n.company||"",description:n.description||"",logo:n.logo||"",keyFocus:n.keyFocus||"",location:n.location||"",socialLinks:n.socialLinks||[],TAM:n.TAM||"",SAM:n.SAM||"",SOM:n.SOM||"",startedAtDate:n.startedAtDate||""}),W(n.fundingsAsk||U),V(n.roadMap||H),Q(n.competitors||K),te(n.projections.length>0?n.projections[0]:ne)})).catch((function(){return E({})}))}),[]);var ie=function(e,n){var t=n.target.value;t&&T((0,l.Z)((0,l.Z)({},R),{},(0,r.Z)({},e,t)))},oe=function(e,n){var t=n.target.value,a=(0,l.Z)({},R.socialLinks);a[e]=t,T((0,l.Z)((0,l.Z)({},R),{},{socialLinks:a}))},se=function(e){e&&(R.logo=e),(0,x.Xi)((0,l.Z)((0,l.Z)({},R),{},{founderId:v._id})).then((function(e){var n=e.data;q(n.logo)})).catch((function(e){return console.log(e)}))},re=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(n){var t,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.target,e.next=3,(0,w.y)(t.files[0]);case 3:a=e.sent,console.log(t.files[0]),T((function(e){return(0,l.Z)((0,l.Z)({},e),{},{logo:a})})),se(a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),le=function(e,n,t){var a=(0,i.Z)(U);a[e][n]=t,W(a)},ce=function(e,n,t){var a=(0,i.Z)(H);a[e][n]=t,V(a)},de=(0,a.useState)(!1),ue=(0,c.Z)(de,2),me=ue[0],he=ue[1],fe=(0,a.useState)(""),pe=(0,c.Z)(fe,2),xe=pe[0],ve=pe[1],je=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,x.Xi)({fundingsAsk:U,roadMap:H,competitors:K,projections:ne,founderId:v._id}).then((function(e){e.data;if(ve("Changes saved"),he(!0),!v.achievements.includes("6564689149186bca517cd0d1")){var n=(0,i.Z)(v.achievements);n.push("6564689149186bca517cd0d1");var a={achievements:n};(0,x.TP)(v._id,a).then((function(e){var n=e.data;t((0,b.he)(n.data));var a={recipient:v._id,type:"achievementCompleted",achievementId:"6564689149186bca517cd0d1"};(0,x.qp)(a).then((function(e){return console.log("Added")})).catch((function(e){return console.error(e.message)})),_.ZP.dismiss(),_.ZP.custom((function(e){return(0,C.jsx)(N.Z,{type:y.R.oneStopShop})}))})).catch((function(e){console.error("Error updating user:",e)}))}})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("section",{className:"one_link_edit_view_section w-100 p-3 rounded",children:[(0,C.jsx)("span",{className:"back_img rounded-circle shadow-sm d-flex align-items-center justify-content-center",title:"Go Back",onClick:function(){return ae(-1)},children:(0,C.jsx)(Z.Z,{width:25,height:25,color:"var(--d-l-grey)"})}),(0,C.jsxs)("div",{className:"download_preview p-md-5 ",children:[(0,C.jsxs)("section",{className:" img_company_data d-flex flex-column flex-md-row w-100 justify-content-between align-items-center gap-3",children:[(0,C.jsxs)("div",{className:"img_right ",children:[(0,C.jsxs)("label",{htmlFor:"logoImg",className:"position-relative",children:[(0,C.jsx)("img",{src:O||(null===M||void 0===M?void 0:M.logo),alt:"Selected logo or previous logo",role:"button"}),(0,C.jsx)("span",{className:"position-absolute py-1 px-2 d-flex flex-column justify-content-center align-items-center",style:{fontSize:"15px",padding:"4px",color:"var(--d-l-grey)"},children:"Upload Company Logo"})]}),(0,C.jsx)("input",{type:"file",value:"",id:"logoImg",name:"logo",onChange:re,accept:".jpg, .jpeg, .png, .webp, .svg",hidden:!0})]}),(0,C.jsxs)("div",{className:"compant_data d-flex flex-column gap-3 ",children:[(0,C.jsxs)("div",{className:"startup_Name_inp",children:[(0,C.jsx)("h5",{children:"Startup Name"}),(0,C.jsx)("input",{type:"text",id:"company",name:"company",className:"w-100 px-3",value:R.company,onChange:function(e){return ie("company",e)},onBlur:function(e){return se()}})]}),(0,C.jsxs)("div",{className:"location_data_div d-flex flex-column flex-md-row gap-3 w-100 ",children:[(0,C.jsxs)("div",{className:"country  w-100 ",children:[(0,C.jsx)("h5",{children:"City, Country"}),(0,C.jsx)("input",{type:"text",id:"location",name:"location",className:" px-3",value:R.location,onChange:function(e){return ie("location",e)},onBlur:function(e){return se()}})]}),(0,C.jsxs)("div",{className:"founded  w-100 ",children:[(0,C.jsx)("h5",{children:"Founded Date"}),(0,C.jsx)("input",{type:"date",id:"founded_date",name:"founded_date",className:" px-3 w-100",value:R.startedAtDate,onChange:function(e){return ie("startedAtDate",e)},onBlur:function(e){return se()}})]})]}),(0,C.jsxs)("div",{className:"tags_inp",children:[(0,C.jsx)("h5",{children:"Tags"}),(0,C.jsx)("input",{type:"text",id:"tags",name:"tags",className:" px-3",style:{width:"100%"},value:R.keyFocus,onChange:function(e){return ie("keyFocus",e)},onBlur:function(e){return se()}})]})]})]}),(0,C.jsxs)("section",{className:"link_section",children:[(0,C.jsxs)("div",{className:"web_link",children:[(0,C.jsx)("h5",{children:"Website Link"}),(0,C.jsx)("input",{type:"text",id:"website_link",name:"website_link",className:"w-100 px-3",value:null===(e=R.socialLinks)||void 0===e?void 0:e.website,onChange:function(e){return oe("website",e)},onBlur:function(e){return se()}})]}),(0,C.jsx)("h4",{children:"Social Links"}),(0,C.jsxs)("div",{className:"social_links d-flex flex-column flex-md-row justify-content-between gap-3",children:[(0,C.jsxs)("div",{className:"links w-100",children:[(0,C.jsx)("h5",{children:"Linkedin"}),(0,C.jsx)("input",{type:"text",id:"link_1",name:"link_1",className:"w-100 px-3",value:R.socialLinks.linkedin,onChange:function(e){return oe("linkedin",e)},onBlur:function(e){return se()}})]}),(0,C.jsxs)("div",{className:"links w-100",children:[(0,C.jsx)("h5",{children:"Twitter"}),(0,C.jsx)("input",{type:"text",id:"link_2",name:"link_2",className:"w-100 px-3",value:R.socialLinks.twitter,onChange:function(e){return oe("twitter",e)},onBlur:function(e){return se()}})]}),(0,C.jsxs)("div",{className:"links w-100",children:[(0,C.jsx)("h5",{children:"Instagram"}),(0,C.jsx)("input",{type:"text",id:"link_3",name:"link_3",className:"w-100 px-3",value:R.socialLinks.instagram,onChange:function(e){return oe("instagram",e)},onBlur:function(e){return se()}})]})]})]}),(0,C.jsxs)("div",{className:"about_company_section my-3",children:[(0,C.jsx)("h5",{children:"About Company"}),(0,C.jsx)("textarea",{type:"text",className:"m-0 fs-6 w-100 p-3",value:R.description,onChange:function(e){return ie("description",e)},onBlur:function(e){return se()}})]}),(0,C.jsx)("hr",{className:"my-3"}),(0,C.jsx)("section",{className:"card_section ",children:(0,C.jsx)(d.Z,{company:M,page:"oneLinkEdit"})}),(0,C.jsx)("h4",{children:"Market Size (in Billions $)"}),(0,C.jsxs)("section",{className:"market_size d-flex flex-column flex-md-row justify-content-between gap-3",children:[(0,C.jsxs)("div",{className:"market w-100",children:[(0,C.jsx)("h5",{children:"Total Addressable Market:"}),(0,C.jsx)("input",{type:"text",id:"total_addressable_market",name:"total_addressable_market",className:"w-100 px-3",placeholder:"Enter here",value:R.TAM,onChange:function(e){return ie("TAM",e)},onBlur:function(e){return se()}})]}),(0,C.jsxs)("div",{className:"market w-100",children:[(0,C.jsx)("h5",{children:"Service Addressable Market:"}),(0,C.jsx)("input",{type:"text",id:"service_addressable_market",name:"service_addressable_market",className:"w-100 px-3",placeholder:"Enter here",value:R.SAM,onChange:function(e){return ie("SAM",e)},onBlur:function(e){return se()}})]}),(0,C.jsxs)("div",{className:"market w-100",children:[(0,C.jsx)("h5",{children:"Service Obtainable Market:"}),(0,C.jsx)("input",{type:"text",id:"service_obtainable_market",name:"service_obtainable_market",className:"w-100 px-3",placeholder:"Enter here",value:R.SOM,onChange:function(e){return ie("SOM",e)},onBlur:function(e){return se()}})]})]}),(0,C.jsx)("h4",{children:"Competitor"}),(0,C.jsx)("section",{className:"competitor_social_link d-flex flex-column flex-md-row justify-content-between gap-3",children:null===K||void 0===K?void 0:K.map((function(e,n){return(0,C.jsxs)("div",{className:"competitor_link w-100",children:[(0,C.jsxs)("h5",{children:["Competitor name ",n+1]}),(0,C.jsx)("input",{type:"text",value:e.name,onChange:function(e){return function(e,n){var t=(0,i.Z)(K);t[e].name=n,Q(t)}(n,e.target.value)},className:"w-100 px-3"}),n>0&&(0,C.jsx)("button",{className:"delete_row_btn delete_insideText",onClick:function(){return function(e){var n=K.filter((function(n,t){return t!==e}));Q(n)}(n)},children:(0,C.jsx)(k.GnT,{})})]},n)}))}),(0,C.jsx)("button",{onClick:function(){var e=[].concat((0,i.Z)(K),[{name:""}]);Q(e)},className:"add_row_btn startup",children:"+ Add Competitor"}),(0,C.jsx)("section",{className:"table_section mt-4",children:(0,C.jsx)(u.Z,{page:"oneLinkEditPage",setTable:te,data:ne})}),(0,C.jsx)("h4",{children:"Fund Asking"}),(0,C.jsx)("section",{className:"fund_sking_section  d-flex flex-column  justify-content-between gap-3",children:null===U||void 0===U?void 0:U.map((function(e,n){return(0,C.jsxs)("div",{className:"d-flex flex-md-row flex-column w-100 gap-2",children:[(0,C.jsxs)("div",{className:"fund_asking w-100",children:[(0,C.jsx)("h5",{children:"Required For"}),(0,C.jsx)("input",{type:"text",value:e.required,onChange:function(e){return le(n,"required",e.target.value)},className:"w-100 px-3"})]}),(0,C.jsxs)("div",{className:"fund_asking w-100",children:[(0,C.jsx)("h5",{children:"Amount"}),(0,C.jsx)("input",{type:"text",value:e.amount,onChange:function(e){return le(n,"amount",e.target.value)},className:"w-100 px-3"})]}),n>0&&(0,C.jsx)("button",{className:"delete_row_btn",onClick:function(){return function(e){var n=(0,i.Z)(U);n.splice(e,1),W(n)}(n)},children:(0,C.jsx)(k.GnT,{})})]},n)}))}),(0,C.jsx)("button",{onClick:function(){W([].concat((0,i.Z)(U),[{required:"",amount:""}]))},className:"add_row_btn startup",children:"+ Add Row"}),(0,C.jsx)("hr",{}),(0,C.jsx)("h4",{children:"Roadmap"}),(0,C.jsx)("section",{className:"roadmap_section d-flex flex-column justify-content-between gap-3",children:null===H||void 0===H?void 0:H.map((function(e,n){return(0,C.jsxs)("div",{className:"d-flex flex-md-row flex-column w-100 gap-2",children:[(0,C.jsxs)("div",{className:"Roadmap w-100",children:[(0,C.jsx)("h5",{children:"Date"}),(0,C.jsx)("input",{type:"date",name:"date_".concat(n),value:e.date,onChange:function(e){return ce(n,"date",e.target.value)},className:"w-100 px-3"})]}),(0,C.jsxs)("div",{className:"Roadmap w-100",children:[(0,C.jsx)("h5",{children:"Milestone"}),(0,C.jsx)("input",{type:"text",name:"milestone_".concat(n),value:e.milestone,onChange:function(e){return ce(n,"milestone",e.target.value)},className:"w-100 px-3"})]}),n>0&&(0,C.jsx)("button",{className:"delete_row_btn",onClick:function(){return function(e){var n=(0,i.Z)(H);n.splice(e,1),V(n)}(n)},children:(0,C.jsx)(k.GnT,{})})]},n)}))}),(0,C.jsx)("button",{className:"add_row_btn startup",onClick:function(){V([].concat((0,i.Z)(H),[{date:"",milestone:""}]))},children:"+ Add Row"}),(0,C.jsx)("hr",{}),(0,C.jsx)("section",{className:"team_section d-flex  flex-row gap-3",children:null===M||void 0===M||null===(n=M.team)||void 0===n?void 0:n.map((function(e,n){return(0,C.jsx)(m.Z,{index:n+1,profile:null===e||void 0===e?void 0:e.image,name:null===e||void 0===e?void 0:e.name,designation:null===e||void 0===e?void 0:e.designation,company:M,page:"oneLinkEdit"})}))}),(0,C.jsx)("button",{className:"save_btn btn-lg d-block mx-auto mt-3",onClick:je,children:"Save"})]}),(0,C.jsx)("section",{className:"button_preview_download_section pdf-hidden",children:(0,C.jsxs)("div",{className:"download_button_container",children:[(0,C.jsx)("button",{onClick:function(){var e=document.querySelector(".download_preview"),n=document.querySelectorAll("button");n.forEach((function(e){e.style.display="none"})),j()(e,{allowTaint:!1,removeContainer:!0,backgroundColor:"#ffffff",scale:window.devicePixelRatio,useCORS:!0,windowWidth:"1400px"}).then((function(e){var t=e.toDataURL("image/png"),a=210*e.height/e.width,i=a,o=new g.ZP("p","mm","a4"),s=5;for(o.addImage(t,"PNG",0,s,210,a),i-=295;i>=0;)s=i-a,o.addPage(),o.addImage(t,"PNG",0,s,210,a),i-=295;var r=o.output("blob"),l=URL.createObjectURL(r);window.open(l,"_blank"),n.forEach((function(e){e.style.display="block"}))}))},children:"Preview"}),(0,C.jsx)("button",{className:"download_button",onClick:function(){var e=document.querySelector(".download_preview"),n=document.querySelectorAll("button");n.forEach((function(e){e.style.display="none"})),j()(e,{allowTaint:!1,removeContainer:!0,backgroundColor:"#ffffff",scale:window.devicePixelRatio,useCORS:!0,windowWidth:"1400px"}).then((function(e){var t=e.toDataURL("image/png"),a=210*e.height/e.width,i=a,o=new g.ZP("p","mm","a4"),s=5;for(o.addImage(t,"PNG",0,s,210,a),i-=295;i>=0;)s=i-a,o.addPage(),o.addImage(t,"PNG",0,s,210,a),i-=295;o.save("".concat(R.company,".pdf")),n.forEach((function(e){e.style.display="block"}))}))},children:"Download"})]})}),me&&(0,C.jsx)(f.Z,{withoutOkButton:!0,onClose:function(){return he(!me)},successText:xe})]})})},L=t(32328),A=t(92986),M=function(){var e=(0,p.I0)();return(0,a.useEffect)((function(){document.title="Edit OneLink | The Capital Hub",e((0,A.Iw)("Edit OneLink"))}),[e]),(0,C.jsx)(L.Z,{children:(0,C.jsx)("div",{className:"editpage_container",children:(0,C.jsx)("div",{className:"row mt-5 mt-lg-2",children:(0,C.jsx)(S,{})})})})}},49783:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(93433),i=t(1413),o=t(29439),s=t(72791),r=t(80184),l=function(e){var n,t=e.hidden,l=e.page,c=e.setTable,d=e.data,u=(0,s.useState)({rows:[]}),m=(0,o.Z)(u,2),h=m[0],f=m[1];(0,s.useEffect)((function(){f(d)}),[d]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"table-container",children:[(0,r.jsx)("h2",{className:t&&"hidden",children:"Projections"}),(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{children:null===h||void 0===h||null===(n=h.rows)||void 0===n?void 0:n.map((function(e,n){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:e.label}),null===e||void 0===e?void 0:e.values.map((function(t,a){return(0,r.jsx)("td",{children:"oneLinkEditPage"===l?(0,r.jsx)("input",{className:"table_input",placeholder:"0",value:t,onChange:function(e){return function(e,n,t){var a={rows:h.rows.map((function(a,o){return(0,i.Z)((0,i.Z)({},a),{},{values:o===e?a.values.map((function(e,a){return a===n?t:e})):a.values})}))};f(a),c(a)}(n,a,e.target.value)}}):"".concat(t)},"".concat(e.label).concat(a))}))]},e.label)}))})})]}),(0,r.jsxs)("div",{children:["oneLinkEditPage"===l&&(0,r.jsx)("button",{onClick:function(){var e=prompt("Enter a name for the new row:","Row ".concat(h.rows.length+1));if(null!==e){var n={label:e,values:Array(h.rows[0].values.length).fill("")};f((function(e){return{rows:[].concat((0,a.Z)(e.rows),[n])}}))}},className:"add_row_btn startup",style:{marginRight:"10px"},children:"+ Add Row"}),"oneLinkEditPage"===l&&(0,r.jsx)("button",{onClick:function(){f((function(e){return{rows:e.rows.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{values:[].concat((0,a.Z)(e.values),[""])})}))}}))},className:"add_row_btn startup",children:"+ Add Column"})]})]})}},17160:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),i=(t(72791),t(80184));function o(e){return(0,i.jsx)("svg",(0,a.Z)((0,a.Z)({viewBox:"0 0 512 512",fill:"currentColor",height:"1em",width:"1em"},e),{},{children:(0,i.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M328 112L184 256l144 144"})}))}}}]);
//# sourceMappingURL=7736.19aa0f6d.chunk.js.map