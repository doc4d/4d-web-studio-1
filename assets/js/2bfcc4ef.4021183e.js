(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[670],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,A=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(A,o(o({ref:t},d),{},{components:n})):r.createElement(A,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4441:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o=["components"],i={id:"components",title:"Components"},s=void 0,p={unversionedId:"design-webforms/components",id:"design-webforms/components",isDocsHomePage:!1,title:"Components",description:"Components are the building blocks of your application. To add a component, drag it from the Components section and drop it on the canvas.",source:"@site/docs/design-webforms/components.md",sourceDirName:"design-webforms",slug:"/design-webforms/components",permalink:"/4d-web-studio/docs/design-webforms/components",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/design-webforms/components.md",version:"current",frontMatter:{id:"components",title:"Components"},sidebar:"docs",previous:{title:"Creating a webform",permalink:"/4d-web-studio/docs/design-webforms/create-webform"},next:{title:"Styling",permalink:"/4d-web-studio/docs/design-webforms/styling"}},d=[{value:"Component list",id:"component-list",children:[]},{value:"Server-side reference",id:"server-side-reference",children:[]},{value:"Managing your components",id:"managing-your-components",children:[{value:"Tooltip",id:"tooltip",children:[]},{value:"Breadcrumbs",id:"breadcrumbs",children:[]},{value:"Outline",id:"outline",children:[]}]}],u={toc:d};function c(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Components are the building blocks of your application. To add a component, drag it from the Components section and drop it on the canvas."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"add-component-screenshot",src:n(5135).Z})),(0,l.kt)("h2",{id:"component-list"},"Component list"),(0,l.kt)("p",null,"The Component library lets you search for a component or choose one from the list. Once a component is on the canvas, you can ",(0,l.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/design-webforms/styling"},"customize its look")," and bind a data source to it."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt-text",src:n(8435).Z})),(0,l.kt)("p",null,"The following components are available: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Webform"),(0,l.kt)("td",{parentName:"tr",align:null},"Base container that holds all the other components")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Stylebox"),(0,l.kt)("td",{parentName:"tr",align:null},"Container used to keep the content centered and legible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grid"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows you to produce complex and responsive layouts faster. Grid areas can be edited directly on the canvas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Columns"),(0,l.kt)("td",{parentName:"tr",align:null},"Displays data inside columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tabs"),(0,l.kt)("td",{parentName:"tr",align:null},"Organizes and allows navigation between groups of content that are related and at the same level of hierarchy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text input"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows users to enter data in a form")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Button"),(0,l.kt)("td",{parentName:"tr",align:null},"Triggers actions on a web page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Radio button"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows selecting one of a set of options (only one option can be selected at any time)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range input"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows selecting a value in a range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Select box"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows selecting an item in a list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Image"),(0,l.kt)("td",{parentName:"tr",align:null},"Displays an image")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Displays an icon")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows the user to make a binary choice (boolean value)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"Displays text on a web page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Datatable"),(0,l.kt)("td",{parentName:"tr",align:null},"Displays data in the form of a table. You can select a row to interact with the server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Matrix"),(0,l.kt)("td",{parentName:"tr",align:null},"Container of repeated style boxes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Webform loader"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows you to embed a Webform inside another to create navigation in your application")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"More components will be available in the future, and existing components will be enhanced.")),(0,l.kt)("h2",{id:"server-side-reference"},"Server-side reference"),(0,l.kt)("p",null,'The server-side reference of a component is its "address" on the server. To set the behavior of a component, you can give it a server-side reference, and then ',(0,l.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/API/WebFormItemClass"},"use that reference in class functions"),"."),(0,l.kt)("p",null,"To assign a server-side reference to a component, enter a value in the Properties panel > Server Side:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt-text",src:n(7592).Z})),(0,l.kt)("h2",{id:"managing-your-components"},"Managing your components"),(0,l.kt)("p",null,"You can use the following tools to manage your components."),(0,l.kt)("h3",{id:"tooltip"},"Tooltip"),(0,l.kt)("p",null,"When you select a component, the tooltip displays its type and offers several actions:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tooltip",src:n(2717).Z})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Icon"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cursor"),(0,l.kt)("td",{parentName:"tr",align:null},"Move the selected component on the canvas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Arrow"),(0,l.kt)("td",{parentName:"tr",align:null},"Select the parent component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delete"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove the selected component from the canvas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CSS"),(0,l.kt)("td",{parentName:"tr",align:null},"Export the ",(0,l.kt)("a",{parentName:"td",href:"/4d-web-studio/docs/design-webforms/styling#overriding-style-properties"},"overriden CSS properties")," to a new CSS class")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Barred T"),(0,l.kt)("td",{parentName:"tr",align:null},"Reset styles (resets the ",(0,l.kt)("a",{parentName:"td",href:"/4d-web-studio/docs/design-webforms/styling#overriding-style-properties"},"overriden CSS properties"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Duplicate icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Duplicate the component")))),(0,l.kt)("p",null,"The tooltip is contextual. This means that some actions are only available to certain elements, and not others. For example, you can duplicate a Text input component, but not its individual parts (Label and Input)."),(0,l.kt)("h3",{id:"breadcrumbs"},"Breadcrumbs"),(0,l.kt)("p",null,"When you select a component, the breadcrumbs display its hierarchy:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"breadcrumbs",src:n(553).Z})),(0,l.kt)("p",null,"To select any parent component displayed in the breadcrumbs trail, click its name. "),(0,l.kt)("h3",{id:"outline"},"Outline"),(0,l.kt)("p",null,"The outline section displays the hierarchy of your webform. You can click an element in the list to select it, or click and drag it anywhere in the outline to move it somewhere else."),(0,l.kt)("p",null,"To display or hide an element, click the eye icon."))}c.isMDXComponent=!0},5135:function(e,t,n){"use strict";t.Z=n.p+"assets/images/add-component-b09f2f7c30fc7d41fc96f60f443e4e2d.png"},553:function(e,t){"use strict";t.Z="data:image/png;base64,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"},8435:function(e,t,n){"use strict";t.Z=n.p+"assets/images/components-bba43d3931cfe73cc17fa4d583a0bdde.png"},7592:function(e,t){"use strict";t.Z="data:image/png;base64,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"},2717:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);