let slide = new Swiper('#sn .swiper',{
    direction:'horizontal',
    autoplay:{delay:6000,},
    loop:true,
    slidesPerView:3,
    spaceBetween:15,
    navigation:{
        nextEl:'#sn .swiper-button-next',
        prevEl:'#sn .swiper-button-prev'
    }
})