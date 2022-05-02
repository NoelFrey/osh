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
          <NavLink to={'./pages//middle'}>Среднего класса</NavLink>
          <NavLink to={'./pages//multi'}>Мультимедийные</NavLink>
          <NavLink to={'./pages//gamers'}>Игровые</NavLink>
          <NavLink to={'./pages//style'}>Имиджевые</NavLink>
          <NavLink to={'./pages//sensor'}>С сенсорным дисплеем</NavLink>
        </nav>
      </BrowserRouter>
    );
  }
}

export default NavBar;
