(this["webpackJsonpapp-news"]=this["webpackJsonpapp-news"]||[]).push([[9],{102:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a.n(n),s=a(0),c=a.n(s),o=a(5),i=a(82),l=a(44),u=a(7),p=a(83),d=a.n(p),m=a(47),f=a(62),h=(a(99),a(100),function(e){return c.a.createElement("div",Object.assign({},e,{style:{backgroundColor:"#37b2ab",border:"1px solid #fff",borderRadius:"100%"}}))}),b={dots:!1,infinite:!1,speed:500,slidesToShow:3,draggable:!1,slidesToScroll:1,centerPadding:"100px",nextArrow:c.a.createElement(h,null),prevArrow:c.a.createElement(h,null),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},v=function(e){var t=e.items,a=e.category,n=Object(o.i)().code;return c.a.createElement("section",null,c.a.createElement(u.b,{className:"cursor-pointer hover:text-teal-300",to:"/".concat(n,"/categories/").concat(a)},c.a.createElement("h1",{className:"text-2xl capitalize my-5 inline-flex items-center"},a," ",c.a.createElement(f.b,{className:"ml-1 text-3xl"}))),c.a.createElement(d.a,b,t.map((function(e,t){return c.a.createElement("div",{key:t,className:"h-full p-2"},c.a.createElement(u.b,{to:{pathname:"/".concat(n,"/news/").concat(e.source.id),state:e},className:"cursor-pointer"},c.a.createElement(m.a,e)))}))))},x=a(17),g=["business","entertainment","general","health","science","sports","technology"],w=function(e){var t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=g.map((function(t){return l.a.fetch({category:t,country:e,pageSize:5})})),a.abrupt("return",Promise.all(t));case 2:case"end":return a.stop()}}))},E=function(){var e=Object(o.i)().code,t=Object(i.a)((function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(w(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}),[e]);return c.a.createElement("div",{className:"mb-5 sm:px-1 md:px-12"},c.a.createElement("h1",{className:"sm:text-center md:text-left text-2xl"},"Top 5 news by categories from ",c.a.createElement("span",{className:"uppercase"},e)),c.a.createElement("div",{className:"border-1 rounded"},t.loading?c.a.createElement(x.a,null):t.value&&t.value.map((function(e,t){return c.a.createElement(v,{key:t,items:e,category:g[t]})}))))};a.d(t,"default",(function(){return E}))},42:function(e,t){},43:function(e,t,a){"use strict";var n=a(40),r=a.n(n),s=a(13),c=a(12),o=a(50),i=a.n(o),l=function(e){return"ECONNABORTED"===e.code?Promise.reject({status:408,statusText:"Timeout request"}):Promise.reject(Object(s.a)({status:e.response?e.response.status:500,statusText:e.response?e.response.statusText:"Network Error"},e.response&&e.response.data?e.response.data:{}))},u=function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.a)({},e,{params:Object(s.a)({},e.params,{apiKey:"f273e5c79b32423b9d139576ce5e2b5d"})}));case 1:case"end":return t.stop()}}))};a.d(t,"a",(function(){return p}));var p=function e(){var t=this;Object(c.a)(this,e),this.api=void 0,this.request=function(e){var a,n,c,o,i,l=arguments;return r.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:void 0,c=l.length>3&&void 0!==l[3]?l[3]:void 0,o=l.length>4?l[4]:void 0,u.next=6,r.a.awrap(t.api.request(Object(s.a)({data:n,method:a,params:c,url:e},o)));case 6:return i=u.sent,u.abrupt("return",i.data);case 8:case"end":return u.stop()}}))},this.api=i.a.create({baseURL:"https://newsapi.org/v2",headers:{Accept:"application/json","Content-Type":"application/json"},timeout:5e3}),this.api.interceptors.response.use(void 0,l),this.api.interceptors.request.use(u)}},44:function(e,t,a){"use strict";var n=a(40),r=a.n(n),s=a(12),c=a(16),o=a(14),i=a(18),l=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).apiPath="/top-headlines",a.fetch=function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(a.request(a.apiPath,"get",void 0,e));case 2:return t=n.sent,n.abrupt("return",t.articles);case 4:case"end":return n.stop()}}))},a}return Object(i.a)(t,e),t}(a(46).default);t.a=new l},46:function(e,t,a){"use strict";var n=a(43);a.d(t,"default",(function(){return n.a}));a(42)},47:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(5),c=a(7),o=function(e){var t=e.title,a=e.description,n=e.urlToImage,o=e.source,i=e.content,l=Object(s.i)().code;return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg min-h-full flex flex-col justify-between"},r.a.createElement("img",{className:"w-full h-64 object-cover",height:200,src:n||"http://www.geographicexperiences.com/wp-content/uploads/revslider/home5/placeholder-1200x500.png",alt:t}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold mb-2 h-32 sm:text-sm md:text-base overflow-y-hidden"},t),r.a.createElement("p",{className:"text-gray-700 text-base overflow-hidden h-32"},a)),r.a.createElement("div",{className:"px-6 py-4 flex flex-row-reverse"},r.a.createElement(c.b,{to:{pathname:"/".concat(l,"/news/").concat(o.id),state:{title:t,urlToImage:n,content:i}},className:"cursor-pointer"},r.a.createElement("span",{className:"block bg-gray-200 rounded-full px-8 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-500"},"More"))))};a.d(t,"a",(function(){return o}))}}]);
//# sourceMappingURL=9.6b224bc8.chunk.js.map