import Onboarding from "react-native-onboarding-swiper";
import { useDispatch } from "react-redux";
import { onboardingPages } from "../../../constants/onboarding";
import { useNavigation } from "@react-navigation/native";
import { signInRequest, setOnboarding } from "../../../store/features/auth/auth-slice";

const OnboardingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleFinishOnboarding = () => {
    dispatch(signInRequest());
    navigation.navigate("SignInScreen");
  };

  return (
    <Onboarding
      pages={onboardingPages}
      nextLabel="Próximo"
      skipLabel="Pular"
      onSkip={() => handleFinishOnboarding()}
      onDone={() => handleFinishOnboarding()}
    />
  );
};

export default OnboardingScreen;
