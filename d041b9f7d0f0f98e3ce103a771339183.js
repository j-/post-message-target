require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({5:[function(require,module,exports) {
"use strict";var e=function(e){var t=document.createElement("pre");t.textContent+=e+"\n",document.getElementById("console").appendChild(t)};window.addEventListener("message",function(t){"PROCESS"===t.data.command&&e("GOT MESSAGE ("+t.type+") "+JSON.stringify(t.data,null,2))}),e("SENDING READY MESSAGE"),window.parent.postMessage({event:"READY"},"*");
},{}]},{},[5])