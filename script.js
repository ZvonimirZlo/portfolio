$(document).ready(() => {
  $(".hero-bg").ripples({
    resolution: 200,
    perturbance: .002,
  });
});


anime.timeline({ loop: false })
  .add({
    targets: '.front-end .line',
    opacity: [0, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 900,
    delay: 1300
  }).add({
    targets: '.front-end .line',
    duration: 1200,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
  }).add({
    targets: '.front-end .dash',
    opacity: [0, 1],
    scaleY: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.front-end .letters-left',
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  })
  .add({
    targets: '.front-end .letters-right',
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.front-end .letters-center',
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 1700,
    offset: '-=200'
  })
  .add({
    targets: '.front-end',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
  });