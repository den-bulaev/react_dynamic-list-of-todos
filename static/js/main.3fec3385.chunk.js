(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),o=n(5),l=n.n(o),u=n(6),i=n(1),d=n(2),p=n(4),m=n(3),h=(n(16),n(17),n(7)),f=n.n(h),v=(n(18),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",filterOption:"all"},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todos,a=t.callback,c=t.selectedUserId,s=n.filter((function(e){return null!==e.title})).filter((function(t){return t.title.includes(e.state.query)}));switch(this.state.filterOption){case"completed":s=s.filter((function(e){return!0===e.completed}));break;case"active":s=s.filter((function(e){return!1===e.completed}));break;case"all":break;default:throw new Error("TodoList, line 8, unexpected filterOption")}return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("select",{name:"sort",className:"select",onChange:function(t){return e.setState({filterOption:t.target.value})}},r.a.createElement("option",{value:"all"},"Show all"),r.a.createElement("option",{value:"completed"},"Show completed"),r.a.createElement("option",{value:"active"},"Show active")),r.a.createElement("input",{type:"text",placeholder:"Type todo title",value:this.state.query,onChange:function(t){e.setState({query:t.target.value})}}),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},s.map((function(e){var t=e.title,n=e.completed,s=e.userId,o=e.id;return!!t&&s&&r.a.createElement("li",{key:o,className:f()("TodoList__item",{"TodoList__item--checked":n},{"TodoList__item--unchecked":!n})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:n,readOnly:!0}),r.a.createElement("p",null,t)),r.a.createElement("button",{className:f()("button",{"TodoList__user-button--selected":s===c}),type:"button",onClick:function(){a(s)},id:s},"User\xa0","#".concat(s)))})))))}}]),n}(r.a.PureComponent)),b="https://mate-api.herokuapp.com",_=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(b+t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=(n(19),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:_("/users/".concat(e.props.userId)).then((function(t){return e.setState({user:t})}))},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this;e.userId!==this.props.userId&&_("/users/".concat(this.props.userId)).then((function(e){return t.setState({user:e})}))}},{key:"render",value:function(){var e=this.state.user,t=e.name,n=e.email,a=e.phone;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(this.props.userId))),r.a.createElement("h3",{className:"CurrentUser__name"},t),r.a.createElement("p",{className:"CurrentUser__email"},n),r.a.createElement("p",{className:"CurrentUser__phone"},a),r.a.createElement("button",{className:" TodoList__user-button--selected button CurrentUser__clear ",type:"button",onClick:this.props.reset},"Clear"))}}]),n}(r.a.PureComponent)),y=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.handleClick=function(t){e.setState({selectedUserId:t})},e.resetSelectedUserId=function(){return e.setState({selectedUserId:0})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(v,{todos:t,callback:this.handleClick,selectedUserId:n})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(E,{userId:n,reset:this.resetSelectedUserId}):"No user selected")))}}]),n}(r.a.Component);s.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.3fec3385.chunk.js.map