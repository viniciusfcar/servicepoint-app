import { useEffect, useRef, useState } from "react";
import theme from "../styles/theme";
import { icons } from "../constants/tabBottomIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "../styles";

import HomeUserScreen from "../screens/RoleScreens/UserScreens/HomeUserScreen";
import SettingsUserScreen from "../screens/RoleScreens/UserScreens/SettingsUserScreen";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const { colors } = theme;

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => {
        return {
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.dark,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: colors.light,
            height: 65,
            paddingBottom: 10,
          },
          tabBarIcon: ({ color, size, focused }) => {
            const { lib: Icon, name } = icons[route.name];
            return <Icon name={name} size={25} color={color} />;
          },
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text size="11px" extraBold={focused} color={color}>
                {route?.name}
              </Text>
            );
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeUserScreen} />
      <Tab.Screen name="Carteiras" component={SettingsUserScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
