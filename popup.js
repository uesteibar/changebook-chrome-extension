$(document).ready(function() {
  $('#checkbook').on('click', function(event) {
    event.preventDefault();
    var bookname = $('#bookname').val();
    var request = $.get('http://localhost:3000/api/books/search/' + bookname);
    request.done(function(data) {
      console.log(data);
    });
  });
});
