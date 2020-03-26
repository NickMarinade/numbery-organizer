const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    if (typeof param !== 'string' || isNaN(param)) {
      return false;
    } 
    else {
      return true;
    }
    
  },
  addString: function (param) {
    if (typeof param !== 'string') {
      return false;
    } 
    else {
      if (isNaN(param))
      this.NaNyStrings.push(param);
      else
      this.numberyStrings.push(param);
      return true;
    }  
    
  },
  allStrings: function () {
    return [...this.numberyStrings, ...this.NaNyStrings];
  },
  evenStrings: function () {
    return this.numberyStrings.filter((number) => number % 2 !== 1);
  },
  oddStrings: function () {
    return this.numberyStrings.filter((number) => number % 2 !== 0);
  },
  negativeStrings: function () {
    return this.numberyStrings.filter((number) => number < 0);
  },
  positiveStrings: function () {
    return this.numberyStrings.filter((number) => number >= 0);
  },
  zeroStrings: function () {
    return this.numberyStrings.filter((number) => number == 0);
  },
  numberyAsNumbers: function () {
    return this.numberyStrings.map((numString) => Number(numString));
  },
  NaNyAsNumbers: function () {
    return this.NaNyStrings.map((nanString) => Number(nanString));
  },
  sumOfNumbery: function () {
    return this.numberyStrings.reduce((acc, number) => acc + Number(number), 0);
  },
  sumOfNaNy: function () {
    return this.NaNyStrings.reduce((acc, number) => acc + Number(number), 0);
  },
};


