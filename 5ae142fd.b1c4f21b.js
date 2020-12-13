(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(101)),i={title:"View bounds"},c={unversionedId:"example-view-bounds",id:"example-view-bounds",isDocsHomePage:!1,title:"View bounds",description:"Click a rectangle to fit the map to its bounds",source:"@site/docs/example-view-bounds.md",slug:"/example-view-bounds",permalink:"/docs/example-view-bounds",version:"current",sidebar:"docs",previous:{title:"Draggable Marker",permalink:"/docs/example-draggable-marker"},next:{title:"Animated panning",permalink:"/docs/example-animated-panning"}},s=[],u={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Usage")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Click a rectangle to fit the map to its bounds"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0}),"const innerBounds = [\n  [49.505, -2.09],\n  [53.505, 2.09],\n]\nconst outerBounds = [\n  [50.505, -29.09],\n  [52.505, 29.09],\n]\n\nconst redColor = { color: 'red' }\nconst whiteColor = { color: 'white' }\n\nfunction SetBoundsRectangles() {\n  const [bounds, setBounds] = useState(outerBounds)\n  const map = useMap()\n\n  const innerHandlers = useMemo(\n    () => ({\n      click() {\n        setBounds(innerBounds)\n        map.fitBounds(innerBounds)\n      },\n    }),\n    [map],\n  )\n  const outerHandlers = useMemo(\n    () => ({\n      click() {\n        setBounds(outerBounds)\n        map.fitBounds(outerBounds)\n      },\n    }),\n    [map],\n  )\n\n  return (\n    <>\n      <Rectangle\n        bounds={outerBounds}\n        eventHandlers={outerHandlers}\n        pathOptions={bounds === outerBounds ? redColor : whiteColor}\n      />\n      <Rectangle\n        bounds={innerBounds}\n        eventHandlers={innerHandlers}\n        pathOptions={bounds === innerBounds ? redColor : whiteColor}\n      />\n    </>\n  )\n}\n\nrender(\n  <MapContainer bounds={outerBounds} scrollWheelZoom={false}>\n    <TileLayer\n      attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n      url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    />\n    <SetBoundsRectangles />\n  </MapContainer>,\n)\n")))}l.isMDXComponent=!0}}]);