class Octopus {
  constructor(className) {
    this.className = className;
    // this.xCoord = 0;
    // this.yCoord = 0;
  }

  makeNewPosition () {
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
  }

  animateDiv () {
    let octopus = '.' + this.className;
    var newq = this.makeNewPosition();
    console.log("octo", $(octopus));
    var oldq = $(octopus).offset();
    var speed = this.calcSpeed([oldq.top, oldq.left], newq);

    $(octopus).animate({ top: newq[0], left: newq[1] }, speed, function(){
      this.animateDiv();
    });
  };

  calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
  }

  // changePosition () {
  //   // let x = Math.floor(Math.random() * (2 - -1) + -1);
  //   // let newX = this.xCoord + x;
  //   // this.xCoord = newX;
  //   // let y = Math.floor(Math.random() * (2 - -1) + -1);
  //   // let newY = this.yCoord + y;
  //   // this.yCoord = newY;
  //
  //   this.xCoord += Math.floor(Math.random() * (10 - -10) + -10);
  //   this.yCoord += Math.floor(Math.random() * (10 - -10) + -10);
  //   console.log("x", this.xCoord);
  //   console.log("y", this.yCoord);
  // }

  swim () {
    let that = this;
    $(document).ready(function(){
      that.animateDiv();
    });
  }
}

export default Octopus;
