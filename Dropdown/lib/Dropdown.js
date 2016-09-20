!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-svg-icons"),require("react"),require("react-collapse"),require("react-custom-scrollbars"),require("react-dom")):"function"==typeof define&&define.amd?define(["dnn-svg-icons","react","react-collapse","react-custom-scrollbars","react-dom"],t):"object"==typeof exports?exports.Dropdown=t(require("dnn-svg-icons"),require("react"),require("react-collapse"),require("react-custom-scrollbars"),require("react-dom")):e.Dropdown=t(e["dnn-svg-icons"],e.react,e["react-collapse"],e["react-custom-scrollbars"],e["react-dom"])}(this,function(e,t,n,o,r){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(6),p=o(a),d=n(9),c=o(d),u=n(7),f=o(u),h=n(8),b=o(h),v=n(5);n(4);var g=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={dropDownOpen:!1,fixedHeight:0},e.handleClick=e.handleClick.bind(e),e.uniqueId=Date.now()*Math.random(),e}return l(t,e),s(t,[{key:"toggleDropdown",value:function(){var e=this.props;e.enabled?this.setState({dropDownOpen:!this.state.dropDownOpen}):this.setState({dropDownOpen:!1})}},{key:"getDropdownHeight",value:function(e,t){var n=this.props;if(n.fixedHeight)return n.fixedHeight;var o=("large"===t?38:28)*e;return o<140?o+20:160}},{key:"componentWillMount",value:function(){var e=this.props;if(e.options.length>0){var t=this.getDropdownHeight(e.options.length,e.size);this.setState({fixedHeight:t})}}},{key:"componentWillReceiveProps",value:function(e){if(e.options.length>0){var t=this.getDropdownHeight(e.options.length,e.size);this.setState({fixedHeight:t})}}},{key:"componentDidMount",value:function(){var e=this.props;e.closeOnClick&&document.addEventListener("click",this.handleClick),this._isMounted=!0}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick),this._isMounted=!1}},{key:"handleClick",value:function(e){var t=this.props;this._isMounted&&t.closeOnClick&&(c["default"].findDOMNode(this).contains(e.target)||this.setState({dropDownOpen:!1}))}},{key:"onSelect",value:function(e){var t=this.props;t.enabled&&(this.setState({dropDownOpen:!1}),t.onSelect(e))}},{key:"getClassName",value:function(){var e=this.props,t=this.state,n="dnn-dropdown";return n+=e.withBorder?" with-border":"",n+=" "+e.size,n+=e.enabled?t.dropDownOpen?" open":"":" disabled"}},{key:"getDropdownLabel",value:function(){var e=this.props,t=e.label;return void 0!==e.value&&void 0!==e.options&&e.options.length>0&&(t=e.options.find(function(t){return t.value===e.value}).label),t}},{key:"render",value:function(){var e=this,t=this.props,n=this.state,o=t.options.map(function(n,o){return p["default"].createElement("li",{onClick:e.onSelect.bind(e,n),key:e.uniqueId+"option-"+o,className:n.value===t.value?"selected":""},n.label)});return p["default"].createElement("div",{className:this.getClassName(),style:t.style,onClick:this.toggleDropdown.bind(this)},p["default"].createElement("div",{className:"collapsible-label"},this.getDropdownLabel()),t.withIcon&&p["default"].createElement("div",{className:"dropdown-icon",dangerouslySetInnerHTML:{__html:v.ArrowDownIcon}}),p["default"].createElement("div",{className:"collapsible-content"+(n.dropDownOpen?" open":"")},p["default"].createElement(f["default"],{fixedHeight:n.fixedHeight,keepCollapsedContent:!0,isOpened:n.dropDownOpen},p["default"].createElement(b["default"],{width:t.collapsibleWidth||"100%",height:t.collapsibleHeight||"100%",style:t.scrollAreaStyle},p["default"].createElement("div",null,p["default"].createElement("ul",null,o))),!t.fixedHeight&&p["default"].createElement("ul",null,o))))}}]),t}(a.Component);g.PropTypes={label:a.PropTypes.string,fixedHeight:a.PropTypes.number,collapsibleWidth:a.PropTypes.number,collapsibleHeight:a.PropTypes.number,keepCollapsedContent:a.PropTypes.bool,scrollAreaStyle:a.PropTypes.object,options:a.PropTypes.array,onSelect:a.PropTypes.func,size:a.PropTypes.string,withBorder:a.PropTypes.bool,withIcon:a.PropTypes.bool,enabled:a.PropTypes.bool,value:a.PropTypes.oneOfType([a.PropTypes.number,a.PropTypes.string]),closeOnClick:a.PropTypes.bool},g.defaultProps={label:"-- Select --",withIcon:!0,withBorder:!0,size:"small",closeOnClick:!0,enabled:!0},t["default"]=g},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-dropdown{position:relative;display:inline-block;padding:8px 40px 8px 15px;cursor:pointer}.dnn-dropdown.disabled{background:#e5e7e6;color:#959695;cursor:not-allowed}.dnn-dropdown.disabled svg{fill:#959695}.dnn-dropdown.disabled .collapsible-label{cursor:not-allowed}.dnn-dropdown.open .collapsible-content{background:#fff;border:1px solid #c8c8c8;margin-top:3px}.dnn-dropdown.open.with-border{border:1px solid #1e88c3}.dnn-dropdown.with-border{border:1px solid #959695}.dnn-dropdown.with-border .collapsible-content{box-shadow:none;margin-top:0}.dnn-dropdown.with-border .collapsible-content.open{border:1px solid #c8c8c8;border-top:none}.dnn-dropdown.with-border.disabled{border:1px solid #e5e7e6}.dnn-dropdown.large{padding:12px 40px 12px 15px}.dnn-dropdown.large .dropdown-icon{top:15px}.dnn-dropdown.large .collapsible-label{font-size:14px}.dnn-dropdown.large .collapsible-content{top:43px}.dnn-dropdown.large .collapsible-content ul li{padding:11px 15px}.dnn-dropdown .dropdown-icon{position:absolute;width:13px;height:13px;right:10px;top:9px}.dnn-dropdown .dropdown-icon svg{fill:#6f7273}.dnn-dropdown .collapsible-label{cursor:pointer;font-family:proxima_nova_semibold;position:relative;width:100%;font-size:13px;border:none;color:#46292b}.dnn-dropdown .collapsible-content{position:absolute;padding:0;left:-1px;top:33px;width:100%;box-sizing:content-box;background-color:#fff;z-index:1000;box-shadow:0 0 20px 0 rgba(0,0,0,.2)}.dnn-dropdown .collapsible-content ul{padding:10px 0 0}.dnn-dropdown .collapsible-content ul li{padding:6px 15px;text-indent:0;cursor:pointer;font-size:13px;color:#6f7273}.dnn-dropdown .collapsible-content ul li.selected{color:#1e88c3}.dnn-dropdown .collapsible-content ul li:hover{background-color:#eff0f0;color:#1e88c3}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var l=t[r];"number"==typeof l[0]&&o[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=f[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(p(o.parts[i],t))}else{for(var l=[],i=0;i<o.parts.length;i++)l.push(p(o.parts[i],t));f[o.id]={id:o.id,refs:1,parts:l}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],l=r[1],s=r[2],a=r[3],p={css:l,media:s,sourceMap:a};n[i]?n[i].parts.push(p):t.push(n[i]={id:i,parts:[p]})}return t}function i(e,t){var n=v(),o=m[m.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function l(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function a(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function p(e,t){var n,o,r;if(t.singleton){var i=w++;n=g||(g=s(t)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),o=u.bind(null,n),r=function(){l(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=c.bind(null,n),r=function(){l(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function d(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function c(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function u(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,w=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],l=0;l<n.length;l++){var s=n[l],a=f[s.id];a.refs--,i.push(a)}if(e){var p=r(e);o(p,t)}for(var l=0;l<i.length;l++){var a=i[l];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete f[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.id,o,""]]);n(3)(o,{});o.locals&&(e.exports=o.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r}])});