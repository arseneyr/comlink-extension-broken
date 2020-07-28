import { createEndpoint } from "comlink-extension";
import * as Comlink from "comlink";
import { BackgroundEndpoint } from "./background";
import { browser } from "webextension-polyfill-ts";
// import Worker from "worker-loader?inline=true!./worker.ts";

const obj = Comlink.wrap<BackgroundEndpoint>(
  createEndpoint(browser.runtime.connect())
);

// const worker = new Worker();
// const obj = Comlink.wrap(worker);

Promise.all([obj.getSubProxy().then((s) => s.getB()), obj.getA()]).then(
  ([a, b]) => {
    console.log(a);
    console.log(b);
  }
);
