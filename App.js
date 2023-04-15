import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Login from "./src/Pages/Login";
import Register from "./src/Pages/Register";
import Home from "./src/Pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  const [refreshBool, setRefreshBool] = useState(false);
  const [fontsLoaded] = useFonts({
    300: require("./assets/fonts/RH300.ttf"),
    "300i": require("./assets/fonts/RH300i.ttf"),
    400: require("./assets/fonts/RH400.ttf"),
    "400i": require("./assets/fonts/RH400i.ttf"),
    500: require("./assets/fonts/RH500.ttf"),
    "500i": require("./assets/fonts/RH500i.ttf"),
    600: require("./assets/fonts/RH600.ttf"),
    "600i": require("./assets/fonts/RH600i.ttf"),
    700: require("./assets/fonts/RH700.ttf"),
    "700i": require("./assets/fonts/RH700i.ttf"),
    800: require("./assets/fonts/RH800.ttf"),
    "800i": require("./assets/fonts/RH800i.ttf"),
    900: require("./assets/fonts/RH900.ttf"),
    "900i": require("./assets/fonts/RH900i.ttf"),
    "400special": require("./assets/fonts/Mali-Regular.ttf"),
    "500special": require("./assets/fonts/Mali-Medium.ttf"),
    "600special": require("./assets/fonts/Mali-SemiBold.ttf"),
    hand: require("./assets/fonts/Sacramento-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
