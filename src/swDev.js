import { precacheAndRoute } from "workbox-precaching";

export default function svDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((res) => {
    precacheAndRoute(self.__WB_MANIFEST);
    console.log("res :>> ", res);
  });
}
