const color = {
  white1: '#ffffff',
  white2: '#fefefe',
  black1: '#141414',
  black2: '#444444',
  gray1: '#888888',
  gray2: '#AAAAAA',
  gray3: '#D9D9D9',
  gray4: '#E4E4E4',
}

const fontSize = {
  h1: '36px',
  h2: '30px',
  h3: '26px',
  h4: '22px',
  h5: '18px',
  default: '15px',
  small: '13px',
}

const fontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
}

const deviceSize = {
  mobile: '(max-width: 1079px)',
  desktop: '(min-width: 1080px)',
}

const btnColor = {
  default: '#D5D5D5',
  primary: '#1976d2',
  secondary: '#dc004d',
  disabled: '#E0E0E0',
}

const btnSize = {
  small: '4px 10px',
  medium: '6px 16px',
  large: '8px 22px',
}

export const theme = {
  color,
  fontSize,
  fontWeight,
  deviceSize,
  btnColor,
  btnSize,
}

export type ThemeType = typeof theme
