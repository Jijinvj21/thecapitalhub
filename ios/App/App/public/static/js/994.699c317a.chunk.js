"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[994],{20994:function(e,t,n){n.r(t),n.d(t,{GoogleAuthWeb:function(){return c}});var r=n(74165),a=n(15861),i=n(15671),s=n(43144),o=n(60136),u=n(29388),c=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,i.Z)(this,n),t.call(this)}return(0,s.Z)(n,[{key:"loadScript",value:function(){if("undefined"!==typeof document){var e="gapi";if(!(null===document||void 0===document?void 0:document.getElementById(e))){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.defer=!0,n.async=!0,n.id=e,n.onload=this.platformJsLoaded.bind(this),n.src="https://apis.google.com/js/platform.js",t.appendChild(n)}}}},{key:"initialize",value:function(){var e,t,n=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{clientId:"",scopes:[],grantOfflineAccess:!1};if("undefined"!==typeof window){var a=null===(e=document.getElementsByName("google-signin-client_id")[0])||void 0===e?void 0:e.content,i=r.clientId||a||"";i||console.warn("GoogleAuthPlugin - clientId is empty"),this.options={clientId:i,grantOfflineAccess:null!==(t=r.grantOfflineAccess)&&void 0!==t&&t,scopes:r.scopes||[]},this.gapiLoaded=new Promise((function(e){window.gapiResolve=e,n.loadScript()})),this.addUserChangeListener()}}},{key:"platformJsLoaded",value:function(){var e=this;gapi.load("auth2",(function(){var t={client_id:e.options.clientId,plugin_name:"CodetrixStudioCapacitorGoogleAuth"};e.options.scopes.length&&(t.scope=e.options.scopes.join(" ")),gapi.auth2.init(t),window.gapiResolve()}))}},{key:"signIn",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,a){var i,s,o,u,c,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(o=null!==(i=t.options.grantOfflineAccess)&&void 0!==i&&i)){e.next=9;break}return e.next=5,gapi.auth2.getAuthInstance().grantOfflineAccess();case 5:u=e.sent,s=u.code,e.next=11;break;case 9:return e.next=11,gapi.auth2.getAuthInstance().signIn();case 11:if(c=gapi.auth2.getAuthInstance().currentUser.get(),!o){e.next=15;break}return e.next=15,c.reloadAuthResponse();case 15:(p=t.getUserFrom(c)).serverAuthCode=s,n(p),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),a(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();case 2:return t=e.sent,e.abrupt("return",{accessToken:t.access_token,idToken:t.id_token,refreshToken:""});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gapi.auth2.getAuthInstance().signOut());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addUserChangeListener",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.gapiLoaded;case 2:gapi.auth2.getAuthInstance().currentUser.listen((function(e){t.notifyListeners("userChange",e.isSignedIn()?t.getUserFrom(e):null)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserFrom",value:function(e){var t={},n=e.getBasicProfile();t.email=n.getEmail(),t.familyName=n.getFamilyName(),t.givenName=n.getGivenName(),t.id=n.getId(),t.imageUrl=n.getImageUrl(),t.name=n.getName();var r=e.getAuthResponse(!0);return t.authentication={accessToken:r.access_token,idToken:r.id_token,refreshToken:""},t}}]),n}(n(66653).Uw)}}]);
//# sourceMappingURL=994.699c317a.chunk.js.map