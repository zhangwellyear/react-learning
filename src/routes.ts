import Counter from "./demo01/Counter";
import LifeCycle from "./demo02/LifeCycle";
import ConditionResult from "./demo03/ConditionRender";
import MultiForm from "./demo04/MultiForm";
import NameForm from "./demo04/NameForm";
import Calculator from "./demo05/Calculator";

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
];
