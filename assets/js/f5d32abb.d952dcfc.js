(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[553],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3400:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={id:"license-usage",title:"About license usage"},c=void 0,u={unversionedId:"license-usage",id:"license-usage",isDocsHomePage:!1,title:"About license usage",description:"4D Web Studio's URL scheme configuration (HTTP and HTTPS) determines how many licenses are retained when rendering webforms. With the right configuration, you can avoid unnecessary license retaining.",source:"@site/docs/license-usage.md",sourceDirName:".",slug:"/license-usage",permalink:"/4d-web-studio/docs/license-usage",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/license-usage.md",version:"current",frontMatter:{id:"license-usage",title:"About license usage"},sidebar:"docs",previous:{title:"Configuration",permalink:"/4d-web-studio/docs/configuration"},next:{title:"Designing a webform",permalink:"/4d-web-studio/docs/webforms/design-webform"}},l=[{value:"URL Schemes",id:"url-schemes",children:[]},{value:"Example",id:"example",children:[]},{value:"SameSite attribute",id:"samesite-attribute",children:[]},{value:"Recommendations",id:"recommendations",children:[]}],d={toc:l};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"4D Web Studio's URL scheme configuration (HTTP and HTTPS) determines how many licenses are retained when rendering webforms. With the right configuration, you can avoid unnecessary license retaining."),(0,i.kt)("h2",{id:"url-schemes"},"URL Schemes"),(0,i.kt)("p",null,"As explained in the ",(0,i.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/configuration"},"configuration")," section, the 4D ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html"},"WebAdmin web server")," provides a secured web access to 4D Web Studio."),(0,i.kt)("p",null,"On the other hand, the ",(0,i.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/webforms/rendering"},"renderer")," communicates with the 4D web server of the database using REST requests. As such, it behaves like a conventional 4D Client."),(0,i.kt)("p",null,"If you run the renderer from the studio and these two web servers are not reached through the same URL scheme (HTTP or HTTPS), it might lead to wrong licence counting."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You run the Web Studio on an HTTPS URL scheme (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:7443/studio/"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The web server of your database is started only on an HTTP port."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt-text",src:n(9626).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In the studio, you click on the ",(0,i.kt)("strong",{parentName:"li"},"rendering icon"),". You are warned that the two web servers are started on different schemes, but despite this you click on the ",(0,i.kt)("strong",{parentName:"li"},"Confirm")," button. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt-text",src:n(8197).Z})),(0,i.kt)("p",null,"As a result, two licenses are retained."),(0,i.kt)("h2",{id:"samesite-attribute"},"SameSite attribute"),(0,i.kt)("p",null,"The behavior previously described is due to the session cookie of the 4D web server. This session cookie has a ",(0,i.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute that determines if the session cookie is sent to the web server."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute's value is ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict")," (default), the session cookie is not sent to the web server, so a new session is opened each time a page is rendered or refreshed."),(0,i.kt)("p",null,"For more information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute, check out ",(0,i.kt)("a",{parentName:"p",href:"https://blog.4d.com/get-ready-for-the-new-%60SameSite%60-and-secure-attributes-for-cookies/"},"this blog post"),"."),(0,i.kt)("h2",{id:"recommendations"},"Recommendations"),(0,i.kt)("p",null,"To avoid using more licenses than necessary, we recommend doing one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run the renderer on another browser tab (by entering the rendered URL of your Web form: ",(0,i.kt)("inlineCode",{parentName:"p"},"IP:port/$lib/renderer/?w=WebFormName"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ensure the Web Studio and your database are reached on the same URL scheme.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Lax")," value for the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/WebServer/webServerConfig.html#session-cookie-%60SameSite%60"},"session cookie")," of your project database's web server."))))}m.isMDXComponent=!0},8197:function(e,t,n){"use strict";t.Z=n.p+"assets/images/render-button-2efd7d27640056f8a19e71494f6af415.png"},9626:function(e,t,n){"use strict";t.Z=n.p+"assets/images/schemes-75be10c4c974242c227fe302ca126531.png"}}]);