import { useRef } from "react";
import { colors } from "../../../styles/colors";
import { MotiView, MotiImage } from "moti";
import {
  Container,
  ScrollView,
  Title,
  Image,
  Touchable,
  MaterialIcon,
  Button,
} from "../../../styles";
import ContactModal from "../../../components/Modals/ContactModal";

const SignInScreen = () => {
  const contactRef = useRef(null);

  return (
    <>
      <ScrollView hasPadding>
        <Container height="60px" align="flex-end" justify="center">
          <Touchable onPress={() => contactRef.current.open()}>
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
          <Title>Service Point</Title>
        </Container>

        <Container height="200px" top={30}>
          <Button
            elevation={5}
            block
            onPress={() => {}}
            buttonColor={colors.primary}
          >
            Entre
          </Button>

          <Button
            block
            mode="outlined"
            textColor={colors.dark}
            top={10}
            onPress={() => {}}
          >
            Crie sua conta
          </Button>
        </Container>
      </ScrollView>
      <ContactModal modalRef={contactRef} title="Fale conosco" />
    </>
  );
};

export default SignInScreen;
