import { ConfigPlugin } from "@expo/config-plugins";
import { NSEPluginProps } from "../types/types";
import { withIos } from "./ios";

const withNSE: ConfigPlugin<NSEPluginProps> = (config, props) => {
  config = withIos(config, props);

  return config;
};

export default withNSE;
