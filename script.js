const menuBtn = document.getElementById('menu');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () =>{
    console.log('click');
    mobileNav.classList.toggle('on');
} )