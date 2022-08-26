import Movies from 'modules/Movies';
import css from '../modules/Menu.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <h3
        style={{
          color: 'white',
          fontSize: '32px',
          fontStyle: 'italic',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        Тренди тижня
      </h3>
      <Movies />
    </div>
  );
};

export default HomePage;
