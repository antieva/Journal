export class Entry {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  countWords() {
    let newTitle = this.title.split(/[\s\.:;?!~,`"&|\(\)<>{}\[\]\r\n/\\]+/).filter(n => n);
    let newBody = this.body.split(/[\s\.:;?!~,`"&|\(\)<>{}\[\]\r\n/\\]+/).filter(n => n);
    let count = newTitle.length + newBody.length;
    return count;
  };

  countVowels() {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let counter = 0;
    let newBody = this.body.toLowerCase();
    let newTitle = this.title.toLowerCase();
    for (let i = 0; i < newBody.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (newBody[i] === vowels[j]) {
          counter++;
        }
      }
    }
    for (let i = 0; i < newTitle.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (newTitle[i] === vowels[j]) {
          counter++;
        }
      }
    }
    return counter;
  };

  countConsonants() {
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
    let counter = 0;
    let newBody = this.body.toLowerCase();
    let newTitle = this.title.toLowerCase();
    for (let i = 0; i < newTitle.length; i++) {
      for (let j = 0; j < consonants.length; j++) {
        if (newTitle[i] === consonants[j]) {
          counter++;
        }
      }
    }
    for (let i = 0; i < newBody.length; i++) {
      for (let j = 0; j < consonants.length; j++) {
        if (newBody[i] === consonants[j]) {
          counter++;
        }
      }
    }
    return counter;
  }
}
