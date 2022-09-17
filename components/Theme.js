import { RFPercentage } from 'react-native-responsive-fontsize';

const theme = {
  palette: {
    primary: {
      main: '#E432C1',
      contrastText: 'white',
    },
    secondary: {
      main: '#2E20DB',
      contrastText: 'white',
    },
    tertiary: {
      main: '#21FFAA',
      contrastText: 'black',
    },
    grey: {
      light: '#D9D9D9',
      main: '#687684',
      dark: '#232526',
    },
  },
  typography: {
    fontSize: {
      medium: RFPercentage(2),
    },
  },
};

export default theme;
