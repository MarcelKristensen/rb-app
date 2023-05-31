import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/footer';
import Header from  './components/Header'
import Forside from './pages/Forside';
import Registrering from './pages/registrering';
import Artikel from './pages/artikel';
import Test from './pages/test';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DCDCDC' //lys grå
    },
    secondary: {
      main: '#F3B820' //orange
    }
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
      },
      imageSubText: {
        fontSize: 12,
        fontWeight: 400
      },
      latestNewsTitle: {
        fontSize: 20,
        fontWeight: 600,
        color: '#FFFFFF'
      },
      latestNewsDate: {
        fontSize: 10,
        fontWeight: 600,
        color: '#FFFFFF'
      },
      blueBtn: {
        fontSize: 25,
        fontWeight: 600,
        color: '#FFFFFF'
      }
  }
});

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="test" element={<Test />} />
          <Route path="registrering" element={<Registrering />} />
          <Route path="artikel" element={<Artikel />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
        </div>
  );
}

export default App;
