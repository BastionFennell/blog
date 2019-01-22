/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-490646ce79c24ec74a13.js"
  },
  {
    "url": "app-eca035c22e3dd5fce836.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-72333f42f1dbd7f3d35c.js"
  },
  {
    "url": "index.html",
    "revision": "8a12acc68de245e91bb9e84d5168674a"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1b778300b6067110401df64aba30824c"
  },
  {
    "url": "component---src-templates-index-jsx.8bbe45bd733b50ad302f.css"
  },
  {
    "url": "component---src-templates-index-jsx-1216dff6eaec1f229b61.js"
  },
  {
    "url": "0-2cb21b8e9fd4b3dda0fd.js"
  },
  {
    "url": "1-eb7a49efaa037329f459.js"
  },
  {
    "url": "14-723a4a318fb6ed616c9b.js"
  },
  {
    "url": "3-be319f407b6ef4da3846.js"
  },
  {
    "url": "static/d/365/path---index-6a9-3XtIL3iMoa75dn3Q5etjg2ggS1g.json",
    "revision": "624afc0812aaef71d3f630f6bc6740f1"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "147feba44a7efef932145887b488b250"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/blog/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});