import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainTab from "./tab.routes";
import HomeProviderScreen from "../screens/RoleScreens/ProviderScreens/HomeProviderScreen";

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="HomeProviderScreen" component={HomeProviderScreen} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
