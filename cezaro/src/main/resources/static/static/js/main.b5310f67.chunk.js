(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(28)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),l=n.n(r),o=n(3),c=n(4),s=n(7),u=n(5),h=n(6),m=n(2),p=n.n(m),d=n(8),f=n(1);n(19);var b=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null==this.props.content?i.a.createElement("div",{className:"post"},i.a.createElement("p",null,"Date: ",this.props.date),i.a.createElement("p",null,"Author: ",this.props.author),i.a.createElement("p",null,"Title: ",this.props.title),i.a.createElement("br",null)):i.a.createElement("div",{className:"post"},i.a.createElement("p",null,"Date: ",this.props.date),i.a.createElement("p",null,"Author: ",this.props.author),i.a.createElement("p",null,"Title: ",this.props.title),i.a.createElement("p",null,"Content: ",this.props.content),i.a.createElement("br",null))}}]),t}(a.Component);n(20);var v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!1,posts:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark(function e(){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({posts:n,isLoading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Browsediv"},i.a.createElement("h2",null,"Post List"),this.state.posts.map(function(t){return i.a.createElement("div",{key:t.date,onClick:function(){return e.props.onClick(t.date)}},i.a.createElement(b,{date:t.date,author:t.author,title:t.title}),i.a.createElement("br",null))}))}}]),t}(a.Component);n(21);var C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={searchValue:"Search",isLoading:!1,posts:[]},n.handleChange=n.handleChange.bind(Object(f.a)(Object(f.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(d.a)(p.a.mark(function e(t){var n,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("api/search/"+this.state.searchValue);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,this.setState({posts:a});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({searchValue:e.target.value})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"SearchComponentDiv"},i.a.createElement("h1",null," Search Component "),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Search"),i.a.createElement("input",{type:"text",value:this.state.searchValue,name:"name",onChange:this.handleChange}),i.a.createElement("input",{type:"submit",value:"Submit"})),this.state.posts.map(function(t){return i.a.createElement("div",{key:t.date,onClick:function(){return e.props.onClick(t.date)}},i.a.createElement(b,{date:t.date,author:t.author,title:t.title}),i.a.createElement("br",null))}))}}]),t}(a.Component);n(22);var g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={text:"Please write an essay about your favorite DOM element.",name:"",title:""},n.handleTextChange=n.handleTextChange.bind(Object(f.a)(Object(f.a)(n))),n.handleTitleChange=n.handleTitleChange.bind(Object(f.a)(Object(f.a)(n))),n.handleNameChange=n.handleNameChange.bind(Object(f.a)(Object(f.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(e){fetch("api/add",{method:"post",body:JSON.stringify({author:this.state.name,title:this.state.title,content:this.state.text})}),e.preventDefault()}},{key:"handleTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"render",value:function(){return i.a.createElement("div",{className:"ComposeComponentDiv"},i.a.createElement("h1",null," Compose Component "),i.a.createElement("h1",null," Compose Component "),i.a.createElement("h1",null," Compose Component "),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Name"),i.a.createElement("input",{type:"text",name:"name",onChange:this.handleNameChange}),i.a.createElement("label",null,"Title"),i.a.createElement("input",{type:"text",name:"title",onChange:this.handleTitleChange}),i.a.createElement("label",null,"Essay:",i.a.createElement("textarea",{value:this.state.text,onChange:this.handleTextChange})),i.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component);n(23);var k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={show:"SearchComponent"},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"setCompose",value:function(){}},{key:"setBarState",value:function(e){this.setState({show:e}),console.log("this ")}},{key:"render",value:function(){var e=this;console.log(this.state.show);i.a.createElement(C,null);return"SearchComponent"===this.state.show?(console.log("eka"),i.a.createElement(C,null)):(console.log("toka"),i.a.createElement(g,null)),i.a.createElement("div",{className:"TopNavDiv"},i.a.createElement("ul",{className:"TopNavUL"},i.a.createElement("li",null," ",i.a.createElement("button",{type:"submit",onClick:function(){return e.props.onClick("Browse")}},"Browse")," "),i.a.createElement("li",null," ",i.a.createElement("button",{type:"submit",onClick:function(){return e.props.onClick("Search")}},"Search")," "),i.a.createElement("li",null," ",i.a.createElement("button",{type:"submit",onClick:function(){return e.props.onClick("Publish")}},"Publish")," "),i.a.createElement("li",null,"Delete"),i.a.createElement("li",null,"Modify")))}}]),t}(a.Component);n(24);var E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={post:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark(function e(){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/post/"+this.props.date);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({post:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"deletePost",value:function(){var e=Object(d.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/delete/"+this.state.post.date);case 2:this.props.setMainPage();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"ShowSingePostdiv"},i.a.createElement(b,{date:this.state.post.date,title:this.state.post.title,author:this.state.post.author,content:this.state.post.content}),i.a.createElement("button",{onClick:function(){return e.deletePost()}},"Delete"),i.a.createElement("button",{onClick:function(){return e.props.modifyPostClick(e.state.post.date)}},"Modify"))}}]),t}(a.Component);n(25);var j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={text:"",name:"",title:""},n.handleTextChange=n.handleTextChange.bind(Object(f.a)(Object(f.a)(n))),n.handleTitleChange=n.handleTitleChange.bind(Object(f.a)(Object(f.a)(n))),n.handleNameChange=n.handleNameChange.bind(Object(f.a)(Object(f.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark(function e(){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/post/"+this.props.date);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({text:n.content,name:n.author,title:n.title});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){fetch("api/update/"+this.props.date,{method:"post",body:JSON.stringify({author:this.state.name,title:this.state.title,content:this.state.text})}),e.preventDefault()}},{key:"handleTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"render",value:function(){return i.a.createElement("div",{className:"ModifyComponentDiv"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Author"),i.a.createElement("input",{value:this.state.name,type:"text",name:"name",onChange:this.handleNameChange}),i.a.createElement("label",null,"Title"),i.a.createElement("input",{value:this.state.title,type:"text",name:"title",onChange:this.handleTitleChange}),i.a.createElement("label",null,i.a.createElement("textarea",{value:this.state.text,onChange:this.handleTextChange})),i.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component);n(26);var y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isLoading:!1,posts:[],page:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({page:i.a.createElement(C,{onClick:function(t){return e.showSinglePostClick(t)}})})}},{key:"modifyPostClick",value:function(e){this.setState({page:i.a.createElement(j,{date:e})})}},{key:"showSinglePostClick",value:function(e){var t=this;this.setState({page:i.a.createElement(E,{date:e,setMainPage:function(){return t.setMainPage()},modifyPostClick:function(e){return t.modifyPostClick(e)}})})}},{key:"setMainPage",value:function(){var e=this;this.setState({page:i.a.createElement(v,{onClick:function(t){return e.showSinglePostClick(t)}})})}},{key:"topMenuClick",value:function(e){var t=this;"Search"===e&&this.setState({page:i.a.createElement(C,{onClick:function(e){return t.showSinglePostClick(e)}})}),"Publish"===e&&this.setState({page:i.a.createElement(g,null)}),"Browse"===e&&this.setState({page:i.a.createElement(v,{onClick:function(e){return t.showSinglePostClick(e)}})})}},{key:"render",value:function(){var e=this,t=this.state;t.posts;return t.isLoading?i.a.createElement("p",null,"Loading..."):i.a.createElement("div",{className:"App"},i.a.createElement(k,{onClick:function(t){return e.topMenuClick(t)}}),this.state.page)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(27);l.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.b5310f67.chunk.js.map