let arr1 = [9, 2, 3, 1, 4];

function HigherNumber() {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] > arr1[j]) {
        return arr1[i];
      }
    }
  }
  return "";
}

function CompleteArray() {
  for (let i = 0; i <= HigherNumber(); i++) {
    if ( !arr1.includes(i)) {
        arr1.push(i);
    }
  }
  return arr1
}
