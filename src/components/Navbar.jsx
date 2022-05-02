import '../CSS/Navbar.css';
import { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <NavLink to={'/'}>Главная</NavLink>
          <NavLink to={'./pages/budget'}>Бюджетные</NavLink>
          <NavLink to={'/middle'}>Среднего класса</NavLink>
          <NavLink to={'/multi'}>Мультимедийные</NavLink>
          <NavLink to={'/gamers'}>Игровые</NavLink>
          <NavLink to={'/style'}>Имиджевые</NavLink>
          <NavLink to={'/sensor'}>С сенсорным дисплеем</NavLink>
        </nav>
      </BrowserRouter>
    );
  }
}

export default NavBar;
