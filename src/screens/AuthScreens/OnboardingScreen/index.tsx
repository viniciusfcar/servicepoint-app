import Onboarding from "react-native-onboarding-swiper";
import { onboardingPages } from "../../../constants/onboarding";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      pages={onboardingPages}
      nextLabel="Próximo"
      skipLabel="Pular"
      onSkip={() => navigation.navigate("SignInScreen")}
      onDone={() => navigation.navigate("SignInScreen")}
    />
  );
};

export default OnboardingScreen;
