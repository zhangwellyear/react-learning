import React from "react";

const UserGreeting = () => {
  return <h1>Welcome back</h1>;
};

const GuestGreeting = () => {
  return <h1>Please sign up.</h1>;
};

const ConditionRender = (props) => {
  const isLogin = props.isLoggedIn;
  if (isLogin) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
};

const ConditionResult = () => {
  return <ConditionRender isLoggedIn={true} />;
};

export default ConditionResult;
