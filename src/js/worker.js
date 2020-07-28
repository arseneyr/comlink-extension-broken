import * as Comlink from "comlink";

export class BackgroundEndpoint {
  getSubProxy() {
    return Comlink.proxy({
      getB: () => {
        return "B";
      },
    });
  }

  getA() {
    return "A";
  }
}

Comlink.expose(new BackgroundEndpoint());
