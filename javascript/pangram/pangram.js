export const isPangram = (string) => {
  const alphabet = 'abcdefghijklmnopqrstubvwxyz'
  const regex = /\string/g;
  const lowercase = string.toLowerCase().replace(regex, '')

  for (let i = 0; i < alphabet.length; i++) {
    if(lowercase.indexOf(alphabet[i]) === -1) {
      return false
    }
  }
  return true
};
