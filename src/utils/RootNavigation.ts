import { createNavigationContainerRef } from "@react-navigation/native";
import { TNavigation } from "../types/TNavigation";

const navigationRef = createNavigationContainerRef<TNavigation>();

const navigate = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export { navigationRef, navigate };
