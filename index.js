function mapToNegativize(sourceArray) {
  const result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(-sourceArray[i])
  }
  return result;
}

function mapToNoChange(sourceArray) {
  const result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i])
  }
  return result;
}

function mapToDouble(sourceArray) {
  const result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i] * 2)
  }
  return result;
}

function mapToSquare(sourceArray) {
  const result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i] ** 2)
  }
  return result;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let result = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    result += sourceArray[i];
  }
  return result;
}

function reduceToAllTrue(sourceArray) {
  let result = true;
  for (let i = 0; i < sourceArray.length; i++) {
    result = !!result && !!sourceArray[i]
  }
  return result;
}

function reduceToAnyTrue(sourceArray) {
  let result = false;
  for (let i = 0; i < sourceArray.length; i++) {
    result = result || !!sourceArray[i]
  }
  return result;
}
