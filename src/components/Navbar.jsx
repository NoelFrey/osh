import '../CSS/Navbar.css';
import { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <NavLink to={'/'}>Главная</NavLink>
          <NavLink to={'./pages/Budget'}>Бюджетные</NavLink>
          <NavLink to={'./pages/Middle'}>Среднего класса</NavLink>
          <NavLink to={'./pages/Multi'}>Мультимедийные</NavLink>
          <NavLink to={'./pages/Gamers'}>Игровые</NavLink>
          <NavLink to={'./pages/Style'}>Имиджевые</NavLink>
          <NavLink to={'./pages/Sensor'}>С сенсорным дисплеем</NavLink>
        </nav>
      </BrowserRouter>
    );
  }
}

export default NavBar;
