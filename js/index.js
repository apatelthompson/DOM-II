

// animate logo
const logo = document.querySelector('h1');

logo.addEventListener('mouseover', function(event){
    console.log('I am the logo!');
    logo.style.color = "#17A2B8";
    TweenMax.to("h1",3, {x:300, ease: Bounce.easeOut});
    event.stopPropogation();
});

//make nav preventDefault
const nav = document.querySelector('nav');
nav.addEventListener('click', event => {
  event.preventDefault()
  console.log('Clicked!')
})

// make MainNav coral when clicked
const mainNav = document.querySelector('.container.nav-container');
mainNav.addEventListener('mouseover', function(event){
    mainNav.style.backgroundColor = "#f88379";
});

// make Intro border bigger when page is scrolled over
const intro = document.querySelector('.intro');
intro.addEventListener('mouseover', function(event){
    TweenMax.to('.intro', 10, {borderWidth: "thick"});
});


// make h2 grow bigger and change color
const headers = document.querySelectorAll('h2');

headers.forEach(elem => {elem.addEventListener('mouseover', (event) => {
    event.target.style.color = "#17A2B8";
    event.target.style.fontSize = '400%';
  })

});

//3 header image grows lighter
const mainImg = document.querySelector('.intro img');

mainImg.addEventListener('dblclick', (event) => {
    mainImg.style.color = "#17A2B8";
    TweenMax.to(".intro img", 3, {opacity:0.3});
});


//make buttons turn pink when clicked
const buttons = document.querySelectorAll('.btn');

buttons.forEach(elem => {
  elem.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "#f88379";
  });

  elem.addEventListener('click', (event) => {
    event.target.style.borderColor = 'black';
  });

});

//turn input areas pink when clicked on

const formInputs = document.querySelectorAll('input[type="text"]');

formInputs.forEach(elem => {
  elem.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = "#f88379";
  });
});


//turn text white when typing in form

const formText = document.querySelectorAll('input[type="text"]');

formText.forEach(elem => {
  elem.addEventListener('keydown', (event) => {
    event.target.style.color = "white";
  });
});
