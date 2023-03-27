// Сделать заказ
const applicationForm = document.querySelector('#applicationForm');
const overlay = document.querySelector('#overlay');
const release = document.querySelector('#release');
const openWindow = document.querySelector('.open-window');
const closeWindow = document.querySelector('.close');

openWindow.addEventListener('click', function () {
    applicationForm.classList.toggle('application-form--active');
    overlay.classList.toggle('active');
});


closeWindow.addEventListener('click', function (){
        applicationForm.classList.remove('application-form--active');
        overlay.classList.remove('active');
});