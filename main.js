const logoAnimation = anime.timeline({ 
  autoplay: true,
  delay: 500
});

logoAnimation.add({
  targets: '#top',
  translateY: [100, 0],
  opacity: [0, 1],
  elasticity: 600,
  duration: 1600
}).add({
  targets: '#middle',
  translateY: [100, 0],
  opacity: [0, 1],
  elasticity: 600,
  duration: 1600,
  offset: 250
}).add({
  targets: '#bottom',
  translateY: [100, 0],
  opacity: [0, 1],
  elasticity: 600,
  duration: 1600,
  offset: 500
}).add({
  targets: '#logo-text',
  translateY: ['-100%', 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutExpo',
  offset: 1000
}).add({
  targets: '#footer',
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutExpo',
  offset: 3000
})