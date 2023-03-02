import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "../hooks/useAppSelector";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
  const { signed, onboard } = useAppSelector((state) => state?.authReducer);

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes onboard={onboard} />}
    </NavigationContainer>
  );
};

export default Routes;
