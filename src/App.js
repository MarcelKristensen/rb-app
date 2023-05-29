import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/footer';
import Test from './pages/test';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DCDCDC' //lys grå
    },
    secondary: {
      main: '#F3B820' //orange
    },
  },
  typography: {
    fontFamily: 'Quicksand',
      footerHeading: {
        fontSize: 30,
        fontWeight: 700
      }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Test />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
