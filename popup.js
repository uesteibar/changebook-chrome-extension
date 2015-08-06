$(document).ready(function() {
  var baseUrl = 'http:changebook.herokuapp.com';
  $('#checkbook').on('click', function(event) {
    event.preventDefault();
    var bookname = $('#bookname').val();
    var request = $.get(baseUrl + '/api/v1/books/complex_search/', {term: bookname});
    request.done(function(data) {
      console.log(data);
      var html = "";
      if (data.length > 0) {
        html = '<h3>We have that!</h3>';
        html += '<h2>' + data[0].title + '</h2>';
        html += '<h3>' + data[0].author + '</h3>';
        html += '<a href="' + baseUrl + '/books/' + data[0].id + '" target="_blank">Ask for it!</a>';
      } else {
        html = '<h3>Sorry, we don\'t have that! </h3>';
      }
      $('#bookcontainer').html(html);
    });
  });
});
