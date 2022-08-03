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

const color = {
  primary: '#24D59E',
  secondary: '#1F8FF0',
  alert: '#FF5252',
  black1: '#141414',
  black2: '#444444',
  gray1: '#888888',
  gray2: '#AAAAAA',
  gray3: '#E4E4E4',
  gray4: '#D9D9D9',
  white1: '#FFFFFF',
  white2: '#FEFEFE',
}

export const theme = {
  fontSize,
  fontWeight,
  deviceSize,
  color,
}

export type ThemeType = typeof theme
