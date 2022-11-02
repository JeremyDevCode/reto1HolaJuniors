window.addEventListener('scroll', () => {
    var color = document.querySelector('.main');
    color.classList.toggle('dash', window.scrollY > 0)
})
window.addEventListener('scroll', () => {
    var color = document.querySelector('.dash');
    color.classList.toggle('move', window.scrollY > 100)
})

const main = document.querySelector('.main');
const mainm = document.querySelector('.mainm');

const navbard = document.querySelector('.navbar');
const headerd = document.querySelector('.header');
const skillsd = document.querySelector('.skills');
const experienced = document.querySelector('.experience');
const contactd = document.querySelector('.contact');

const responsive = document.querySelector('.responsive');
const headerm = document.querySelector('.header-m');
const skillsm = document.querySelector('.skills-m');
const contactm = document.querySelector('.contact-m');


main.addEventListener('click', () => {
    if(main.classList.contains('light')) {
        main.classList.replace('light', 'dark');
    } else {
        main.classList.replace('dark', 'light');
    }

    navbard.classList.toggle('darkmode-navbard');
    headerd.classList.toggle('darkmode-headerd');
    skillsd.classList.toggle('darkmode-skillsd');
    experienced.classList.toggle('darkmode-experienced');
    contactd.classList.toggle('darkmode-contactd')
})

mainm.addEventListener('click', () => {
    if(mainm.classList.contains('light')) {
        mainm.classList.replace('light', 'dark');
    } else {
        mainm.classList.replace('dark', 'light');
    }

    responsive.classList.toggle('darkmodem');
    headerm.classList.toggle('darkmode-headerm');
    skillsm.classList.toggle('darkmode-skillsm');
    contactm.classList.toggle('darkmode-contactm');
});

