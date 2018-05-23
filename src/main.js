import './styles.css';
import { Entry } from './entry';

$(document).ready(function() {
  $("form#journal-form").submit(function(event) {
    event.preventDefault();

    var inputTitle = $("input#title").val();
    $("#title-output").text(inputTitle);

    var inputBody = $("input#entry-body").val();
    var newEntry = new Entry(inputTitle, inputBody);
    var arrayBody = inputBody.split(/[\s]+/).filter(n => n);
    if (arrayBody.length <= 7) {
      $("#entry-output").text(inputBody);
    } else {
      var teaser = arrayBody.slice(0, 9).join(" ");
      $("#teaser").removeClass("hidden");
      $("#teaser").text(teaser);
    }
    $('#teaser').on('click',function(){
      $("#entry-output").text(inputBody);
      $("#teaser").addClass("hidden");
    });
    $("#words").text(newEntry.countWords());
    $("#vowels").text(newEntry.countVowels());
    $("#consonants").text(newEntry.countConsonants());
    $("#output").show();
  });
});
