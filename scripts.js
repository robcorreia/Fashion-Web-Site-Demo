const itens = document.querySelectorAll('.item');
const menu = document.querySelectorAll('.menu li');
const slide = document.querySelector('.slide');
const overflow = document.querySelector('.overflow');
const brand = document.querySelector('.brand');
const square = document.querySelector('.square');

TweenMax.staggerFromTo(itens, 1, {
    scale: 0.5,
    opacity: 0,
    ease: Back.easeOut.config(1.7), y: -500
}, {
    opacity: 1,
    scale: 0.9,
    y: 0,
    delay: 2,
    cycle: {
        y: [100, 0]
    },
    ease: Back.easeOut.config(1.7), y: -500
}, .3);



TweenMax.staggerFromTo(menu, 1, {
    opacity: 0,
    scale: 0.5,
    ease: Quart.easeIn,
    y: -200,
}, {
    opacity: 1,
    scale: 0.9,
    y: 0,
    delay: 3
}, .3);



TweenMax.from(slide, 1, {
    top: 0,
    ease: Expo.EaseOut
})

TweenMax.from(overflow, 1, {
    top: 0,
    delay: 1,
    ease: Expo.EaseOut
})


TweenMax.fromTo(square, 2, {
    scale: 0,
    y: -500
},{
    delay: 3,
    opacity: 0.5,
    scale: 1,
    ease: Expo.easeIn,
    y: 0,
    rotation: 180
    
});