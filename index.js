import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

//if app is not loading properly, use android studio to sync, reboot the phone and run again, or check watermelon db setup

AppRegistry.registerComponent(appName, () => App);
