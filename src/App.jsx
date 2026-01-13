import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/LanguageContext';
import HomePage from './pages/HomePage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import Kontakt from './pages/Kontakt';
import UeberUns from './pages/UeberUns';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
