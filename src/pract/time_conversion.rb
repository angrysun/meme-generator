def timeConversion(s)
  if s[-2..-1] == 'PM'
    s.chomp("PM")
  else
    s.chomp("AM")
  end
  return s
end
