export interface IButton {
  text: string;
  theme?: "bg_primary1" | "bg_color100";
  width?: "w100" | "w200px" | "w160px" | "w120px"
  shadow?: boolean
  alternativeFontColor?: boolean
}