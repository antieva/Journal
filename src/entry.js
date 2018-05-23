export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function() {
  var newTitle = this.title.split(/[\s\.:;?!~,`"&|\(\)<>{}\[\]\r\n/\\]+/).filter(n => n);
  var newBody = this.body.split(/[\s\.:;?!~,`"&|\(\)<>{}\[\]\r\n/\\]+/).filter(n => n);
  var count = newTitle.length + newBody.length;
  return count;
};

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

Entry.prototype.countVowels = function() {
  var counter = 0;
  var newBody = this.body.toLowerCase();
  var newTitle = this.title.toLowerCase();
  for (var i = 0; i < newBody.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (newBody[i] === vowels[j]) {
        counter++;
      }
    }
  }
  for (i = 0; i < newTitle.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (newTitle[i] === vowels[j]) {
        counter++;
      }
    }
  }
  return counter;
};

var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
Entry.prototype.countConsonants = function() {
  var counter = 0;
  var newBody = this.body.toLowerCase();
  var newTitle = this.title.toLowerCase();
  for (var i = 0; i < newTitle.length; i++) {
    for (var j = 0; j < consonants.length; j++) {
      if (newTitle[i] === consonants[j]) {
        counter++;
      }
    }
  }
  for (i = 0; i < newBody.length; i++) {
    for (j = 0; j < consonants.length; j++) {
      if (newBody[i] === consonants[j]) {
        counter++;
      }
    }
  }
  return counter;
}
