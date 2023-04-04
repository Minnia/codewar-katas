//Substring
 substring(inputString: string, startIndex: number, endIndex: number): string {
    const sub = inputString.slice(startIndex, endIndex)
    return sub;
  }
}

//Caesar decipher lvl 1
  level1Decipher(ciphertext: string, words: Array<string>): number {
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_.';
  let shift = 20;
  

  // Loop through all possible shifts
  for (let i = 1; i <= 27; i++) {
    // Decode the message using the current shift
    let decoded = '';
    for (let j = 0; j < ciphertext.length; j++) {
      const index = alphabet.indexOf(ciphertext[j]);
      if (index !== -1) {
        const newIndex = (index + i) % 28;
        decoded += alphabet[newIndex];
      } else {
        decoded += ciphertext[j];
      }
    }
    if(words.every((word) => decoded.includes(word))){
      shift = i;
      break;
    }
  }
  return shift;
  }
