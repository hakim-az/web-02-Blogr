//HAMBURGER NAVBAR
const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('.nav-list');
const bars = document.querySelectorAll('#hamburger span');
let isActive = false;

hamburger.addEventListener('click', function(){
    navList.classList.toggle('active');
    if(!isActive) {
        bars[0].style.transform = 'rotate(-45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg)';
        isActive = true;
    } else {
        bars[0].style.transform = 'rotate(0deg)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0deg)';
        isActive = false;
    }
})

// FIXED NAVBAR
const navbar = document.querySelector('.header-navbar');
const header = document.querySelector('.header-content ');

const headerObserver = new IntersectionObserver(function(entries,headerObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            navbar.classList.add('scrolled');
        }else{
            navbar.classList.remove('scrolled');
        }
    });
});
headerObserver.observe(header);

// SELECT OPTION DROPDOWN
const arrowProduct = document.getElementById('arrow-product');
const productList = document.querySelector('.product-list');
const arrowCompany = document.getElementById('arrow-company');
const companyList = document.querySelector('.company-list');
const arrowConnect = document.getElementById('arrow-connect');
const connectList = document.querySelector('.connect-list');

const spans = document.querySelectorAll('.select span');
const images = document.querySelectorAll('.select span img');

arrowProduct.addEventListener('click', function(){
    productList.classList.toggle('open-dropdown');
    spans[0].classList.toggle('under-line');
    images[0].classList.toggle('rotate-arrow');
});
arrowCompany.addEventListener('click', function(){
    companyList.classList.toggle('open-dropdown');
    spans[1].classList.toggle('under-line');
    images[1].classList.toggle('rotate-arrow');
});
arrowConnect.addEventListener('click', function(){
    connectList.classList.toggle('open-dropdown');
    spans[2].classList.toggle('under-line');
    images[2].classList.toggle('rotate-arrow');
});