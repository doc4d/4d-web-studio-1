(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[100],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6577:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=["components"],i={id:"datasources",title:"Datasources"},c=void 0,l={unversionedId:"datasources",id:"datasources",isDocsHomePage:!1,title:"Datasources",description:"What is a datasource",source:"@site/docs/datasources.md",sourceDirName:".",slug:"/datasources",permalink:"/4d-web-studio/docs/datasources",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/datasources.md",version:"current",frontMatter:{id:"datasources",title:"Datasources"},sidebar:"docs",previous:{title:"Rendering Webforms",permalink:"/4d-web-studio/docs/webforms/rendering"},next:{title:"Events, methods and class functions",permalink:"/4d-web-studio/docs/events"}},d=[{value:"What is a datasource",id:"what-is-a-datasource",children:[{value:"Exposed and non-exposed assets",id:"exposed-and-non-exposed-assets",children:[]}]},{value:"Creating a datasource",id:"creating-a-datasource",children:[]},{value:"Binding a datasource to a component:",id:"binding-a-datasource-to-a-component",children:[]},{value:"Attaching events to datasources",id:"attaching-events-to-datasources",children:[]}],p={toc:d};function u(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-datasource"},"What is a datasource"),(0,r.kt)("p",null,"Data sources contain data. You can bind them to your Webform components to determine where the data is displayed in your application."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Data Sources")," section groups the available datasources:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(3433).Z})),(0,r.kt)("p",null,"In this section, you'll find the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Catalog")," holds:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"data from your database: You can designate entities or entity selections from your ",(0,r.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/ORDA/dsmapping.html"},"datastore"),", and they will be handled by the server as ",(0,r.kt)("strong",{parentName:"li"},"Remote")," datasources."),(0,r.kt)("li",{parentName:"ul"},"Class functions: The Catalog displays the functions defined in each class. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remote")," datasources: Entities and entity selections, handled on the server, that can be assigned to components.\nThey offer functions defined on the ORDA classes that they instantiate (",(0,r.kt)("a",{parentName:"p",href:"../API/EntityClass.md"},"Entity class"),", ",(0,r.kt)("a",{parentName:"p",href:"../API/EntitySelectionClass.md"},"Entity Selection class"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Local")," datasources: Scalar types handled with the browser's memory. Can be assigned to variables. No request is sent to the server to access local datasources."))),(0,r.kt)("h3",{id:"exposed-and-non-exposed-assets"},"Exposed and non-exposed assets"),(0,r.kt)("p",null,"4D Web Studio runs through the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html"},"4D WebAdmin web server"),". When you use 4D Web Studio as a developer, even when you preview a webform in the studio, you\u2019re using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out)."),(0,r.kt)("p",null,"However, ",(0,r.kt)("a",{parentName:"p",href:"./rendering.md"},"webform rendering")," happens outside 4D Web Studio, and is served by the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/WebServer/webServer.html"},"standard 4D web server"),". In this situation, your web application cannot access assets that are not exposed as REST resources."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions"},"Exposed vs non-exposed functions")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/REST/configuration.html#exposing-tables"},"Exposing tables")," for more information on how to expose assets."),(0,r.kt)("h2",{id:"creating-a-datasource"},"Creating a datasource"),(0,r.kt)("p",null,"To create a datasource: "),(0,r.kt)("p",null,"From the Catalog: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1. In the Data Sources section, choose **Catalog** > **Data Classes**\n2. Click the "+" icon next to a dataclass\n3. Select Entity or Entity Selection and click **Confirm**. The newly created Entity or Entity selection now appears as a Remote datasource\n')),(0,r.kt)("p",null,'From a Remote datasource, click the "+" icon:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* next to an entity selection to create an entity\n* next to an entity's relation to create an entity selection or an entity  \n")),(0,r.kt)("h2",{id:"binding-a-datasource-to-a-component"},"Binding a datasource to a component:"),(0,r.kt)("p",null,"There are several ways to bind a datasource to a component:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag it from the Data Source section and drop it on a component"),(0,r.kt)("li",{parentName:"ul"},"Enter the name of the datasource in the ",(0,r.kt)("strong",{parentName:"li"},"Properties panel")," > ",(0,r.kt)("strong",{parentName:"li"},"DataSource")," ")),(0,r.kt)("h2",{id:"attaching-events-to-datasources"},"Attaching events to datasources"),(0,r.kt)("p",null,"You can attach events to datasources to trigger certain actions when a datasource is updated. See ",(0,r.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/events#events-on-datasources"},"Events on datasources")," for more information."))}u.isMDXComponent=!0},3433:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);