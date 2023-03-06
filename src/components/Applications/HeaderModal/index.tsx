import React from "react";

import { Container, MaterialIcon, Title, Touchable } from "../../../styles";
import { HeaderProps } from "../../../types/THeaderModal";

const HeaderModal = ({
  title,
  leftIconName,
  rightIconName,
  handleActionLeft,
  handleActionRight,
}: HeaderProps) => {
  return (
    <Container
      row
      align="center"
      justify="space-between"
      height="60px"
      width="100%"
    >
      {leftIconName && (
        <Touchable onPress={handleActionLeft}>
          <MaterialIcon name={leftIconName} color="#000" size={25} />
        </Touchable>
      )}

      <Title bold>{title}</Title>

      {rightIconName && (
        <Touchable onPress={handleActionRight}>
          <MaterialIcon name={rightIconName} color="#000" size={25} />
        </Touchable>
      )}
    </Container>
  );
};

export default HeaderModal;
