const navMenu = document.getElementById('menu');

navMenu.addEventListener('click', (event) =>{
    navMenu.querySelectorAll('a').forEach(el => el.classList.remove('active-nav'));
    event.target.classList.add('active-nav');    
});

const displayOne = document.getElementById('display-1');

displayOne.addEventListener('click', (event) =>{
    if(event.target.classList.contains('on')){
        event.target.classList.remove('on');
        event.target.classList.add('off');
    }
    else{
        event.target.classList.remove('off');
        event.target.classList.add('on');
    }
})

const displayTwo = document.getElementById('display-2');

displayTwo.addEventListener('click', (event) => {
    if(event.target.classList.contains('on')){
        event.target.classList.remove('on');
        event.target.classList.add('off');
    }
    else{
        event.target.classList.remove('off');
        event.target.classList.add('on');
    }
})

const nextArrow = document.querySelector('.arrow_right');
const leftArrow = document.querySelector('.arrow_left');
const slider = document.getElementsByClassName("slider");

nextArrow.addEventListener('click', (event) => {
    plusSlides(1);
    if (slider[0].classList[1] == "showing") {
        slider[0].classList.remove('showing');
    }
    else { slider[0].classList.add('showing'); }
})

leftArrow.addEventListener('click', (event) => {
    plusSlides(-1);
    if (slider[0].classList[1] == "showing") {
        slider[0].classList.remove('showing');
    }
    else { slider[0].classList.add('showing'); }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}