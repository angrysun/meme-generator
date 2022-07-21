def aThreeFromB(str)
  letters = []
  array = str.each_char.to_a
  array.each_index do |i|
    if (array[i] === 'a')
      letters.push(i + 4)
    end
  end

  if str[letters[0]] === 'b'
    answer = true
  else
    answer = false
  end

  answer
end
