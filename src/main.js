import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Entry } from './entry.js';

$(document).ready(function() {
  $('#more').on('click',function(){
    $("#entry-output").show();
    $("#teaser").hide();
    $("#more").hide();
  });

  $("form#journal-form").submit(function(event) {
    event.preventDefault();

    var inputTitle = $("input#title").val();
    $("#title-output").text(inputTitle);

    var inputBody = $("input#entry-body").val();
    var newEntry = new Entry(inputTitle, inputBody);
    var arrayBody = inputBody.split(/[\s]+/).filter(n => n);

    $("#entry-output").text(inputBody);

    if (arrayBody.length < 8) {
      $("#entry-output").show();
      $("#more").hide();
      $("#teaser").hide();
    } else {
      var teaser = arrayBody.slice(0, 9).join(" ");
      $("#teaser").text(teaser);

      $("#entry-output").hide();
      $("#more").show();
      $("#teaser").show();
    }

    $("#words").text(newEntry.countWords());
    $("#vowels").text(newEntry.countVowels());
    $("#consonants").text(newEntry.countConsonants());
    $("#output").show();
  });
});
