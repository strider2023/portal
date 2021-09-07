import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./common/providers/AuthProvider";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#48a999',
    },
    secondary: {
      main: '#00796b',
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined'
    }
  }
});

function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
