import React from "react";
import { Linking } from "react-native";
import { colors } from "../../../styles/colors";
import { goToWhatsApp } from "../../../utils/helpers";
import {
  Button,
  Container,
  Modal,
  Title,
  Spacer,
  Text,
  MaterialIcon,
  Touchable,
} from "../../../styles";
import { ContactModalProps } from "../../../types/TContactModal";

const ContactModal = ({
  handleAction,
  modalRef,
  loading,
  title,
  description,
}: ContactModalProps) => {
  const sendEmail = () => {
    const subject = "Mail Subject";
    const message = "Message Body";
    Linking.openURL(
      `mailto:contato@blueconsult.com.br?subject=${subject}&body=${message}`
    );
  };

  return (
    <Modal ref={modalRef} adjustToContentHeight>
      <Container align="center" customPadding="10px 24px">
        <Spacer size={15} />
        <Container>
          <Text color="heavyMuted" size="18px">
            Tire suas dúvidas ou fale com a gente
          </Text>
        </Container>
        <Spacer size={32} />
        <Container row align="center" justify="space-between">
          <Touchable
            onPress={() => goToWhatsApp("Olá, tudo bem?", "5584981690739")}
            customPadding="16px 0 0 12px"
            height="95px"
            width="45%"
            background="halfLight"
            radius
          >
            <MaterialIcon name="whatsapp" color={colors.dark} size={25} />
            <Text bold color="heavyMuted" size="16px" top={10}>
              WhatsApp
            </Text>
          </Touchable>

          <Touchable
            onPress={sendEmail}
            customPadding="16px 0 0 12px"
            height="95px"
            width="45%"
            background="halfLight"
            radius
          >
            <MaterialIcon name="email-outline" color={colors.dark} size={25} />
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
