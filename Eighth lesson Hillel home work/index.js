//Exercise 1
let ladder = {
  ladderStep: 1,
  up: function () {
    this.ladderStep++;
    return this;
  },
  down: function () {
    this.ladderStep--;
    return this;
  },
  showStep: function () {
    console.log(this.ladderStep);
    return this;
  }
};

ladder.up().up().down().showStep();
