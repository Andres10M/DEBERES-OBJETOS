export function isPangram(sentence: string) {
    const alphabet = new Set();
    for (const letter of sentence[Symbol.iterator]()) {
      if (letter.match(/[a-zA-Z]/)) {
        alphabet.add(letter.toLowerCase());
      }
      if (alphabet.size >= 26) {
        return true;
      }
    }
    
    return false;
  }