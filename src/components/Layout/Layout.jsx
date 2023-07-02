import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
import Loader from 'components/Loader/Loader';

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

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
