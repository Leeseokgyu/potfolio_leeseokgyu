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
let slide2 = new Swiper('#bn .swiper',{
    direction:'horizontal',
    autoplay:{delay:3000,},
    loop:true,
    slidesPerView:2,
    navigation:{
        nextEl:'#bn .swiper-button-next',
        prevEl:'#bn .swiper-button-prev'
    }
})
let slide3 = new Swiper('#de .swiper',{
    direction:'horizontal',
    autoplay:{delay:3000,},
    loop:true,
    slidesPerView:2,
    navigation:{
        nextEl:'#de .swiper-button-next',
        prevEl:'#de .swiper-button-prev'
    }
})