def timeConversion(s)
  if s.end_with?('PM')
    converted = s.chomp("PM")
    original = converted[0..1]
    time = (converted[0..1].to_i + 12).to_s
    convert = converted.gsub(original, time)
  else
    convert = s.chomp("AM")
  end
  convert
end
