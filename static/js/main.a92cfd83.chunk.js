(this["webpackJsonpgithub-jobs-app"]=this["webpackJsonpgithub-jobs-app"]||[]).push([[0],{167:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(20),s=t.n(r),o=t(27),i=t(9),j=t(16),l=t(17),b=t.n(l),u="make-request",d="get-data",h="error",O="update_has_next_page",x="https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json";function m(e,a){switch(a.type){case u:return{loading:!0,jobs:[]};case d:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case h:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case O:return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var p=t(171),g=t(174),f=t(169),y=t(170),v=t(172),k=t(39),N=t.n(k),C=t(2);var P=function(e){var a=e.job,t=Object(c.useState)(!1),n=Object(j.a)(t,2),r=n[0],s=n[1];return Object(C.jsx)(g.a,{className:"mb-3",children:Object(C.jsxs)(g.a.Body,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(g.a.Title,{children:[a.title," - ",Object(C.jsx)("span",{className:"text-muted font-weight-light",children:a.company})]}),Object(C.jsx)(g.a.Subtitle,{className:"text-muted mb-2",children:new Date(a.created_at).toLocaleDateString()}),Object(C.jsx)(f.a,{variant:"secondary",className:"mr-2",children:a.type}),Object(C.jsx)(f.a,{variant:"secondary",children:a.location}),Object(C.jsx)("div",{style:{wordBreak:"break-all"},children:Object(C.jsx)(N.a,{source:a.how_to_apply,escapeHtml:!1})})]}),Object(C.jsx)("img",{className:"d-sm-none d-md-block",height:"50",src:a.company_logo,alt:a.company})]}),Object(C.jsx)(g.a.Text,{children:Object(C.jsx)(y.a,{onClick:function(){return s((function(e){return!e}))},variant:"primary",children:r?"Hide Details":"View Details"})}),Object(C.jsx)(v.a,{in:r,children:Object(C.jsx)("div",{className:"mt-4",children:Object(C.jsx)(N.a,{source:a.description,escapeHtml:!1})})})]})})},w=(t(165),t(175));var T=function(e){var a=e.page,t=e.setPage,c=e.hasNextPage;function n(e){t((function(a){return a+e}))}return Object(C.jsxs)(w.a,{children:[1!==a&&Object(C.jsx)(w.a.Prev,{onClick:function(){return n(-1)}}),1!==a&&Object(C.jsx)(w.a.Item,{onClock:function(){return t(1)},children:"1"}),a>2&&Object(C.jsx)(w.a.Ellipsis,{}),a>2&&Object(C.jsx)(w.a.Item,{onClick:function(){return n(-1)},children:a-1}),Object(C.jsx)(w.a.Item,{active:!0,children:a}),c&&Object(C.jsx)(w.a.Item,{onClick:function(){return n(1)},children:a+1}),c&&Object(C.jsx)(w.a.Next,{onClick:function(){return n(1)}})]})},_=t(173),S=t(65);var D=function(e){var a=e.params,t=e.onParamChange;return Object(C.jsx)(_.a,{className:"mb-4",children:Object(C.jsxs)(_.a.Row,{className:"align-items-end",children:[Object(C.jsxs)(_.a.Group,{as:S.a,children:[Object(C.jsx)(_.a.Label,{children:"Description"}),Object(C.jsx)(_.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})]}),Object(C.jsxs)(_.a.Group,{as:S.a,children:[Object(C.jsx)(_.a.Label,{children:"Location"}),Object(C.jsx)(_.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})]}),Object(C.jsx)(_.a.Group,{as:S.a,xs:"auto",className:"ml-2",children:Object(C.jsx)(_.a.Check,{onChange:t,value:a.full_time,name:"full-time",id:"full-time",label:"Only Full-Time",type:"checkbox",className:"mb-2"})})]})})};var I=function(){var e=Object(c.useState)({}),a=Object(j.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(1),s=Object(j.a)(r,2),l=s[0],g=s[1],f=function(e,a){var t=Object(c.useReducer)(m,{jobs:[],loading:!0}),n=Object(j.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=b.a.CancelToken.source();s({type:u}),b.a.get(x,{cancelToken:t.token,params:Object(i.a)({markdown:!1,page:a},e)}).then((function(e){s({type:d,payload:{jobs:e.data}})})).catch((function(e){b.a.isCancel(e)||s({type:h,payload:{error:e}})}));var c=b.a.CancelToken.source();return b.a.get(x,{cancelToken:c.token,params:Object(i.a)({markdown:!1,page:a+1},e)}).then((function(e){s({type:O,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){b.a.isCancel(e)||s({type:h,payload:{error:e}})})),function(){t.cancel(),c.cancel()}}),[e,a]),r}(t,l),y=f.jobs,v=f.loading,k=f.error,N=f.hasNextPage;return Object(C.jsxs)(p.a,{className:"my-4",children:[Object(C.jsx)("h1",{className:"mb-4",children:"GitHub Job Search"}),Object(C.jsx)(D,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;g(1),n((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},a,t))}))}}),Object(C.jsx)(T,{page:l,setPage:g,hasNextPage:N}),v&&Object(C.jsx)("h1",{children:"Loading..."}),k&&Object(C.jsx)("h1",{children:"Error. Try Refreshing."}),y.map((function(e){return Object(C.jsx)(P,{job:e},e.id)})),Object(C.jsx)(T,{page:l,setPage:g,hasNextPage:N})]})};s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(I,{})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.a92cfd83.chunk.js.map