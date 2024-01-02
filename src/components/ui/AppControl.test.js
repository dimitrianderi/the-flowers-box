import { render, screen } from '@testing-library/vue';
import AppControl from './AppControl.vue';

test('render input', () => {
  const options = {
    props: {
      id: 'testId',
      name: 'testName',
      type: 'text',
      label: 'test mark',
      modelValue: 'start value',
    },
  };

  render(AppControl, options);

  expect(screen.getByLabelText(`${'test mark'}:`).value).toBe('start value');
});

test('render input autocomplete', () => {
  const options = {
    props: {
      id: 'testId',
      name: 'testName',
      type: 'text',
      label: 'test mark',
      autocomplete: 'off',
    },
  };

  render(AppControl, options);

  const inputElement = screen.getByLabelText(`${'test mark'}:`);

  expect(inputElement.getAttribute('autocomplete')).toBe('off');
});
