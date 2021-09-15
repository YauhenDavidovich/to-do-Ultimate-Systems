(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),i=n.n(c),s=(n(109),n(110),n(175)),o=n(176),l=n(177),d=n(178),j=n(95),u=n.n(j),b=n(11),h=n(166),O=n(34),m=n(170),x=n(171),p=n(172),g=n(179),f=n(174),w=n(17),v=n(33),y=n(20),S=n(42),k=n.n(S),C=k.a.create({baseURL:"https://recruitment.ultimate.systems"}),I=function(e){return C.post("/auth/local/",e)},B={username:"",id:0,jwt:"",isLogin:!1},T=n(2),D=function(){var e=Object(w.b)(),t=Object(v.c)({initialValues:{identifier:"",password:""},validate:function(e){var t={};return e.identifier||(t.identifier="Required"),e.password||(t.password="Required"),t},onSubmit:function(n){var r;e((r=n,function(e){I(r).then((function(t){0===t.data.code&&alert(t.data.message),e({type:"login/SET-IS-LOGIN",username:t.data.user.username,id:t.data.user.id,value:!0}),localStorage.setItem("token",t.data.jwt)})).catch((function(e){alert(e)}))})),t.resetForm()}});return Object(T.jsx)(h.a,{container:!0,justify:"center",children:Object(T.jsx)(h.a,{item:!0,xs:4,children:Object(T.jsx)("form",{onSubmit:t.handleSubmit,children:Object(T.jsxs)(m.a,{children:[Object(T.jsx)(x.a,{children:Object(T.jsx)("p",{children:"Create an new account:"})}),Object(T.jsxs)(p.a,{children:[Object(T.jsx)(g.a,{label:"Username or email",margin:"normal",name:"identifier",onChange:t.handleChange,value:t.values.identifier,onBlur:t.handleBlur}),t.touched.identifier&&t.errors.identifier&&Object(T.jsx)("div",{style:{color:"red"},children:t.errors.identifier}),Object(T.jsx)(g.a,{type:"password",label:"Password",margin:"normal",name:"password",onChange:t.handleChange,value:t.values.password,onBlur:t.handleBlur}),t.touched.password&&t.errors.password&&Object(T.jsx)("div",{style:{color:"red"},children:t.errors.password}),Object(T.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},L=function(){return Object(w.c)((function(e){return e.login.isLogin}))?Object(T.jsx)(b.a,{to:"/"}):Object(T.jsx)(h.a,{container:!0,justify:"center",children:Object(T.jsxs)(h.a,{item:!0,xs:4,children:[Object(T.jsx)(D,{}),Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{children:"or"}),Object(T.jsx)(O.b,{to:"/registration",children:"create an account"})]})]})})},R=k.a.create({baseURL:"https://recruitment.ultimate.systems"}),E=function(e){return R.post("/auth/local/register",e)},F={isRegistered:!1},P=function(){var e=Object(w.b)(),t=Object(v.c)({initialValues:{username:"",email:"",password:"",repeatPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<3&&(t.password="Must be 3 characters or more"):t.password="Required",e.password!==e.repeatPassword&&(t.repeatPassword="The password does not match"),t},onSubmit:function(n){var r;t.resetForm(),e((r={username:n.username,email:n.email,password:n.password},function(e){E(r).then((function(t){!0===t.data.confirmed?e({type:"register/SET-IS-REGISTERED",value:!0}):alert(t.data)})).catch((function(e){alert(e)}))}))}});return Object(T.jsx)(h.a,{container:!0,justify:"center",children:Object(T.jsx)(h.a,{item:!0,xs:4,children:Object(T.jsx)("form",{onSubmit:t.handleSubmit,children:Object(T.jsxs)(m.a,{children:[Object(T.jsx)(x.a,{children:Object(T.jsx)("p",{children:"Create an new account:"})}),Object(T.jsxs)(p.a,{children:[Object(T.jsx)(g.a,{label:"Username",margin:"normal",name:"username",onChange:t.handleChange,value:t.values.username,onBlur:t.handleBlur}),t.touched.email&&t.errors.email&&Object(T.jsx)("div",{style:{color:"red"},children:t.errors.email}),Object(T.jsx)(g.a,{label:"Email",margin:"normal",name:"email",onChange:t.handleChange,value:t.values.email,onBlur:t.handleBlur}),t.touched.email&&t.errors.email&&Object(T.jsx)("div",{style:{color:"red"},children:t.errors.email}),Object(T.jsx)(g.a,{type:"password",label:"Password",margin:"normal",name:"password",onChange:t.handleChange,value:t.values.password,onBlur:t.handleBlur}),t.touched.password&&t.errors.password&&Object(T.jsx)("div",{style:{color:"red"},children:t.errors.password}),Object(T.jsx)(g.a,{type:"password",label:"Repeat password",margin:"normal",name:"repeatPassword",onChange:t.handleChange,value:t.values.repeatPassword,onBlur:t.handleBlur}),t.touched.repeatPassword&&t.errors.repeatPassword&&Object(T.jsx)("div",{style:{color:"red"},children:t.errors.repeatPassword}),Object(T.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",children:"Create"})]})]})})})})},A=function(){var e=Object(b.g)();return Object(T.jsx)(h.a,{container:!0,justify:"center",children:Object(T.jsxs)(h.a,{item:!0,xs:4,children:[Object(T.jsx)("button",{onClick:function(){return e.goBack()},children:"Back"}),Object(T.jsx)(P,{})]})})},U=n(62),q=n(60),G=k.a.create({baseURL:"https://recruitment.ultimate.systems",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),N=function(){return G.get("/to-do-lists")},z=function(e){return G.post("to-do-lists",e)},V=[],Z=n(173),J=function(e){var t=e.enableBackground,n=e.backgroundStyle,r=e.backgroundOnClick,a=void 0===r?function(){}:r,c=e.width,i=e.height,s=e.modalStyle,o=e.modalOnClick,l=void 0===o?function(){}:o,d=e.show,j=e.children,u="calc(50vh - ".concat(i/2,"px)"),b="calc(50vw - ".concat(c/2,"px)");return d?Object(T.jsxs)(T.Fragment,{children:[t&&Object(T.jsx)("div",{style:Object(y.a)({position:"fixed",top:"0px",left:"0px",width:"100vw",height:"100vh",background:"black",opacity:.35,zIndex:20},n),onClick:a}),Object(T.jsx)("div",{style:Object(y.a)({position:"fixed",top:u,left:b,width:c,height:i,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",padding:20,background:"mintcream",zIndex:21},s),onClick:l,children:j})]}):null},M=n(93),_=n.n(M),$=function(e){var t=Object(w.b)(),n=(_()(),Object(v.c)({initialValues:{name:"",task:[{id:"",name:"",isDone:!1}]},validate:function(e){var t={};return e.name||(t.name="name is required"),t},onSubmit:function(r){var a;e.setShow(!1),t((a=r,function(e){z(a).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data})}))})),console.log(r),n.resetForm()}}));return Object(T.jsx)(J,{height:800,width:880,backgroundOnClick:function(){return e.setShow(!1)},enableBackground:!0,show:e.show,children:Object(T.jsx)("form",{onSubmit:n.handleSubmit,children:Object(T.jsx)(v.b,{value:n,children:Object(T.jsx)(m.a,{children:Object(T.jsx)(p.a,{children:Object(T.jsxs)(h.a,{container:!0,direction:"column",spacing:1,alignItems:"center",children:[Object(T.jsxs)(h.a,{item:!0,children:[Object(T.jsx)(g.a,{label:"List name",margin:"normal",name:"name",onChange:n.handleChange,value:n.values.name,onBlur:n.handleBlur}),n.touched.name&&n.errors.name?Object(T.jsx)("div",{style:{color:"blue"},children:n.errors.name}):null]}),Object(T.jsx)(h.a,{item:!0,children:n.values.task.map((function(e,t){return Object(T.jsxs)(h.a,{item:!0,children:[Object(T.jsx)("label",{children:Object(T.jsx)(v.a,{type:"checkbox",name:"task[".concat(t,"].isDone")})}),Object(T.jsx)(Z.a,Object(y.a)({minRows:1,placeholder:"Task name"},n.getFieldProps("task[".concat(t,"].name"))))]},t)}))}),Object(T.jsxs)(h.a,{container:!0,direction:"row",justifyContent:"space-between",children:[Object(T.jsx)(h.a,{item:!0,children:Object(T.jsx)(f.a,{variant:"contained",color:"secondary",children:"Cancel"})}),Object(T.jsx)(h.a,{item:!0,children:Object(T.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){n.setFieldValue("task",[].concat(Object(q.a)(n.values.task),[{id:"",name:"",isDone:!1}]))},children:"Add"})})]}),Object(T.jsxs)(h.a,{container:!0,direction:"row",justifyContent:"space-between",children:[Object(T.jsx)(h.a,{item:!0,children:Object(T.jsx)(f.a,{variant:"contained",color:"secondary",children:"Cancel"})}),Object(T.jsx)(h.a,{item:!0,children:Object(T.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",children:"Save"})})]})]})})})})})})},H=n(94),K=n.n(H),Q=function(e){var t=Object(w.c)((function(t){return t.todolists.filter((function(t){return t.id===e.todolistID}))}));return console.log(t),Object(T.jsxs)(J,{height:800,width:880,backgroundOnClick:function(){return e.setShow(!1)},enableBackground:!0,show:e.show,children:[Object(T.jsx)(T.Fragment,{children:t[0].name}),Object(T.jsx)(T.Fragment,{children:t[0].name})]})},W=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.todolists})),n=Object(r.useState)(!1),a=Object(U.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(!1),o=Object(U.a)(s,2),l=o[0],d=o[1],j=Object(r.useState)("todoId"),u=Object(U.a)(j,2),O=u[0],m=u[1],x=Object(w.c)((function(e){return e.login.isLogin}));Object(r.useEffect)((function(){e((function(e){N().then((function(t){e({type:"SET-TODOLISTS",todolists:t.data})}))}))}),[e]);var p=Object(r.useCallback)((function(){i(!0)}),[]),g=Object(r.useCallback)((function(e){m(e),d(!0)}),[]);return x?(console.log(t),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("input",{type:"text"}),Object(T.jsx)("button",{children:"Sort by"}),Object(T.jsx)(h.a,{container:!0,spacing:1,direction:"column",children:t.map((function(e){return Object(T.jsxs)(h.a,{container:!0,style:{backgroundColor:"grey",borderRadius:8,color:"white",margin:4,padding:18,cursor:"pointer"},direction:"row",justifyContent:"space-between",onClick:function(){return g(e.id)},children:[Object(T.jsx)(h.a,{item:!0,children:e.name}),Object(T.jsxs)(h.a,{item:!0,children:["Created at: ",e.published_at]}),Object(T.jsxs)(h.a,{item:!0,children:["Completed: ",e.task.filter((function(e){return!0===e.isDone})).length," Uncompleted: ",e.task.filter((function(e){return!1===e.isDone})).length," All: ",e.task.length+1]})]},e.id)}))}),Object(T.jsx)(K.a,{style:{position:"sticky",bottom:10,cursor:"pointer",borderRadius:50,fontSize:40,right:10,backgroundColor:"white",color:"orange",margin:4,padding:18},onClick:function(){return p()},children:"Add"}),c&&Object(T.jsx)($,{show:c,setShow:i}),l&&Object(T.jsx)(Q,{show:l,setShow:d,todolistID:O})]})):Object(T.jsx)(b.a,{to:"/login"})};var X=function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(s.a,{position:"static",children:Object(T.jsx)(o.a,{children:Object(T.jsx)(l.a,{edge:"end",color:"inherit","aria-label":"logout",children:Object(T.jsx)(u.a,{onClick:function(){}})})})}),Object(T.jsx)(d.a,{fixed:!0,children:Object(T.jsxs)(b.d,{children:[Object(T.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(T.jsx)(W,{})}}),Object(T.jsx)(b.b,{path:"/login",render:function(){return Object(T.jsx)(L,{})}}),Object(T.jsx)(b.b,{path:"/registration",render:function(){return Object(T.jsx)(A,{})}}),Object(T.jsx)(b.b,{path:"/404",render:function(){return Object(T.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(T.jsx)(b.a,{from:"*",to:"/404"})]})})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},ee=n(63),te=n(96),ne=Object(ee.b)({registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register/SET-IS-REGISTERED":return Object(y.a)(Object(y.a)({},e),{},{isRegistered:t.value});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGIN":return Object(y.a)(Object(y.a)({},e),{},{username:t.username,id:t.id,isLogin:t.value});default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-TODOLISTS":return t.todolists.map((function(e){return Object(y.a)({},e)}));case"ADD-TODOLIST":return[Object(y.a)({},t.todolist)].concat(Object(q.a)(e));default:return e}}}),re=Object(ee.c)(ne,Object(ee.a)(te.a));window.store=re,i.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(O.a,{children:Object(T.jsx)(w.a,{store:re,children:Object(T.jsx)(X,{})})})}),document.getElementById("root")),Y()}},[[137,1,2]]]);
//# sourceMappingURL=main.1b4088c7.chunk.js.map