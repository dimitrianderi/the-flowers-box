import { render, screen } from '@testing-library/vue';
import AppAccordion from './AppAccordion.vue';

const textCheckbox = 'text for accordion';

test('renders checked base checkbox with label', () => {
  const options = {
    props: {
      id: 'checkbox',
      title: textCheckbox,
    },
  };

  render(AppAccordion, options);

  screen.getByLabelText('text for accordion');
});

test('renders checked base checkbox with label', () => {
  const options = {
    props: {
      id: 'checkbox',
      idx: 1,
    },
  };

  render(AppAccordion, options);

  screen.getByLabelText('02');
});

test('renders checked base checkbox with label', () => {
  const options = {
    props: {
      id: 'checkbox',
      title: textCheckbox,
    },
  };

  render(AppAccordion, options);

  expect(screen.getByLabelText(textCheckbox).checked).toBe(false);
});
