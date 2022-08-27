import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'modules/api';
import noImg from '../images/no-photo.jpg';

import css from '../modules/Menu.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const CreditsPage = () => {
  const [state, setState] = useState({
    credits: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getCredits(id);

        setState(prevState => {
          return {
            ...prevState,
            credits: result,
          };
        });
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchCredits();
  }, [id]);

  // const goBack = () => navigate(-1);

  const { loading, error } = state;
  const { credits } = state;

  const elements = credits.map(({ id, name, character, profile_path }) => (
    <li key={id} className={css.castItem}>
      <img
        src={profile_path ? `${IMG_URL}${profile_path}` : noImg}
        alt={`${name} portrait`}
        width="100"
      />
      <div>
        <p>
          <b>{name}</b>
        </p>

        <p>
          <i>{character}</i>
        </p>
      </div>
    </li>
  ));

  return (
    <div className={css.container}>
      <ul className={css.castList}>{elements}</ul>
      {loading && <p>... завантажується кінофільм</p>}
      {error && <p>Помилка заванаження!</p>}
    </div>
  );
};

export default CreditsPage;
