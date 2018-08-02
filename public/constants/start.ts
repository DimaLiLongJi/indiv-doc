export const content = [
  {
    h1: '架构概览',
    p: 'Easiest 的基本构造块是 EsModule，它为组件提供了编译的上下文环境。 EsModule 会把相关的代码收集到一些功能集中。Easiest 应用就是由一组 EsModule 定义出的。 应用至少会有一个用于引导应用的根模块，通常还会有很多特性模块。 Component 作为页面元素的基本单位，由定义的 EsModule 统一提供给编译器或路由使用。Route 被委托管理页面渲染，根据访问的url的不同来获取不用的识图渲染。',
  },
  {
    h1: 'EsModule',
    p: 'EsModule 作为整个应用的基本构造块，可以从其他 EsModule 引入或是导出 Component , 也可以导入 Service 为全局使用或是本模块。',
  },
  {
    h1: 'Component',
    p: '组件控制屏幕上被称为视图的一小片区域。为识图提供交互和渲染模板',
  },
  {
    h1: 'Service',
    p: '服务是一个广义的概念，它包括应用所需的任何值、函数或特性。狭义的服务是一个明确定义了用途的类。它应该做一些具体的事，并做好。 Easiest 把组件和服务区分开，以提高模块性和复用性。',
  },
  {
    h1: 'Route',
    p: '浏览器具有熟悉的导航模式，在地址栏输入 URL，浏览器就会导航到相应的页面。 Easiest 的 Router（即“路由器”）借鉴了这个模型。它把浏览器中的 URL 看做一个操作指南， 据此导航到一个由客户端生成的视图，并可以把参数传给支撑视图的相应组件，帮它决定具体该展现哪些内容。',
  },
];