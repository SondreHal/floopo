let audio = new Audio("police.mp3");
let trigger = document.getElementById("square_trigger");
let red = document.getElementById("square_red");
let blue = document.getElementById("square_blue");
let sqr_top = document.getElementById("square_top");
let baya = document.getElementById("baya");
let heya = document.getElementById("heya");
let wrap = document.getElementById("wrap");
let arrow = document.getElementById("arrow_up");
let img_rap = document.getElementById("img_rap");

trigger.onmouseenter = function () {
   audio.play();
};

trigger.onmouseleave = function () {
   audio.pause();
   audio.currentTime = 0;
};

sqr_top.onmousedown = function () {
   trigger.style.backgroundColor = "#dcdcdc";
   heya.style.color = "#dcdcdc";
   sqr_top.style.backgroundColor = "#1a1a20";
   baya.style.color = "#1a1a20";
   trigger.style.gridRowStart = 1;
   trigger.style.gridColumn = 4;
   red.style.gridRowStart = 1;
   red.style.gridColumn = 2;
   blue.style.gridRowStart = 1;
   blue.style.gridColumn = 6;
   arrow.style.gridRowStart = 2;
   arrow.style.gridColumn = 4;
   arrow.style.color = "#dcdcdc";
   wrap.style.grid;
   wrap.style.gridTemplateRows = "100px 40px";
   img_rap.style.opacity = "1";
};
