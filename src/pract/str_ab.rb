def aThreeFromB(str)
  letters = []
  str_array = str.each_char.to_a
  str_array.each_index do |i|
    if (str_array[i] == 'a') then
      letters.push(i+3)
    end
  end

  if letters[0] === 'b'
    answer = true
  else
    answer = false
  end
end
