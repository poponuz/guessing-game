class GuessingGame {
    constructor() {
      
    }
  
    setRange(min, max) {
      this.Min = min;
      this.Max = max;
    }
  
    guess() {
      return this.Gues_Num = Math.round((this.Max/2) + (this.Min/2));
    }
  
    lower() {
      return this.Max = this.Gues_Num;
    }
  
    greater() {
      return this.Min = this.Gues_Num;
    }
  }
  
  module.exports = GuessingGame;