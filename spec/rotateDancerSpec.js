// check chai css if possible
// expect('.makeRotateDancer:hover {transform: rotate(10000deg)}').to.have.rule('.makeRotateDancer:hover');
describe('rotateDancer', function() {
  

  var rotateDancer, clock;
  var timeBetweenSteps = 100;
  

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotateDancer = new makeRotateDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rotateDancer.$node).to.be.an.instanceof(jQuery);
  });

 

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rotateDancer, 'step');
      expect(rotateDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      console.log('callcount ', rotateDancer.step.callCount);
      expect(rotateDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rotateDancer.step.callCount).to.be.equal(2);
    });
    
    it('should have an image for the dancer', function() {
        expect(rotateDancer.$node.find('img').prop('src')).to.be.equal("file:///Users/student/code/hrsf98-subclass-dance-party/src/pic.png");
    });
  });
  
  
});
