import anime from 'animejs';

export const startAnime = (el, endValue) => {
  anime({
    targets: el,
    value: endValue,
    easing: 'easeOutCubic',
    round: 1,
    duration: 2000,
  });
};
