import React from "react";
import { Container, Modal } from "../../../styles";
import HeaderModal from "../../Applications/HeaderModal";

const SignInModal = ({ modalRef }) => {
  return (
    <Modal ref={modalRef} adjustToContentHeight>
      <Container customPadding="10px 20px">
        <HeaderModal
          title="Realize seu login"
          rightIconName="close"
          handleActionRight={() => modalRef?.current?.close()}
        />
      </Container>
    </Modal>
  );
};

export default SignInModal;
