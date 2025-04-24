import main from './styles/main.scss'
import components from './styles/components.scss'
import pages from './styles/pages.scss'
import { Routes, Route } from 'react-router-dom';
import Accueil from '../src/pages/Accueil';
import Blog from '../src/pages/Blog';
import Services from '../src/pages/Services';
import Realisations from '../src/pages/Realisations';
import Contact from '../src/pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Mentions from '../src/pages/Mentions';

function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions" element={<Mentions />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
