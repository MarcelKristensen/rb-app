import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/footer';
import Test from './pages/test';
import Hero from './components/hero'

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
      },
      bannerHeading: {
        fontSize: 100,
        fontWeight: 400
      },
      bannerSubtitle: {
        fontSize: 75,
        fontWeight: 300
      }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Hero header="Roskilde Boldklub" subtitle="af 1906"/>
        <Test />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
