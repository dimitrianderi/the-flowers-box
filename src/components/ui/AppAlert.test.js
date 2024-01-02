import { render, screen } from '@testing-library/vue';
import AppAlert from './AppAlert.vue';

const textAlert = 'test alert';

test('renders alert', () => {
  const options = {
    props: {
      text: textAlert,
    },
  };

  render(AppAlert, options);

  screen.getByText('test alert');
});

test('renders icon', () => {
  render(AppAlert);

  const alertIcon = screen.getByTestId('alert-icon');

  expect(alertIcon.classList.contains('alert-icon')).toBe(true);
});
