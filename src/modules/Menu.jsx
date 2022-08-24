import { NavLink } from 'react-router-dom';

import css from '../modules/Menu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const Menu = () => {
  return (
    <div
      style={{
        borderBottom: '0.5px dashed black',
        marginBottom: '25px',
      }}
    >
      <ul className={css.menu}>
        <li>
          <NavLink className={getClassName} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/movie-search">
            Movie search
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
