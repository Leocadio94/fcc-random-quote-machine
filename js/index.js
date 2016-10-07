$(document).ready(function() {
  randomQuote();
  
  $('#random-quote').on("click", function() {
    randomQuote();
  });
});

function randomQuote() {
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  $.ajax({
    headers: {
      "X-Mashape-Key": "tUmTt9GeJWmshsy2JMDzF7d5SD1wp1T1KjPjsngHKoihDwidYh",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;

      $('#quote').animate({
        'opacity': 0
      }, 500, function() {
        $(this).html('<i class="fa fa-quote-left"></i> ' + currentQuote);
      }).animate({
        'opacity': 1
      }, 500);
      $('#name').animate({
        'opacity': 0
      }, 500, function() {
        $(this).text("- " + currentAuthor);
      }).animate({
        'opacity': 1
      }, 500);
      $('body').css("background-color", color);
      $('#quote').css("color", color);
      $('#name').css("color", color);
      $('.btn').css("background-color", color);
      $('#twitter-btn').attr('href', 'http://twitter.com/share?text="'+r.quote+'" - '+r.author);
    }
  });
}