import { render, screen } from '@testing-library/vue';
import AppLoader from './AppLoader.vue';

test('renders loader', () => {
  render(AppLoader);

  screen.debug();
});
