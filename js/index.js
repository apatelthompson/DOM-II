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

//animate logo
const logo = document.querySelector('h1');
  logo.addEventListener('click', (event) => {
   TweenMax.to("h1",3, {x:300, ease: Bounce.easeOut});
})
