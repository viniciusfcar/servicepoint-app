import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import OnboardingScreen from "../screens/AuthScreens/OnboardingScreen";
import SignInScreen from "../screens/AuthScreens/SignInScreen";
import SignUpScreen from "../screens/AuthScreens/SignUpScreen";

type AuthRoutesProps = {
  onboard?: boolean;
};

const AuthRoutes = ({ onboard = false }: AuthRoutesProps) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!onboard && (
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      )}
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
