(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[375],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var A=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,A,o=function(e,t){if(null==e)return{};var n,A,o={},i=Object.keys(e);for(A=0;A<i.length;A++)n=i[A],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(A=0;A<i.length;A++)n=i[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=A.createContext({}),l=function(e){var t=A.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return A.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},u=A.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?A.createElement(m,r(r({ref:t},c),{},{components:n})):A.createElement(m,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var l=2;l<i;l++)r[l]=n[l];return A.createElement.apply(null,r)}return A.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7273:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var A=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],a={id:"coding-and-debugging",title:"Coding"},s=void 0,l={unversionedId:"coding-and-debugging",id:"coding-and-debugging",isDocsHomePage:!1,title:"Coding",description:"You use events in conjunction with class functions to manage the information inside your web application.",source:"@site/docs/coding-and-debugging.md",sourceDirName:".",slug:"/coding-and-debugging",permalink:"/4d-web-studio/docs/coding-and-debugging",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/coding-and-debugging.md",version:"current",frontMatter:{id:"coding-and-debugging",title:"Coding"},sidebar:"docs",previous:{title:"Rendering a webform",permalink:"/4d-web-studio/docs/rendering"}},c=[{value:"ORDA Classes",id:"orda-classes",children:[]},{value:"4D classes",id:"4d-classes",children:[]},{value:"Using project methods",id:"using-project-methods",children:[]},{value:"Code Editor",id:"code-editor",children:[]}],d={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,A.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You use ",(0,i.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/design-webforms/events/configuring-event"},"events")," in conjunction with class functions to manage the information inside your web application."),(0,i.kt)("h3",{id:"orda-classes"},"ORDA Classes"),(0,i.kt)("p",null,"The flow of data in the studio is handled through data model classes that allow you to manage your business logic. See ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/ORDA/ordaClasses.html"},"ORDA classes")," for more information."),(0,i.kt)("h3",{id:"4d-classes"},"4D classes"),(0,i.kt)("p",null,"Some classes available only in the studio allow you to set the behavior of your components. They are instantiated using 4D commands."),(0,i.kt)("p",null,"For example, to display or hide a component when an event occurs, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/API/WebFormItemClass"},"4D.WebFormItem class functions"),"."),(0,i.kt)("h3",{id:"using-project-methods"},"Using project methods"),(0,i.kt)("p",null,"We recommend using class functions over methods, but you can still use your project methods as REST functions in the studio."),(0,i.kt)("p",null,"To be used in 4D Web Studio, project methods must be defined as Datastore, Dataclass, Entity or Entity selection class functions. "),(0,i.kt)("p",null,"To check if a method is available as REST function: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Explorer of your 4D application, ",(0,i.kt)("strong",{parentName:"li"},"right-click a project method")," > ",(0,i.kt)("strong",{parentName:"li"},"Edit Properties...")," to open the Method Properties dialog. "),(0,i.kt)("li",{parentName:"ol"},"Check that the ",(0,i.kt)("strong",{parentName:"li"},"REST Server")," option is checked.")),(0,i.kt)("p",null,"Selecting ",(0,i.kt)("strong",{parentName:"p"},"Scope")," > ",(0,i.kt)("strong",{parentName:"p"},"Catalog")," designates the project method as a function of the Datastore class. No table (dataclass) is assigned in this case."),(0,i.kt)("h2",{id:"code-editor"},"Code Editor"),(0,i.kt)("p",null,"4D Web Studio has an embedded code editor that allows you to edit your class function and methods. The code can still be edited from a 4D Desktop application. "),(0,i.kt)("p",null,'When a class function is open in the studio, and that class function is edited elsewhere, its Tab will display "Outdated", meaning that the code displayed is not the latest version. To obtain the latest version, right click the Tab and then choose ',(0,i.kt)("strong",{parentName:"p"},"Reload"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"code-editor",src:n(8952).Z})))}u.isMDXComponent=!0},8952:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);