(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),c=n.n(r),s=n(13),i=n(62),o=n(140),l=n(86),u=n(8),d="UPDATE",p="DELETE",j="CREATE",b="FETCH_ALL",m="FETCH_POST",h="FETCH_BY_SEARCH",g="START_LOADING",x="END_LOADING",O="AUTH",f="LOGOUT",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0});case x:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1});case b:return Object(u.a)(Object(u.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case m:return Object(u.a)(Object(u.a)({},e),{},{post:t.payload});case h:return Object(u.a)(Object(u.a)({},e),{},{posts:t.payload});case j:return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[t.payload])});case d:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case p:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts})}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return localStorage.setItem("profile",JSON.stringify(Object(u.a)({},null===t||void 0===t?void 0:t.data))),Object(u.a)(Object(u.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case f:return localStorage.clear(),Object(u.a)(Object(u.a)({},e),{},{authData:null});default:return e}},C=Object(i.b)({posts:v,auth:y}),w=n(238),k=n(26),N=n(45),S=n(30),I=n(236),L=n(237),T=n(231),A=n(144),D=n(232),P=n(210),F=n(233),B=n(234),_=n(235),E=n(132),R=n.n(E),W=n(98),z=n.n(W),U=n(134),H=n.n(U),J=n(133),M=n.n(J),G=n(79),q=n.n(G),Q=n(229),V=Object(Q.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),Y=n(14),K=n.n(Y),Z=n(24),X=n(130),$=n.n(X).a.create({baseURL:"https://memory-for-me.herokuapp.com/"});$.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var ee=function(e){return $.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},te=function(e){return $.get("/posts/".concat(e))},ne=function(e){return $.get("/posts?page=".concat(e))},ae=function(e,t){return $.patch("/posts/".concat(e),t)},re=function(e){return $.delete("/posts/".concat(e))},ce=function(e){return $.patch("/posts/".concat(e,"/likePost"))},se=function(e){return $.post("/users/signin",e)},ie=function(e){return $.post("/users/signup",e)},oe=function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n){var a,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:g}),t.next=4,ee(e);case 4:a=t.sent,r=a.data.data,n({type:h,payload:r}),n({type:x}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("search error"),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},le=function(e,t){return function(){var n=Object(Z.a)(K.a.mark((function n(a){var r,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:g}),n.next=4,s=e,$.post("/posts",s);case 4:r=n.sent,c=r.data,a({type:j,payload:c}),console.log("done"),t.push("/posts/".concat(c._id)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}var s}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},ue=function(e,t){return function(){var n=Object(Z.a)(K.a.mark((function n(a){var r,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ae(e,t);case 3:r=n.sent,c=r.data,a({type:d,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},de=n(2),pe=function(e){var t,n,a=e.post,r=e.setCurrentId,c=V(),i=Object(s.b)(),o=JSON.parse(localStorage.getItem("profile")),l=Object(N.g)(),u=function(){return a.likes.length>0?a.likes.find((function(e){var t,n;return e===((null===o||void 0===o||null===(t=o.result)||void 0===t?void 0:t.googleId)||(null===o||void 0===o||null===(n=o.result)||void 0===n?void 0:n._id))}))?Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(R.a,{fontSize:"small"}),"\xa0",a.likes.length>2?"You and ".concat(a.likes.length-1," others"):"".concat(a.likes.length," like").concat(a.likes.length>1?"s":"")]}):Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(z.a,{fontSize:"small"}),"\xa0",a.likes.length," ",1===a.likes.length?"Like":"Likes"]}):Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(z.a,{fontSize:"small"}),"\xa0Like"]})};return Object(de.jsxs)(T.a,{className:c.card,raised:!0,elevation:6,children:[Object(de.jsxs)(A.a,{component:"div",name:"test",className:c.cardAction,onClick:function(e){l.push("/posts/".concat(a._id))},children:[Object(de.jsx)(D.a,{className:c.media,image:a.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:a.title}),Object(de.jsxs)("div",{className:c.overlay,children:[Object(de.jsx)(P.a,{variant:"h6",children:a.name}),Object(de.jsx)(P.a,{variant:"body2",children:q()(a.createdAt).fromNow()})]}),Object(de.jsx)("div",{className:c.overlay2,children:Object(de.jsx)(F.a,{style:{color:"white"},size:"small",onClick:function(){return r(a._id)},children:Object(de.jsx)(M.a,{fontSize:"medium"})})}),Object(de.jsx)("div",{className:c.details,children:Object(de.jsx)(P.a,{variant:"body2",color:"textSecondary",children:a.tags.map((function(e){return"#".concat(e)}))})}),Object(de.jsx)(P.a,{className:c.title,variant:"h5",gutterBottom:!0,children:a.title}),Object(de.jsx)(B.a,{children:Object(de.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:a.message})})]}),Object(de.jsxs)(_.a,{className:c.CardActions,children:[Object(de.jsx)(F.a,{size:"small",color:"primary",disabled:!(null===o||void 0===o?void 0:o.result),onClick:function(){return i((e=a._id,function(){var t=Object(Z.a)(K.a.mark((function t(n){var a,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ce(e);case 3:a=t.sent,r=a.data,n({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(de.jsx)(u,{})}),(null===o||void 0===o||null===(t=o.result)||void 0===t?void 0:t.googleId)===(null===a||void 0===a?void 0:a.creator)||(null===o||void 0===o||null===(n=o.result)||void 0===n?void 0:n._id)===(null===a||void 0===a?void 0:a.creator)?Object(de.jsxs)(F.a,{size:"small",color:"primary",onClick:function(){var e;i((e=a._id,function(){var t=Object(Z.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,re(e);case 3:n({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}())),l.push("/")},children:[Object(de.jsx)(H.a,{fontSize:"small"}),"Delete"]}):Object(de.jsx)(de.Fragment,{})]})]})},je=Object(Q.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),be=function(e){var t=e.setCurrentId,n=je(),a=Object(s.c)((function(e){return e.posts})),r=a.posts,c=a.isLoading;return r.length||c?c?Object(de.jsx)(I.a,{}):Object(de.jsx)(L.a,{className:n.container,container:!0,alighitems:"strech",spacing:3,children:r.map((function(e){return Object(de.jsx)(L.a,{item:!0,xs:12,sm:6,lg:3,children:Object(de.jsx)(pe,{post:e,setCurrentId:t},e.id)},e.id)}))}):"No Posts"},me=n(142),he=n(247),ge=n(135),xe=n.n(ge),Oe=Object(Q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),fe=function(e){var t=e.currentId,n=e.setCurrentId,r=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),c=Object(S.a)(r,2),i=c[0],o=c[1],l=Object(s.c)((function(e){return t?e.posts.posts.find((function(e){return e._id===t})):null})),d=JSON.parse(localStorage.getItem("profile")),p=Oe(),j=Object(N.g)(),b=Object(s.b)();Object(a.useEffect)((function(){l&&o(l)}),[l,d]);var m=function(){n(null),o({title:"",message:"",tags:"",selectedFile:""})},h=function(){var e=Object(Z.a)(K.a.mark((function e(n){var a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!t){e.next=6;break}return e.next=4,b(ue(t,Object(u.a)(Object(u.a)({},i),{},{name:null===d||void 0===d||null===(a=d.result)||void 0===a?void 0:a.name})));case 4:e.next=8;break;case 6:return e.next=8,b(le(Object(u.a)(Object(u.a)({},i),{},{name:null===d||void 0===d||null===(r=d.result)||void 0===r?void 0:r.name}),j));case 8:m();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===d||void 0===d?void 0:d.result.name)?Object(de.jsx)(me.a,{className:p.paper,elevation:6,children:Object(de.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:h,children:[Object(de.jsxs)(P.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(de.jsx)(he.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:i.title,onChange:function(e){return o(Object(u.a)(Object(u.a)({},i),{},{title:e.target.value}))}}),Object(de.jsx)(he.a,{name:"Message",variant:"outlined",label:"Message",fullWidth:!0,value:i.message,onChange:function(e){return o(Object(u.a)(Object(u.a)({},i),{},{message:e.target.value}))}}),Object(de.jsx)(he.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:i.tags,onChange:function(e){return o(Object(u.a)(Object(u.a)({},i),{},{tags:e.target.value.split(",")}))}}),Object(de.jsx)("div",{className:p.fileInput,children:Object(de.jsx)(xe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;o(Object(u.a)(Object(u.a)({},i),{},{selectedFile:t}))}})}),Object(de.jsx)(F.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(de.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",onClick:m,fullWidth:!0,children:"Clear"})]})}):Object(de.jsx)(me.a,{className:p.paper,children:Object(de.jsx)(P.a,{variant:"h6",align:"center",children:"Please sign in"})})},ve=n(251),ye=n(248),Ce=Object(Q.a)((function(){return{ul:{justifyContent:"space-around"}}})),we=function(e){var t=e.page,n=Object(s.c)((function(e){return e.posts})).numberOfPages,r=Ce(),c=Object(s.b)();return Object(s.c)((function(){})),Object(a.useEffect)((function(){t&&c(function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n){var a,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:g}),t.next=4,ne(e);case 4:a=t.sent,r=a.data,n({type:b,payload:r}),n({type:x}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[t]),Object(de.jsx)(ve.a,{className:r.ul,count:n,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return Object(de.jsx)(ye.a,Object(u.a)(Object(u.a)({},e),{},{component:k.b,to:"/posts?page=".concat(e.page)}))}})},ke=n(249),Ne=n(239),Se=n(136),Ie=n.n(Se),Le=n(230),Te=n(22),Ae=Object(Q.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(Te.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var De=function(){var e=Object(a.useState)(null),t=Object(S.a)(e,2),n=t[0],r=t[1],c=new URLSearchParams(Object(N.h)().search),i=Object(N.g)(),o=c.get("page")||1,u=(c.get("searchQuery"),Object(s.b)()),d=Ae(),p=Object(a.useState)(""),j=Object(S.a)(p,2),b=j[0],m=j[1],h=Object(a.useState)([]),g=Object(S.a)(h,2),x=g[0],O=g[1],f=function(){b.trim()||x?(u(oe({search:b,tags:x.join(",")})),i.push("/posts/search?searchQuery=".concat(b||"none","&tags=").concat(x.join(",")))):i.push("/")};return Object(de.jsx)(ke.a,{in:!0,children:Object(de.jsx)(w.a,{maxWidth:"xl",children:Object(de.jsxs)(L.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,className:Le.a.gridContainer,children:[Object(de.jsx)(L.a,{item:!0,xs:12,sm:6,md:9,children:Object(de.jsx)(be,{setCurrentId:r},1)}),Object(de.jsxs)(L.a,{item:!0,xs:12,sm:6,md:3,children:[Object(de.jsxs)(Ne.a,{className:d.appBarSearch,position:"static",color:"inherit",children:[Object(de.jsx)(he.a,{name:"search",variant:"outlined",label:"Search Memories",onKeyPress:function(e){13==e.keyCode&&f()},fullWidth:!0,value:b,onChange:function(e){m(e.target.value)}}),Object(de.jsx)(Ie.a,{style:{margin:"10px 0"},value:x,onAdd:function(e){return function(e){var t=[].concat(Object(l.a)(x),[e]);O(t)}(e)},onDelete:function(e){return t=e,O(x.filter((function(e){return e!=t})));var t},label:"Search Tags",variant:"outlined"}),Object(de.jsx)(F.a,{onClick:f,className:d.search,color:"primary",variant:"contained",children:"Search"})]}),Object(de.jsx)(fe,{currentId:n,setCurrentId:r}),Object(de.jsx)(me.a,{elevation:6,children:Object(de.jsx)(we,{className:d.pagination,page:o})})]})]})})})},Pe=n(241),Fe=n(250),Be=n(240),_e=Object(Q.a)((function(e){return{appBar:Object(Te.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(Te.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(Te.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(Be.a[500]),backgroundColor:Be.a[500]}}})),Ee=n(137),Re=n.p+"static/media/memoriesLogo.3515da33.png",We=n.p+"static/media/memoriesText.74e162ca.png",ze=function(){var e=_e(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(S.a)(t,2),r=n[0],c=n[1],i=Object(s.b)(),o=Object(N.g)(),l=Object(N.h)(),u=function(){i({type:"LOGOUT"}),o.push("/"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(Ee.a)(e).exp<(new Date).getTime&&u());c(JSON.parse(localStorage.getItem("profile")))}),[l]),Object(de.jsxs)(Ne.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(de.jsxs)(k.b,{to:"/",className:e.brandContainer,children:[Object(de.jsx)("img",{src:We,alt:"icon",height:"45px"}),Object(de.jsx)("img",{className:e.image,src:Re,alt:"icon",height:"40px"})]}),Object(de.jsx)(Pe.a,{className:e.toolbar,children:r?Object(de.jsxs)("div",{className:e.profile,children:[Object(de.jsx)(Fe.a,{className:e.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(de.jsx)(P.a,{className:e.userName,variant:"h6",children:r.result.name}),Object(de.jsx)(F.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:"Log Out"})]}):Object(de.jsx)(F.a,{component:k.b,to:"/auth",variant:"contained",color:"primary",children:"Sign in"})})]})},Ue=function(){return Object(de.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(de.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},He=n(138),Je=n(139),Me=n.n(Je),Ge=Object(Q.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),qe=n(242),Qe=n(243),Ve=n(244),Ye=n(245),Ke=function(e){var t=e.name,n=e.type,a=e.handleChange,r=e.handleShowPassword,c=e.autoFocus,s=e.label,i=e.half;return Object(de.jsx)(L.a,{item:!0,xs:12,sm:i?6:12,children:Object(de.jsx)(he.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:s,autoFocus:c,type:n,InputProps:"password"===t?{endAdornment:Object(de.jsx)(qe.a,{position:"end",children:Object(de.jsx)(Qe.a,{onClick:r,children:"password"===n?Object(de.jsx)(Ve.a,{}):Object(de.jsx)(Ye.a,{})})})}:null})})},Ze={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Xe=function(){var e=Ge(),t=Object(a.useState)(!1),n=Object(S.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(S.a)(i,2),l=o[0],d=o[1],p=Object(a.useState)(Ze),j=Object(S.a)(p,2),b=j[0],m=j[1],h=Object(s.b)(),g=Object(N.g)(),x=function(e){m(Object(u.a)(Object(u.a)({},b),{},Object(Te.a)({},e.target.name,e.target.value)))};return Object(de.jsx)(w.a,{component:"main",maxWidth:"xs",children:Object(de.jsxs)(me.a,{className:e.paper,elevation:3,children:[Object(de.jsx)(Fe.a,{className:e.avatar,children:Object(de.jsx)(Me.a,{})}),Object(de.jsx)(P.a,{variant:"h5",children:l?"Sign Up":"Sign In"}),Object(de.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),h(l?function(e,t){return function(){var n=Object(Z.a)(K.a.mark((function n(a){var r,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ie(e);case 3:r=n.sent,c=r.data,a({type:O,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(b,g):function(e,t){return function(){var n=Object(Z.a)(K.a.mark((function n(a){var r,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,se(e);case 3:r=n.sent,c=r.data,console.log(c),a({type:O,data:c}),t.push("/"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(b,g))},children:[Object(de.jsxs)(L.a,{container:!0,spacing:2,children:[l&&Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Ke,{name:"firstName",label:"First Name",handleChange:x,autoFocus:!0,half:!0}),Object(de.jsx)(Ke,{name:"lastName",label:"Last Name",handleChange:x,half:!0})]}),Object(de.jsx)(Ke,{name:"email",label:"Email Address",handleChange:x,type:"email"}),Object(de.jsx)(Ke,{name:"password",label:"Password",handleChange:x,type:r?"text":"password",handleShowPassword:function(){return c((function(e){return!e}))}}),l&&Object(de.jsx)(Ke,{name:"confirmPassword",label:"Repeat Password",handleChange:x,type:"password"})]}),Object(de.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:l?"Sign Up":"Sign In"})," ",Object(de.jsx)(He.GoogleLogin,{clientId:"941460740499-r1nv4330qha1b1rqerkf0bnh52uqs91h.apps.googleusercontent.com",render:function(t){return Object(de.jsx)(F.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(de.jsx)(Ue,{}),variant:"contained",children:"Google Sign In"})},buttonText:"Login",onSuccess:function(e){var t=null===e||void 0===e?void 0:e.profileObj,n=null===e||void 0===e?void 0:e.tokenId;try{h({type:"AUTH",data:{result:t,token:n}}),g.push("/")}catch(a){console.log(a)}},onFailure:function(e){console.log(e),console.log("Failure")},cookiePolicy:"single_host_origin"}),Object(de.jsx)(L.a,{container:!0,justifyContent:"flex-end",children:Object(de.jsx)(L.a,{item:!0,children:Object(de.jsx)(F.a,{onClick:function(){d((function(e){return!e})),c(!1)},children:l?"Already have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})},$e=n(246),et=Object(Q.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(Te.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:Object(Te.a)({marginLeft:"20px",flex:1},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(Te.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"}}})),tt=function(){var e=Object(s.c)((function(e){return e.posts})),t=e.post,n=e.posts,r=e.isLoading,c=Object(s.b)(),i=Object(N.g)(),o=et(),l=Object(N.i)().id;if(Object(a.useEffect)((function(){c(function(e){return function(){var t=Object(Z.a)(K.a.mark((function t(n){var a,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:g}),t.next=4,te(e);case 4:a=t.sent,r=a.data,n({type:m,payload:r}),n({type:x}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(l))}),[l]),Object(a.useEffect)((function(){t&&c(oe({search:"none",tags:null===t||void 0===t?void 0:t.tags.join(",")}))}),[t]),!t)return null;if(r)return Object(de.jsxs)(me.a,{elevation:6,className:o.loadingPaper,children:[Object(de.jsx)(I.a,{size:"7rem"})," "]});var u=n.filter((function(e){return e._id!=t._id}));return Object(de.jsxs)(me.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6,children:[Object(de.jsxs)("div",{className:o.card,children:[Object(de.jsxs)("div",{className:o.section,children:[Object(de.jsx)(P.a,{variant:"h3",component:"h2",children:t.title}),Object(de.jsx)(P.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))}),Object(de.jsx)(P.a,{gutterBottom:!0,variant:"body1",component:"p",children:t.message}),Object(de.jsxs)(P.a,{variant:"h6",children:["Created by: ",t.name]}),Object(de.jsx)(P.a,{variant:"body1",children:q()(t.createdAt).fromNow()}),Object(de.jsx)($e.a,{style:{margin:"20px 0"}}),Object(de.jsx)(P.a,{variant:"body1",children:Object(de.jsx)("strong",{children:"Realtime Chat - coming soon!"})}),Object(de.jsx)($e.a,{style:{margin:"20px 0"}}),Object(de.jsx)(P.a,{variant:"body1",children:Object(de.jsx)("strong",{children:"Comments - coming soon!"})}),Object(de.jsx)($e.a,{style:{margin:"20px 0"}})]}),Object(de.jsx)("div",{className:o.imageSection,children:Object(de.jsx)("img",{className:o.media,src:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:t.title})})]}),u.length&&Object(de.jsxs)("div",{className:o.section,children:[Object(de.jsx)(P.a,{gutterBottom:!0,variant:"h5",children:"You might also like:"}),Object(de.jsx)($e.a,{}),Object(de.jsx)("div",{className:o.recommendedPosts,children:u.map((function(e){var t=e.title,n=e.message,a=e.name,r=e.likes,c=e.selectedFile,s=e._id;return Object(de.jsxs)("div",{style:{margin:"20px",cursor:"pointer"},onClick:function(){return function(e){i.push("/posts/".concat(e))}(s)},children:[Object(de.jsx)(P.a,{gutterBottom:!0,variant:"h6",children:t}),Object(de.jsx)(P.a,{gutterBottom:!0,variant:"subtitle2",children:a}),Object(de.jsx)(P.a,{gutterBottom:!0,variant:"subtitle2",children:n}),Object(de.jsxs)(P.a,{gutterBottom:!0,variant:"subtitle1",children:["Likes: ",r.length]}),Object(de.jsx)("img",{src:c,width:"200px"})]},s)}))})]})]})},nt=function(){var e=JSON.parse(localStorage.getItem("profile"));return Object(de.jsx)(k.a,{children:Object(de.jsxs)(w.a,{maxwidth:"xl",children:[Object(de.jsx)(ze,{}),Object(de.jsxs)(N.d,{children:[Object(de.jsx)(N.b,{path:"/",exact:!0,component:function(){return Object(de.jsx)(N.a,{to:"/posts"})}}),Object(de.jsx)(N.b,{path:"/posts",exact:!0,component:De}),Object(de.jsx)(N.b,{path:"/posts/search",exact:!0,component:De}),Object(de.jsx)(N.b,{path:"/posts/:id",exact:!0,component:tt}),Object(de.jsx)(N.b,{path:"/auth",exact:!0,component:function(){return e?Object(de.jsx)(N.a,{to:"/posts/"}):Object(de.jsx)(Xe,{})}})]})]})})},at=(n(204),Object(i.c)(Object(i.a)(o.a))),rt=Object(i.d)(C,at);c.a.render(Object(de.jsx)(s.a,{store:rt,children:Object(de.jsx)(nt,{})}),document.getElementById("root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.82ec7ce8.chunk.js.map