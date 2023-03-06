export type ContainerProps = {
  flex?: number;
  customFlex?: number;
  background?: string;
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  spacing?: string | number;
  right?: string | number;
  left?: string | number;
  top?: string | number;
  bottom?: string | number;
  wrap?: string;
  row?: boolean;
  width?: string;
  full?: boolean;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  hasPadding?: boolean;
  customPadding?: string;
  removePaddingTop?: string | boolean;
  removePaddingBottom?: string | boolean;
  radius?: boolean;
  customRadius?: string;
  border?: number;
  borderColor?: string;
  opacity?: number;
};

export type TouchableProps = {
  flex?: number;
  customFlex?: number;
  background?:
    | "primary"
    | "primaryLight"
    | "secondary"
    | "tertiary"
    | "danger"
    | "muted"
    | "heavyMuted"
    | "halfMuted"
    | "dark"
    | "darkLight"
    | "light"
    | "halfLight"
    | "heavyLight"
    | "transparent";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  spacing?: string;
  wrap?: string;
  row?: boolean;
  right?: string | number;
  left?: string | number;
  top?: string | number;
  bottom?: string | number;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  hasPadding?: boolean;
  customPadding?: string;
  removePaddingTop?: string | boolean;
  removePaddingBottom?: string | boolean;
  radius?: boolean;
  customRadius?: string;
  border?: string | number;
  borderColor?: string;
  opacity?: number;
  elevation?: number;
  disabled?: boolean;
};

export type ButtonProps = {
  background?: string;
  block?: boolean;
  half?: boolean;
  textColor?: string;
  mode?: string;
  right?: string | number;
  left?: string | number;
  top?: string | number;
  bottom?: string | number;
  height?: string | number;
  fontSize?: number;
  width?: string;
  family?:
    | "thin"
    | "extraLight"
    | "light"
    | "regular"
    | "medium"
    | "semiBold"
    | "bold"
    | "extraBold"
    | "black";
};

export type TextProps = {
  color?: string;
  small?: boolean;
  big?: boolean;
  size?: string;
  bold?: boolean;
  extraBold?: boolean;
  align?: string;
  scale?: string;
  hasPadding?: boolean;
  customPadding?: string;
  opacity?: number;
  decoration?: string;
  spacing?: string | number;
  right?: string | number;
  left?: string | number;
  top?: string | number;
  bottom?: string | number;
  upper?: boolean;
  line?: number;
  family?:
    | "thin"
    | "extraLight"
    | "light"
    | "regular"
    | "medium"
    | "semiBold"
    | "bold"
    | "extraBold"
    | "black";
};

export type ScrollViewProps = {
  spacing?: string | number;
  right?: string | number;
  left?: string | number;
  top?: string | number;
  bottom?: string | number;
  hasPadding?: boolean;
  customPadding?: string;
  removePaddingTop?: string;
  removePaddingBottom?: string;
  background?: string;
  verticalScrollIndicator?: boolean;
  horizontalScrollIndicator?: boolean;
};

export type ImageProps = {
  mode?: string;
  width?: number;
  height?: number;
  radius?: number;
  spacing?: string;
  border?: number;
  borderColor?: string;
};

export interface TextInputProps extends IFonts {
  error: boolean | string;
  width?: string;
  background?: string;
  size?: string
}

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

export type ModalProps = {
  adjust?: boolean;
  background?: string;
  handleColor?: string;
};

export type SpacerProps = {
  size?: number;
  vertical?: boolean;
  width?: string;
};

export type DividerProps = {
  size?: number;
  background?: string;
  spacing?: string | number;
  width?: string;
  height?: string;
  opacity?: number;
};

export type HelperTextProps = {
  type?: string,
  color?: string
}

interface IFonts {
  family?:
    | "thin"
    | "extraLight"
    | "light"
    | "regular"
    | "medium"
    | "semiBold"
    | "bold"
    | "extraBold"
    | "black";
}
