const wordPairs = [
  "Provider",
  "Provider",
  "selector",
  "selector",
  "useSelector()",
  "useSelector()",
  "useDispatch()",
  "useDispatch()",
  "Pure Function",
  "Pure Function",
  "react-redux",
  "react-redux",
];

const randomWords = () => {
  let words = [];
  let newWordPairs = [...wordPairs];
  const reps = newWordPairs.length;
  for (let i = 0; i < reps; i++) {
    const wordIndex = Math.floor(Math.random() * newWordPairs.length);
    console.log(wordIndex);
    words.push(newWordPairs[wordIndex]);
    newWordPairs.splice(wordIndex, 1);
    console.log('newWords',newWordPairs);
  }

  return words;
};

console.log(randomWords());