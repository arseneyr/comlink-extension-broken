import { createEndpoint } from "comlink-extension";
import * as Comlink from "comlink";
import { browser } from "webextension-polyfill-ts";
// import Worker from "worker-loader?inline=true!./worker.js";

const obj = Comlink.wrap(createEndpoint(browser.runtime.connect()));

// const worker = new Worker();
// const obj = Comlink.wrap(worker);

Promise.all([obj.getSubProxy().then((s) => s.getB()), obj.getA()]).then(
  ([a, b]) => {
    console.log(a);
    console.log(b);
  }
);
