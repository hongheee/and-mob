

$(function(){
    $('.btn_me').click(function(){
        $('.btn_me').toggleClass('open');

        if($(this).hasClass('open')){
            $('.menu_bg').animate({left:0},500);
        } else {
            $('.menu_bg').animate({left:'-100%'},500);        
        }
    })

    $('.menu_back').click(function(){
        $('.menu_bg').animate({left:'-100%'},500); 
    })
});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

var swiper = new Swiper(".mySwipers", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

const order = document.querySelector('.header_order');
const elPopup = document.querySelector('#popup');
const closeBtn = document.querySelector('.close');
const back = document.querySelector('.btn_area');


order.onclick = function(aa){
    aa.preventDefault();  
    elPopup.style.display = "block"; 
}

closeBtn.onclick = function(aa){
    aa.preventDefault(); 
    elPopup.style.display = "none"; 
}

back.onclick = function(aa){
    aa.preventDefault(); 
    elPopup.style.display = "none"; 
}


