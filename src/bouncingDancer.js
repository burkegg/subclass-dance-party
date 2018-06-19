var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="makeBouncingDancer"></span>');
  this.setPosition(top, left);
  this.left = left;
  this.velX = 15;
  
};

makeBouncingDancer.prototype = Object.create(makeDancer.prototype);
makeBouncingDancer.prototype.constructor = makeBouncingDancer;

makeBouncingDancer.prototype.step = function() {
// console.log('hello')
  makeDancer.prototype.step.call(this);
  if(this.move === true) {
  //left = left + velX;
  this.left += this.velX;
  //console.log($(window).width());
  if (this.left >= $(window).width() - 50 ) {
    this.left = $(window).width() - 50;
    this.velX = -this.velX;
  } else if (this.left <= 0) {
    this.velX = -this.velX;
    this.left = 10;
  }
  this.setPosition(this.top, this.left);
}
};