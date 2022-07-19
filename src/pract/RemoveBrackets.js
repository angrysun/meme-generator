function RemoveBrackets(str) {
  let array = str.split('')
  let left = []
  let right = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '(') {
      left.push(i)
    } else if (array[i] === ')') {
      right.push(i)
    }
  }

}

RemoveBrackets()
