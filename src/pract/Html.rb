def html_elements(str)
  opening_tags = str.match(/<\w+>/)
  closing_tags = str.match(/(<\/\w+>)/).reverse();
  strObj = {
    '<div>': '</div>',
    '<p>': '</p>',
    '<i>': '</i>',
    '<em>': '</em>',
    '<b>': '</b>',
  }
  max = Math.max(opening_tags.length, closing_tags.length)

  i = 0
  while i < max
    if (strObj[openingTags[i]] != closingTags[i])
      (openingTags[i] || closingTags[i]).replace(/<|>/, '')
    end
    i++
  end

  return true
end


def demo(str)
  result = html_elements(str)
  puts "#{str} gives us #{result}"
end

demo("<div><div><b><b/></div></p>")
demo("<p><div><b><b/></div></p>")
demo("<p><div></p></div>")
demo("<p><div><b></b>")
demo("<p><div></b></div></p>")
demo("<p><div><b></b></div></p>")
demo("<p><div><p><b></b><p></div></p>")
