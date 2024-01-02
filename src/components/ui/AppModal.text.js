import { fireEvent, render, screen } from '@testing-library/vue';
import AppModal from './AppModal.vue';

const textModal = 'this test text for modal';

test('renders modal', () => {
  const options = {
    slots: {
      default: textModal,
    },
  };

  render(AppModal, options);

  screen.getByText('this test text for modal');
});

test('renders close modal', async () => {
  render(AppModal);

  const closeBtn = screen.getByBtnClose('close-modal');

  await fireEvent.click(closeBtn);

  expect(screen.queryModalContent('content-modal')).toBeNull();
});
