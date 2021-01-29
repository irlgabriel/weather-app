import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#DEB787',
    },
    secondary: {
      main: '#00796b',
    },
  }
});

export const themeDark = createMuiTheme({
  palette: {
    primary: {
      main: '#080A2B',
    },
    secondary: {
      main: '#491E7D',
    },
    type: 'dark'
  }
})