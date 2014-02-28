var div_classname = "ds-listing ds-listing-event ds-listing-expandable ds-listing-view-slim";

var div_events_n = document.getElementsByClassName(div_classname); // NodeList
var div_events = [];

for(var i = 0; i < div_events_n.length; i++) {
  evt = { "permalink": "" };
  div_events[i] = div_events_n[i];

  evt["permalink"] = div_events[i].getAttribute('data-permalink');

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.status == 200)
      alert(xhr.responseText);
  }
  xhr.open("POST", window.location + "#event-rsvp", true);
  xhr.send();

  if(i == 0) break;
}



