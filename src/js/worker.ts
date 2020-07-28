import * as Comlink from "comlink";
import { createBackgroundEndpoint, isMessagePort } from "comlink-extension";

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

Comlink.expose(new BackgroundEndpoint());
