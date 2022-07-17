import React from "react";
import Counter from "./demo01/Counter";
import LifeCycle from "./demo02/LifeCycle";
import ConditionResult from "./demo03/ConditionRender";
import NameForm from "./demo04/NameForm";

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
    text: "表单",
    path: "/demo04",
    component: NameForm,
  },
];
