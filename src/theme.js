export const colors = {
  white: '#FFFFFF',
  background: '#F5F6F8',
  border: '#EBEBEB',

  text: {
    primary: '#000000',
    secondary: '#ffffff',
    tertiary: '#787878',
    disabled: '#9C9C9C',
  },

  primary: {
    main: '#EB0C0C',
    dark: '#C30000',
    disabled: '#EEEEEE',
  },

  highlight: [
    'rgba(0, 0, 0, 0.3)',
    'rgba(0, 0, 0, 0.5)',
  ],
};

const breakpoint = {
  xs: '@media (max-width: 400px)',
  s: '@media (max-width: 500px)',
  m: '@media (max-width: 600px)',
  l: '@media (max-width: 800px)',
  xl: '@media (max-width: 1250px)',
};

const theme = {
  colors,
  breakpoint,
  borderRadius: [4, 12],
  space: [4, 8, 16, 28, 34, 46, 52],
  fontSizes: [9, 10, 11, 12, 13, 14, 15, 16]
};

export default theme;
