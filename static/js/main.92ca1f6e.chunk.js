(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(17),s=n(45),o=n(93),l=n(94),u="UPDATE",d="DELETE",j="CREATE",p="FETCH_ALL",b="AUTH",h="LOGOUT",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return[].concat(Object(l.a)(e),[t.payload]);case p:return t.payload;case u:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case d:return console.info("delete",e,t.payload),e.filter((function(e){return e._id!==t.payload}));default:return e}},m=n(12),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return localStorage.setItem("profile",JSON.stringify(Object(m.a)({},null===t||void 0===t?void 0:t.data))),Object(m.a)(Object(m.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case h:return localStorage.clear(),Object(m.a)(Object(m.a)({},e),{},{authData:null});default:return e}},x=Object(s.b)({posts:f,auth:g}),O=n(180),v=n(40),y=n(31),C=n(26),w=n(178),k=n(179),S=n(173),N=n(174),I=n(139),F=n(175),T=n(176),L=n(177),D=n(85),A=n.n(D),E=n(65),M=n.n(E),z=n(87),B=n.n(z),_=n(86),P=n.n(_),U=n(79),W=n.n(U),H=n(169),J=Object(H.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),V=n(14),q=n.n(V),R=n(23),G=n(84),Y=n.n(G).a.create({baseURL:"https://memory-for-me.herokuapp.com/"});Y.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var Z=function(e,t){return Y.patch("/posts/".concat(e),t)},K=function(e){return Y.delete("/posts/".concat(e))},Q=function(e){return Y.patch("/posts/".concat(e,"/likePost"))},X=function(e){return Y.post("/users/signin",e)},$=function(e){return Y.post("/users/signup",e)},ee=function(e){return function(){var t=Object(R.a)(q.a.mark((function t(n){var a,r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,Y.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:j,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},te=function(e,t){return function(){var n=Object(R.a)(q.a.mark((function n(a){var r,c;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z(e,t);case 3:r=n.sent,c=r.data,a({type:u,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},ne=n(2),ae=function(e){var t,n,a=e.post,r=e.setCurrentId,c=J(),s=Object(i.b)(),o=JSON.parse(localStorage.getItem("profile")),l=function(){return a.likes.length>0?a.likes.find((function(e){var t,n;return e===((null===o||void 0===o||null===(t=o.result)||void 0===t?void 0:t.googleId)||(null===o||void 0===o||null===(n=o.result)||void 0===n?void 0:n._id))}))?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(A.a,{fontSize:"small"}),"\xa0",a.likes.length>2?"You and ".concat(a.likes.length-1," others"):"".concat(a.likes.length," like").concat(a.likes.length>1?"s":"")]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(M.a,{fontSize:"small"}),"\xa0",a.likes.length," ",1===a.likes.length?"Like":"Likes"]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(M.a,{fontSize:"small"}),"\xa0Like"]})};return Object(ne.jsxs)(S.a,{className:c.card,children:[Object(ne.jsx)(N.a,{className:c.media,image:a.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:a.title}),Object(ne.jsxs)("div",{className:c.overlay,children:[Object(ne.jsx)(I.a,{variant:"h6",children:a.name}),Object(ne.jsx)(I.a,{variant:"body2",children:W()(a.createdAt).fromNow()})]}),Object(ne.jsx)("div",{className:c.overlay2,children:Object(ne.jsx)(F.a,{style:{color:"white"},size:"small",onClick:function(){return r(a._id)},children:Object(ne.jsx)(P.a,{fontSize:"medium"})})}),Object(ne.jsx)("div",{className:c.details,children:Object(ne.jsx)(I.a,{variant:"body2",color:"textSecondary",children:a.tags.map((function(e){return"#".concat(e)}))})}),Object(ne.jsx)(I.a,{className:c.title,variant:"h5",gutterBottom:!0,children:a.title}),Object(ne.jsx)(T.a,{children:Object(ne.jsx)(I.a,{variant:"body2",color:"textSecondary",component:"p",children:a.message})}),Object(ne.jsxs)(L.a,{className:c.CardActions,children:[Object(ne.jsx)(F.a,{size:"small",color:"primary",disabled:!(null===o||void 0===o?void 0:o.result),onClick:function(){return s((e=a._id,function(){var t=Object(R.a)(q.a.mark((function t(n){var a,r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q(e);case 3:a=t.sent,r=a.data,n({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(ne.jsx)(l,{})}),(null===o||void 0===o||null===(t=o.result)||void 0===t?void 0:t.googleId)===(null===a||void 0===a?void 0:a.creator)||(null===o||void 0===o||null===(n=o.result)||void 0===n?void 0:n._id)===(null===a||void 0===a?void 0:a.creator)?Object(ne.jsxs)(F.a,{size:"small",color:"primary",onClick:function(){var e;s((e=a._id,function(){var t=Object(R.a)(q.a.mark((function t(n){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K(e);case 3:n({type:d,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(ne.jsx)(B.a,{fontSize:"small"}),"Delete"]}):Object(ne.jsx)(ne.Fragment,{})]})]})},re=Object(H.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ce=function(e){var t=e.setCurrentId,n=re(),a=Object(i.c)((function(e){return e.posts}));return console.log(a),a.length?Object(ne.jsx)(k.a,{className:n.container,container:!0,alighitems:"strech",spacing:3,children:a.map((function(e){return Object(ne.jsx)(k.a,{item:!0,xs:12,sm:6,children:Object(ne.jsx)(ae,{post:e,setCurrentId:t},e.id)},e.id)}))}):Object(ne.jsx)(w.a,{})},ie=n(96),se=n(188),oe=n(88),le=n.n(oe),ue=Object(H.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),de=function(e){var t=e.currentId,n=e.setCurrentId,r=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),c=Object(C.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),u=JSON.parse(localStorage.getItem("profile")),d=ue(),j=Object(i.b)();Object(a.useEffect)((function(){l&&o(l)}),[l,u]);var p=function(){n(null),o({title:"",message:"",tags:"",selectedFile:""})},b=function(){var e=Object(R.a)(q.a.mark((function e(n){var a,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!t){e.next=6;break}return e.next=4,j(te(t,Object(m.a)(Object(m.a)({},s),{},{name:null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a.name})));case 4:e.next=8;break;case 6:return e.next=8,j(ee(Object(m.a)(Object(m.a)({},s),{},{name:null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r.name})));case 8:p();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===u||void 0===u?void 0:u.result.name)?Object(ne.jsx)(ie.a,{className:d.paper,children:Object(ne.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:b,children:[Object(ne.jsxs)(I.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(ne.jsx)(se.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object(m.a)(Object(m.a)({},s),{},{title:e.target.value}))}}),Object(ne.jsx)(se.a,{name:"Message",variant:"outlined",label:"Message",fullWidth:!0,value:s.message,onChange:function(e){return o(Object(m.a)(Object(m.a)({},s),{},{message:e.target.value}))}}),Object(ne.jsx)(se.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object(m.a)(Object(m.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(ne.jsx)("div",{className:d.fileInput,children:Object(ne.jsx)(le.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;o(Object(m.a)(Object(m.a)({},s),{},{selectedFile:t}))}})}),Object(ne.jsx)(F.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(ne.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",onClick:p,fullWidth:!0,children:"Clear"})]})}):Object(ne.jsx)(ie.a,{className:d.paper,children:Object(ne.jsx)(I.a,{variant:"h6",align:"center",children:"Please sign in"})})},je=n(189),pe=function(){var e=Object(a.useState)(null),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(i.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(R.a)(q.a.mark((function e(t){var n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.get("/posts");case 3:n=e.sent,a=n.data,t({type:p,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),console.info("getting postssss")}),[n,c]),Object(ne.jsx)(je.a,{in:!0,children:Object(ne.jsx)(O.a,{children:Object(ne.jsxs)(k.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,children:[Object(ne.jsx)(k.a,{item:!0,xs:12,sm:7,children:Object(ne.jsx)(ce,{setCurrentId:r})}),Object(ne.jsx)(k.a,{item:!0,xs:12,sm:4,children:Object(ne.jsx)(de,{currentId:n,setCurrentId:r})})]})})})},be=n(182),he=n(183),fe=n(190),me=n(181),ge=Object(H.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(me.a[500]),backgroundColor:me.a[500]}}})),xe=n(89),Oe=function(){var e=ge(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(C.a)(t,2),r=n[0],c=n[1],s=Object(i.b)(),o=Object(y.f)(),l=Object(y.g)(),u=function(){s({type:"LOGOUT"}),o.push("/"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(xe.a)(e).exp<(new Date).getTime&&u());c(JSON.parse(localStorage.getItem("profile")))}),[l]),Object(ne.jsxs)(be.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(ne.jsxs)("div",{className:e.brandContainer,children:[Object(ne.jsx)(I.a,{component:v.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(ne.jsx)("svg",{className:e.svgicon,viewBox:"0 0 20 20",children:Object(ne.jsx)("path",{d:"M10,6.536c-2.263,0-4.099,1.836-4.099,4.098S7.737,14.732,10,14.732s4.099-1.836,4.099-4.098S12.263,6.536,10,6.536M10,13.871c-1.784,0-3.235-1.453-3.235-3.237S8.216,7.399,10,7.399c1.784,0,3.235,1.452,3.235,3.235S11.784,13.871,10,13.871M17.118,5.672l-3.237,0.014L12.52,3.697c-0.082-0.105-0.209-0.168-0.343-0.168H7.824c-0.134,0-0.261,0.062-0.343,0.168L6.12,5.686H2.882c-0.951,0-1.726,0.748-1.726,1.699v7.362c0,0.951,0.774,1.725,1.726,1.725h14.236c0.951,0,1.726-0.773,1.726-1.725V7.195C18.844,6.244,18.069,5.672,17.118,5.672 M17.98,14.746c0,0.477-0.386,0.861-0.862,0.861H2.882c-0.477,0-0.863-0.385-0.863-0.861V7.384c0-0.477,0.386-0.85,0.863-0.85l3.451,0.014c0.134,0,0.261-0.062,0.343-0.168l1.361-1.989h3.926l1.361,1.989c0.082,0.105,0.209,0.168,0.343,0.168l3.451-0.014c0.477,0,0.862,0.184,0.862,0.661V14.746z"})})]}),Object(ne.jsx)(he.a,{className:e.toolbar,children:r?Object(ne.jsxs)("div",{className:e.profile,children:[Object(ne.jsx)(fe.a,{className:e.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(ne.jsx)(I.a,{className:e.userName,variant:"h6",children:r.result.name}),Object(ne.jsx)(F.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:"Log Out"})]}):Object(ne.jsx)(F.a,{component:v.b,to:"/auth",variant:"contained",color:"primary",children:"Sign in"})})]})},ve=n(60),ye=function(){return Object(ne.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(ne.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Ce=n(91),we=n(92),ke=n.n(we),Se=Object(H.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ne=n(184),Ie=n(185),Fe=n(186),Te=n(187),Le=function(e){var t=e.name,n=e.type,a=e.handleChange,r=e.handleShowPassword,c=e.autoFocus,i=e.label,s=e.half;return Object(ne.jsx)(k.a,{item:!0,xs:12,sm:s?6:12,children:Object(ne.jsx)(se.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:i,autoFocus:c,type:n,InputProps:"password"===t?{endAdornment:Object(ne.jsx)(Ne.a,{position:"end",children:Object(ne.jsx)(Ie.a,{onClick:r,children:"password"===n?Object(ne.jsx)(Fe.a,{}):Object(ne.jsx)(Te.a,{})})})}:null})})},De={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Ae=function(){var e=Se(),t=Object(a.useState)(!1),n=Object(C.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),o=Object(C.a)(s,2),l=o[0],u=o[1],d=Object(a.useState)(De),j=Object(C.a)(d,2),p=j[0],h=j[1],f=Object(i.b)(),g=Object(y.f)(),x=function(e){h(Object(m.a)(Object(m.a)({},p),{},Object(ve.a)({},e.target.name,e.target.value)))};return Object(ne.jsx)(O.a,{component:"main",maxWidth:"xs",children:Object(ne.jsxs)(ie.a,{className:e.paper,elevation:3,children:[Object(ne.jsx)(fe.a,{className:e.avatar,children:Object(ne.jsx)(ke.a,{})}),Object(ne.jsx)(I.a,{variant:"h5",children:l?"Sign Up":"Sign In"}),Object(ne.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),f(l?function(e,t){return function(){var n=Object(R.a)(q.a.mark((function n(a){var r,c;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,$(e);case 3:r=n.sent,c=r.data,a({type:b,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(p,g):function(e,t){return function(){var n=Object(R.a)(q.a.mark((function n(a){var r,c;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,X(e);case 3:r=n.sent,c=r.data,console.log(c),a({type:b,data:c}),t.push("/"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(p,g))},children:[Object(ne.jsxs)(k.a,{container:!0,spacing:2,children:[l&&Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(Le,{name:"firstName",label:"First Name",handleChange:x,autoFocus:!0,half:!0}),Object(ne.jsx)(Le,{name:"lastName",label:"Last Name",handleChange:x,half:!0})]}),Object(ne.jsx)(Le,{name:"email",label:"Email Address",handleChange:x,type:"email"}),Object(ne.jsx)(Le,{name:"password",label:"Password",handleChange:x,type:r?"text":"password",handleShowPassword:function(){return c((function(e){return!e}))}}),l&&Object(ne.jsx)(Le,{name:"confirmPassword",label:"Repeat Password",handleChange:x,type:"password"})]}),Object(ne.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:l?"Sign Up":"Sign In"})," ",Object(ne.jsx)(Ce.GoogleLogin,{clientId:"941460740499-r1nv4330qha1b1rqerkf0bnh52uqs91h.apps.googleusercontent.com",render:function(t){return Object(ne.jsx)(F.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(ne.jsx)(ye,{}),variant:"contained",children:"Google Sign In"})},buttonText:"Login",onSuccess:function(e){var t=null===e||void 0===e?void 0:e.profileObj,n=null===e||void 0===e?void 0:e.tokenId;try{f({type:"AUTH",data:{result:t,token:n}}),g.push("/")}catch(a){console.log(a)}},onFailure:function(e){console.log(e),console.log("Failure")},cookiePolicy:"single_host_origin"}),Object(ne.jsx)(k.a,{container:!0,justifyContent:"flex-end",children:Object(ne.jsx)(k.a,{item:!0,children:Object(ne.jsx)(F.a,{onClick:function(){u((function(e){return!e})),c(!1)},children:l?"Already have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})},Ee=function(){return Object(ne.jsx)(v.a,{children:Object(ne.jsxs)(O.a,{maxwidth:"lg",children:[Object(ne.jsx)(Oe,{}),Object(ne.jsxs)(y.c,{children:[Object(ne.jsx)(y.a,{path:"/",exact:!0,component:pe}),Object(ne.jsx)(y.a,{path:"/auth",exact:!0,component:Ae})]})]})})},Me=(n(136),Object(s.c)(Object(s.a)(o.a))),ze=Object(s.d)(x,Me);c.a.render(Object(ne.jsx)(i.a,{store:ze,children:Object(ne.jsx)(Ee,{})}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.92ca1f6e.chunk.js.map