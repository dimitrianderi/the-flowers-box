import { render, screen } from '@testing-library/vue';
import AppResume from './AppResume.vue';

test('renders resume', () => {
  const options = {
    props: {
      bouquet: {
        name: 'bouquet',
        price: '100',
        author: 'author',
        flowers: [
          {
            title: 'flower1',
            amount: 5,
            res: 10,
          },
          {
            title: 'flower2',
            amount: 15,
            res: 30,
          },
        ],
        greenery: [
          {
            title: 'greenery',
            price: 12,
          },
        ],
        packaging: [
          {
            title: 'packaging',
            price: 12,
          },
        ],
        composition: [
          {
            title: 'composition',
            price: 2,
          },
        ],
        view: [
          {
            title: 'composition',
          },
        ],
      },
    },
  };

  render(AppResume, options);

  screen.debug();
});
