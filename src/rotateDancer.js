var makeRotateDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node = $('<span class="makeRotateDancer" ><img src="src/pic.png" alt="rainbow circle"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
};

makeRotateDancer.prototype = Object.create(makeDancer.prototype);
makeRotateDancer.prototype.constructor = makeRotateDancer;


makeRotateDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  
  // $('.makeRotateDancer').click(function() {
  //   this.transform = rotate(20);
  // $('.makeRotateDancer').animate({
  //   transform: rotate(20),
  // }, 5000, function(){});
  //$('.makeRotateDancer').css("transform","rotate(20deg)")
    
  //     step:function(now, fx) {
  //       $(this).css('transform', 'rotate('+now+'deg)');
  //     },
  //     duration:'slow',
  //   //   //this.opacity: 0.25;
  //   //    left: 100,
  //   //   // top: 100,
  //   //   // height: this.width,
  //   //   // width: this.height,
  //   // }, 5000, function(){});
  // }, 'linear');
  //this.setPosition(this.top, this.left)
// });
};