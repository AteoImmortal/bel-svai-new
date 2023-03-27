// Слайдер
function slider(){
    let offset = 0;
    const sliderPhoto = document.querySelector('.slider__photo');

    document.querySelector('.slider__right').addEventListener('click', function(){
        offset = offset + 288;

        if(offset > 1440){
            offset = 0;
        }

        sliderPhoto.style.left = -offset + 'px';
    });

    document.querySelector('.slider__left').addEventListener('click', function(){
        offset = offset - 288;

        if(offset < 0){
            offset = 1440;
        }

        sliderPhoto.style.left = -offset + 'px';
    })
};
slider();