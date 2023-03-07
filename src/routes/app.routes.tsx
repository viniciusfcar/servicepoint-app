import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeProviderScreen from "../screens/RoleScreens/ProviderScreens/HomeProviderScreen";
import HomeManagerScreen from "../screens/RoleScreens/ManagerScreens/HomeManagerScreen";

const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeProviderScreen" component={HomeProviderScreen} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
