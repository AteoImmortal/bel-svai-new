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
const tabs = document.querySelectorAll('[data-control="tab-questions"]');
tabs.forEach(function(tab) {
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
let passwordStatys=false;
function sendPassword(){
    if (!passwordStatys){
        document.querySelector(".btn-yellow").style.animation="swing 0.5s ease";   
    }
}
sendPassword()

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
}
slider()