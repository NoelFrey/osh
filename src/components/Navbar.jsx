import '../CSS/Navbar.css';
import { Component } from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Budget from './pages/Budget';
import Cards from './Cards';
import Middle from './pages/Middle';
import Multi from './pages/Multi';
import Game from './pages/Game';
import Style from './pages/Style';
import Sensor from './pages/Sensor';

class Navbar extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <NavLink to={'/'}>Главная</NavLink>
          <NavLink to={'/budget'}>Бюджетные</NavLink>
          <NavLink to={'/middle'}>Среднего класса</NavLink>
          <NavLink to={'/multi'}>Мультимедийные</NavLink>
          <NavLink to={'/gamers'}>Игровые</NavLink>
          <NavLink to={'/style'}>Имиджевые</NavLink>
          <NavLink to={'/sensor'}>С сенсорным дисплеем</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/middle" element={<Middle />} />
          <Route path="/multi" element={<Multi />} />
          <Route path="/gamers" element={<Game />} />
          <Route path="/style" element={<Style />} />
          <Route path="/sensor" element={<Sensor />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Navbar;
