import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#91B8FA',
    },
    secondary: {
      main: '#00796b',
    }
  }
});

export const themeDark = createMuiTheme({
  ...themeLight,
  palette: {
    type: 'dark',
  }
})