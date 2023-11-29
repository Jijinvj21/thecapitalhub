"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[2050],{16150:function(e,s,n){n(72791);s.Z=n.p+"static/media/Group 15186.a1f57c594748bb543bda38efc1ec1d61.svg"},3343:function(e,s,n){n.d(s,{Z:function(){return c}});n(72791);n.p;var a=n(59434),t=n(80184),c=function(e){var s;e.className,e.text,e.width,(0,a.v9)((function(e){return e.user.loggedInUser})),s=(new Date).toDateString(),new Date(s).toLocaleDateString("en-US",{weekday:"short",month:"long",day:"numeric"});return(0,t.jsx)(t.Fragment,{})}},52050:function(e,s,n){n.r(s),n.d(s,{default:function(){return v}});var a=n(4942),t=n(1413),c=n(29439),i=n(3343),r=n(16150),l=(n(98083),n(72293),n(57804),n(11087)),o=n(89254),d=n(72791),u=n(18909),m=n(59434),h=n(57689),x=n(97827),f=n(32328),g=n(92986),j=n(18772),w=n(80184),v=function(){var e=(0,m.v9)((function(e){return e.user.loggedInUser})),s=(0,d.useState)(JSON.parse(localStorage.getItem("InvestorAccounts"))||[]),n=(0,c.Z)(s,2),v=n[0],N=n[1],p=(0,d.useState)(e),b=(0,c.Z)(p,2),_=b[0],P=b[1],S=(0,d.useState)(null),k=(0,c.Z)(S,2),Z=k[0],y=k[1],I=(0,d.useState)(!1),C=(0,c.Z)(I,2),A=C[0],L=C[1],U={oldPassword:"",newPassword:"",confirmNewPassword:""},D=(0,d.useState)((0,t.Z)({},U)),F=(0,c.Z)(D,2),O=F[0],T=F[1],q=(0,d.useState)(!1),J=(0,c.Z)(q,2),M=J[0],R=J[1],E=function(e){R(!1);var s=e.target,n=s.name,c=s.value;T((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,a.Z)({},n,c))}))},G=(0,m.I0)();(0,d.useEffect)((function(){document.title="Manage Account | The Capital Hub",G((0,g.Iw)("Manage Account"))}),[]);var H=(0,d.useState)(!1),V=(0,c.Z)(H,2),W=V[0],z=V[1],B=(0,h.s0)(),K=function(){G((0,x.kS)()),localStorage.removeItem("isLoggedIn"),B("/login")};return(0,w.jsx)(f.Z,{children:(0,w.jsx)("div",{className:"investor_manage_account_container",children:(0,w.jsx)("div",{className:"row",children:(0,w.jsxs)("div",{className:"col",children:[(0,w.jsx)(i.Z,{className:"mt-5 mt-xl-3",text:"Manage Account"}),(0,w.jsxs)("div",{className:"box_container p-4 mt-4 row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-gap-3 flex-lg-row",children:[(0,w.jsx)("section",{className:"col password_section",children:(0,w.jsxs)("div",{className:"change_password border",children:[(0,w.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,w.jsx)("div",{className:"logo",children:(0,w.jsx)("img",{src:r.Z,alt:"img"})}),(0,w.jsx)("div",{className:"header_text",children:"Change Password"})]}),(0,w.jsx)("hr",{}),(0,w.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O.confirmNewPassword!==O.newPassword)return R("Passwords don't match");(0,o.Ul)(O).then((function(e){var s=e.message;R(s),T(U)})).catch((function(e){var s=e.message;return R(s)})).finally((function(){return setTimeout((function(){return R(!1)}),3e3)}))},className:"d-flex flex-column",children:[(0,w.jsxs)("div",{className:"form-input col",children:[(0,w.jsx)("label",{htmlFor:"oldPassword",children:"Old Password"}),(0,w.jsx)("input",{id:"oldPassword",type:"text",value:O.oldPassword,onChange:E,name:"oldPassword",required:!0})]}),(0,w.jsxs)("div",{className:"form-input col",children:[(0,w.jsx)("label",{htmlFor:"newPassword",children:"New Password"}),(0,w.jsx)("input",{id:"newPassword",type:"password",name:"newPassword",value:O.newPassword,onChange:E,required:!0})]}),(0,w.jsxs)("div",{className:"form-input col",children:[(0,w.jsx)("label",{htmlFor:"confirmNewPassword",children:"Confirm Password"}),(0,w.jsx)("input",{id:"confirmNewPassword",type:"password",name:"confirmNewPassword",value:O.confirmNewPassword,onChange:E,required:!0})]}),(0,w.jsxs)("div",{className:"footer w-100",children:[M&&(0,w.jsx)("p",{className:"text-center",children:M}),(0,w.jsx)("button",{type:"submit",className:"w-100",children:"Save Changes"})]})]})]})}),(0,w.jsx)("section",{className:"col present_accounts_section",children:(0,w.jsxs)("div",{className:"present_account border",children:[(0,w.jsxs)("div",{className:"d-flex align-items-center",children:[(0,w.jsx)("div",{className:"logo",children:(0,w.jsx)("img",{src:r.Z,alt:"img"})}),(0,w.jsx)("div",{className:"header_text",children:"Present account"})]}),(0,w.jsx)("hr",{}),(0,w.jsxs)("div",{className:"d-flex align-items-center",children:[(0,w.jsx)("div",{className:"profile_image",children:(0,w.jsx)("img",{src:null===e||void 0===e?void 0:e.profilePicture,alt:"img"})}),(0,w.jsxs)("div",{className:"name_email",children:[(0,w.jsxs)("h4",{className:"text-break",children:[null===e||void 0===e?void 0:e.firstName," ",null===e||void 0===e?void 0:e.lastName]}),(0,w.jsx)("h6",{className:"text-break",children:null===e||void 0===e?void 0:e.email})]})]}),(0,w.jsxs)("div",{className:"footer d-flex flex-wrap",children:[(0,w.jsx)(l.rU,{to:"/profile",className:"btn-delete",children:(0,w.jsx)("button",{className:"btn",children:"View profile"})}),(0,w.jsx)("button",{className:" btn-delete",onClick:z,style:{marginLeft:"10px"},children:"Log out"}),W&&(0,w.jsx)(u.Z,{setShowLogoutPopup:z,handleLogoutLogic:K,showLogoutPopup:!0,isInvestor:!0})]})]})}),(0,w.jsx)("section",{className:"col present_accounts_section",children:(0,w.jsxs)("div",{className:"present_account border",children:[(0,w.jsxs)("div",{className:"d-flex align-items-center",children:[(0,w.jsx)("div",{className:"logo",children:(0,w.jsx)("img",{src:r.Z,alt:"img"})}),(0,w.jsx)("div",{className:"header_text",children:"Accounts"})]}),(0,w.jsx)("p",{}),(0,w.jsxs)("section",{className:"existing_accounts",children:[null===v||void 0===v?void 0:v.map((function(s){return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:"small_card",children:[(0,w.jsx)("div",{className:"left_section",children:(0,w.jsxs)("div",{className:"d-flex align-items-center",children:[(0,w.jsxs)("label",{className:"checkbox_container me-2",children:[(0,w.jsx)("input",{type:"checkbox",checked:s.user._id===_._id,onClick:function(){return function(e){P(e.user),y(e)}(s)}}),(0,w.jsx)("span",{className:"checkmark"})]}),(0,w.jsx)("div",{className:"profile_image",children:(0,w.jsx)("img",{src:s.user.profilePicture,alt:"img"})}),(0,w.jsxs)("div",{className:"name_email",children:[(0,w.jsxs)("h4",{children:[s.user.firstName," ",s.user.lastName]}),(0,w.jsx)("h6",{children:window.innerWidth<=600?s.user.email.slice(0,21)===s.user.email?s.user.email:s.user.email.slice(0,21)+"...":s.user.email.slice(0,23)===s.user.email?s.user.email:s.user.email.slice(0,23)+"..."})]})]})}),(0,w.jsx)("div",{className:"right_section d-flex flex-column",children:(0,w.jsx)("button",{className:"img-btn  pt-md-2",onClick:function(){return function(s){if(window.confirm("Are you sure you want to remove this account?")){var n=(JSON.parse(localStorage.getItem("InvestorAccounts"))||[]).filter((function(e){return e.user._id!==s.user._id}));if(N(n),localStorage.setItem("InvestorAccounts",JSON.stringify(n)),e&&e._id===s.user._id){var a=n.length>0?n[0].user:null;null===a?(K(),B("/login")):G((0,x.he)(a))}}}(s)},children:(0,w.jsx)("img",{src:j,alt:"delete icon",className:"deleteIcon"})})})]})})})),(0,w.jsxs)("div",{className:"footer",children:[v.length>1&&(0,w.jsx)("button",{className:"btn btn-delete ",onClick:function(){if(Z){var e=window.confirm("Are you sure you want to switch account?");L(!0),e&&setTimeout((function(){G((0,x.he)(Z.user)),localStorage.setItem("accessToken",Z.token),L(!1)}),2e3)}},children:A?"Switching Account....":"Switch Account"}),(0,w.jsx)(l.rU,{to:"/login",children:(0,w.jsx)("button",{className:"btn btn-delete ",style:{marginLeft:"10px"},children:"Add account"})})]})]})]})})]})]})})})})}},57804:function(e,s,n){e.exports=n.p+"static/media/Rectangle 1895.3a6bbefb0c20ca4b17db.png"},72293:function(e,s,n){e.exports=n.p+"static/media/Raghu.958fb33fa07ac7c06b87.jpeg"}}]);
//# sourceMappingURL=2050.780bebab.chunk.js.map