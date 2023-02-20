import fs from "fs";
import { NSE_PODFILE_REGEX, NSE_PODFILE_SNIPPET } from "./iosConstants";

import { FileManager } from "./FileManager";

export async function updatePodfile(iosPath: string) {
  const podfile = await FileManager.readFile(`${iosPath}/Podfile`);
  const matches = podfile.match(NSE_PODFILE_REGEX);

  if (matches) {
    console.log(
      "FBNotificationServiceExtension target already added to Podfile. Skipping..."
    );
  } else {
    fs.appendFile(`${iosPath}/Podfile`, NSE_PODFILE_SNIPPET, (err) => {
      if (err) {
        console.error("Error writing to Podfile");
      }
    });
  }
}
