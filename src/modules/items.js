import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    to: '/goit-react-hw-05-movies',
    text: 'Головна сторінка',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'Кінофільми',
  },
];

export default items;
