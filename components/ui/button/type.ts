export interface IButton {
  text: string;
  theme?: "primary1" | "color100";
  width?: "w100" | "w200px" | "w160px" | "w120px"
  shadow?: boolean
  alternativeFontColor?: boolean
  height?: "h58px" | "h72px",
  changingStyle?: boolean
  loading?: boolean
}