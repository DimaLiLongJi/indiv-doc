(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t(2),r=function(){return[{h1:"什么是InDiv",p:["InDiv 是一个mvvm库。它能帮你构建 Web 应用。InDiv 字符串模板、依赖注入和一些实践于一身。"],info:["InDiv 是单词 individual 的缩写，我撸它的时候借鉴了很多 angular，react，vue 的模式与概念。","本网页是世界上第一个用 InDiv 构建的网页。","请使用 indiv 1.2.0 + 版本","在此致敬 angular，react 和 vue的大佬开发者们。感谢他们为前端做出的巨大贡献。"]},{h1:"基本假设",p:["本文档假设你已经熟悉了 JavaScript，TypeScript，和来自最新标准的一些知识，比如 class 和 esmodule。","下列代码范例都是用最新版本的 TypeScript 写的，利用 类型 实现依赖注入，并使用装饰器来提供元数据。"]},{h1:"基本理念",p:["InDiv 是一个 mvvm 库, 本身使用 TypeScript编写。","它将核心功能和可选功能作为一组 TypeScript 库进行实现，你可以把它们导入你的应用中。","通过 inDiv.use(modal: IMiddleware<InDiv>): number 方法，导入中间件并将indiv的全部权限暴露给中间件。"],info:["InDiv 基本构造块是 NvModule，它为组件提供了上下文环境和作用域","整个app的最小单位为 Component，页面上的一切皆为组件","异步渲染页面，尽量优化性能"]},{h1:"反馈",p:["你可以和我一起做贡献！你可以到 Github 上的仓库中提出文档方面的问题，并创建Pull Requests。","或者在 github 上联系我：DimaLiLongJi"]}]};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e,n,t,o){var i,r=arguments.length,f=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,n,t,o);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(f=(r<3?i(f):r>3?i(n,t,f):i(n,t))||f);return r>3&&f&&Object.defineProperty(n,t,f),f},p=function(){function e(){this.infos=r(),this.template='<div class="page-container">\n      <div class="info-content" nv-repeat="info in infos">\n          <h1>{{info.h1}}</h1>\n          <p nv-repeat="pp in info.p">{{pp}}</p>\n          <div class="child-info" nv-if="info.info">\n              <div class="pchild">\n                  <p nv-repeat="child in info.info">{{child}}</p>\n              </div>\n          </div>\n      </div>\n    </div>'}return e=f([Object(o.b)({selector:"introduction-container",templateUrl:"./template.html"})],e)}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=function(e,n,t,o){var i,r=arguments.length,c=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var f=e.length-1;f>=0;f--)(i=e[f])&&(c=(r<3?i(c):r>3?i(n,t,c):i(n,t))||c);return r>3&&c&&Object.defineProperty(n,t,c),c},a=function(){function e(){}return e=u([Object(o.k)({imports:[i.a],declarations:[p],providers:[],exports:[p],bootstrap:p})],e)}();n.default=a}}]);