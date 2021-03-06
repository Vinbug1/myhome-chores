import React from 'react';
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// Redux
 import { Provider } from "react-redux";
 // import store from "./Redux/store";

// Context API
//import Auth from "./Context/store/Auth";

// Navigatiors
import{Main} from "./Navigator/Main";
import {Auth} from "./Context/store/Auth";

// Screens
// import Header from "./Shared/Header";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Auth>
      <Provider >
        <NavigationContainer>
      
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}


