import * as Comlink from "comlink";
import { createBackgroundEndpoint, isMessagePort } from "comlink-extension";
import { browser } from "webextension-polyfill-ts";

export class BackgroundEndpoint {
  public getSubProxy() {
    return Comlink.proxy({
      getB: () => {
        return "B";
      },
    });
  }

  public getA() {
    return "A";
  }
}

browser.runtime.onConnect.addListener((port) => {
  if (isMessagePort(port)) {
    return;
  }
  Comlink.expose(new BackgroundEndpoint(), createBackgroundEndpoint(port));
});
