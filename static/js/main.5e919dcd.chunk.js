(this["webpackJsonpsberapp-frontend"]=this["webpackJsonpsberapp-frontend"]||[]).push([[0],{246:function(e,t,n){},261:function(e,t,n){},263:function(e,t,n){},526:function(e,t,n){},960:function(e,t,n){},961:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),o=n.n(c),s=(n(261),n(11)),u=n.n(s),l=n(13),i=n(15),m=n(62),p=(n(263),n(264),n(58)),f=n(30),d=n(12),b=n(7),E=n(4),h=n(61),v=n(14),x=n(256),g=(n(508),n(254)),y=n(253),k=n(20),w=n.n(k),j="https://lit-escarpment-35334.herokuapp.com/";function O(){return(O=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(j,"User/"),{UserId:t,SberId:0,Name:"",Age:0,Gender:"",Active:0});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(j,"User/"),{params:{SberId:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(j,"ProverkaUsersByUserId/"),{params:{user_id:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(j,"AllGroupsExercises/"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(j,"ExircicesfromGroup/"),{params:{group_id:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(l.a)(u.a.mark((function e(t,n,r){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.a.post("".concat(j,"ProgressAchieve/"),{UserId:t,Date:n,Completed:!0}),c=a.data,e.abrupt("return",c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a.get("".concat(j,"ProgressByUser/"),{params:{user_id:t}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a.get("".concat(j,"AchiviesFomUser/"),{params:{user_id:t}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D,U,G={API_URL:j,getAllGroupsExercises:function(){return B.apply(this,arguments)},getExircicesfromGroup:function(e){return T.apply(this,arguments)},getUsersBySberId:function(e){return C.apply(this,arguments)},getProgressByUser:function(e){return _.apply(this,arguments)},createProgressAchieve:function(e,t,n){return S.apply(this,arguments)},createUser:function(e){return O.apply(this,arguments)},getProverkaUsersByUserId:function(e){return I.apply(this,arguments)},getAchiviesFomUser:function(e){return A.apply(this,arguments)}},P=(n(526),Object(v.g)((function(e){var t=e.userId;e.digit;Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getProgressByUser(t);case 2:n=e.sent,r=[],console.log("Data",n),n.data.forEach((function(e){r.push(Date.parse(e.date))})),s(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t)}),[]);var n=Object(r.useState)([]),c=Object(i.a)(n,2),o=c[0],s=c[1],m={selected:function(e){return o.some((function(t){return Object(y.a)(t,e)}))}};return a.a.createElement(x.a,{modifiers:m,locale:g.ru})}))),F=n(17),W=n(19),M=n(18),z=Object(v.g)((function(e){var t=e.setGroupId,n=e.ToChooseCateg,r=e.achieves;return a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",marginBottom:"2rem"}},a.a.createElement(b.Card,{style:{width:"20rem"}},a.a.createElement(b.CardContent,{compact:!0},a.a.createElement(b.Cell,{content:a.a.createElement(b.TextBoxBiggerTitle,null,"\u041d\u0430\u0447\u043d\u0438 \u0434\u0435\u043d\u044c \u0441"),right:a.a.createElement("span",{style:{marginTop:5}})}),a.a.createElement(W.b,{to:"/fastworkout",style:{textDecoration:"none"}},a.a.createElement(b.Cell,{onClick:function(){t(2)},left:a.a.createElement(b.CellIcon,null,a.a.createElement(M.IconAccessibility,null)),content:a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxTitle,null,"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430"),a.a.createElement(b.TextBoxSubTitle,null,"10 \u043c\u0438\u043d")),right:a.a.createElement(b.CellDisclosure,null)})),a.a.createElement(W.b,{to:"/choose",style:{textDecoration:"none"}},a.a.createElement(b.Cell,{left:a.a.createElement(b.CellIcon,null,a.a.createElement(M.IconApps,null)),onClick:function(){return n()},content:a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxTitle,null,"\u041c\u0435\u043d\u044e \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a"),a.a.createElement(b.TextBoxSubTitle,null,"\u041d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u0443\u0441")),right:a.a.createElement(b.CellDisclosure,null)})),a.a.createElement(W.b,{to:"/calendar",style:{textDecoration:"none"}},a.a.createElement(b.Cell,{left:a.a.createElement(b.CellIcon,null,a.a.createElement(M.IconCalendar,null)),content:a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxTitle,null,"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"),a.a.createElement(b.TextBoxSubTitle,null,"\u0412\u0430\u0448 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441")),right:a.a.createElement(b.CellDisclosure,null)})))),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement("br",null)," ",a.a.createElement("br",null),a.a.createElement(F.Headline3,null,"\u0412\u0430\u0448\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),a.a.createElement(b.MarkedList,null,a.a.createElement(b.MarkedItem,{text:"\u0434\u043d\u0435\u0439 \u0441 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430\u043c\u0438 \u043f\u043e\u0434\u0440\u044f\u0434",style:{color:d.primary}},a.a.createElement(b.Badge,{text:r.dict,size:"l",view:"secondary"})),a.a.createElement(b.MarkedItem,{text:"\u0432\u0441\u0435\u0433\u043e \u0434\u043d\u0435\u0439 \u0441 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430\u043c\u0438",style:{color:d.primary}},a.a.createElement(b.Badge,{text:r.count_days_train,size:"l",view:"secondary"})),a.a.createElement(b.MarkedItem,{text:"\u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a",style:{color:d.primary}},a.a.createElement(b.Badge,{text:r.count_train,size:"l",view:"secondary"}))),a.a.createElement("br",null)))})),H=(n(950),n(246),n(255)),L=n.n(H),R=(n(960),function(e){var t=Math.floor(e/60),n=e%60;return"".concat(t,":").concat(K(n))}),N={content:{color:"".concat(d.text),backgroundColor:"".concat(d.background),backgroundImage:"".concat(d.gradient),top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"1em",padding:"1em"}},J=function(e){var t,n=e.setIter,r=e.timeCount,c=e.iter,o=e.userId,s=e.workoutLength,m=e.setAchieves,p=(e.workoutExercises,e.sayExircise,Object(v.f)()),f=a.a.useState(!1),d=Object(i.a)(f,2),E=d[0],h=d[1];var x=a.a.useState(r.timeCount),g=Object(i.a)(x,2),y=g[0],k=g[1],w=a.a.useState(30),j=Object(i.a)(w,2),O=j[0],C=j[1];return a.a.useEffect((function(){console.log("\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u044e\u0437"),k(r.timeCount)}),[r]),a.a.useEffect((function(){var e;return console.log(r),console.log("Timer useeffect"),y>0?e=setTimeout((function(){return k((function(e){return e-1}))}),1e3):0===y&&h(!0),function(){e&&clearTimeout(e)}}),[y]),a.a.useEffect((function(){var e;if(O>0)e=setTimeout((function(){return C((function(e){return e-1}))}),1e3);else if(0===y){if(h(!1),c+1==s)(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.createProgressAchieve(o,new Date,!0);case 2:return e.next=4,G.getAchiviesFomUser(o);case 4:t=e.sent,m(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();n(c+1),k(r)}return function(){e&&clearTimeout(e)}}),[O]),a.a.createElement("div",null,0!==y&&a.a.createElement(F.Headline2,null,"\u0412\u0440\u0435\u043c\u044f: ",R(y)),a.a.createElement("div",null,a.a.createElement(L.a,{isOpen:E,onAfterOpen:function(){t.style.color="",C(30)},style:N},a.a.createElement("h2",{ref:function(e){return t=e},style:{textAlign:"center"}},"\u041e\u0442\u0434\u044b\u0445"),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(F.Headline2,null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437"),a.a.createElement("br",null),0!==O&&a.a.createElement(F.Headline2,null,R(O))),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.a.createElement(b.Button,{onClick:function(){h(!1),C(30),p.push("/")}},a.a.createElement(M.IconHouse,null)),a.a.createElement(b.Button,{onClick:function(){h(!1),n(c+1),k(r)}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))},K=function(e){return 1===String(e).length?"0".concat(e):"".concat(e)},$=new Date,q={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC"},Q=Object(v.g)((function(e){var t=e.groupId,n=e.workoutExercises,c=e.setWorkoutExercises,o=e.description,s=e.name,m=e.userId,p=e.workOutStarted,f=e.setWorkOutStartet,E=e.setAchieves,h=e.iterChanged,x=e.assistant,g=e.iter,y=e.setIter,k=e.setGroupId,w=Object(v.f)();Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getExircicesfromGroup(t);case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log("Workout useeffect")}),[]),Object(r.useEffect)((function(){void 0!=n[g]&&j(n[g].discription)}),[g]),Object(r.useEffect)((function(){g+1==n.length&&function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.createProgressAchieve(m,new Date,!0);case 2:return e.next=4,G.getAchiviesFomUser(m);case 4:t=e.sent,E(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();1==h?y(g+1):0==h&&g>0&&y(g-1)}),[h]);var j=function(e){var t;null===(t=x.current)||void 0===t||t.sendData({action:{action_id:"say",parameters:{description:e,number:g}}})},O=Object(r.useState)(),C=Object(i.a)(O,2);C[0],C[1];return p?a.a.createElement("div",null,a.a.createElement(b.Card,{style:{marginBottom:"3rem"}},a.a.createElement(b.CardBody,null,a.a.createElement(b.CardContent,null,n?a.a.createElement("div",null,g==n.length?a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},a.a.createElement(b.TextBoxBigTitle,null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430"),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(b.CardParagraph1,null,$.toLocaleString("ru",q)," ")),n?a.a.createElement(b.MarkedList,null,n.map((function(e,t){e._id;var n=e.name;return a.a.createElement(b.MarkedItem,{text:n,style:{color:d.primary}},a.a.createElement(M.IconDone,{size:"xs",color:d.accent}))}))):a.a.createElement(b.Spinner,null)),a.a.createElement("br",null),a.a.createElement(b.Button,{onClick:function(){f(!1),y(0),k(1),w.push("/")}},a.a.createElement(M.IconHouse,null))):a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.a.createElement(b.TextBoxBigTitle,null,n[g].name),a.a.createElement("div",{style:{marginTop:"0.5rem"}},a.a.createElement(J,{setIter:y,timeCount:{timeCount:n[g].time},iter:g,userId:m,workoutLength:n.length,setAchieves:E,workoutExercises:n,sayExircise:j}))),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",flexDirection:"row"}},a.a.createElement("div",{class:"wrapper exmp2"},a.a.createElement("img",{src:n[g].photo})),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(b.CardParagraph1,{lines:5},n[g].discription),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement(b.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,disabled:0==g,style:{marginTop:"1em",marginRight:"1em"},tabIndex:-1,onClick:function(){n[g-1],console.log(n),y(g-1)}},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435"),a.a.createElement(b.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,style:{marginTop:"1em"},tabIndex:-1,onClick:function(){g+1==n.length&&function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.createProgressAchieve(m,new Date,!0);case 2:return e.next=4,G.getAchiviesFomUser(m);case 4:t=e.sent,E(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();y(g+1)}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435")))))):a.a.createElement("div",null,a.a.createElement(b.Spinner,null)))))):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(F.Headline2,null,s),n?a.a.createElement(b.MarkedList,null,n.map((function(e,t){e._id;var n=e.name;return a.a.createElement(b.MarkedItem,{text:n,style:{color:d.primary}},a.a.createElement(M.IconDone,{size:"xs",color:d.accent}))}))):a.a.createElement(b.Spinner,null),a.a.createElement("br",null)),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(b.Card,{style:{width:"20rem"}},a.a.createElement(b.CardBody,null,a.a.createElement(b.CardContent,null,a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxBigTitle,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),a.a.createElement(b.CardParagraph1,{style:{marginTop:"0.75rem"},lines:4},o),a.a.createElement(b.TextBoxSubTitle,null,"\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0445")),a.a.createElement("br",null),a.a.createElement(b.Button,{onClick:function(){void 0!=n[0].discription&&j(n[0].discription),f(!0)}},"\u041d\u0430\u0447\u0430\u0442\u044c")))))))})),V=n(60),X=n(59),Y=Object(v.g)((function(e){var t=e.setGroupId,n=e.setDescription,c=e.setName,o=(e.setWorkouts,e.workouts);e.SendDataToAssistant;return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAllGroupsExercises();case 2:t=e.sent,o.current=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.a.createElement(b.Container,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement(F.Headline2,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043c \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438")),a.a.createElement("br",null),a.a.createElement(V.Row,null,o.current.data?o.current.data.map((function(e,r){var s=e.name,u=e.short_discription,l=e.discription;return a.a.createElement(a.a.Fragment,null,a.a.createElement(X.Col,{type:"calc",size:1},a.a.createElement(b.Card,{style:{width:"11rem",marginBottom:"1rem"},tabIndex:-1,scaleOnFocus:!0},a.a.createElement(b.CardBody,null,a.a.createElement(b.CardMedia,{src:"./images/320_320_0.jpg",placeholder:"./images/320_320_1.jpg"}),a.a.createElement(b.CardContent,null,a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxBigTitle,null,s),a.a.createElement(b.TextBoxSubTitle,null,u)),a.a.createElement(W.b,{style:{color:"#FFF",textDecoration:"none"},to:"/fastworkout"},a.a.createElement(b.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,style:{marginTop:"1em"},tabIndex:-1,onClick:function(){console.log(o.data),t(r+1),n(l),c(s)}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c")))))))})):a.a.createElement(b.Spinner,null)))})),Z=E.default.div(D||(D=Object(m.a)(["\n  padding: 30px;\n  ","\n"])),F.body1),ee=Object(E.createGlobalStyle)(h.sberBox),te=Object(E.createGlobalStyle)(f.darkEva),ne=Object(E.createGlobalStyle)(f.darkSber),re=Object(E.createGlobalStyle)(f.darkJoy),ae=Object(E.createGlobalStyle)(U||(U=Object(m.a)(["\n  html {\n    color: ",";\n    background-color: ",";\n    background-image: ",";\n    min-height: 100vh;\n  }\n"])),d.text,d.background,d.gradient);var ce=Object(v.g)((function(){var e=Object(r.useState)("sber"),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useRef)(),s=Object(r.useRef)(),m={notes:[]},f=Object(r.useState)([]),d=Object(i.a)(f,2),b=d[0],E=d[1],h=Object(r.useState)(0),x=Object(i.a)(h,2),g=x[0],y=x[1],k=Object(r.useState)([]),w=Object(i.a)(k,2),j=w[0],O=w[1],C=Object(r.useState)(!1),I=Object(i.a)(C,2),B=I[0],T=I[1],S=Object(r.useState)(-1),_=Object(i.a)(S,2),A=_[0],D=_[1],U=Object(r.useState)(-1),F=Object(i.a)(U,2),W=F[0],M=F[1],H=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getProverkaUsersByUserId(t).then((function(e){return M(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="Calendar"===e.t0?3:"fastworkout"===e.t0?5:"choose_training"===e.t0?7:"fast_training"===e.t0?9:11;break;case 3:case 5:return R.push("/calendar"),e.abrupt("break",12);case 7:return R.push("/choose"),e.abrupt("break",12);case 9:return R.push("/fastworkout"),e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=Object(v.f)(),N=function(e){e=e.charAt(0).toUpperCase()+e.slice(1).trim(),console.log("WK",s.current),void 0!=s.current.data&&s.current.data.map((function(t,n){t._id;var r=t.name,a=t.discription;console.log("name",r),console.log("train_name",e),e==r.trim()&&(console.log("i",n),console.log("name",r),le(n+1),he(r),fe(a),R.push("/fastworkout"))}))},J=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="next"===e.t0?3:"previous"===e.t0?5:7;break;case 3:return D(1),e.abrupt("break",7);case 5:return D(0),e.abrupt("break",7);case 7:D(-1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("dispatchAssistantAction",t),!t){e.next=25;break}e.t0=t.type,e.next="character"===e.t0?5:"show_calendar"===e.t0?7:"to_fast_training"===e.t0?9:"to_choose_training"===e.t0?12:"choose_train"===e.t0?14:"start_train"===e.t0?16:"next_exircise"===e.t0?18:"previous_exircise"===e.t0?20:"to_main"===e.t0?22:24;break;case 5:return c(t.character.id),e.abrupt("break",25);case 7:return L("Calendar"),e.abrupt("break",25);case 9:return le(0),L("fast_training"),e.abrupt("break",25);case 12:return L("choose_training"),e.abrupt("break",25);case 14:return N(t.data),e.abrupt("break",25);case 16:return J(),e.abrupt("break",25);case 18:return K("next"),e.abrupt("break",25);case 20:return K("previous"),e.abrupt("break",25);case 22:return R.push("/"),e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=Object(r.useState)([]),V=Object(i.a)(q,2),X=V[0],ce=V[1];Object(r.useEffect)((function(){var e;o.current=(e=function(){return function(){console.log("getStateForAssistant: this.state:",m);var e={item_selector:{items:m.notes.map((function(e,t){return{number:t+1,id:e.id,title:e.title}}))}};return console.log("getStateForAssistant: state:",m),e}()},Object(p.a)({getState:e})),o.current.on("start",(function(e){console.log("assistant.on(start)",e)})),o.current.on("data",(function(e){"smart_app_data"==e.type&&(console.log("userId",e.user_id),void 0!=e.sub?(O(e.sub),H(e.sub),G.createUser(j)):void 0!=e.user_id&&(O(e.user_id),H(e.user_id),G.createUser(j)),function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.getAchiviesFomUser(e.user_id);case 2:n=t.sent,ce(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()());console.log("assistant.on(data)",e);var t=e.action;$(t)}),[]),null!=o.current?console.log("Non null, send data"):console.log("Null")}),[]),Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAllGroupsExercises();case 2:t=e.sent,s.current=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]);var oe=Object(r.useState)(2),se=Object(i.a)(oe,2),ue=se[0],le=se[1],ie=Object(r.useState)("\u041e\u0431\u043b\u0435\u0433\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434 \u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438. \u041f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0430\u0437\u043c\u044f\u0442\u044c \u0442\u0435\u043b\u043e \u0431\u0435\u0437 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c."),me=Object(i.a)(ie,2),pe=me[0],fe=me[1],de=Object(r.useState)("\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430"),be=Object(i.a)(de,2),Ee=be[0],he=be[1],ve=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.current.sendData({action:{action_id:t,parameters:{}}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.current.sendData({action:{action_id:"chooseCategory",parameters:{}}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(Z,null,a.a.createElement(ae,null),a.a.createElement(ee,null),function(){switch(n){case"sber":return a.a.createElement(ne,null);case"eva":return a.a.createElement(te,null);case"joy":return a.a.createElement(re,null);default:return}}(),a.a.createElement(v.c,null,a.a.createElement(v.a,{path:"/choose"},a.a.createElement(Y,{setGroupId:le,setDescription:fe,setName:he,workouts:s,SendDataToAssistant:ve})),a.a.createElement(v.a,{path:"/fastworkout"},a.a.createElement(Q,{groupId:ue,description:pe,workoutExercises:b,setWorkoutExercises:E,name:Ee,userId:j,workOutStarted:B,setWorkOutStartet:T,iterChanged:A,setAchieves:ce,assistant:o,iter:g,setIter:y,setGroupId:le})),a.a.createElement(v.a,{path:"/calendar",exact:!0},a.a.createElement(P,{userId:j,digit:W})),a.a.createElement(v.a,{path:"/"},a.a.createElement(z,{setGroupId:le,ToChooseCateg:xe,achieves:X}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W.a,null,a.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[961,1,2]]]);
//# sourceMappingURL=main.5e919dcd.chunk.js.map