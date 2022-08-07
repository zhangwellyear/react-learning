import Counter from "./demo01/Counter";
import LifeCycle from "./demo02/LifeCycle";
import ConditionResult from "./demo03/ConditionRender";
import MultiForm from "./demo04/MultiForm";
import NameForm from "./demo04/NameForm";
import Calculator from "./demo05/Calculator";
import Composition from "./demo06/Composition";
import ProductSearch from "./demo07/ProductSearch";
import LazyLoad from "./demo08/LazyLoad";
import MiddleWare from "./demo09/MiddleWare";

export const routes = [
  {
    text: "计数器",
    path: "/demo01",
    component: Counter,
  },
  {
    text: "生命周期",
    path: "/demo02",
    component: LifeCycle,
  },
  {
    text: "条件渲染",
    path: "/demo03",
    component: ConditionResult,
  },
  {
    text: "表单Input",
    path: "/demo04",
    component: NameForm,
  },
  {
    text: "多类型表单",
    path: "/demo04-02",
    component: MultiForm,
  },
  {
    text: "状态提升 - 温度显示",
    path: "/demo05",
    component: Calculator,
  },
  {
    text: "组合 vs 继承",
    path: "/demo06",
    component: Composition,
  },
  {
    text: "搜索",
    path: "/demo07",
    component: ProductSearch,
  },
  {
    text: "懒加载",
    path: "/demo08",
    component: LazyLoad,
  },
  {
    text: "中间件",
    path: "/demo09",
    component: MiddleWare,
  },
];
