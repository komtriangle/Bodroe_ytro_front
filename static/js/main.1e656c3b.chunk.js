(this["webpackJsonpsberapp-frontend"]=this["webpackJsonpsberapp-frontend"]||[]).push([[0],{246:function(e,t,n){},261:function(e,t,n){},263:function(e,t,n){},526:function(e,t,n){},960:function(e,t,n){},961:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),o=n.n(c),s=(n(261),n(11)),l=n.n(s),i=n(13),u=n(15),m=n(62),p=(n(263),n(264),n(58)),d=n(30),f=n(12),b=n(7),E=n(4),h=n(61),g=n(14),v=n(256),x=(n(508),n(254)),y=n(253),k=n(20),j=n.n(k),O="https://lit-escarpment-35334.herokuapp.com/";function w(){return(w=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("".concat(O,"User/"),{UserId:t,SberId:0,Name:"",Age:0,Gender:"",Active:0});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(O,"User/"),{params:{SberId:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(O,"ProverkaUsersByUserId/"),{params:{user_id:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(O,"AllGroupsExercises/"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(O,"ExircicesfromGroup/"),{params:{group_id:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(i.a)(l.a.mark((function e(t,n,r){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.a.post("".concat(O,"ProgressAchieve/"),{UserId:t,Date:n,Completed:!0}),c=a.data,e.abrupt("return",c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.a.get("".concat(O,"ProgressByUser/"),{params:{user_id:t}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.a.get("".concat(O,"AchiviesFomUser/"),{params:{user_id:t}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A,U,G={API_URL:O,getAllGroupsExercises:function(){return B.apply(this,arguments)},getExircicesfromGroup:function(e){return T.apply(this,arguments)},getUsersBySberId:function(e){return C.apply(this,arguments)},getProgressByUser:function(e){return _.apply(this,arguments)},createProgressAchieve:function(e,t,n){return S.apply(this,arguments)},createUser:function(e){return w.apply(this,arguments)},getProverkaUsersByUserId:function(e){return I.apply(this,arguments)},getAchiviesFomUser:function(e){return D.apply(this,arguments)}},P=(n(526),Object(g.g)((function(e){var t=e.userId;e.digit;Object(r.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getProgressByUser(t);case 2:n=e.sent,r=[],console.log("Data",n),n.data.forEach((function(e){r.push(Date.parse(e.date))})),s(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t)}),[]);var n=Object(r.useState)([]),c=Object(u.a)(n,2),o=c[0],s=c[1],m={selected:function(e){return o.some((function(t){return Object(y.a)(t,e)}))}};return a.a.createElement(v.a,{modifiers:m,locale:x.ru})}))),F=n(17),W=n(19),M=n(18),z=Object(g.g)((function(e){var t=e.setGroupId,n=e.ToChooseCateg,r=e.achieves,c=e.setName,o=e.setDescription;return a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",marginBottom:"2rem"}},a.a.createElement(b.Card,{style:{width:"20rem"}},a.a.createElement(b.CardContent,{compact:!0},a.a.createElement(b.Cell,{content:a.a.createElement(b.TextBoxBiggerTitle,null,"\u041d\u0430\u0447\u043d\u0438 \u0434\u0435\u043d\u044c \u0441"),right:a.a.createElement("span",{style:{marginTop:5}})}),a.a.createElement(W.b,{to:"/fastworkout",style:{textDecoration:"none"}},a.a.createElement(b.Cell,{onClick:function(){t(2),o("\u041e\u0431\u043b\u0435\u0433\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434 \u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438. \u041f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0430\u0437\u043c\u044f\u0442\u044c \u0442\u0435\u043b\u043e \u0431\u0435\u0437 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c."),c("\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430")},left:a.a.createElement(b.CellIcon,null,a.a.createElement(M.IconAccessibility,null)),content:a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxTitle,null,"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430"),a.a.createElement(b.TextBoxSubTitle,null,"10 \u043c\u0438\u043d")),right:a.a.createElement(b.CellDisclosure,null)})),a.a.createElement(W.b,{to:"/choose",style:{textDecoration:"none"}},a.a.createElement(b.Cell,{left:a.a.createElement(b.CellIcon,null,a.a.createElement(M.IconApps,null)),onClick:function(){return n()},content:a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxTitle,null,"\u041c\u0435\u043d\u044e \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a"),a.a.createElement(b.TextBoxSubTitle,null,"\u041d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u0443\u0441")),right:a.a.createElement(b.CellDisclosure,null)})),a.a.createElement(W.b,{to:"/calendar",style:{textDecoration:"none"}},a.a.createElement(b.Cell,{left:a.a.createElement(b.CellIcon,null,a.a.createElement(M.IconCalendar,null)),content:a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxTitle,null,"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"),a.a.createElement(b.TextBoxSubTitle,null,"\u0412\u0430\u0448 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441")),right:a.a.createElement(b.CellDisclosure,null)})))),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement("br",null)," ",a.a.createElement("br",null),a.a.createElement(F.Headline3,null,"\u0412\u0430\u0448\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),a.a.createElement(b.MarkedList,null,a.a.createElement(b.MarkedItem,{text:"\u0434\u043d\u0435\u0439 \u0441 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430\u043c\u0438 \u043f\u043e\u0434\u0440\u044f\u0434",style:{color:f.primary}},a.a.createElement(b.Badge,{text:r.dict,size:"l",view:"secondary"})),a.a.createElement(b.MarkedItem,{text:"\u0432\u0441\u0435\u0433\u043e \u0434\u043d\u0435\u0439 \u0441 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430\u043c\u0438",style:{color:f.primary}},a.a.createElement(b.Badge,{text:r.count_days_train,size:"l",view:"secondary"})),a.a.createElement(b.MarkedItem,{text:"\u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a",style:{color:f.primary}},a.a.createElement(b.Badge,{text:r.count_train,size:"l",view:"secondary"}))),a.a.createElement("br",null)))})),H=(n(950),n(246),n(255)),J=n.n(H),L=(n(960),function(e){var t=Math.floor(e/60),n=e%60;return"".concat(t,":").concat(K(n))}),N={content:{color:"".concat(f.text),backgroundColor:"".concat(f.background),backgroundImage:"".concat(f.gradient),top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"1em",padding:"1em"}},R=function(e){var t,n=e.setIter,r=e.timeCount,c=e.iter,o=(e.userId,e.workoutLength,e.setAchieves,e.workoutExercises,e.sayExircise,Object(g.f)()),s=a.a.useState(!1),l=Object(u.a)(s,2),i=l[0],m=l[1];var p=a.a.useState(r.timeCount),d=Object(u.a)(p,2),f=d[0],E=d[1],h=a.a.useState(30),v=Object(u.a)(h,2),x=v[0],y=v[1];return a.a.useEffect((function(){console.log("\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u044e\u0437"),E(r.timeCount)}),[r]),a.a.useEffect((function(){var e;return console.log(r),console.log("Timer useeffect"),f>0?e=setTimeout((function(){return E((function(e){return e-1}))}),1e3):0===f&&m(!0),function(){e&&clearTimeout(e)}}),[f]),a.a.useEffect((function(){var e;return x>0?e=setTimeout((function(){return y((function(e){return e-1}))}),1e3):0===f&&(m(!1),n(c+1),E(r)),function(){e&&clearTimeout(e)}}),[x]),a.a.createElement("div",null,0!==f&&a.a.createElement(F.Headline2,null,"\u0412\u0440\u0435\u043c\u044f: ",L(f)),a.a.createElement("div",null,a.a.createElement(J.a,{isOpen:i,onAfterOpen:function(){t.style.color="",y(30)},style:N},a.a.createElement("h2",{ref:function(e){return t=e},style:{textAlign:"center"}},"\u041e\u0442\u0434\u044b\u0445"),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(F.Headline2,null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437"),a.a.createElement("br",null),0!==x&&a.a.createElement(F.Headline2,null,L(x))),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.a.createElement(b.Button,{onClick:function(){m(!1),y(30),o.push("/")}},a.a.createElement(M.IconHouse,null)),a.a.createElement(b.Button,{onClick:function(){m(!1),n(c+1),E(r)}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))},K=function(e){return 1===String(e).length?"0".concat(e):"".concat(e)},$=new Date,q={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC"},Q=Object(g.g)((function(e){var t=e.groupId,n=e.workoutExercises,c=e.setWorkoutExercises,o=e.description,s=e.name,m=e.userId,p=e.workOutStarted,d=e.setWorkOutStartet,E=(e.achieves,e.setAchieves),h=e.iterChanged,v=e.assistant,x=e.iter,y=e.setIter,k=e.setGroupId,j=e.assistantType,O=e.setIterChanged,w=Object(g.f)();Object(r.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getExircicesfromGroup(t);case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log("Workout useeffect")}),[]),Object(r.useEffect)((function(){void 0!=n[x]&&C(n[x].discription,n[x].discriptionJoy)}),[x]),Object(r.useEffect)((function(){var e;x==n.length&&0!=n.length&&(console.log("iter",x," len",n.length),function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.createProgressAchieve(m,new Date,!0);case 2:return e.next=4,G.getAchiviesFomUser(m);case 4:t=e.sent,E(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),null===(e=v.current)||void 0===e||e.sendData({action:{action_id:"train_finish",parameters:{}}}));1==h?y(x+1):0==h&&x>0&&y(x-1)}),[h]);var C=function(e,t){var n;null===(n=v.current)||void 0===n||n.sendData({action:{action_id:"say",parameters:{off_description:e,description:t,number:x}}})},I=Object(r.useState)(),B=Object(u.a)(I,2);B[0],B[1];return p?a.a.createElement("div",null,a.a.createElement(b.Card,{style:{marginBottom:"3rem"}},a.a.createElement(b.CardBody,null,a.a.createElement(b.CardContent,null,n?a.a.createElement("div",null,x==n.length?a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},a.a.createElement(b.TextBoxBigTitle,null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430"),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(b.CardParagraph1,null,$.toLocaleString("ru",q)," ")),n?a.a.createElement(b.MarkedList,null,n.map((function(e,t){e._id;var n=e.name;return a.a.createElement(b.MarkedItem,{text:n,style:{color:f.primary}},a.a.createElement(M.IconDone,{size:"xs",color:f.accent}))}))):a.a.createElement(b.Spinner,null)),a.a.createElement("br",null),a.a.createElement(b.Button,{onClick:function(){d(!1),y(-1),k(2),w.push("/")}},a.a.createElement(M.IconHouse,null))):a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.a.createElement(b.TextBoxBigTitle,null,n[x].name),a.a.createElement("div",{style:{marginTop:"0.5rem"}},a.a.createElement(R,{setIter:y,timeCount:{timeCount:n[x].time},iter:x,userId:m,workoutLength:n.length,setAchieves:E,workoutExercises:n,sayExircise:C}))),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",flexDirection:"row"}},a.a.createElement("div",{class:"wrapper exmp2"},a.a.createElement("img",{src:n[x].photo})),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(b.CardParagraph1,{lines:5},"joy"==j?n[x].discriptionJoy:n[x].discription),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement(b.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,disabled:0==x,style:{marginTop:"1em",marginRight:"1em"},tabIndex:-1,onClick:function(){n[x-1],console.log(n),y(x-1)}},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435"),a.a.createElement(b.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,style:{marginTop:"1em"},tabIndex:-1,onClick:function(){O(1)}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435")))))):a.a.createElement("div",null,a.a.createElement(b.Spinner,null)))))):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(F.Headline2,null,s),n?a.a.createElement(b.MarkedList,null,n.map((function(e,t){e._id;var n=e.name;return a.a.createElement(b.MarkedItem,{text:n,style:{color:f.primary}},a.a.createElement(M.IconDone,{size:"xs",color:f.accent}))}))):a.a.createElement(b.Spinner,null),a.a.createElement("br",null)),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(b.Card,{style:{width:"20rem"}},a.a.createElement(b.CardBody,null,a.a.createElement(b.CardContent,null,a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxBigTitle,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),a.a.createElement(b.CardParagraph1,{style:{marginTop:"0.75rem"},lines:4},o),a.a.createElement(b.TextBoxSubTitle,null,"\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0445")),a.a.createElement("br",null),a.a.createElement(b.Button,{onClick:function(){void 0!=n[0].discriptionJoy&&void 0!=n[0].discription&&(C(n[0].discription,n[0].discriptionJoy),d(!0),y(x+1))}},"\u041d\u0430\u0447\u0430\u0442\u044c")))))))})),V=n(60),X=n(59),Y=Object(g.g)((function(e){var t=e.setGroupId,n=e.setDescription,c=e.setName,o=(e.setWorkouts,e.workouts);e.SendDataToAssistant;return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAllGroupsExercises();case 2:t=e.sent,o.current=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.a.createElement(b.Container,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement(F.Headline2,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043c \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438")),a.a.createElement("br",null),a.a.createElement(V.Row,null,o.current.data?o.current.data.map((function(e,r){var s=e.name,l=e.short_discription,i=e.discription;return a.a.createElement(a.a.Fragment,null,a.a.createElement(X.Col,{type:"calc",size:1},a.a.createElement(b.Card,{style:{width:"11rem",marginBottom:"1rem"},tabIndex:-1,scaleOnFocus:!0},a.a.createElement(b.CardBody,null,a.a.createElement(b.CardMedia,{src:"./images/320_320_0.jpg",placeholder:"./images/320_320_1.jpg"}),a.a.createElement(b.CardContent,null,a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxBigTitle,null,s),a.a.createElement(b.TextBoxSubTitle,null,l)),a.a.createElement(W.b,{style:{color:"#FFF",textDecoration:"none"},to:"/fastworkout"},a.a.createElement(b.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,style:{marginTop:"1em"},tabIndex:-1,onClick:function(){console.log(o.data),t(r+1),n(i),c(s)}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c")))))))})):a.a.createElement(b.Spinner,null)))})),Z=E.default.div(A||(A=Object(m.a)(["\n  padding: 30px;\n  ","\n"])),F.body1),ee=Object(E.createGlobalStyle)(h.sberBox),te=Object(E.createGlobalStyle)(d.darkEva),ne=Object(E.createGlobalStyle)(d.darkSber),re=Object(E.createGlobalStyle)(d.darkJoy),ae=Object(E.createGlobalStyle)(U||(U=Object(m.a)(["\n  html {\n    color: ",";\n    background-color: ",";\n    background-image: ",";\n    min-height: 100vh;\n  }\n"])),f.text,f.background,f.gradient);var ce=Object(g.g)((function(){var e=Object(r.useState)("sber"),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(r.useRef)(),s=Object(r.useRef)(),m={notes:[]},d=Object(r.useState)([]),f=Object(u.a)(d,2),b=f[0],E=f[1],h=Object(r.useState)(-1),v=Object(u.a)(h,2),x=v[0],y=v[1],k=Object(r.useState)([]),j=Object(u.a)(k,2),O=j[0],w=j[1],C=Object(r.useState)(!1),I=Object(u.a)(C,2),B=I[0],T=I[1],S=Object(r.useState)(-1),_=Object(u.a)(S,2),D=_[0],A=_[1],U=Object(r.useState)(-1),F=Object(u.a)(U,2),W=F[0],M=F[1],H=Object(r.useState)(""),J=Object(u.a)(H,2),L=J[0],N=J[1],R=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getProverkaUsersByUserId(t).then((function(e){return M(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="Calendar"===e.t0?3:"fastworkout"===e.t0?5:"choose_training"===e.t0?7:"fast_training"===e.t0?9:11;break;case 3:case 5:return $.push("/calendar"),e.abrupt("break",12);case 7:return $.push("/choose"),e.abrupt("break",12);case 9:return $.push("/fastworkout"),e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=Object(g.f)(),q=function(e){e=e.charAt(0).toUpperCase()+e.slice(1).trim(),console.log("WK",s.current),void 0!=s.current.data&&s.current.data.map((function(t,n){t._id;var r=t.name,a=t.discription;console.log("name",r),console.log("train_name",e),e==r.trim()&&(console.log("i",n),console.log("name",r),de(n+1),ye(r),he(a),$.push("/fastworkout"))}))},V=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(0),T(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="next"===e.t0?3:"previous"===e.t0?5:7;break;case 3:return A(1),e.abrupt("break",7);case 5:return A(0),e.abrupt("break",7);case 7:A(-1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("dispatchAssistantAction",t),!t){e.next=28;break}e.t0=t.type,e.next="character"===e.t0?5:"show_calendar"===e.t0?7:"to_fast_training"===e.t0?9:"to_choose_training"===e.t0?12:"choose_train"===e.t0?14:"start_train"===e.t0?16:"next_exircise"===e.t0?18:"previous_exircise"===e.t0?20:"to_main"===e.t0?22:27;break;case 5:return c(t.character.id),e.abrupt("break",28);case 7:return K("Calendar"),e.abrupt("break",28);case 9:return de(2),K("fast_training"),e.abrupt("break",28);case 12:return K("choose_training"),e.abrupt("break",28);case 14:return q(t.data),e.abrupt("break",28);case 16:return V(),e.abrupt("break",28);case 18:return X("next"),e.abrupt("break",28);case 20:return X("previous"),e.abrupt("break",28);case 22:return T(!1),y(-1),de(2),$.push("/"),e.abrupt("break",28);case 27:return e.abrupt("break",28);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=Object(r.useState)([]),se=Object(u.a)(oe,2),le=se[0],ie=se[1];Object(r.useEffect)((function(){var e;o.current=(e=function(){return function(){console.log("getStateForAssistant: this.state:",m);var e={item_selector:{items:m.notes.map((function(e,t){return{number:t+1,id:e.id,title:e.title}}))}};return console.log("getStateForAssistant: state:",m),e}()},Object(p.a)({getState:e})),o.current.on("start",(function(e){console.log("assistant.on(start)",e)})),o.current.on("data",(function(e){"smart_app_data"==e.type&&(console.log("userId",e.user_id),void 0!=e.sub?(w(e.sub),R(e.sub),G.createUser(O)):void 0!=e.user_id&&(w(e.user_id),R(e.user_id),G.createUser(O)),function(){var t=Object(i.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.getAchiviesFomUser(e.user_id);case 2:n=t.sent,ie(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()());"character"==e.type&&N(e.character.id),console.log("assistant.on(data)",e);var t=e.action;ce(t)}),[]),null!=o.current?console.log("Non null, send data"):console.log("Null")}),[]),Object(r.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAllGroupsExercises();case 2:t=e.sent,s.current=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]);var ue=Object(r.useState)(2),me=Object(u.a)(ue,2),pe=me[0],de=me[1],fe=Object(r.useState)("\u041e\u0431\u043b\u0435\u0433\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434 \u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438. \u041f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0430\u0437\u043c\u044f\u0442\u044c \u0442\u0435\u043b\u043e \u0431\u0435\u0437 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c."),be=Object(u.a)(fe,2),Ee=be[0],he=be[1],ge=Object(r.useState)("\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430"),ve=Object(u.a)(ge,2),xe=ve[0],ye=ve[1],ke=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.current.sendData({action:{action_id:t,parameters:{}}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.current.sendData({action:{action_id:"chooseCategory",parameters:{}}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(Z,null,a.a.createElement(ae,null),a.a.createElement(ee,null),function(){switch(n){case"sber":return a.a.createElement(ne,null);case"eva":return a.a.createElement(te,null);case"joy":return a.a.createElement(re,null);default:return}}(),a.a.createElement(g.c,null,a.a.createElement(g.a,{path:"/choose"},a.a.createElement(Y,{setGroupId:de,setDescription:he,setName:ye,workouts:s,SendDataToAssistant:ke})),a.a.createElement(g.a,{path:"/fastworkout"},a.a.createElement(Q,{groupId:pe,description:Ee,workoutExercises:b,setWorkoutExercises:E,name:xe,userId:O,workOutStarted:B,setWorkOutStartet:T,achieves:le,iterChanged:D,setIterChanged:A,setAchieves:ie,assistant:o,iter:x,setIter:y,setGroupId:de,assistantType:L})),a.a.createElement(g.a,{path:"/calendar",exact:!0},a.a.createElement(P,{userId:O,digit:W})),a.a.createElement(g.a,{path:"/"},a.a.createElement(z,{setGroupId:de,ToChooseCateg:je,achieves:le,setName:ye,setDescription:he}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W.a,null,a.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[961,1,2]]]);
//# sourceMappingURL=main.1e656c3b.chunk.js.map