
export const toRna = (rnaStrand) => {
  if (!rnaStrand) return '';

  const rnaStrands = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  }

  const allComplements = []

  if (rnaStrand.length > 1) {
    for(let i = 0; i < rnaStrand.length; i++) {
      let dnaStrand = rnaStrands[rnaStrand[i]]
      allComplements.push(dnaStrand)
    }
    return allComplements.join('')
  }

  return rnaStrands[rnaStrand];
};
