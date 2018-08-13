let Cat = function(name, src) {
  this.name = name;
  this.image = src;
  this.clicks = 0;
  this.clickCounterElem = document.getElementById('cat-clicks');
  this.catNameElem = document.getElementById('cat-name');
  this.catImageElem = document.getElementById('cat-pic');
};

Cat.prototype.selectCat = function() {
  this.clickCounterElem.textContent = this.clicks;
  this.catNameElem.textContent = this.name;
  this.catImageElem.src = this.image;
};

Cat.prototype.clickCat = function() {
  this.clicks++;
  this.clickCounterElem.textContent = this.clicks;
};

let cat1 = new Cat('Fluffy', 'images/cat.jpg');
let cat2 = new Cat('Furry', 'images/cat2.jpg');
let cat3 = new Cat('Hairy', 'images/cat3.jpeg');
let cat4 = new Cat('Baldy', 'images/cat4.jpeg');
let cat5 = new Cat('Mittens', 'images/cat5.jpg');

document.onload = function() {
  init();
};

let init = cat1.selectCat();


document.addEventListener('click', function(e) {
  let target = e.target;

  if (target.matches('.one')) {
    cat1.selectCat();
  }

  if (target.matches('.two')) {
    cat2.selectCat();
  }

  if (target.matches('.three')) {
    cat3.selectCat();
  }

  if (target.matches('.four')) {
    cat4.selectCat();
  }

  if (target.matches('.five')) {
    cat5.selectCat();
  }

  if (target.matches('#cat-pic')) {
    cat.clickCat();
  }


},false);
