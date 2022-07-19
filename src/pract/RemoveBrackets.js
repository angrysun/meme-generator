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

  if (left.length !== right.length) {
    const tally = left.length - right.length
    if (tally < 0) {
      const positive = tally * -1
      return positive
    } else {
      return tally
    }
  }else {
    return 0
  }
}

RemoveBrackets()
