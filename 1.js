(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{200:function(n,e,t){"use strict";t.r(e);var o=t(0),i=function(){return[{h1:"概览",p:["InDiv 是一个 TypeScript 构建客户端应用的平台与框架。","InDiv 本身使用 TypeScript 写成的。","它将核心功能和可选功能作为一组 TypeScript 库进行实现，你可以把它们导入你的应用中。"],info:["InDiv 的基本构造块是 NvModule，它为组件提供了编译的上下文环境和作用域。","NvModule 会把相关的一些功能收集到集中工具函数中。","InDiv 应用就是由一组 NvModule 定义出的。 应用至少会有一个用于引导应用的根模块，通常还会有很多其他模块。","Component 作为页面元素的基本单位，由定义的 NvModule 统一提供给编译器或路由使用。","Route 被委托管理页面渲染，根据访问的url的不同来获取不用的识图渲染。"]},{h1:"模块",p:["NvModule 作为整个应用的基本构造块，可以从其他 NvModule 引入或是导出 Component , 也可以导入 Service 为全局使用或是本模块。"],info:["每个 InDiv 应用都有一个根模块，通常命名为 AppModule。","根模块提供了用来启动应用的引导机制","一个应用通常会包含很多功能模块，它们最后都应该被导入根模块中。"]},{h1:"组件",p:["组件控制屏幕上被称为视图的一小片区域。为识图提供交互和渲染模板"],info:["每个 InDiv 应用都至少有一个组件，也就是根组件，它会把组件树和页面中的 DOM 连接起来。","每个组件都会定义一个类，其中包含应用的数据和逻辑，并与一个 字符串 模板相关联，该模板定义了一个供目标环境下显示的视图。"]},{h1:"服务",p:["服务是一个广义的概念，它包括应用所需的任何值、函数或特性。狭义的服务是一个明确定义了用途的类。它应该做一些具体的事，并做好。","InDiv 把组件和服务区分开，以提高模块性和复用性。"],info:["对于与特定视图无关并希望跨组件共享的数据或逻辑，可以创建服务类。","服务类的定义通常紧跟在 “@Injectable” 装饰器之后。","该装饰器提供的元数据可以让你的服务作为依赖被注入到客户组件中。","依赖注入（或 DI）让你可以保持组件类的精简和高效。有了 DI，组件就不用从服务器获取数据、验证用户输入或直接把日志写到控制台，而是会把这些任务委托给服务。"]},{h1:"路由",p:["浏览器具有熟悉的导航模式，在地址栏输入 URL，浏览器就会导航到相应的页面。 InDiv 的 Router（即“路由器”）借鉴了这个模型。","它把浏览器中的 URL 看做一个操作指南， 据此导航到一个由客户端生成的视图，并可以把参数传给支撑视图的相应组件，帮它决定具体该展现哪些内容。"],info:["要定义导航规则，你就要把导航路径和你的组件关联起来。"," 路径（path）使用类似 URL 的语法来和程序数据整合在一起，就像模板语法会把你的视图和程序数据整合起来一样。","然后你就可以用程序逻辑来决定要显示或隐藏哪些视图，以根据你制定的访问规则对用户的输入做出响应。"]}]};function f(n){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var p=function(n,e,t,o){var i,p=arguments.length,c=p<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(n,e,t,o);else for(var r=n.length-1;r>=0;r--)(i=n[r])&&(c=(p<3?i(c):p>3?i(e,t,c):i(e,t))||c);return p>3&&c&&Object.defineProperty(e,t,c),c},c=function(){function n(){this.content=i(),this.template='<div class="page-container">\n    <div class="info-content" nv-repeat="info in content">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat="pp in info.p">{{pp}}</p>\n        <div class="child-info" nv-if="info.info">\n            <div class="pchild">\n                <p nv-repeat="child in info.info">{{child}}</p>\n            </div>\n        </div>\n    </div>\n  </div>'}return n=p([Object(o.b)({selector:"architecture-container",templateUrl:"./template.html"})],n)}();function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var l=function(n,e,t,o){var i,f=arguments.length,p=f<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)p=Reflect.decorate(n,e,t,o);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(p=(f<3?i(p):f>3?i(e,t,p):i(e,t))||p);return f>3&&p&&Object.defineProperty(e,t,p),p},u=function(){function n(){}return n=l([Object(o.k)({declarations:[c],exports:[c],bootstrap:c})],n)}();e.default=u}}]);