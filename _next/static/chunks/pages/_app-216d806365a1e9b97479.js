_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{0:function(e,n,t){t("GcxT"),e.exports=t("nOHt")},"1TCz":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),o=(t("zPlV"),t("YFqc")),c=t.n(o),l=(t("q4sD"),a.a.createElement);n.default=function(e){var n=e.Component,t=e.pageProps;return l(a.a.Fragment,null,l("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark"},l("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".collapsibleNavbar"},l("i",{class:"fas fa-bars"})),l("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},l("ul",{className:"navbar-nav"},l("li",null,l(c.a,{href:"/"},l("a",null,"Home"))),l("li",null,l(c.a,{href:"/about"},l("a",null,"About"))))),l("div",{class:"right-side"},l("div",{class:"brand",style:{color:"white"}},"Luigi Fanaro"))),l(n,t))}},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var o,c=a(t("q1tI")),l=t("g/15"),i=t("nOHt"),s=t("elyg");var u=new Map,f=window.IntersectionObserver,p={};var v=function(e,n){var t=o||(f?o=new f((function(e){e.forEach((function(e){if(u.has(e.target)){var n=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),u.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}u.delete(e)}):function(){}};function d(e,n,t,r){e.prefetch(n,t,r).catch((function(e){0})),p[n+"%"+t]=!0}function h(e,n,t,r,a,o,c){var i=e.currentTarget,s=i.nodeName,u=i.target;"A"===s&&(u&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var n=(0,l.getLocationOrigin)();return new URL(e,n).origin===n}(t)&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}var g=function(e){var n=!1!==e.prefetch,t=c.default.useState(),a=r(t,2),o=a[0],l=a[1],u=(0,i.useRouter)(),g=u&&u.pathname||"/",b=c.default.useMemo((function(){var n=(0,s.resolveHref)(g,e.href);return{href:n,as:e.as?(0,s.resolveHref)(g,e.as):n}}),[g,e.href,e.as]),w=b.href,y=b.as;c.default.useEffect((function(){if(n&&f&&o&&o.tagName&&!p[w+"%"+y])return v(o,(function(){d(u,w,y)}))}),[n,o,w,y,u]);var _=e.children,m=e.replace,E=e.shallow,N=e.scroll;"string"===typeof _&&(_=c.default.createElement("a",null,_));var T=c.Children.only(_),x={ref:function(e){e&&l(e),T&&"object"===typeof T&&T.ref&&("function"===typeof T.ref?T.ref(e):"object"===typeof T.ref&&(T.ref.current=e))},onClick:function(e){T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||h(e,u,w,y,m,E,N)}};return n&&(x.onMouseEnter=function(e){T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),d(u,w,y,{priority:!0})}),!e.passHref&&("a"!==T.type||"href"in T.props)||(x.href=(0,s.addBasePath)(y)),c.default.cloneElement(T,x)};n.default=g},q4sD:function(e,n,t){},zPlV:function(e,n,t){}},[[0,0,1,2]]]);