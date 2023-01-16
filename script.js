 'use strict';
{
 const swiper = new Swiper(".swiper", {
    effect: "cube", //スライドのエフェクトを指定
    loop: true, //ループを一番目初めからに設定
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    navigation: {
      nextEl: ".swiper-button-next", //矢印右
      prevEl: ".swiper-button-prev", //矢印左
    },
  });
}
