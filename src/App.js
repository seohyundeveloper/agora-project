import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.scss';
import Ourteam from './pages/Ourteam';
import Service from './pages/Service';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Mainpage from './pages/Mainpage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/ourteam' element={<Ourteam />} />
          <Route path='/service' element={<Service />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
