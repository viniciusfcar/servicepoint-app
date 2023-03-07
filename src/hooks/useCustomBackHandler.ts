import { useEffect } from "react";
import { BackHandler } from "react-native";

const useCustomBackHandler = (callback) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        callback();
        return true;
      }
    );

    return () => backHandler.remove();
  }, [callback]);
};

export default useCustomBackHandler;
