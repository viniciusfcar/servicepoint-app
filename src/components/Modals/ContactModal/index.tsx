import React from "react";
import { Linking } from "react-native";
import { useTheme } from "styled-components";
import { goToWhatsApp } from "../../../utils/helpers";
import {
  Button,
  Container,
  Modal,
  Title,
  DividerV,
  Spacer,
  Text,
  MaterialIcon,
  Touchable,
} from "../../../styles";
import { ContactModalProps } from "../../../types/TContactModal";
import HeaderModal from "../../Applications/HeaderModal";

const ContactModal = ({
  handleAction,
  modalRef,
  loading,
  title,
  description,
}: ContactModalProps) => {
  const { colors } = useTheme();

  const sendEmail = () => {
    const subject = "Mail Subject";
    const message = "Message Body";
    Linking.openURL(
      `mailto:moizezhenrique@gmail.com?subject=${subject}&body=${message}`
    );
  };

  return (
    <Modal ref={modalRef} adjustToContentHeight>
      <Container align="center" customPadding="10px 20px">
        <HeaderModal
          title="Fale conosco"
          rightIconName="close"
          handleActionRight={() => modalRef?.current?.close()}
        />
        <Container>
          <Text color="heavyMuted" big align="center">
            Tire todas suas dúvidas com a gente!
          </Text>
        </Container>
        <Spacer size={32} />
        <Container width="100%" row align="center" justify="space-between">
          <Touchable
            onPress={() => goToWhatsApp("Olá, tudo bem?", "5584981690739")}
            customPadding="16px 0 0 12px"
            height="100%"
            width="48%"
            background="halfLight"
            radius
            style={{ elevation: 1 }}
          >
            <MaterialIcon name="whatsapp" color={colors.win} size={25} />
            <Text bold color="heavyMuted" size="16px" top={10}>
              WhatsApp
            </Text>
          </Touchable>

          <Touchable
            onPress={sendEmail}
            customPadding="16px 0 0 12px"
            height="95px"
            width="48%"
            background="halfLight"
            radius
            style={{ elevation: 1 }}
          >
            <MaterialIcon
              name="email-outline"
              color={colors.tertiary}
              size={25}
            />
            <Text bold color="heavyMuted" size="16px" top={10}>
              E-mail
            </Text>
          </Touchable>
        </Container>

        <Spacer size={40} />
      </Container>
    </Modal>
  );
};

export default ContactModal;
