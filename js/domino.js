function act(){
    document.querySelector('.nav_more').classList.toggle('act');
    document.querySelector('.menu_wrap').classList.toggle('act');
}

let btn = document.querySelector('.play');

btn.addEventListener('click', ()=>{
    if(btn.classList.contains('on')){
        btn.classList.remove('on');
        swiper.autoplay.start()
    }else{
        btn.classList.add('on');
        swiper.autoplay.stop()
    }
})