/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-b00a04a9'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/0.app.bundle.js",
    "revision": "35beb750f90c7f18f2f35b6892b8f0b9"
  }, {
    "url": "/1.app.bundle.js",
    "revision": "4a4f496d7709c518adb6831e2984fbbf"
  }, {
    "url": "/icon_128x128.ca4c97c2e38fdbef28331c217333c898.png",
    "revision": "ca4c97c2e38fdbef28331c217333c898"
  }, {
    "url": "/icon_192x192.9eabf2c4034ffdbc297620dc8539165b.png",
    "revision": "9eabf2c4034ffdbc297620dc8539165b"
  }, {
    "url": "/icon_256x256.96d21ef415630f283a745f8eb001e498.png",
    "revision": "96d21ef415630f283a745f8eb001e498"
  }, {
    "url": "/icon_384x384.62aebc0a274c7d0bcf1a30d8a7818559.png",
    "revision": "62aebc0a274c7d0bcf1a30d8a7818559"
  }, {
    "url": "/icon_512x512.74d54640f1675431d2593f6c6c6d1201.png",
    "revision": "74d54640f1675431d2593f6c6c6d1201"
  }, {
    "url": "/icon_96x96.614cda8412b27efc8d75fae19cbeb5d6.png",
    "revision": "614cda8412b27efc8d75fae19cbeb5d6"
  }, {
    "url": "/index.html",
    "revision": "06fd58bdfbf02f69ef5d7b560d7d3ea4"
  }, {
    "url": "/manifest.e3b4e8ca4562afde11d9f3886178d06f.json",
    "revision": "e3b4e8ca4562afde11d9f3886178d06f"
  }], {});
  workbox.registerRoute(/https:\/\/(res.cloudinary.com|images.unsplash.com)/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: []
  }), 'GET');
  workbox.registerRoute(/https:\/\/(zikergram-server.now.sh\/)/, new workbox.NetworkFirst({
    "cacheName": "api",
    plugins: []
  }), 'GET');

});
//# sourceMappingURL=service-worker.js.map
