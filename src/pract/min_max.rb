def miniMaxSum(arr)
  sorted = arr.sort
  min = sorted[0] + sorted[1] + sorted[2] + sorted[3]
  max = sorted[1] + sorted[2] + sorted[3] + sorted[4]

  puts "#{min} #{max}"
end
