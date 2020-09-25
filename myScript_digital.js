function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    function updateTime(k) {
        if (k < 10) {
          return "0" + k;
        }
        else {
          return k;
        }
      }

    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("digitalClock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */

  }
  
  currentTime(); /* calling currentTime() function to initiate the process */