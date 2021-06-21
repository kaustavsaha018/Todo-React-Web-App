(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),r=n.n(s),o=(n(25),n(11)),i=n(20),l=(n(26),n(8)),b=n(0);function j(e){return Object(b.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(l.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}var d=function(e){var t=e.todo,n=e.onDelete;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.description}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]})},h=function(e){return Object(b.jsxs)("div",{className:"container",style:{minHeight:"60vh",margin:"40px auto"},children:[Object(b.jsx)("h3",{className:"my-3",children:"My TO-DOs List"}),Object(b.jsx)("hr",{}),0===e.todos.length?"No more Todos to Display":e.todos.map((function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{todo:t,onDelete:e.onDelete})," ",Object(b.jsx)("hr",{})]})}))]})},u=function(){return Object(b.jsxs)("footer",{className:"bg-dark text-light py-3",children:[Object(b.jsxs)("p",{className:"text-center",children:[Object(b.jsx)("a",{href:"https://www.instagram.com/kaustav_saha_18/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{height:"40px",width:"40px",src:"https://image.flaticon.com/icons/png/512/1384/1384063.png",alt:""})})," "]}),Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 2021 | All Rights Reserved to Kaustav Saha"})]})},m=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),j=l[0],d=l[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Add a Todo"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&j?(t(s,j),r(""),d("")):alert("Title and Description can not be blank!")},children:[Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){r(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp",placeholder:"Enter tile of the todo"})]}),Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:j,onChange:function(e){d(e.target.value)},className:"form-control",id:"description","aria-describedby":"emailHelp",placeholder:"Enter description of the todo"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},O=function(){return Object(b.jsx)("div",{style:{minHeight:"70vh"},children:Object(b.jsx)("img",{style:{display:"block",margin:"auto",width:"50%"},src:"https://www.deweyjames.com/wp-content/uploads/2018/04/under-construction-1000x500.jpg",alt:""})})},x=n(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){d(r.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(r))},n=function(e,t){var n={sno:0===r.length?0:r[r.length-1].sno+1,title:e,description:t};d([].concat(Object(i.a)(r),[n]))},c=Object(a.useState)(e),s=Object(o.a)(c,2),r=s[0],d=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(j,{title:"TODOS List"}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{addTodo:n}),Object(b.jsx)(h,{todos:r,onDelete:t})]})}}),Object(b.jsx)(x.a,{exact:!0,path:"/about",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(u,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.084bc919.chunk.js.map