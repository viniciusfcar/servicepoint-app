import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import theme from "../../../styles/theme";
import HeaderModal from "../../Applications/HeaderModal";

import {
  Button,
  Container,
  ContainerKeyboardAvoiding,
  HelperText,
  Modal,
  Spacer,
  TextInput,
} from "../../../styles";
import { Keyboard } from "react-native";

const SignInModal = ({ modalRef }) => {
  const { colors } = theme;

  const signInSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email("Digite um e-mail válido!")
      .required("O e-mail é obrigatório!"),
    password: yup
      .string()
      .trim()
      .min(5, "A senha deve conter no mínimo 5 caracteres.")
      .required("A senha é obrigatória!"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log("LOGIN: ", values);
      modalRef.current.close();
      Keyboard.dismiss();
    },
  });

  return (
    <Modal ref={modalRef} adjustToContentHeight>
      <ContainerKeyboardAvoiding hasPadding>
        <HeaderModal
          title="Realize seu login"
          rightIconName="close"
          handleActionRight={() => modalRef?.current?.close()}
        />

        <Container width="100%">
          <TextInput
            mode="flat"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            //@ts-ignore
            error={formik.touched.email && formik.errors.email}
            style={{ paddingHorizontal: 0 }}
          />
          {formik.touched.email && formik.errors.email && (
            //@ts-ignore
            <HelperText style={{ color: colors.danger }}>
              {formik.touched.email && formik.errors.email}
            </HelperText>
          )}
        </Container>

        <Spacer size={30} />

        <Container width="100%">
          <TextInput
            mode="flat"
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            //@ts-ignore
            error={formik.touched.password && formik.errors.password}
            style={{ paddingHorizontal: 0 }}
          />
          {formik.touched.password && formik.errors.password && (
            //@ts-ignore
            <HelperText style={{ color: colors.danger }}>
              {formik.touched.password && formik.errors.password}
            </HelperText>
          )}
        </Container>

        <Spacer size={40} />

        <Button background="primary" block onPress={() => formik.handleSubmit()}>
          Entrar
        </Button>
      </ContainerKeyboardAvoiding>
    </Modal>
  );
};

export default SignInModal;
