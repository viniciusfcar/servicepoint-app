import { Image } from "react-native";
import { useTheme } from "styled-components";
import theme from "../styles/theme";

const { colors } = theme;

const onboardingPages = [
  {
    backgroundColor: colors.light,
    image: <Image source={require("../assets/images/logo-example.png")} />,
    title: "Seja bem vindo(a) ao Service Point",
    subtitle: "Encontre aqui todos os serviços que vocês procura!",
  },
  {
    backgroundColor: colors.tertiary,
    image: <Image source={require("../assets/images/logo-example.png")} />,
    title: "Os melhores profissionais a sua disposição",
    subtitle: "Busque os mais bem avaliados para cada serviço",
  },
  {
    backgroundColor: colors.secondary,
    image: <Image source={require("../assets/images/logo-example.png")} />,
    title: "Garantia de qualidade nos serviços",
    subtitle: "Avalie os profissionais de cada serviço",
  },
];

export { onboardingPages };
