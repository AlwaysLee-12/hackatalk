import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundDark: string;
    btnPrimary: string;
    btnPrimaryFont: string;
    btnPrimaryLight: string;
    btnPrimaryLightFont: string;
    textDisabled: string;
    btnDisabled: string;
    fontColor: string;
    tintColor: string;
    lineColor: string;
  }
}
