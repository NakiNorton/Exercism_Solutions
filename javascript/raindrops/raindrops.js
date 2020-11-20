
export const convert = (number) => {

  if(number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
    return number.toString()
  }

  const rainDropSounds = []

  if (number % 3 === 0) rainDropSounds.push('Pling');
  if (number % 5 === 0) rainDropSounds.push('Plang');
  if (number % 7 === 0) rainDropSounds.push('Plong');

  return rainDropSounds.join('')
};
