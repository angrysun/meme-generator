def html_elements(str)
  opening_tags = str.match(/<\w+>/g)
  closing_tags = str.match(/(<\/\w+>)/g).reverse();
  strObj = {
    '<div>': '</div>',
    '<p>': '</p>',
    '<i>': '</i>',
    '<em>': '</em>',
    '<b>': '</b>',
  }


end
