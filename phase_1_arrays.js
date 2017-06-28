Array.prototype.uniq = function() {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function() {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    let subArr = this.slice(i + 1, this.length);
    for(let j = 0; j < subArr.length; j++) {
      if (this[i] + subArr[j] === 0) {
        result.push([i, i + j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    let subArr = [];
    for(let j = 0; j < this.length; j++) {
      subArr.push([this[j][i]]);
    }
    result.push(subArr);
  }
  return result;
};
