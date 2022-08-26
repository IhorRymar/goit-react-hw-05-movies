import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    to: '/',
    text: 'Головна сторінка',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'Кінофільми',
  },
];

export default items;
