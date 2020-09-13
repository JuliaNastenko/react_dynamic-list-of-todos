(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),o=n(7),l=n(1),u=n.n(l),i=n(2),d=n(3),p=n(4),m=n(6),f=n(5),h=(n(17),n(18),"https://mate-api.herokuapp.com"),b=function(){return fetch("".concat(h,"/todos")).then((function(e){return e.json()}))},v=function(e){return fetch("".concat(h,"/users/").concat(e)).then((function(e){return e.json()}))},_=n(10),E=n.n(_),U=(n(19),function(e){var t=e.statusFilter,n=e.handleSelect,a=e.handleChange,c=e.changeStatus,s=e.todos,o=e.setUser;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("select",{value:t,onChange:n},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Completed"},"Completed"),r.a.createElement("option",{value:"Not completed"},"Not completed")),r.a.createElement("input",{type:"text",onChange:function(e){return a(e.target.value)}}),r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},s.map((function(e){return r.a.createElement("li",{key:e.id,className:E()({TodoList__item:!0,"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:e.completed,onClick:function(){return c(e.id)}}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return o(e.userId)}},"User #".concat(e.userId)))})))))}),C=(n(20),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentId:0,user:{}},e.loadUser=Object(i.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e.props.userId);case 2:(n=t.sent).data||e.props.clearUser(),e.setState({user:n.data,currentId:e.props.userId});case 5:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.loadUser()},e.componentDidUpdate=Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.props.userId!==e.state.currentId){t.next=2;break}return t.abrupt("return");case 2:e.loadUser();case 3:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state.user,t=this.props,n=t.userId,a=t.clearUser;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(n))),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",onClick:function(){return a()}},"Clear"))}}]),n}(r.a.Component)),k=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,statusFilter:"All",titleFilter:""},e.componentDidMount=Object(i.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:n=t.sent,e.setState({todos:n.data.filter((function(e){return e.id&&e.userId&&e.title}))});case 4:case"end":return t.stop()}}),t)}))),e.handleSelect=function(t){e.setState({statusFilter:t.target.value})},e.handleInputChange=function(t){e.setState({titleFilter:t})},e.setUser=function(t){e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e.changeStatus=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===+t?Object(o.a)(Object(o.a)({},e),{},{completed:!e.completed}):Object(o.a)({},e)}))}}))},e}return Object(p.a)(n,[{key:"render",value:function(){var e,t,n=this.state,a=n.todos,c=n.selectedUserId,s=n.statusFilter,o=n.titleFilter;switch(e=o?a.filter((function(e){return e.title&&e.title.includes(o)})):a,s){case"Completed":t=e.filter((function(e){return e.completed}));break;case"Not completed":t=e.filter((function(e){return!e.completed}));break;default:t=e}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(U,{todos:t,handleSelect:this.handleSelect,handleChange:this.handleInputChange,changeStatus:this.changeStatus,statusFilter:s,titleFilter:o,setUser:this.setUser})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},c?r.a.createElement(C,{userId:c,clearUser:this.clearUser}):"No user selected")))}}]),n}(r.a.Component);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.2e1c508f.chunk.js.map