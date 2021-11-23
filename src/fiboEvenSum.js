function fiboEvenSum(n) {
  let z = 0;
  let arr = [1, 2]
  let sum = 0;

  while (z < n) {
    let newArr = arr.slice(-2);
    z = newArr[0] + newArr[1];
    console.log(newArr)
    console.log(z)

    if (z > n) {
      break
    } else {
      arr.push(z)
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }

  return sum;
}

fiboEvenSum(1)