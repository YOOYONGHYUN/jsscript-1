const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const ranImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${ranImg}`;

console.log(bgImage);
document.body.appendChild(bgImage);
