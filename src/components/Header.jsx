import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="header-title">Система видеоконференц присутствия</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-list-item">
            <Link to="/">Главная</Link>
          </li>
          <li className="header-list-item">
            <Link to="/robots">Роботы</Link>
          </li>
          <li className="header-list-item">
            <Link to="/about">О нас</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;