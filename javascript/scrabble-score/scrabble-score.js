export const score = (word) => {
  const scrabbleScores = {
    1: [ 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']                                 
  }

  const wordToUpperCase = word.toUpperCase().split('')

  return wordToUpperCase.reduce((sum, letter) => {
    if (scrabbleScores[1].includes(letter)) {
      return sum + 1;
    } else if (scrabbleScores[2].includes(letter)) {
      return sum + 2;
    } else if (scrabbleScores[3].includes(letter)) {
      return sum + 3;
    } else if (scrabbleScores[4].includes(letter)) {
      return sum + 4;
    } else if (scrabbleScores[3].includes(letter)) {
      return sum + 3;
    } else if (scrabbleScores[4].includes(letter)) {
      return sum + 4;
    } else if (scrabbleScores[5].includes(letter)) {
      return sum + 5;
    } else if (scrabbleScores[8].includes(letter)) {
      return sum + 8;
    } else if (scrabbleScores[10].includes(letter)) {
      return sum + 10;
    }
    return sum
  }, 0)
};
