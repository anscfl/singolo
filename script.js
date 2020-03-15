const navMenu = document.getElementById('menu');
const leftScreen = document.getElementById('screen-left');
const rightScreen = document.getElementById('screen-right');
const portfolioNav = document.getElementById('portfolio_nav');
const portfolioImages = document.getElementById('portfolio_grid');
const submit = document.getElementById('submit');
const message = document.getElementById('message');
const closeButton = document.getElementById('close-button');


//header navigation

navMenu.addEventListener('click', (event) =>{
    navMenu.querySelectorAll('a').forEach(el => el.classList.remove('active-nav'));
    event.target.classList.add('active-nav');    
});

//portfolio filter

function shiftPortfolio() {
    let first = portfolioImages.firstElementChild;
    let last = portfolioImages.lastElementChild;
    last.after(first);
}

portfolioNav.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        portfolioNav.querySelectorAll('button').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        shiftPortfolio();
    }
})

portfolioImages.addEventListener('click', (event) => {
    const div = event.target.parentNode;
    if(event.target.tagName === 'IMG'){
        portfolioImages.querySelectorAll('div').forEach(el => el.classList.remove('active-img'));
        div.classList.add('active-img');
    }
})

//display fading

leftScreen.addEventListener('click', () => event.target.style.opacity = event.target.style.opacity == 0 ? 1 : 0);
rightScreen.addEventListener('click', () => event.target.style.opacity = event.target.style.opacity == 0 ? 1 : 0);

//form message

submit.addEventListener('click', (event) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    if (name.validity.valid && email.validity.valid) {
        event.preventDefault();
        message.classList.remove('hidden');
        document.getElementById('message-subject').innerText = subject.value ? 'Тема: ' + subject.value : 'Без темы';
        document.getElementById('message-descr').innerText = description.value ? 'Описание: ' + description.value : 'Без описания';
    }
})

closeButton.addEventListener('click', () => {
    message.classList.add('hidden');
    document.getElementById('form').reset();
});

//change slide

let slides = document.querySelectorAll('.slider .slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
}

function hideSlide(direction) {
    isEnabled = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('showing', direction);
    });
}

function showSlide(direction) {
    slides[currentSlide].classList.add('next', direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('showing');
        isEnabled = true;
    });
}

function nextSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n + 1);
    showSlide('from-right');
}

function previousSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n - 1);
    showSlide('from-left');
}

document.querySelector('.control.next-button').addEventListener('click', function() {
    if (isEnabled) {
        previousSlide(currentSlide);
    }
});

document.querySelector('.control.prev-button').addEventListener('click', function() {
    if (isEnabled) {
        nextSlide(currentSlide);
    }
});