Array.prototype.bubbleSort = function() {
  let dup = this;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (dup[i] > dup[i + 1]) {
        sorted = false;
        let temp = dup[i];
        dup[i] = dup[i + 1];
        dup[i + 1] = temp;
      }
    }
  }
  return dup;
};

String.prototype.substrings = function() {
  let splitted = this.split('');
  let result = [];
  for (let i = 0; i < splitted.length; i++) {
    for (let j = i+1; j <= splitted.length; j++) {
      result.push(this.slice(i,j));
    }
  }
  return result;
};
