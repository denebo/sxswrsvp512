document.getElementsByTagName("header")[0].onclick = function() {
  cont = confirm("Start RSVP?");

  if(cont) {
    var first_name = prompt("First name");
    var last_name = prompt("Last name");
    var email = prompt("E-mail");

    var div_classname = "ds-listing ds-listing-event ds-listing-expandable ds-listing-view-slim";

    var div_events_n = document.getElementsByClassName(div_classname); // NodeList
    var div_events = [];

    for(var i = 0; i < div_events_n.length; i++) {
      evt = { "name": "" };
      div_events[i] = div_events_n[i];

      evt["name"] = div_events[i].getAttribute('data-permalink');
      evt["id"] = div_events[i].getAttribute('data-id');

      console.log("RSVPing to " + evt["name"]);

      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(xhr.status == 200) {
        //  parser = new DOMParser();
        //  doc = parser.parseFromString(xhr.responseText, "text/xml");
        }
      }
      xhr.open("POST", "http://sx2014.do512.com/events/" + evt["id"] + "/rsvp", true);
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xhr.send("user[first_name]=" + first_name + "&user[last_name]=" + last_name + "&user[email]=" + email + "&rsvp[plus1]=1&spam_answer=10&rsvp[opt_in]=0&user[over_21]=1");
    }
  }
}


