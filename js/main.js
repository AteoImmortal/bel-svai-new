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


// Маска телефона
jQuery(function ($) {
    $("#maskPhoneHeader").mask("+375 (99) 999-99-99");
    $("#maskPhoneContact").mask("+375 (99) 999-99-99");
});


// Мобильная навигация

const navMenu = document.querySelector('.nav__menu');
const overlayMobile = document.querySelector('#overlayMobile');
const navMobile = document.querySelector('.nav__mobile');
const navCross = document.querySelector('.nav__cross');

navMenu.addEventListener('click', function(){
    overlayMobile.classList.toggle('overlay-mobile--active');
    navMobile.classList.toggle('nav__mobile--active');
    navCross.classList.toggle('nav__cross--active');
});

navCross.addEventListener('click', function(){

    overlayMobile.classList.remove('overlay-mobile--active');
    navMobile.classList.remove('nav__mobile--active');
    navCross.classList.remove('nav__cross--active');
})