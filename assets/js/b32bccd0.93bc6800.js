(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[261],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4296:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),s=["components"],o={id:"events",title:"Events and interactions"},c=void 0,l={unversionedId:"design-webforms/events/events",id:"design-webforms/events/events",isDocsHomePage:!1,title:"Events and interactions",description:"Events are usually used as a means of triggering certain behaviors. They are used in conjunction with different actions to create interaction in an application.",source:"@site/docs/design-webforms/events/events.md",sourceDirName:"design-webforms/events",slug:"/design-webforms/events/events",permalink:"/4d-web-studio/docs/design-webforms/events/events",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/design-webforms/events/events.md",version:"current",frontMatter:{id:"events",title:"Events and interactions"},sidebar:"docs",previous:{title:"Datasources",permalink:"/4d-web-studio/docs/design-webforms/datasources"},next:{title:"Rendering a webform",permalink:"/4d-web-studio/docs/rendering"}},d=[{value:"Configuring an event",id:"configuring-an-event",children:[{value:"Bind a class function to an event",id:"bind-a-class-function-to-an-event",children:[]},{value:"Bind a navigation action to an event",id:"bind-a-navigation-action-to-an-event",children:[]}]},{value:"Event types",id:"event-types",children:[{value:"User events",id:"user-events",children:[]},{value:"Datasource events",id:"datasource-events",children:[]},{value:"Example",id:"example",children:[]}]},{value:"List of datasource events",id:"list-of-datasource-events",children:[{value:"On Change",id:"on-change",children:[]}]},{value:"Chaining actions",id:"chaining-actions",children:[]}],u={toc:d};function p(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Events are usually used as a means of triggering certain behaviors. They are used in conjunction with different actions to create interaction in an application."),(0,i.kt)("p",null,"For example, if the user clicks a button on a webpage, you can choose how to react by calling a function or opening another webpage. Events can also be triggered ",(0,i.kt)("a",{parentName:"p",href:"datasource-events.md"},"when a datasource is updated"),". "),(0,i.kt)("p",null,"With 4D Web Studio, events are used to execute code on the 4D web server. No additional Javascript is needed."),(0,i.kt)("h2",{id:"configuring-an-event"},"Configuring an event"),(0,i.kt)("p",null,"You can bind your webform events to different actions such as executing a function or navigating to another webform."),(0,i.kt)("h3",{id:"bind-a-class-function-to-an-event"},"Bind a class function to an event"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a component or a datasource. The configuration panel displays the events compatible with the element selected")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click a "+" button in the list to attach the corresponding event to the component or datasource. ')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"execute a Member Function"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add parameters (datasources or values) and point at a local or remote datasource to update."))),(0,i.kt)("p",null,"A class function can be mapped to several events, and you can assign several events to the same class function."),(0,i.kt)("h3",{id:"bind-a-navigation-action-to-an-event"},"Bind a navigation action to an event"),(0,i.kt)("p",null,"To create navigation in your application, you can attach a navigation action to an event. That way, when the event triggers, it opens a webform in the current browser tab or in a new one."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select a component or a datasource and attach an event to it"),(0,i.kt)("li",{parentName:"ol"},"Select the webform to open when the event triggers"),(0,i.kt)("li",{parentName:"ol"},"Define if the webform opens in the current browser tab or a new one:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"search",src:n(6511).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Webforms do not currently share their contexts. This means that datasources are currently not shared between webforms. For example, you cannot use webform1's datasources in webform2.  "))),(0,i.kt)("h2",{id:"event-types"},"Event types"),(0,i.kt)("p",null,"Events can be set to trigger when end-users perform certain actions, or when datasources are updated."),(0,i.kt)("h3",{id:"user-events"},"User events"),(0,i.kt)("p",null,"You can set events to trigger when end-users perform certain actions, such as clicking a button."),(0,i.kt)("h4",{id:"example-creating-a-search-feature-using-the-onchange-event"},"Example: Creating a search feature using the ",(0,i.kt)("inlineCode",{parentName:"h4"},"onChange")," event"),(0,i.kt)("p",null,"The objective is to update a list of students displayed in a ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component according to what the end-user types in an input area."),(0,i.kt)("p",null,"In the image below: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Input")," element is bound to the local datasource ",(0,i.kt)("inlineCode",{parentName:"li"},"search")," (of type Text)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Matrix")," component displays a list of students based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"students")," datasource, which is an entity selection")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"search",src:n(2200).Z})),(0,i.kt)("p",null,"To display results corresponding to the text typed in the ",(0,i.kt)("strong",{parentName:"p"},"Input")," component, we need a ",(0,i.kt)("inlineCode",{parentName:"p"},"search")," function that performs a query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'exposed Function search($search : Text)->$result : cs.StudentsSelection\n    \n$search:="@"+$search+"@"\n    \n$result:=This.query("firstname = :1 or lastname = :1"; $search)   \n')),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"onChange")," event calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"search")," function and passes the text typed in the ",(0,i.kt)("strong",{parentName:"p"},"Input")," element as a parameter. This updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"students")," datasource:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"search",src:n(6418).Z})),(0,i.kt)("p",null,"Now everytime the text changes inside the ",(0,i.kt)("strong",{parentName:"p"},"Input")," element, a query is sent and the list of students displayed in the ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component is updated."),(0,i.kt)("h3",{id:"datasource-events"},"Datasource events"),(0,i.kt)("p",null,"Aside from events triggered by end-user actions, events can trigger automatically when datasources are updated."),(0,i.kt)("p",null,"For a list of datasource events, see ",(0,i.kt)("a",{parentName:"p",href:"#list-of-available-events"},"List of available events"),"."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"In the image below: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Datatable")," component displays a list of employees, based on an entity selection (the ",(0,i.kt)("inlineCode",{parentName:"li"},"employees")," datasource is attached)."),(0,i.kt)("li",{parentName:"ul"},"The button slices the ",(0,i.kt)("inlineCode",{parentName:"li"},"employees")," entity selection datasource to keep only the first three entities."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange")," event is attached to the ",(0,i.kt)("inlineCode",{parentName:"li"},"employees")," datasource."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Text")," component contains a local datasource of type Text, called ",(0,i.kt)("em",{parentName:"li"},"result"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"event-datasource",src:n(9659).Z})),(0,i.kt)("p",null,"When the end-user clicks the button, the ",(0,i.kt)("inlineCode",{parentName:"p"},"employees")," datasource is updated, triggering the ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange")," event. This calls ",(0,i.kt)("inlineCode",{parentName:"p"},"displayValue")," to update ",(0,i.kt)("em",{parentName:"p"},"result"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"event-datasource-event",src:n(5775).Z})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"displayValue")," function returns text according to the number of entities: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'exposed function displayValue() -> $result : Text\n$result:="The table now displays " + String(This.length) + " entries"\n')),(0,i.kt)("p",null,"Here's what you obtain after the button is clicked:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"event-datasource-result",src:n(1329).Z})),(0,i.kt)("h2",{id:"list-of-datasource-events"},"List of datasource events"),(0,i.kt)("h3",{id:"on-change"},"On Change"),(0,i.kt)("p",null,"An On Change event attached a datasource triggers in the following cases:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Datasource"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"The reference pointed by the datasource changes in the web browser (not on the server)"),(0,i.kt)("li",null,"The entity is ",(0,i.kt)("a",{parentName:"td",href:"https://developer.4d.com/docs/en/API/EntityClass.html#touched"},"touched"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Entity attribute"),(0,i.kt)("td",{parentName:"tr",align:null},"The contents of the entity attribute change.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Local datasource"),(0,i.kt)("td",{parentName:"tr",align:null},"The contents of the local datasource change.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Entity selection datasource"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("li",null,"The reference pointed by the datasource changes in the web browser (not on the server)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("li",null,"An entity is added to the entity selection")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"chaining-actions"},"Chaining actions"),(0,i.kt)("p",null,"You can attach several events to a component or datasource. "),(0,i.kt)("p",null,"When the event triggers, "),(0,i.kt)("p",null,"Events are executed in their defined order."))}p.isMDXComponent=!0},5775:function(e,t,n){"use strict";t.Z=n.p+"assets/images/event-datasource-event-fe6d095f676460ee48e53745dd5e2682.png"},1329:function(e,t){"use strict";t.Z="data:image/png;base64,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"},9659:function(e,t,n){"use strict";t.Z=n.p+"assets/images/event-datasource-79b413c686e5251319117c0571401b50.png"},6511:function(e,t,n){"use strict";t.Z=n.p+"assets/images/navigation-event-d24a5ad320a43b4dbceb2dbd2a324cd7.png"},2200:function(e,t,n){"use strict";t.Z=n.p+"assets/images/search-component-7a4a310f485f3937e4b961f38d0d5cee.png"},6418:function(e,t,n){"use strict";t.Z=n.p+"assets/images/search-event-b7ad7dd1256ecc0e2f502150cf008222.png"}}]);