export class HighScores {
  constructor(scores) {
    this.gameScores = scores;
    this.orderedScores = [...scores].sort((a, b) => b - a);
  }

  get scores() {
    return this.gameScores
  }

  get latest() {
    return this.gameScores[this.gameScores.length -1]
  }

  get personalBest() {
   const highestScore = this.orderedScores[0]
   return highestScore
  }

  get personalTopThree() {
    const topThreeScores = this.orderedScores.slice(0,3)
    return topThreeScores
  }
}
