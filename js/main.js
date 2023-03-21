// Чекбокс
document.querySelectorAll('label.checkbox-block input[type="checkbox"]').forEach(function(item) {
    item.addEventListener('change', function(){
        if (item.checked) {
            item.closest('label').classList.add('checkbox-block--active');
        } else {
            item.closest('label').classList.remove('checkbox-block--active');
        }
    })
})


// Табы
document.querySelectorAll('[data-control="tab-questions"]').forEach(function(tab) {
    const tabBlocks = tab.querySelectorAll('[data-control="tabs-block"]');
    const tabButtons = tab.querySelectorAll('[data-control="questions__tab"]');

    const imgPlus = tab.querySelectorAll('.plus');
    const imgMinus= tab.querySelectorAll('.minus');

    tabButtons.forEach(function (item, index){
        item.addEventListener('click', function(){
            const currentButton = item;
            const currentBlock = tabBlocks[index];

            if(!currentButton.classList.contains('active')){
                tabButtons.forEach(function(item){
                    item.classList.remove('active');
                });

                tabBlocks.forEach(function(item){
                    item.classList.remove('active');
                });

                currentBlock.classList.add('active');
                currentButton.classList.add('active');

            } else{
                tabButtons.forEach(function(item){
                    item.classList.add('active');
                });

                tabBlocks.forEach(function(item){
                    item.classList.add('active');
                });

                currentBlock.classList.remove('active');
                currentButton.classList.remove('active');
            }
        })
    })
    
});


// Анимация кнопки
(function (){
    let passwordStatys=false;
    if (!passwordStatys){
        document.querySelector(".btn-yellow").style.animation="swing 0.5s ease";   
    }
});


// Слайдер
(function (){
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
});


// Сделать заказ
const openWindow = document.querySelector('.open-window');
const makeOrder = document.querySelector('.application-form--hidden');
const overlay = document.querySelector('#overlay');

openWindow.addEventListener('click', function () {
    makeOrder.classList.toggle('application-form--active');
    overlay.classList.toggle('active');
})

const closeWindow = document.querySelector('.close');

closeWindow.addEventListener('click', function (){
        makeOrder.classList.remove('application-form--active');
        overlay.classList.remove('active');
})