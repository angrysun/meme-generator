def timeConversion(s)
  if s.end_with?('PM')
    converted = s.chomp("PM")
    case converted.start_with?
    when "13"
      convert = converted.gsub('13', "1")
    when

    else

    end
  else
    convert = s.chomp("AM")
  end
  convert
end
