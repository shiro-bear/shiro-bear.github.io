const swiper = new Swiper(".swiper", {
    //effect: "cube", //スライドのエフェクトを指定
    //loop: true, //ループを一番目初めからに設定
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
//クリック時各スライドに表示
function buttonClick() {
    if (swiper.activeIndex == 0) {
        nameText[0] = document.getElementById('nameText');
        slide1.innerText = nameText[0].value;
    } else if (swiper.activeIndex == 1) {
        nameText[1] = document.getElementById('nameText');
        slide2.innerText = nameText[1].value;
    } else if (swiper.activeIndex == 2) {
        nameText[2] = document.getElementById('nameText');
        slide3.innerText = nameText[2].value;
    }

}



let nameText = ['', '', ''];
let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);

//回転
var d = 0;
function onClick() {
    var elem = document.getElementById("rote");
    d = d + 45;
    elem.style.transform = "rotate(" + d + "deg)";
}
function onClick_next() {
    content: "next";
}
