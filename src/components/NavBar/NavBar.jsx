import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Pizzaria Delícia</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/extra">Equipe</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;