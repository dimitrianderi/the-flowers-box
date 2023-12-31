import anime from 'animejs';

const startAnime = (el, endValue) => {
  anime({
    targets: el,
    value: endValue,
    easing: 'easeOutCubic',
    round: 1,
    duration: 2000,
  });
};

export default startAnime;
