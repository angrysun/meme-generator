def ArrayChallenge(strArr)
  item_one = strArr[0].split('')
  item_two = strArr[1].split('')
  final = 0
  i = 0

  while i < item_one.length do
    if item_one[i] != item_two[i]
      final += 1
    end
    i += 1
  end

  final
end
