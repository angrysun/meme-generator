def a_three_from_b(str)
  letters = []
  array = str.each_char.to_a
  array.each_index do |i|
    letters.push(i + 4) if array[i] == 'a'
  end

  str[letters[0]] == 'b' ? answer = true : false

  answer
end
