import Onboarding from "react-native-onboarding-swiper";
import { useDispatch } from "react-redux";
import { onboardingPages } from "../../../constants/onboarding";
import { signInRequest } from "../../../store/features/auth/auth-slice";

const OnboardingScreen = () => {
  const dispatch = useDispatch();

  const handleFinishOnboarding = () => {
    dispatch(signInRequest());
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
