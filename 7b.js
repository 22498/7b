var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');

var imagholder = document.getElementById('img');
var imag = [];
imag[0] = "hond.png";
imag[1] = "parkiet.png";
imag[2] = "tijger.png";
imag[3] = "konijn.png";
imag[4] = "kat.png";



b1.addEventListener('click',()=>{
imagholder.src = imag[0];

});
b2.addEventListener('click',()=>{
imagholder.src = imag[1];

});
b3.addEventListener('click',()=>{
imagholder.src = imag[2];

});
b4.addEventListener('click',()=>{
imagholder.src = imag[3];

});
b5.addEventListener('click',()=>{
imagholder.src = imag[4];

});
