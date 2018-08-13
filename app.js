let Cat = function(name, src) {
  this.name = name;
  this.image = src;
  this.clicks = 0;
  this.clickCounterElem = document.getElementById('cat-clicks');
  this.catNameElem = document.getElementById('cat-name');
  this.catImageElem = document.getElementById('cat-pic');
};

cat.prototype.selectCat = function() {
  this.clickCounterElem.textContent = this.clicks;
  this.catNameElem.textContent = this.name;
  this.catImageElem.src = this.image;
};

cat.prototype.clickCat = function() {
  this.clicks++;
  this.clickCounterElem.textContent = this.clicks;
}

let cat1 = new Cat('Fluffy', 'images/cat.jpg');
let cat2 = new Cat('Furry', 'images/cat2.jpg');
let cat3 = new Cat('Hairy', 'images/cat3.jpg');
let cat4 = new Cat('Baldy', 'images/cat4.jpg');
let cat5 = new Cat('Mittens', 'images/cat5.jpg');

let init = cat1.click();

window.onload = function() {
  init();
}
