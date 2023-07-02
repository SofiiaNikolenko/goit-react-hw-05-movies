import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <nav className={css.navbar}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.link}>
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
