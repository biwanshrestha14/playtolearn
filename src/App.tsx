import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Playmaker from './components/Playmaker';
import Home from './pages/Home';
import WhyUs from './pages/WhyUs';
import Member from './components/Members';
import Programs from './pages/Programs';
import Partners from './pages/Partners';
import Resources from './pages/Resources';
import Alumini from './components/Alumini';
import Games from './components/Games';
import JengaStructure from './components/games/JengaStructure';
import PotatoStick from './components/games/PotatoStick';
import CardboardCraft from './components/games/CardboardCraft';
import Sessions from './components/Sessions';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/team">
            <Route path='members' element={<Member />} />
            <Route path='alumini' element={<Alumini />} />
            <Route path='playmaker' element={<Playmaker />} />
          </Route>
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/jenga-structure" element={<JengaStructure />} />
          <Route path="/games/potato-stick" element={<PotatoStick />} />
          <Route path="/games/cardboard-craft" element={<CardboardCraft />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
