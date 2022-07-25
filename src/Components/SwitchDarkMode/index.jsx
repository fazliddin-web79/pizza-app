import { Switch } from "antd";
import React from "react";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const SwitchDarkMode = () => <Switch defaultChecked onChange={onChange} />;

export default SwitchDarkMode;
