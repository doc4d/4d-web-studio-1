(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[588],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return A},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},A=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(h,a(a({ref:t},A),{},{components:n})):r.createElement(h,a({ref:t},A))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},569:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return A},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={id:"settings",title:"Settings"},l=void 0,u={unversionedId:"settings",id:"settings",isDocsHomePage:!1,title:"Settings",description:"The Settings panel allows you to customize the Web Studio interface for the current project and the current user.",source:"@site/docs/settings.md",sourceDirName:".",slug:"/settings",permalink:"/4d-web-studio/docs/settings",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/settings.md",version:"current",frontMatter:{id:"settings",title:"Settings"},sidebar:"docs",previous:{title:"Rendering a webform",permalink:"/4d-web-studio/docs/rendering"},next:{title:"Coding and debugging",permalink:"/4d-web-studio/docs/coding-and-debugging"}},A=[{value:"User",id:"user",children:[]},{value:"Database",id:"database",children:[]}],c={toc:A};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Settings panel allows you to customize the Web Studio interface for the current project and the current user. "),(0,i.kt)("p",null,"To open the Settings panel, click on the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," button from the Explorer or the toolbar:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"settings",src:n(2716).Z})),(0,i.kt)("p",null,"The following pages are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User"),": settings related to the user interface"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Database"),": settings related to the web project")),(0,i.kt)("h2",{id:"user"},"User"),(0,i.kt)("p",null,"This page contains settings related to the Web Studio user interface."),(0,i.kt)("h4",{id:"show-renderer-pop-over"},"Show Renderer Pop Over"),(0,i.kt)("p",null,"Displays or not a pop over when the renderer and the Studio use ",(0,i.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/configuration/license-usage#url-schemes"},"different URL schemes")," (which could lead to wrong licence counting)."),(0,i.kt)("h4",{id:"tooltip-behavior"},"Tooltip Behavior"),(0,i.kt)("p",null,"Defines how to display the ",(0,i.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/design-webforms/components#tooltip"},"component tooltip")," ",(0,i.kt)("img",{alt:"tooltip",src:n(196).Z})," when the mouse hovers a component area."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Show after timeout"),": The tooltip is displayed after a the defined timeout (and kept onscreen until the user moves the mouse). "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hide after timeout"),": The tooltip is immediately displayed and hidden after a the defined timeout.")),(0,i.kt)("h4",{id:"tooltip-timeout-in-seconds"},"Tooltip timeout (in seconds)"),(0,i.kt)("p",null,"Timeout for selected tooltip behavior."),(0,i.kt)("h4",{id:"enable-helper-tips"},"Enable Helper Tips"),(0,i.kt)("p",null,"Shows or hides the tips icons ",(0,i.kt)("img",{alt:"helper",src:n(9770).Z})," in the webform editor."),(0,i.kt)("h2",{id:"database"},"Database"),(0,i.kt)("h4",{id:"preview-page"},"Preview Page"),(0,i.kt)("p",null,"Allows to select a webform to use as the home page. When clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Preview/Run application")," button, this webform is rendered in a new tab."),(0,i.kt)("p",null,"This setting is defined at project level."))}p.isMDXComponent=!0},9770:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAC4SURBVDhPY7S3t//PQCFggtIUgVFDMAHtDVGQZgJjQgBrOrE2YmaI9WdhUFNgBPNvPfjPsHjjH4aj5/6C+egAwxoOdkaG7GiEASAAYoPEQHLYAIYhshKMDBIimIpBYiA5bADDkGevcOcCXHIYhnz9/p9h3wlMv4PEQHLYALOCgkIDlA0Hh878Y/gPhAaazGD+gvW/GSYv+QNmYwOE448IQPuiICOChSElhAXKww1GCyVMMFgMYWAAABpmL9tq7KKQAAAAAElFTkSuQmCC"},2716:function(e,t){"use strict";t.Z="data:image/png;base64,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"},196:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAApCAYAAAALSGYwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAOUSURBVHhe7ZnNTxNBGMYHU4kgpArGSqVFJRhMxMTGRE2MhkQ4yKWcuHjSv0tPXjzJhQs1wRA/E1MTxUhCwFiUCoFKQwVtm+g+05myuyyV7s5udsb5JW/mnd3tHvaZ92OmLX8MiEYpDrFRoxBaVAXRoiqIFlVBtKgK4tj97uz8IgtLy+RzboVsFrdItVpldzRhIBKJkGPRTnI2GScD5xKkre0Iu1Njj6jf8mtk7tMi+bqyyq5owkxvPEYuXugnp3tOsiu29IsI1YLKBbSCZtCOYxEVKVcLKh/QDNpxLKKihmrkxKydRVQ0RRo5MWtnaZQePJpk3v9L6tIguWyYmddvP5CP84tsFl7u303TsSX3fbMu6nRmhnneGehP0nFhMUdHL3R0tJOOo+1s1pjSz21SKm2zWfOMjw2TruNRNqsxOTVDNn4U2Sy8jI4M09GXSIWgN6+nqD/7KutZWKfo2Y937+dJ1jA3YPFMpEfZrAYWyeMn02wmjm62cEQuFh6pwk+UuKDlSoUafB61YacndoJ5u3xZzjNPHBA0bWQEGBdXJEJF5YIiOguFIjX4XoX9Xa7QEVGIbOJkuAe2jMhyS19vD/N2EVE+gkaYqGZBzR8CvldhCyxFnTIiCWnYbqC19TAdvdTTvoRVVKReP2op3ok67VetFiIqUoiToByzsF7SDdIj6usZ4+PHDZ8b8JrG7IICNGeoU9wmxq31NqwIERUpD6uuUarCPTzjJj3afzNnbC+mMs/rZsbtyneqp3bcNmB2pKipZaPmHeRj4hk82yz2lJoaGiR3Rm5Qu3ZliF5D5wrcvB84RaoZ7FMbLdowIbRRCgI0Rfm1dRpZMF5LD7qP3Q8ciqPZgi0sWcVDTccBhCikqKlBwJslgDSIGg0zp0TzM82CSMS7YBtG187Btsye4sOONKLytHr71lW69civrlODj2vAbeq1c97UpT999kbYezlS1NQgQe1DHcXJDwz+v+phM6A282NCpFwsHNmQRlR+qO6UYnEN90TUPd4F4yTJr0N8v2uqb//SIHqQtvxY6Ygm/vHxfi8HDnaQyjuN96OOik67fuPb2S8HK92v1AURsb2AiRQUdHdFyezLrHSCmpGupvoN/pHxIyUGiRZVQbSoCqJFVRAtqoLURU0+ZI5GWjLsyLq+T4WoL8bk7vo0NfaImoiJP4vUBEs9/ebuMUcjPbpRUhDdKCmIjlQF0aIqByF/Ad1D7wa5ecmMAAAAAElFTkSuQmCC"}}]);