var request = new XMLHttpRequest();
var url = 'https://api.are.na/v2/channels/under-consideration-1517888768';
request.open('GET', url, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    data.contents.reverse().forEach(function(c) {
      var text = c.content_html;

      var div = document.createElement("div");
      div.className = 'entry';
      div.innerHTML = text;
      document.getElementById('entries').appendChild(div);
    })
  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
