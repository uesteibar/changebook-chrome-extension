$(document).ready(function() {
  var baseUrl = 'http://changebook.herokuapp.com';
  var button = $('#checkbook');
  button.on('click', function(event) {
    event.preventDefault();
    $('#bookcontainer').html('<div class="loading"></div>')

    function checkBook(bookname) {
      var request = $.get(baseUrl + '/api/v1/books/complex_search/', {
        term: bookname || ""
      });
      request.done(function(data) {
        var html = "";
        if (data.length > 0) {
          html = '<h2>We have that!</h2>';
          html += '<h1>' + data[0].title + '</h1>';
          html += '<h2>' + data[0].author + '</h2>';
          html += '<h2><a href="' + baseUrl + '/books/' + data[0].id + '" target="_blank">Ask for it here!</a></h3>';
        } else {
          html = '<h2>Sorry, we don\'t have that! </h2>';
        }
        $('#bookcontainer').html(html);
      });
    }

    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, {
        message: "scrap!"
      }, checkBook);
    });
  });
});
