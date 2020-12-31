(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{400:function(t,a,e){"use strict";e.r(a);var v=e(42),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"审批流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#审批流程"}},[t._v("#")]),t._v(" 审批流程")]),t._v(" "),e("p",[t._v("本文将介绍如何使用Logic Flow构建权限审批流程。主要包括的功能如下：")]),t._v(" "),e("ul",[e("li",[t._v("创建流程内支持的审批节点")]),t._v(" "),e("li",[t._v("审批流程配置")]),t._v(" "),e("li",[t._v("审批流程主题设置")]),t._v(" "),e("li",[t._v("审批流程进度预览")])]),t._v(" "),e("h2",{attrs:{id:"创建审批节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建审批节点"}},[t._v("#")]),t._v(" 创建审批节点")]),t._v(" "),e("p",[t._v("审批节点包括发起申请、审核、判断、结束。\n通过"),e("code",[t._v("LogicFlow")]),e("RouterLink",{attrs:{to:"/guide/advance/customNode.html"}},[t._v("自定义节点")]),t._v("，扩展审批流程需要的节点。")],1),t._v(" "),e("h3",{attrs:{id:"节点菜单panel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点菜单panel"}},[t._v("#")]),t._v(" 节点菜单Panel")]),t._v(" "),e("p",[t._v("节点菜单panel使用React组件实现，为组件绑定事件"),e("code",[t._v("onMouseDown")]),t._v("事件，拖拽panel组件进行节点创建。")]),t._v(" "),e("h3",{attrs:{id:"自定义流程节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义流程节点"}},[t._v("#")]),t._v(" 自定义流程节点")]),t._v(" "),e("ul",[e("li",[t._v("节点"),e("br"),t._v("\n审批节点包括发起申请、审核、判断、结束。其中审核角色又分为直接上级、T3领导，T2领导，T1领导等。不同作用的节点，使用不同的形状、大小、颜色等进行区分。")]),t._v(" "),e("li",[t._v("属性"),e("br"),t._v("\n审批流程配置中除了节点信息之外，还需要配置各个审批节点和边上的一些属性，自定义实现属性配置。通过LogicFlow"),e("code",[t._v("自定义属性")]),t._v("，扩展审批流程需要的业务属性。")]),t._v(" "),e("li",[t._v("连线规则"),e("br"),t._v("\n在审批流配置过程中，需要有一些控制连接的规则保证流程的正确性，比如申请节点不能被其它节点连接、结束节点不能连接其他节点等，Logic Flow提供了自定义节点"),e("code",[t._v("连线规则")]),t._v("功能来实现这个需求。")])]),t._v(" "),e("p",[e("example",{attrs:{href:"/examples/#/extension/approve",height:650}})],1),t._v(" "),e("h2",{attrs:{id:"审批流配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#审批流配置"}},[t._v("#")]),t._v(" 审批流配置")]),t._v(" "),e("h3",{attrs:{id:"创建节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建节点"}},[t._v("#")]),t._v(" 创建节点")]),t._v(" "),e("p",[t._v("从菜单面板中拖拽节点到画布进行创建。")]),t._v(" "),e("h3",{attrs:{id:"流程配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程配置"}},[t._v("#")]),t._v(" 流程配置")]),t._v(" "),e("p",[t._v("通过节点"),e("code",[t._v("锚点")]),t._v("创建边，建立节点之间的联系；"),e("code",[t._v("对齐线")]),t._v("功能辅助调整位置，使得流程更加整齐美观；应用"),e("code",[t._v("连线规则")]),t._v("，保证流程的正确性。")]),t._v(" "),e("h2",{attrs:{id:"审批流扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#审批流扩展"}},[t._v("#")]),t._v(" 审批流扩展")]),t._v(" "),e("h3",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),e("p",[t._v("LogicFlow提供了节点和边的交互事件，可以通过监听这些事件，拿到对应的节点和边的"),e("code",[t._v("数据")]),t._v("以及"),e("code",[t._v("原生事件")]),t._v("信息。事件的详细内容见"),e("RouterLink",{attrs:{to:"/guide/advance/event.html"}},[t._v("事件API")]),e("br"),t._v("\n审批中的流程进度预览，设置"),e("RouterLink",{attrs:{to:"/guide/basic/silent-mode.html"}},[t._v("静默模式")]),t._v("，监听节点hover，使用React组件展示审批详情。\n"),e("example",{attrs:{height:350,href:"/examples/#/extension/approve/preview"}})],1),t._v(" "),e("h2",{attrs:{id:"审批流程主题设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#审批流程主题设置"}},[t._v("#")]),t._v(" 审批流程主题设置")]),t._v(" "),e("p",[t._v("可以通过主题设置的方式，统一修改节点和边的样式，优化流程展示，适配与宿主系统UI。主题详情见"),e("RouterLink",{attrs:{to:"/guide/advance/theme.html"}},[t._v("主题API")])],1)])}),[],!1,null,null,null);a.default=_.exports}}]);