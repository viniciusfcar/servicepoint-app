import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { MaterialCommunityIcons, Feather, Octicons } from "@expo/vector-icons";
import { Modalize } from 'react-native-modalize';
import {
  ButtonProps,
  ContainerProps,
  DividerProps,
  IconProps,
  ImageProps,
  ModalProps,
  ScrollViewProps,
  SpacerProps,
  TextProps,
  TouchableProps,
} from "../types/TStyles";

import {
  Button as ButtonPaper,
  TextInput as TextInputPaper,
  HelperText as HelperTextPaper,
  Snackbar as SnackbarPaper,
  ActivityIndicator as ActivityIndicatorPaper,
  Searchbar as SearchbarPaper,
  DataTable as TablePaper,
  Menu as MenuPaper,
  ProgressBar as ProgressBarPaper,
  Checkbox as CheckboxPaper,
  FAB as FabPaper,
  RadioButton as RadioButtonPaper,
  DefaultTheme,
} from "react-native-paper";

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

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  flex: ${(props) =>
    props.flex ? 1 : props.customFlex ? props.customFlex : "none"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};

  max-width: ${(props) => props.maxWidth || "100%"};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
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
  border: ${(props) => props.border || "none"};
  opacity: ${(props) => props.opacity || 1};
  background: ${(props) =>
    `${props.theme[props?.background] || props?.background || "transparent"}`};
`;

export const ContainerKeyboardAvoiding = styled.KeyboardAvoidingView<ContainerProps>`
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
  border-radius: ${(props) =>
    props.radius ? "8px" : props.customRadius ? props.customRadius : "0"};
  border-width: ${(props) => `${props.border || 0}px`};
  border-color: ${(props) =>
    `${props.theme[props?.borderColor] || props?.borderColor || "#000"}`};
  background: ${(props) =>
    `${props.theme[props?.background] || props?.background || "transparent"}`};
`;

export const ScrollView = styled.ScrollView.attrs<ScrollViewProps>((props) => ({
  showsVerticalScrollIndicator: props.verticalScrollIndicator || false,
  showsHorizontalScrollIndicator: props.horizontalScrollIndicator || false,
}))<ScrollViewProps>`
  width: 100%;
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
  background: ${(props) =>
    `${props.theme[props?.background] || props?.background || "transparent"}`};
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

export const Button = styled(ButtonPaper).attrs<ButtonProps>((props) => ({
  width: props.width
    ? props.width
    : props.block
    ? "100%"
    : props.half
    ? "50%"
    : "auto",
  // height: props.height? props.height : 50,
  marginTop: props.top || 0,
  marginBottom: props.bottom || 0,
  marginLeft: props.left || 0,
  marginRight: props.right || 0,
  labelStyle: {
    color: props.theme[props.textColor || "light"],
    letterSpacing: 0,
    fontSize: props.fontSize || 18,
  },
  contentStyle: {
    height: props.height ? props.height : 52,
    backgroundColor:
      props.theme[props.background] || props.background || "transparent",
  },
  uppercase: false,
  mode: props.mode || "contained",
}))<ButtonProps>``;

export const Image = styled.Image.attrs<ImageProps>((props) => ({
  resizeMode: props.mode || "contain",
}))<ImageProps>`
  width: ${(props) => props.width + "px" || 0};
  height: ${(props) => props.height + "px" || 0};
  border-radius: ${(props) => props.radius || 0};
  border-width: ${(props) => props.border || 0};
  border-color: ${(props) =>
    `${props.theme[props?.borderColor] || props?.borderColor || "#000"}`};
  margin: ${(props) => props.spacing || 0};
`;

export const Modal = styled(Modalize).attrs<ModalProps>(props => ({
  handleStyle: {
    backgroundColor: props.handleColor || colors.muted,
  },
  modalStyle: {
    backgroundColor: props.background || colors.light,
  }
})) <ModalProps>``;

export const Spacer = styled.View<SpacerProps>`
 width: ${props => props.width || '100%'};
 height: ${props => props.size ? props.size + 'px' : props.vertical ? '100%' : '10px'};
`;

export const DividerH = styled.View<DividerProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.size ? props.size + 'px' : '1px'};
  background: ${props => `${props.theme[props?.background] || props?.background || '#dbdbdb'}`};
  margin: ${props => props.spacing || 0};
  opacity: ${props => props.opacity || 1};
`;

export const DividerV = styled.View<DividerProps>`
  height: ${props => props.height || '100%'};
  width: ${props => props.size ? props.size + 'px' : '1px'};
  background: ${props => `${props.theme[props?.background] || props?.background || '#dbdbdb'}`};
  margin: ${props => props.spacing || 0};
  opacity: ${props => props.opacity || 1};
`;

export const MaterialIcon = styled(MaterialCommunityIcons).attrs<IconProps>(
  (props) => ({
    name: props.name || "check",
    size: props.size || 20,
    color: props.color || colors.dark,
  })
)<IconProps>``;

export const FeatherIcon = styled(Feather).attrs<IconProps>((props) => ({
  name: props.name || "check",
  size: props.size || 20,
  color: props.color || colors.dark,
}))<IconProps>``;

export const OcticonsIcon = styled(Octicons).attrs<IconProps>((props) => ({
  name: props.name || "check",
  size: props.size || 20,
  color: props.color || colors.dark,
}))<IconProps>``;
