function range(start, end) {
  if (start === end){
    return [start];
  }
  return range(start, end-1).concat([end]);
}

function recSum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return recSum(arr.slice(0, arr.length - 1)) + arr[arr.length - 1];
}

function exponentOne(base, exp) {
  if (exp === 1) {
    return base;
  }

  return exponentOne(base, exp - 1) * base;
}

function exponentTwo(base, exp) {
  if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return Math.pow(exponentTwo(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponentTwo(base, (exp - 1) / 2), 2);
  }

}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  }
  let fib = [fibonacci(n-2)[n-3] + fibonacci(n-1)[n-2]];
  return fibonacci(n-1).concat(fib);

}

function bsearch(array, target) {
  if (array.length === 1 && target === array[0]) {
    return 0;
  } else if (array.length <= 1) {
    return - 1;
  }
  let midpoint = Math.floor(array.length / 2);

  if (target === array[midpoint]) {
    return midpoint;
  }

  if (target < array[midpoint]) {
    return bsearch(array.slice(0, midpoint), target);
  } else {
      if (bsearch(array.slice(midpoint+1, array.length), target) === -1) {
        return -1;
      } else {
        return midpoint + bsearch(array.slice(midpoint+1,
                                  array.length), target) + 1;
        }
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midpoint = Math.floor(arr.length / 2);
  let sortedLeft = mergeSort(arr.slice(0, midpoint));
  let sortedRight = mergeSort(arr.slice(midpoint, arr.length));
  return sortedMerge(sortedLeft,sortedRight);

  function sortedMerge(left, right) {
    let sorted = [];

    while (left.length !== 0 && right.length !== 0) {
      switch (left[0] <= right[0]) {
        case true:
          sorted.push(left.shift());
          break;
        case false:
          sorted.push(right.shift());
          break;
      }
    }

    return sorted.concat(left).concat(right);
  }

}













//
