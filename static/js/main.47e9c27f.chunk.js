(this["webpackJsonpsberapp-frontend"]=this["webpackJsonpsberapp-frontend"]||[]).push([[0],{246:function(e,t,n){},261:function(e,t,n){},263:function(e,t,n){},526:function(e,t,n){},960:function(e,t,n){},961:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),o=n.n(c),s=(n(261),n(8)),i=n.n(s),u=n(13),l=n(14),p=n(61),m=(n(263),n(264),n(59)),f=n(30),d=n(12),b=n(5),h=n(4),v=n(60),E=n(15),y=n(256),g=(n(508),n(254)),x=n(253),k=n(20),w=n.n(k),j="https://lit-escarpment-35334.herokuapp.com/";function O(){return(O=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(j,"User/"),{UserId:t,SberId:0,Name:"",Age:0,Gender:"",Active:0});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(j,"User/"),{params:{SberId:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(j,"ProverkaUsersByUserId/"),{params:{user_id:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(j,"AllGroupsExercises/"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(j,"ExircicesfromGroup/"),{params:{group_id:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(u.a)(i.a.mark((function e(t,n,r){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.a.post("".concat(j,"ProgressAchieve/"),{UserId:t,Date:n,Completed:!0}),c=a.data,e.abrupt("return",c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a.get("".concat(j,"ProgressByUser/"),{params:{user_id:t}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a.get("".concat(j,"AchiviesFomUser/"),{params:{user_id:t}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D,U,G={API_URL:j,getAllGroupsExercises:function(){return _.apply(this,arguments)},getExircicesfromGroup:function(e){return T.apply(this,arguments)},getUsersBySberId:function(e){return C.apply(this,arguments)},getProgressByUser:function(e){return B.apply(this,arguments)},createProgressAchieve:function(e,t,n){return S.apply(this,arguments)},createUser:function(e){return O.apply(this,arguments)},getProverkaUsersByUserId:function(e){return I.apply(this,arguments)},getAchiviesFomUser:function(e){return A.apply(this,arguments)}},F=(n(526),Object(E.g)((function(e){var t=e.userId;e.digit;Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getProgressByUser(t);case 2:n=e.sent,r=[],console.log("Data",n),n.data.forEach((function(e){r.push(Date.parse(e.date))})),s(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t)}),[]);var n=Object(r.useState)([]),c=Object(l.a)(n,2),o=c[0],s=c[1],p={selected:function(e){return o.some((function(t){return Object(x.a)(t,e)}))}};return a.a.createElement(y.a,{modifiers:p,locale:g.ru})}))),P=n(17),R=n(19),z=n(18),W=Object(E.g)((function(e){var t=e.setGroupId,n=e.ToChooseCateg,c=e.achieves,o=e.setName,s=e.setDescription,l=e.userId,p=e.setAchieves;return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAchiviesFomUser(l);case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement(b.Card,{style:{width:"20rem"}},a.a.createElement(b.CardContent,{compact:!0},a.a.createElement(b.Cell,{content:a.a.createElement(b.TextBoxBiggerTitle,null,"\u0423\u0442\u0440\u043e \u043d\u0430\u0447\u043d\u0451\u0442\u0441\u044f \u0441"),right:a.a.createElement("span",{style:{marginTop:5}})}),a.a.createElement(R.b,{to:"/fastworkout",style:{textDecoration:"none"}},a.a.createElement(b.Cell,{onClick:function(){t(2),s("\u041e\u0431\u043b\u0435\u0433\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434 \u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438. \u041f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0430\u0437\u043c\u044f\u0442\u044c \u0442\u0435\u043b\u043e \u0431\u0435\u0437 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c."),o("\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430")},left:a.a.createElement(b.CellIcon,null,a.a.createElement(z.IconAccessibility,null)),content:a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxTitle,null,"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430"),a.a.createElement(b.TextBoxSubTitle,null,"10 \u043c\u0438\u043d")),right:a.a.createElement(b.CellDisclosure,null)})),a.a.createElement(R.b,{to:"/choose",style:{textDecoration:"none"}},a.a.createElement(b.Cell,{left:a.a.createElement(b.CellIcon,null,a.a.createElement(z.IconApps,null)),onClick:function(){return n()},content:a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxTitle,null,"\u041c\u0435\u043d\u044e \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a"),a.a.createElement(b.TextBoxSubTitle,null,"\u041d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u0443\u0441")),right:a.a.createElement(b.CellDisclosure,null)})),a.a.createElement(R.b,{to:"/calendar",style:{textDecoration:"none"}},a.a.createElement(b.Cell,{left:a.a.createElement(b.CellIcon,null,a.a.createElement(z.IconCalendar,null)),content:a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxTitle,null,"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"),a.a.createElement(b.TextBoxSubTitle,null,"\u0412\u0430\u0448 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441")),right:a.a.createElement(b.CellDisclosure,null)})))),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement("br",null)," ",a.a.createElement("br",null),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement(P.Headline3,{style:{marginRight:"0.5rem",marginTop:"0.5rem"}},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),a.a.createElement(b.Button,{size:"s",onClick:function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAchiviesFomUser(l);case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},a.a.createElement(z.IconRefresh,{size:"xs"}))),a.a.createElement(b.MarkedList,null,a.a.createElement(b.MarkedItem,{text:"\u0434\u043d\u0435\u0439 \u0441 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430\u043c\u0438 \u043f\u043e\u0434\u0440\u044f\u0434",style:{color:d.primary}},a.a.createElement(b.Badge,{text:c.dict,size:"l",view:"secondary"})),a.a.createElement(b.MarkedItem,{text:"\u0432\u0441\u0435\u0433\u043e \u0434\u043d\u0435\u0439 \u0441 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430\u043c\u0438",style:{color:d.primary}},a.a.createElement(b.Badge,{text:c.count_days_train,size:"l",view:"secondary"})),a.a.createElement(b.MarkedItem,{text:"\u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a",style:{color:d.primary}},a.a.createElement(b.Badge,{text:c.count_train,size:"l",view:"secondary"})))))})),M=(n(950),n(246),n(255)),H=n.n(M),J=(n(960),function(e){var t=Math.floor(e/60),n=e%60;return"".concat(t,":").concat(K(n))}),L={content:{color:"".concat(d.text),backgroundColor:"".concat(d.background),backgroundImage:"".concat(d.gradient),top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"1em",padding:"1em"}},N=function(e){var t,n=e.setIter,r=e.timeCount,c=e.iter,o=(e.userId,e.workoutLength,e.setAchieves,e.workoutExercises,e.sayExircise,Object(E.f)()),s=a.a.useState(!1),i=Object(l.a)(s,2),u=i[0],p=i[1];var m=a.a.useState(r.timeCount),f=Object(l.a)(m,2),d=f[0],h=f[1],v=a.a.useState(30),y=Object(l.a)(v,2),g=y[0],x=y[1];return a.a.useEffect((function(){console.log("\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u044e\u0437"),h(r.timeCount)}),[r]),a.a.useEffect((function(){var e;return console.log(r),console.log("Timer useeffect"),d>0?e=setTimeout((function(){return h((function(e){return e-1}))}),1e3):0===d&&p(!0),function(){e&&clearTimeout(e)}}),[d]),a.a.useEffect((function(){var e;return g>0?e=setTimeout((function(){return x((function(e){return e-1}))}),1e3):0===d&&(p(!1),n(c+1),h(r)),function(){e&&clearTimeout(e)}}),[g]),a.a.createElement("div",null,0!==d&&a.a.createElement(P.Headline2,null,"\u0412\u0440\u0435\u043c\u044f: ",J(d)),a.a.createElement("div",null,a.a.createElement(H.a,{isOpen:u,onAfterOpen:function(){t.style.color="",x(30)},style:L},a.a.createElement("h2",{ref:function(e){return t=e},style:{textAlign:"center"}},"\u041e\u0442\u0434\u044b\u0445"),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(P.Headline2,null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437"),a.a.createElement("br",null),0!==g&&a.a.createElement(P.Headline2,null,J(g))),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.a.createElement(b.Button,{onClick:function(){p(!1),x(30),o.push("/")}},a.a.createElement(z.IconHouse,null)),a.a.createElement(b.Button,{onClick:function(){p(!1),n(c+1),h(r)}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))},K=function(e){return 1===String(e).length?"0".concat(e):"".concat(e)},$=new Date,q={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC"},Q=Object(E.g)((function(e){var t=e.groupId,n=e.workoutExercises,c=e.setWorkoutExercises,o=e.description,s=e.name,p=e.userId,m=e.workOutStarted,f=e.setWorkOutStartet,h=e.setAchieves,v=e.iterChanged,y=e.assistant,g=e.iter,x=e.setIter,k=e.setGroupId,w=e.assistantType,j=Object(E.f)();Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getExircicesfromGroup(t);case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log("Workout useeffect")}),[]),Object(r.useEffect)((function(){void 0!=n[g]&&O(n[g].discription,n[g].discriptionJoy)}),[g]),Object(r.useEffect)((function(){var e;g+1==n.length&&-1!=g&&(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.createProgressAchieve(p,new Date,!0);case 2:return e.next=4,G.getAchiviesFomUser(p);case 4:t=e.sent,h(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),null===(e=y.current)||void 0===e||e.sendData({action:{action_id:"train_finish",parameters:{}}}));1==v?x(g+1):0==v&&g>0&&x(g-1)}),[v]);var O=function(e,t){var n;null===(n=y.current)||void 0===n||n.sendData({action:{action_id:"say",parameters:{off_description:e,description:t,number:g}}})},C=Object(r.useState)(),I=Object(l.a)(C,2);I[0],I[1];return m?a.a.createElement("div",null,a.a.createElement(b.Card,{style:{marginBottom:"3rem"}},a.a.createElement(b.CardBody,null,a.a.createElement(b.CardContent,null,n?a.a.createElement("div",null,g==n.length?a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},a.a.createElement(b.TextBoxBigTitle,null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430"),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(b.CardParagraph1,null,$.toLocaleString("ru",q)," ")),n?a.a.createElement(b.MarkedList,null,n.map((function(e,t){e._id;var n=e.name;return a.a.createElement(b.MarkedItem,{text:n,style:{color:d.primary}},a.a.createElement(z.IconDone,{size:"xs",color:d.accent}))}))):a.a.createElement(b.Spinner,null)),a.a.createElement("br",null),a.a.createElement(b.Button,{onClick:function(){f(!1),x(-1),k(2),j.push("/")}},a.a.createElement(z.IconHouse,null))):a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.a.createElement(b.TextBoxBigTitle,null,n[g].name),a.a.createElement("div",{style:{marginTop:"0.5rem"}},a.a.createElement(N,{setIter:x,timeCount:{timeCount:n[g].time},iter:g,userId:p,workoutLength:n.length,setAchieves:h,workoutExercises:n,sayExircise:O}))),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",flexDirection:"row"}},a.a.createElement("div",{class:"wrapper exmp2"},a.a.createElement("img",{src:n[g].photo})),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(b.CardParagraph1,{lines:7},"joy"==w.current?n[g].discriptionJoy:n[g].discription),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement(b.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,disabled:0==g,style:{marginTop:"1em",marginRight:"1em"},tabIndex:-1,onClick:function(){n[g-1],console.log(n),x(g-1)}},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435"),a.a.createElement(b.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,style:{marginTop:"1em"},tabIndex:-1,onClick:function(){var e;g+1==n.length&&(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.createProgressAchieve(p,new Date,!0);case 2:return e.next=4,G.getAchiviesFomUser(p);case 4:t=e.sent,h(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),null===(e=y.current)||void 0===e||e.sendData({action:{action_id:"train_finish",parameters:{}}}));x(g+1)}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435")))))):a.a.createElement("div",null,a.a.createElement(b.Spinner,null)))))):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(P.Headline2,null,s),n?a.a.createElement(b.MarkedList,null,n.map((function(e,t){e._id;var n=e.name;return a.a.createElement(b.MarkedItem,{text:n,style:{color:d.primary}},a.a.createElement(z.IconDone,{size:"xs",color:d.accent}))}))):a.a.createElement(b.Spinner,null),a.a.createElement("br",null)),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(b.Card,{style:{width:"20rem"}},a.a.createElement(b.CardBody,null,a.a.createElement(b.CardContent,null,a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxBigTitle,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),a.a.createElement(b.CardParagraph1,{style:{marginTop:"0.75rem"},lines:4},o),a.a.createElement(b.TextBoxSubTitle,null,"\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0445")),a.a.createElement("br",null),a.a.createElement(b.Button,{onClick:function(){void 0!=n[0].discriptionJoy&&void 0!=n[0].discription&&(O(n[0].discription,n[0].discriptionJoy),f(!0),x(g+1))}},"\u041d\u0430\u0447\u0430\u0442\u044c")))))))})),V=n(44),X=(n(77),Object(E.g)((function(e){var t=e.setGroupId,n=e.setDescription,c=e.setName,o=(e.setWorkouts,e.workouts),s=(e.SendDataToAssistant,e.assistant);Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAllGroupsExercises();case 2:t=e.sent,o.current=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=Object(r.useState)(1),m=Object(l.a)(p,2),f=m[0],d=m[1];return a.a.createElement(b.Container,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement(P.Headline2,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043c \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438")),a.a.createElement("br",null),a.a.createElement(V.Row,null,o.current?a.a.createElement(b.Carousel,{as:V.Row,axis:"x",index:f,scrollSnapType:"mandatory",detectActive:!0,detectThreshold:.5,stylingCallback:function(e,t){e.style.opacity="".concat(1-Math.abs(t)/2)},stylingResetCallback:function(e){e.style.opacity=""},onIndexChange:function(e){return d(e)},paddingStart:"50%",paddingEnd:"50%",style:{paddingTop:"1rem",paddingBottom:"1.25rem"}},o.current.data.map((function(e,r){var i=e.name,u=(e.short_discription,e.discription),l=e.image;return a.a.createElement(b.CarouselCol,{key:"item:".concat(r)},a.a.createElement(b.Card,{style:{width:"10rem",height:"12rem",margin:"0.3rem"},scaleOnFocus:!1,focused:r==f},a.a.createElement(b.CardBody,null,a.a.createElement("div",{style:{height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(l,")")}}),a.a.createElement(b.CardContent,null,a.a.createElement(b.TextBox,null,a.a.createElement(b.TextBoxBigTitle,null,i)),a.a.createElement(R.b,{style:{color:"#FFF",textDecoration:"none"},to:"/fastworkout"},a.a.createElement(b.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,style:{marginTop:"1em"},tabIndex:-1,onClick:function(){console.log(o.data),s.current.sendData({action:{action_id:"after_choose_train",parameters:{}}}),t(r+1),n(u),c(i)}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"))))))}))):a.a.createElement(b.Spinner,null)))}))),Y=h.default.div(D||(D=Object(p.a)(["\n  padding: 30px;\n  ","\n"])),P.body1),Z=Object(h.createGlobalStyle)(v.sberBox),ee=Object(h.createGlobalStyle)(f.darkEva),te=Object(h.createGlobalStyle)(f.darkSber),ne=Object(h.createGlobalStyle)(f.darkJoy),re=Object(h.createGlobalStyle)(U||(U=Object(p.a)(["\n  html {\n    color: ",";\n    background-color: ",";\n    background-image: ",";\n    min-height: 100vh;\n  }\n"])),d.text,d.background,d.gradient);var ae=Object(E.g)((function(){var e=Object(r.useState)("sber"),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useRef)(),s=Object(r.useRef)(),p=Object(r.useRef)(),f={notes:[]},d=Object(r.useState)([]),b=Object(l.a)(d,2),h=b[0],v=b[1],y=Object(r.useState)(-1),g=Object(l.a)(y,2),x=g[0],k=g[1],w=Object(r.useState)([]),j=Object(l.a)(w,2),O=j[0],C=j[1],I=Object(r.useState)(!1),_=Object(l.a)(I,2),T=_[0],S=_[1],B=Object(r.useState)(-1),A=Object(l.a)(B,2),D=A[0],U=A[1],P=Object(r.useState)(-1),R=Object(l.a)(P,2),z=R[0],M=R[1],H=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getProverkaUsersByUserId(t).then((function(e){return M(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="Calendar"===e.t0?3:"fastworkout"===e.t0?5:"choose_training"===e.t0?7:"fast_training"===e.t0?9:11;break;case 3:case 5:return L.push("/calendar"),e.abrupt("break",12);case 7:return L.push("/choose"),e.abrupt("break",12);case 9:return L.push("/fastworkout"),e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=Object(E.f)(),N=function(e){e=e.charAt(0).toUpperCase()+e.slice(1).trim(),console.log("WK",s.current);var t=!0;void 0!=s.current.data&&(s.current.data.map((function(n,r){n._id;var a=n.name,c=n.discription;console.log("name",a),console.log("train_name",e),e==a.trim()&&(o.current.sendData({action:{action_id:"after_choose_train",parameters:{}}}),t=!1,console.log("i",r),console.log("name",a),le(r+1),Ee(a),de(c),L.push("/fastworkout"))})),t&&o.current.sendData({action:{action_id:"bad_train_category",parameters:{}}}))},K=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(0),S(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="next"===e.t0?3:"previous"===e.t0?5:7;break;case 3:return U(1),e.abrupt("break",7);case 5:return U(0),e.abrupt("break",7);case 7:U(-1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("dispatchAssistantAction",t),!t){e.next=28;break}e.t0=t.type,e.next="character"===e.t0?5:"show_calendar"===e.t0?7:"to_fast_training"===e.t0?9:"to_choose_training"===e.t0?12:"choose_train"===e.t0?14:"start_train"===e.t0?16:"next_exircise"===e.t0?18:"previous_exircise"===e.t0?20:"to_main"===e.t0?22:"update_stat"===e.t0?24:27;break;case 5:return c(t.character.id),e.abrupt("break",28);case 7:return J("Calendar"),e.abrupt("break",28);case 9:return le(2),J("fast_training"),e.abrupt("break",28);case 12:return J("choose_training"),e.abrupt("break",28);case 14:return N(t.data),e.abrupt("break",28);case 16:return K(),e.abrupt("break",28);case 18:return $("next"),e.abrupt("break",28);case 20:return $("previous"),e.abrupt("break",28);case 22:return L.push("/"),e.abrupt("break",28);case 24:return function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAchiviesFomUser(O);case 2:t=e.sent,oe(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),e.abrupt("break",28);case 27:return e.abrupt("break",28);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=Object(r.useState)([]),ae=Object(l.a)(V,2),ce=ae[0],oe=ae[1];Object(r.useEffect)((function(){var e;o.current=(e=function(){return function(){console.log("getStateForAssistant: this.state:",f);var e={item_selector:{items:f.notes.map((function(e,t){return{number:t+1,id:e.id,title:e.title}}))}};return console.log("getStateForAssistant: state:",f),e}()},Object(m.a)({getState:e})),o.current.on("start",(function(e){console.log("assistant.on(start)",e)})),o.current.on("data",(function(e){if("smart_app_data"==e.type){if(console.log("userId",e.user_id),void 0!=e.sub)C(e.sub),H(e.sub),G.createUser(e.sub),function(){var t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.getAchiviesFomUser(e.sub);case 2:n=t.sent,oe(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),G.createUser(O);else if(void 0!=e.user_id){C(e.user_id),H(e.user_id),G.createUser(O),function(){var t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.getAchiviesFomUser(e.userId);case 2:n=t.sent,oe(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}"official"==e.assistant&&(p.current="sber"),"no_official"==e.assistant&&(p.current="joy")}"character"==e.type&&(p.current=e.character.id),void 0!=e.assistant&&("official"==e.assistant?p.current="sber":p.current="joy"),console.log("assistant.on(data)",e);var t=e.action;q(t)}),[]),null!=o.current?console.log("Non null, send data"):console.log("Null")}),[]),Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAllGroupsExercises();case 2:t=e.sent,s.current=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]);var se=Object(r.useState)(2),ie=Object(l.a)(se,2),ue=ie[0],le=ie[1],pe=Object(r.useState)("\u041e\u0431\u043b\u0435\u0433\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434 \u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438. \u041f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0430\u0437\u043c\u044f\u0442\u044c \u0442\u0435\u043b\u043e \u0431\u0435\u0437 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c."),me=Object(l.a)(pe,2),fe=me[0],de=me[1],be=Object(r.useState)("\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430"),he=Object(l.a)(be,2),ve=he[0],Ee=he[1],ye=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.current.sendData({action:{action_id:t,parameters:{}}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.current.sendData({action:{action_id:"chooseCategory",parameters:{}}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAchiviesFomUser(O);case 2:t=e.sent,oe(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.a.createElement(Y,null,a.a.createElement(re,null),a.a.createElement(Z,null),function(){switch(n){case"sber":return a.a.createElement(te,null);case"eva":return a.a.createElement(ee,null);case"joy":return a.a.createElement(ne,null);default:return}}(),a.a.createElement(E.c,null,a.a.createElement(E.a,{path:"/choose"},a.a.createElement(X,{setGroupId:le,setDescription:de,setName:Ee,workouts:s,SendDataToAssistant:ye,assistant:o})),a.a.createElement(E.a,{path:"/fastworkout"},a.a.createElement(Q,{groupId:ue,description:fe,workoutExercises:h,setWorkoutExercises:v,name:ve,userId:O,workOutStarted:T,setWorkOutStartet:S,iterChanged:D,setAchieves:oe,assistant:o,iter:x,setIter:k,setGroupId:le,assistantType:p})),a.a.createElement(E.a,{path:"/calendar",exact:!0},a.a.createElement(F,{userId:O,digit:z})),a.a.createElement(E.a,{path:"/"},a.a.createElement(W,{setGroupId:le,ToChooseCateg:ge,achieves:ce,setName:Ee,setDescription:de,userId:O,setAchieves:oe}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R.a,null,a.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[961,1,2]]]);
//# sourceMappingURL=main.47e9c27f.chunk.js.map