/**
 * NSEPluginProps refer to the properties set by the user in their app config file (e.g: app.json)
 */
export type NSEPluginProps = {
  /**
   * (required) Used to configure APNs environment entitlement. "development" or "production"
   */
  mode: Mode;

  /**
   * (optional) Used to configure Apple Team ID. You can find your Apple Team ID by running expo credentials:manager e.g: "91SW8A37CR"
   */
  devTeam: string;
  iPhoneDeploymentTarget: string;
  iosNSEFilePath?: string;
};

/**
 * Not to be confused with NSEPluginProps, PluginOptions are the *internal* properties used by the config plugin
 * These include a combination of user-defined properties (from NSEPluginProps) and other data to pass between functions
 */
export type PluginOptions = {
  iosPath: string;
  mode: Mode;
  devTeam?: string;
  bundleVersion?: string;
  bundleShortVersion?: string;
  bundleIdentifier?: string;
  iPhoneDeploymentTarget?: string;
  iosNSEFilePath?: string;
};

export enum Mode {
  Dev = "development",
  Prod = "production",
}
