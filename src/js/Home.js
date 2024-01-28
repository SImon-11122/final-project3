let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains-behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains-front');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 0.50 + 'px';
  moon.style.top = value * 2.20 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';

});
//กลับด้านบน
let myBtn = document.getElementById("btt");

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
     }
 }

 window.onscroll = function() {
     scrollFunction();
 }

function backToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
 }