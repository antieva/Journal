import { Entry } from './../src/entry.js';

describe('Entry', function() {
  var reusableEntry;

  beforeEach(function() {
   reusableEntry = new Entry("Greetings", "Hey you!");
 });

 it('should show how beforeEach() works', function() {
    console.log(reusableEntry);
  });

  it('should test whether word counter returns the same amount of words as the particular instance of Entry class contains', function() {
    expect(reusableEntry.countWords()).toEqual(3);
  });
});
