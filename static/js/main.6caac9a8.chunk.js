(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(3),s=n.n(c),l=(n(12),n(13),n(4)),h=n(5),r=n(7),j=n(6),o=n(0),d=function(e){Object(r.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handlefirstnameChange=function(e){a.setState({firstname:e.target.value})},a.handlelastnameChange=function(e){a.setState({lastname:e.target.value})},a.handleemailChange=function(e){a.setState({email:e.target.value})},a.handleTopicChange=function(e){a.setState({topic:e.target.value})},a.handleSubmit=function(e){alert("FirstName:".concat(a.state.firstname," LastName").concat(a.state.lastname," Email:").concat(a.state.email," Topic:").concat(a.state.topic)),e.preventDefault()},a.state={firstname:"",lastname:"",email:"",topic:""},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"My first React Form"}),Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsxs)("h2",{children:[Object(o.jsx)("label",{children:"Enter Your Full Name:"}),Object(o.jsx)("input",{type:"text",value:this.state.firstname,onChange:this.handlefirstnameChange})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("h2",{children:[Object(o.jsx)("label",{children:"E-mail:"}),Object(o.jsx)("input",{type:"text",value:this.state.email,onChange:this.handleemailChange})]})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{children:[Object(o.jsx)("label",{children:"Choose:"}),Object(o.jsxs)("select",{value:this.state.topic,onChange:this.handleTopicChange,children:[Object(o.jsx)("option",{value:"None",children:"None"}),Object(o.jsx)("option",{value:"React",children:"ENGNINEERING"}),Object(o.jsx)("option",{value:"Angular",children:"MANAGEMENT"}),Object(o.jsx)("option",{value:"Django",children:"FASHION"})]})]}),Object(o.jsx)("button",{id:"sub",type:"submit",children:"submit"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"details",children:"  "}),Object(o.jsx)("h3",{children:this.state.firstname}),Object(o.jsx)("h3",{children:this.state.email}),Object(o.jsx)("h3",{children:this.state.topic})]})]})]})}}]),n}(a.Component);var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.6caac9a8.chunk.js.map