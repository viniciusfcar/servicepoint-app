export type ContainerProps = {
    flex?: number,
    customFlex?: number,
    background?: string,
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
    spacing?: string | number,
    right?: string | number,
    left?: string | number,
    top?: string | number,
    bottom?: string | number,
    wrap?: string,
    row?: boolean,
    width?: string,
    full?: boolean,
    maxWidth?: string,
    minWidth?: string,
    height?: string,
    maxHeight?: string,
    minHeight?: string,
    hasPadding?: boolean,
    customPadding?: string,
    removePaddingTop?: string | boolean,
    removePaddingBottom?: string | boolean,
    radius?: boolean,
    customRadius?: string,
    border?: number,
    borderColor?: string,
    opacity?: number
}

export type TextProps = {
    color?: string,
    small?: boolean,
    big?: boolean,
    size?: string,
    bold?: boolean,
    extraBold?: boolean,
    align?: string,
    scale?: string,
    hasPadding?: boolean,
    customPadding?: string,
    opacity?: number,
    decoration?: string,
    spacing?: string | number,
    right?: string | number,
    left?: string | number,
    top?: string | number,
    bottom?: string | number,
    family?: string,
    upper?: boolean,
    line?: number
}