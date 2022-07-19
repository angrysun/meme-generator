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
    }
  }else {
    return 0
  }
}

RemoveBrackets()
