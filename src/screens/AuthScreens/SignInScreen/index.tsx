import { useRef } from "react";
import { useTheme } from "styled-components";
import { MotiView, MotiImage } from "moti";
import {
  Container,
  ScrollView,
  Title,
  Text,
  Image,
  Touchable,
  MaterialIcon,
  Button,
} from "../../../styles";
import ContactModal from "../../../components/Modals/ContactModal";
import SignInModal from "../../../components/Modals/SignInModal";

const SignInScreen = () => {
  const { colors } = useTheme();
  const contactModalRef = useRef(null);
  const signInModalRef = useRef(null);

  return (
    <>
      <ScrollView hasPadding>
        <Container height="60px" align="flex-end" justify="center">
          <Touchable onPress={() => contactModalRef.current.open()}>
            <MaterialIcon
              name="help-circle-outline"
              color={colors.primary}
              size={22}
            />
          </Touchable>
        </Container>

        <Container align="center" justify="center" top={30}>
          <MotiImage
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 1500 }}
            source={require("../../../assets/images/logo-example.png")}
            style={{
              height: 250,
              width: 250,
            }}
          />
        </Container>

        <Container align="center" top={15}>
          <Title family="black">Service Point</Title>
        </Container>

        <Container height="200px" top={30}>
          <Button
            elevation={5}
            block
            onPress={() => signInModalRef.current.open()}
            buttonColor={colors.primary}
            family="medium"
          >
            Realizar login
          </Button>

          <Button
            block
            mode="outlined"
            textColor={colors.dark}
            top={10}
            onPress={() => {}}
            family="bold"
          >
            Crie sua conta
          </Button>
        </Container>

        <Touchable align="center">
          <Text color="primary">Esqueceu sua senha?</Text>
        </Touchable>
      </ScrollView>
      <ContactModal modalRef={contactModalRef} />
      <SignInModal modalRef={signInModalRef} />
    </>
  );
};

export default SignInScreen;
