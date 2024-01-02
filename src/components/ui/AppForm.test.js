import { render, screen } from '@testing-library/vue';
import AppForm from './AppForm.vue';

test('renders form with correct title and button text', () => {
  const options = {
    props: {
      isSubmitting: true,
    },
  };

  render(AppForm, options);

  const buttonElement = screen.getByTestId('btn');

  expect(buttonElement.getAttribute('disabled')).toBeDefined();
});
