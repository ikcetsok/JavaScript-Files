// Only change code below this line
function urlSlug(title) {
  let tArr = title.split(' ');
  console.log(tArr);
  let cleaned = tArr.filter(word => word != '');
  console.log(cleaned);
  cleaned = cleaned.map((word) => {
    return word.toLowerCase();
  });

  let url = cleaned.reduce((acc, title) => `${acc}-${title}`, '');
  let out = url.slice(1, url.length);
  console.log(out);
  return out;

}

// Only change code above this line
urlSlug(" Winter Is  Coming");
