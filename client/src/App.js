import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Home from './components/Home/Home';


import {BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const App = () =>{
  const theme ={
    colors :{

    },
    media:{mobile:'768 px',tab: '998 px'}
  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;