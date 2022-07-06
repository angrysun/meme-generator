def plusMinus(arr)
  n = arr.length.to_f
  pos = []
  neg = []
  zero = []

  arr.each do |num|
    if num >= 1
      pos << num
    elsif num <= -1
      neg << num
    else
      zero << num
    end
  end

  puts "%.6f" % (pos.length/n)
  puts "%.6f" % (neg.length/n)
  puts "%.6f" % (zero.length/n)
end
