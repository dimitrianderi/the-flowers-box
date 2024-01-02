import { render, screen } from '@testing-library/vue';
import AppLinkIcon from './AppLinkIcon.vue';

test('renders resume target', () => {
  const options = {
    props: {
      blank: true,
    },
  };

  render(AppLinkIcon, options);

  const linkElement = screen.getByTestId('link-test');
  const targetAttribute = linkElement.getAttribute('target');

  expect(targetAttribute).toBe('_blank');
});

test('renders resume class dark', () => {
  const options = {
    props: {
      isDark: true,
    },
  };

  render(AppLinkIcon, options);

  const iconElement = screen.getByTestId('icon-test');

  expect(iconElement.classList.contains('dark')).toBe(true);
});
