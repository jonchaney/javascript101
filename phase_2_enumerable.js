Array.prototype.myEach = function(cb) {
  for(let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function(cb) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

Array.prototype.myReduce = function(cb) {
  let acc = this[0];
  let counter = this.length;
  let start = 1;
  if (arguments.length !== 1) {
    acc = arguments[1];
    start = 0;
  }

  for(let i = start; i < counter; i++) {
    acc = cb(acc, this[i]);
  }

  return acc;
};
