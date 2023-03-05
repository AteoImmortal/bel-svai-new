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


// Отправка формы
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault()
        let error = formValidate(form);
    }

    function formValidate(){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('._email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++
                }
            } else if(input.getAttribute('type') === 'checkBox' && input.checked === false){
                formAddError(input);
                error++;
            } else {
                if(input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input){
        return !/^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

})


// Анимация кнопки
let passwordStatys=false;
function sendPassword(){
    if (!passwordStatys){
        document.querySelector(".btn-yellow").style.animation="swing 0.5s ease";   
    }
}
sendPassword()