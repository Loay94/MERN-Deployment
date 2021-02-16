(this.webpackJsonpauthers=this.webpackJsonpauthers||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),s=n(17),a=n.n(s),o=(n(23),n(24),n(3)),i=n(5),l=n(4),u=n.n(l),j=n(1),b=function(t){var e=t.id,n=Object(c.useState)(""),r=Object(i.a)(n,2),s=r[0],a=r[1],l=Object(c.useState)([]),b=Object(i.a)(l,2),h=b[0],d=b[1];Object(c.useEffect)((function(){u.a.get("http://localhost:8000/api/getAuthor/"+e).then((function(t){a(t.data.name)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Update a Author"}),Object(j.jsx)("p",{children:Object(j.jsx)(o.a,{to:"/",children:"Home"})}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.a.put("http://localhost:8000/api/update/"+e,{name:s}).then((function(){return Object(o.c)("/")})).catch((function(t){for(var e=t.response.data.errors,n=[],c=0,r=Object.keys(e);c<r.length;c++){var s=r[c];n.push(e[s].message)}d(n)}))},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsxs)("label",{children:["Name: ",h.map((function(t,e){return Object(j.jsx)("small",{style:{color:"red"},children:t},e)}))]}),Object(j.jsx)("input",{value:s,onChange:function(t){return a(t.target.value)},type:"text",className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group text-right",children:[Object(j.jsx)("button",{onClick:function(){return Object(o.c)("/")},type:"button",className:"btn btn-secondary btn-sm",children:"Go Back"}),Object(j.jsx)("button",{className:"btn btn-primary btn-sm",style:{marginLeft:"10px"},children:"Submit"})]})]})]})},h=function(t){var e=Object(c.useState)([]),n=Object(i.a)(e,2),r=n[0],s=n[1];Object(c.useEffect)((function(){u.a.get("http://localhost:8000/api/getAllAuthors").then((function(t){return s(t.data)})).catch((function(t){return console.log("There was an issue: ",t)}))}),[]);var a=function(t){u.a.delete("http://localhost:8000/api/delete/"+t).then((function(e){!function(t){s(r.filter((function(e){return e._id!=t})))}(t),console.log(t)}))};return Object(j.jsxs)("div",{className:"countaineer",children:[r.length>0&&r.map((function(t,e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:t.name},e),Object(j.jsx)("button",{onClick:function(e){return function(t,e){t.preventDefault(),Object(o.c)("/author/"+e+"/edit")}(e,t._id)},children:"Edit"},e),Object(j.jsx)("button",{onClick:function(e){a(t._id)},children:"Delete"},e)]})})),Object(j.jsx)("input",{type:"button",value:"Please Press Here to Add a New Author",onClick:function(){Object(o.c)("/new")}})]})},d=function(t){var e=Object(c.useState)(""),n=Object(i.a)(e,2),r=n[0],s=n[1],a=Object(c.useState)([]),l=Object(i.a)(a,2),b=l[0],h=l[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("p",{children:Object(j.jsx)(o.a,{to:"/",children:"Home"})}),Object(j.jsxs)("p",{children:["Add a new author:\xa0",b.map((function(t,e){return Object(j.jsx)("small",{style:{color:"red"},children:t},e)}))]})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.a.post("http://localhost:8000/api/createNewAuthor",{name:r}).then((function(){return Object(o.c)("/")})).catch((function(t){for(var e=t.response.data.errors,n=[],c=0,r=Object.keys(e);c<r.length;c++){var s=r[c];n.push(e[s].message)}h(n)}))},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Name:"}),Object(j.jsx)("input",{onChange:function(t){return s(t.target.value)},type:"text",className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group text-right",children:[Object(j.jsx)("button",{onClick:function(){return Object(o.c)("/")},type:"button",className:"btn btn-secondary btn-sm",children:"Cancel"}),Object(j.jsx)("button",{className:"btn btn-primary btn-sm",style:{marginLeft:"10px"},children:"Submit"})]})]})})})]})};var O=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.b,{children:[Object(j.jsx)(h,{path:"/"}),Object(j.jsx)(d,{path:"/new"}),Object(j.jsx)(b,{path:"author/:id/edit"})]})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),s(t),a(t)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),f()}},[[50,1,2]]]);
//# sourceMappingURL=main.da49e0cb.chunk.js.map