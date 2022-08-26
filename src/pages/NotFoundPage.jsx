import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import css from '../modules/Menu.module.css';
import img from '../images/404.png';

const NotFoundPage = () => {
  return (
    <div className={css.error}>
      <Link className={css.errorLink} to="/">
        <AiOutlineArrowLeft /> Повернутися на головну сторінку
      </Link>
      <img src={img} alt="Page not found..." />
    </div>
  );
};

export default NotFoundPage;
