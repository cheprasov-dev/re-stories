import "core-js/features/map"
import "core-js/features/set"
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import bridge from "@vkontakte/vk-bridge"
import App from "./App"
import {store} from "./redux/store"
import { RouterContext } from '@happysanta/router'
import { router } from './routers'
import { ConfigProvider } from '@vkontakte/vkui'
import {Offline, Online} from "react-detect-offline";
import ErrorNet from "./ErrorNet";
// import("./eruda").then(({ default: eruda }) => {}) //runtime download

// Init VK  Mini App
bridge.send("VKWebAppInit")
bridge.send("VKWebAppSetViewSettings", {
  "status_bar_style": "light",
  "action_bar_color": "#5D2AD6",
  "navigation_bar_color": "#5D2AD6"
});

ReactDOM.render(
  <RouterContext.Provider value={router}>
    <ConfigProvider isWebView={true}>
      <Provider store={store}>
        <Online><App/></Online>
        <Offline><ErrorNet/></Offline>
      </Provider>
    </ConfigProvider>
  </RouterContext.Provider>
  , document.getElementById("root"))
// if (process.env.NODE_ENV === "development") {
//   import("./eruda").then(({ default: eruda }) => {}) //runtime download
// }
