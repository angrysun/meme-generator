def aThreeFromB(str)
  letters = []
  array = str.each_char.to_a
  array.each_index do |i|
    letters.push(i + 4) if array[i] == 'a'
  end

  str[letters[0]] === 'b' ? answer = true : answer = false

  # if str[letters[0]] === 'b'
  #   answer = true
  # else
  #   answer = false
  # end

  answer
end
