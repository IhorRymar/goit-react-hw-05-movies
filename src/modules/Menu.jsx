import { NavLink } from 'react-router-dom';
import items from './items';

import css from '../modules/Menu.module.css';

export const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div
      style={{
        borderBottom: '0.5px dashed white',
        marginBottom: '25px',
      }}
    >
      <ul className={css.menu}>{elements}</ul>
    </div>
  );
};

export default Menu;
