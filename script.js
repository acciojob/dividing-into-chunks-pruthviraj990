function divide(arr, n) {
  const result = [];
  let temp = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] <= n) {
      temp.push(arr[i]);
      currentSum += arr[i];
    } else {
      if (temp.length > 0) result.push(temp);
      temp = [arr[i]];
      currentSum = arr[i];
    }
  }

  if (temp.length > 0) result.push(temp);

  return result;
}

function handleDivide() {
  const arrayStr = document.getElementById("arrayInput").value;
  const maxSum = parseInt(document.getElementById("maxSumInput").value);
  
  try {
    const array = arrayStr.split(",").map(num => parseInt(num.trim()));
    const result = divide(array, maxSum);
    document.getElementById("output").innerText = Output: ${JSON.stringify(result)};
  } catch (e) {
    document.getElementById("output").innerText = "Invalid input.";
  }
}