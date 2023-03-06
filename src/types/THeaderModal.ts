import { ContainerProps, TextProps } from "./TStyles";

export type HeaderProps = {
  handleActionLeft?: () => void;
  handleActionRight?: () => void;
  menuAction?: () => void;
  leftIconName?: string;
  rightIconName?: string;
  rightIconColor?: string;
  title?: string;
  containerStyle?: ContainerProps;
  titleStyle?: TextProps;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  hasImage?: boolean;
  hasMenuIcon?: boolean;
};
