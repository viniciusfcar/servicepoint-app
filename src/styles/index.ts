import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { ContainerProps, TextProps } from "../types/TStyles";

export const Container = styled.View<ContainerProps>`
  flex: ${(props) => (props.flex ? props.flex : "none")};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};

  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  max-width: ${(props) => props.maxWidth || "100%"};
  max-height: ${(props) => props.maxHeight || "auto"};

  padding: ${(props) =>
    props.hasPadding
      ? "20px"
      : props.customPadding
      ? props.customPadding
      : "0"};
  margin: ${(props) => props.spacing || 0};
  margin-right: ${(props) => props.right || 0}px;
  margin-left: ${(props) => props.left || 0}px;
  margin-top: ${(props) => props.top || 0}px;
  margin-bottom: ${(props) => props.bottom || 0}px;
  border-radius: ${(props) =>
    props.radius ? "8px" : props.customRadius ? props.customRadius : "0"};
  border-width: ${(props) => `${props.border || 0}px`};
  border-color: ${(props) =>
    `${props.theme[props?.borderColor] || props?.borderColor || "#000"}`};
  background: ${(props) =>
    `${props.theme[props?.background] || props?.background || "transparent"}`};
  opacity: ${(props) => props.opacity || 1};
`;

export const Title = styled.Text<TextProps>`
  font-size: ${(props) =>
    props.small
      ? "18px"
      : props.big
      ? "32px"
      : props.size
      ? props.size
      : "28px"};
  color: ${(props) =>
    `${props.theme[props?.color] || props.color || colors.dark}`};
  text-align: ${(props) => props.align || "left"};
  margin: ${(props) => props.spacing || 0};
  margin-right: ${(props) => props.right || 0}px;
  margin-left: ${(props) => props.left || 0}px;
  margin-top: ${(props) => props.top || 0}px;
  margin-bottom: ${(props) => props.bottom || 0}px;
  padding: ${(props) =>
    props.hasPadding
      ? "20px"
      : props.customPadding
      ? props.customPadding
      : "0"};
  opacity: ${(props) => props.opacity || 1};
  text-decoration: ${(props) => props.decoration || "none"};
  text-transform: ${(props) => (props.upper ? "uppercase" : "none")};
  /* font-family: ${(props) =>
    props.bold
      ? "Roboto_700Bold"
      : props.extraBold
      ? "Roboto_900Black"
      : "Roboto_400Regular"}; */
`;

export const Text = styled.Text<TextProps>`
  font-size: ${(props) =>
    props.small
      ? "12px"
      : props.big
      ? "18px"
      : props.size
      ? props.size
      : "14px"};
  color: ${(props) =>
    `${props.theme[props?.color] || props.color || colors.dark}`};
  margin: ${(props) => props.spacing || 0};
  margin-right: ${(props) => props.right || 0}px;
  margin-left: ${(props) => props.left || 0}px;
  margin-top: ${(props) => props.top || 0}px;
  margin-bottom: ${(props) => props.bottom || 0}px;
  padding: ${(props) =>
    props.hasPadding
      ? "20px"
      : props.customPadding
      ? props.customPadding
      : "0"};
  opacity: ${(props) => props.opacity || 1};
  text-align: ${(props) => props.align || "left"};
  text-decoration: ${(props) => props.decoration || "none"};
  text-transform: ${(props) => (props.upper ? "uppercase" : "none")};
  /* font-family: ${(props) =>
    props.bold
      ? "Roboto_700Bold"
      : props.extraBold
      ? "Roboto_900Black"
      : "Roboto_400Regular"}; */
`;
