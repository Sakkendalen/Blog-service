(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(32)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(12),i=n.n(s),o=n(4),c=n(5),u=n(8),l=n(6),m=n(7),h=n(9),p=n.n(h),d=n(1),f=n.n(d),b=n(3),v=n(2);n(21);var y=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null==this.props.content?r.a.createElement("div",{className:"post"},r.a.createElement("p",null,"Date: ",this.props.date),r.a.createElement("p",{className:"authorP"},"Author: ",this.props.author),r.a.createElement("p",{className:"titleP"},"Title: ",this.props.title)):r.a.createElement("div",{className:"post"},r.a.createElement("p",null,"Date: ",this.props.date),r.a.createElement("p",{className:"authorP"},"Author: ",this.props.author),r.a.createElement("p",{className:"titleP"},"Title: ",this.props.title),r.a.createElement("p",{className:"contentP"},this.props.content))}}]),t}(a.Component);n(22);var g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={searchValue:"",isLoading:!1,posts:[]},n.handleChange=n.handleChange.bind(Object(v.a)(Object(v.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(Object(v.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("api/search/"+this.state.searchValue);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,this.setState({posts:a});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({searchValue:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"SearchComponentDiv"},r.a.createElement("h1",null," Search "),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.searchValue,name:"name",onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"submit",value:"search"})),r.a.createElement("br",null),this.state.posts.map(function(t){return r.a.createElement("div",{key:t.id,onClick:function(){return e.props.onClick(t.id)}},r.a.createElement(y,{id:t.id,date:e.props.formatTime(t.date),author:t.author,title:t.title}),r.a.createElement("br",null))}))}}]),t}(a.Component);n(23);var E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={text:"Please write an essay about your favorite DOM element.",name:"",title:"",published:!1},n.handleTextChange=n.handleTextChange.bind(Object(v.a)(Object(v.a)(n))),n.handleTitleChange=n.handleTitleChange.bind(Object(v.a)(Object(v.a)(n))),n.handleNameChange=n.handleNameChange.bind(Object(v.a)(Object(v.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(Object(v.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({published:!1})}},{key:"handleSubmit",value:function(e){fetch("api/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({author:this.state.name,title:this.state.title,content:this.state.text})}),this.setState({published:!0}),e.preventDefault()}},{key:"handleTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"render",value:function(){return this.state.published?r.a.createElement("div",{className:"ComposeComponentDiv"},r.a.createElement("h1",null," Your post has been published")):r.a.createElement("div",{className:"ComposeComponentDiv"},r.a.createElement("h1",null," Write your post "),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),r.a.createElement("label",{name:"composeLabel"},"Title"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"composeInput",value:this.state.title,onChange:this.handleTitleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("textarea",{name:"composeTextArea",rows:"30",cols:"45",value:this.state.text,onChange:this.handleTextChange,required:!0}),r.a.createElement("br",null),r.a.createElement("label",{name:"composeLabel"},"Your name "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"composeInput",value:this.state.name,onChange:this.handleNameChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{name:"composeSubmitButton",type:"submit",value:"Publish"})))}}]),t}(a.Component);n(24);var C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={show:"SearchComponent"},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"setCompose",value:function(){}},{key:"setBarState",value:function(e){this.setState({show:e})}},{key:"render",value:function(){var e=this;r.a.createElement(g,null);return"SearchComponent"===this.state.show?r.a.createElement(g,null):r.a.createElement(E,null),r.a.createElement("div",{className:"TopNavDiv"},r.a.createElement("h1",null,"Cezaro Blog"),r.a.createElement("ul",{className:"TopNavUL"},r.a.createElement("li",null," ",r.a.createElement("button",{className:"topButt",type:"submit",onClick:function(){return e.props.onClick("Browse")}},"Browse")," "),r.a.createElement("li",null," ",r.a.createElement("button",{className:"topButt",type:"submit",onClick:function(){return e.props.onClick("Search")}},"Search")," "),this.props.userType?r.a.createElement("li",null," ",r.a.createElement("button",{className:"topButt",type:"submit",onClick:function(){return e.props.onClick("Publish")}},"Publish")," "):"",this.props.userType?r.a.createElement("li",null," ",r.a.createElement("button",{className:"topButt",type:"submit",onClick:function(){return e.props.onClick("Logout")}},"Logout")):r.a.createElement("li",null," ",r.a.createElement("button",{className:"topButt",type:"submit",onClick:function(){return e.props.onClick("Login")}},"Login"))))}}]),t}(a.Component),j=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"comment"},r.a.createElement("p",{className:"date"},this.props.datetime),r.a.createElement("p",{className:"comAuth"},"K\xe4ytt\xe4j\xe4 ",this.props.pseudonym," kommentoi:"),r.a.createElement("p",null,'"',this.props.content,'"'),r.a.createElement("br",null))}}]),t}(a.Component);n(25);var k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={isLoading:!0,posts:[]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({posts:n,isLoading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.isLoading?r.a.createElement("div",{className:"Browsediv"},r.a.createElement("p",null,"Loading...")):r.a.createElement("div",{className:"Browsediv"},r.a.createElement("h2",null,"Post List"),this.state.posts.map(function(t){return r.a.createElement("div",{key:t.id,onClick:function(){return e.props.onClick(t.id)}},r.a.createElement(y,{id:t.id,date:e.props.formatTime(t.date),author:t.author,title:t.title}),r.a.createElement("br",null))}))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={postID:n.props.postID,commentFieldText:"",name:"",comments:[],liked:[]},n.handleTextChange=n.handleTextChange.bind(Object(v.a)(Object(v.a)(n))),n.handleNameChange=n.handleNameChange.bind(Object(v.a)(Object(v.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(Object(v.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("comment/getComments/"+this.state.postID);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({comments:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("comment/getComments/"+this.state.postID);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({comments:n,postID:this.props.postID});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateWithId",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("comment/getComments/"+t);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,this.setState({comments:a,postID:t});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(b.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({commentFieldText:"",name:""}),e.next=4,fetch("comment/add",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({pseudonym:this.state.name,content:this.state.commentFieldText,postId:this.state.postID})});case 4:this.update();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleTextChange",value:function(e){this.setState({commentFieldText:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"deletePost",value:function(){var e=Object(b.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("comment/delete/"+t,{method:"post",headers:{"Content-Type":"application/json"}});case 2:this.update();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"likeButton",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((n=this.state.liked).includes(t)){e.next=6;break}return e.next=4,fetch("comment/like/"+t,{method:"post"});case 4:n.push(t),this.setState({liked:n});case 6:this.update();case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Comments"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Leave your comment below"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"comment",value:this.state.commentFieldText,onChange:this.handleTextChange,required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Your name :"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleNameChange,required:!0}),r.a.createElement("br",null)),r.a.createElement("input",{className:"submitCommentButton",type:"submit",value:"Comment"})),r.a.createElement("br",null),this.state.comments.map(function(t){return r.a.createElement("div",{className:"oneComment",key:t.id},r.a.createElement(j,{id:t.id,datetime:e.props.formatTime(t.datetime),pseudonym:t.pseudonym,content:t.content}),r.a.createElement("div",null,"Total likes : ",t.likes),r.a.createElement("button",{className:"likeButton",onClick:function(){return e.likeButton(t.id)}},"Like this comment"),e.props.userType?r.a.createElement("button",{className:"deleteCommentButton",onClick:function(){return e.deletePost(t.id)}},"Delete Comment"):"",r.a.createElement("br",null))}))}}]),t}(a.Component);n(26);var x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).commentsComponent=r.a.createRef(),n.state={post:"",comments:[],id:n.props.id},n.formattedTime=n.formattedTime.bind(Object(v.a)(Object(v.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/post/"+this.props.id);case 2:return t=e.sent,e.next=5,t.json().then();case 5:n=e.sent,this.setState({post:n,id:this.props.id});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"deletePost",value:function(){var e=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/delete/"+this.state.post.id);case 2:this.props.setMainPage();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"nextPost",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/nextpost/"+this.state.post.id);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({post:n,id:this.state.post.id}),this.commentsComponent.current.updateWithId(this.state.post.id);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"prevPost",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/prevpost/"+this.state.post.id);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({post:n,id:this.state.post.id}),this.commentsComponent.current.updateWithId(this.state.post.id);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"formattedTime",value:function(){if(void 0!==this.state.post.date)return new Date(this.state.post.date).toUTCString()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ShowSingePostdiv"},r.a.createElement(y,{id:this.state.post.id,date:this.props.formatTime(this.state.post.date),title:this.state.post.title,author:this.state.post.author,content:this.state.post.content}),r.a.createElement("button",{className:"ControlButtons",onClick:function(){return e.prevPost()}},"Previous Post"),this.props.userType?r.a.createElement("button",{className:"ControlButtons",onClick:function(){return e.deletePost()}},"Delete"):"",this.props.userType?r.a.createElement("button",{className:"ControlButtons",onClick:function(){return e.props.modifyPostClick(e.state.post.id)}},"Modify"):"",r.a.createElement("button",{className:"ControlButtons",onClick:function(){return e.nextPost()}},"Next Post"),r.a.createElement(O,{ref:this.commentsComponent,postID:this.state.id,userType:this.props.userType,formatTime:function(t){return e.props.formatTime(t)}}))}}]),t}(a.Component);n(27);var S=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={text:"",name:"",title:""},n.handleTextChange=n.handleTextChange.bind(Object(v.a)(Object(v.a)(n))),n.handleTitleChange=n.handleTitleChange.bind(Object(v.a)(Object(v.a)(n))),n.handleNameChange=n.handleNameChange.bind(Object(v.a)(Object(v.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(Object(v.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/post/"+this.props.id);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({text:n.content,name:n.author,title:n.title});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("api/update/"+this.props.id,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({author:this.state.name,title:this.state.title,content:this.state.text})}),this.props.setMainPage()}},{key:"handleTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ModifyComponentDiv"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Modify Post"),r.a.createElement("br",null),r.a.createElement("label",{name:"modifyLabel"},"Title"),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.title,type:"text",name:"title",onChange:this.handleTitleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("textarea",{name:"ModifyTextArea",className:"ModifyTextArea",rows:"30",cols:"45",value:this.state.text,onChange:this.handleTextChange,required:!0}),r.a.createElement("br",null),r.a.createElement("label",{name:"modifyLabel"},"Author"),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.name,type:"text",name:"name",onChange:this.handleNameChange,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{name:"modifySubmitButton",type:"submit",value:"Modify"})))}}]),t}(a.Component);n(28);var T=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"frondpagediv"},r.a.createElement("h1",null,"Cezaro Blog Front page"))}}]),t}(a.Component);n(29);var w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={usernameFieldText:"",passwordFieldText:"",loggedIn:!1},n.handleUsernameChange=n.handleUsernameChange.bind(Object(v.a)(Object(v.a)(n))),n.handlePasswordChange=n.handlePasswordChange.bind(Object(v.a)(Object(v.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(Object(v.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleUsernameChange",value:function(e){this.setState({usernameFieldText:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({passwordFieldText:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:this.state.usernameFieldText,password:this.state.passwordFieldText})});case 4:return n=e.sent,e.next=7,n.json();case 7:401===(a=e.sent).status?alert("wrong password!"):404===a.status?alert("username not found!"):(!0,this.props.setUser(!0),this.setState({loggedIn:!0})),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}},e,this,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loggedIn?r.a.createElement("div",{className:"logdinDiv"},r.a.createElement("h1",null,"Logged in as administrator")):r.a.createElement("div",{className:"logdinDiv"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("label",null,"Username"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",value:this.state.usernameFieldText,onChange:this.handleUsernameChange,required:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",value:this.state.passwordFieldText,onChange:this.handlePasswordChange,required:!0})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(a.Component);n(11);n(11);var N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,posts:[],page:"",userType:p.a.get("user")},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({page:r.a.createElement(T,null)})}},{key:"modifyPostClick",value:function(e){var t=this;this.setState({page:r.a.createElement(S,{id:e,setMainPage:function(){return t.setMainPage()}})})}},{key:"showSinglePostClick",value:function(e){var t=this;this.setState({page:r.a.createElement(x,{id:e,formatTime:function(e){return t.formatTime(e)},setMainPage:function(){return t.setMainPage()},modifyPostClick:function(e){return t.modifyPostClick(e)},userType:this.state.userType})})}},{key:"setMainPage",value:function(){this.setState({page:r.a.createElement(T,null)})}},{key:"setUser",value:function(e){this.setState({userType:e}),p.a.set("user",e,{expires:.02})}},{key:"formatTime",value:function(e){if(void 0!==e)return new Date(e).toUTCString()}},{key:"topMenuClick",value:function(e){var t=this;"Search"===e&&this.setState({page:r.a.createElement(g,{onClick:function(e){return t.showSinglePostClick(e)},formatTime:function(e){return t.formatTime(e)}})}),"Publish"===e&&this.setState({page:r.a.createElement(E,{setMainPage:function(){return t.setMainPage()}})}),"Browse"===e&&this.setState({page:r.a.createElement(k,{onClick:function(e){return t.showSinglePostClick(e)},formatTime:function(e){return t.formatTime(e)}})}),"Login"===e&&this.setState({page:r.a.createElement(w,{setUser:function(e){return t.setUser(e)},setMainPage:function(){return t.setMainPage()}})}),"Logout"===e&&(this.setState({page:r.a.createElement(T,null),userType:!1}),p.a.remove("user"))}},{key:"render",value:function(){var e=this,t=this.state;t.posts;return t.isLoading?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement(C,{onClick:function(t){return e.topMenuClick(t)},userType:this.state.userType}),this.state.page)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(30),n(31);i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.b5abb459.chunk.js.map