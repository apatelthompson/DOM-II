//  mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

//1 animate logo
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

// make MainNav blue when clicked
const mainNav = document.querySelector('.container.nav-container');
mainNav.addEventListener('mouseover', function(event){
    mainNav.style.backgroundColor = "lightgray";
});



//2 make h2 grow bigger and change color
const headers = document.querySelectorAll('h2');

headers.forEach(elem => {elem.addEventListener('click', function(event){
    event.target.style.color = "#17A2B8";
    event.target.style.fontSize = '400%';
  })

});

//3 header image grows lighter
const mainImg = document.querySelector('.intro img');

mainImg.addEventListener('dblclick', function(event){
    mainImg.style.color = "#17A2B8";
    TweenMax.to(".intro img", 3, {opacity:0.3});
});





//
// const logo = document.querySelector('h1');
//
// logo.addEventListener('mouseover', function(event){
//     console.log('I am the logo!');


//make buttons turn pink when clicked
const button1 = document.querySelectorAll('.btn');

// button1.addEventListener('click', function(event){
//     button1.style.backgroundColor = "pink";
//     console.log('I am the button!');
//   });
