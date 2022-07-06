def timeConversion(s)
  if s.end_with?('PM')
    converted = s.chomp("PM")
    original = converted[0..1]
    time = (converted[0..1].to_i + 12).to_s
    convert = converted.gsub(original, time)
  else
    convert = s.chomp("AM")
  end

  if convert.start_with?("24")
    final = "12#{convert[2..-1]}"
  elsif convert.start_with?("12")
    final = "00#{convert[2..-1]}"
  else
    final = convert
  end
  final
end
