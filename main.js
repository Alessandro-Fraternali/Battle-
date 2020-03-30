// lista variabili
var fight = document.getElementById("fighta");
var back = document.getElementById("back");

// apparizione mosse
fight.addEventListener("click",
  function () {
    document.getElementById("opzionilotta").style.opacity = "1";
  }
);
// sparizione mosse
back.addEventListener("click",
  function () {
    document.getElementById("opzionilotta").style.opacity = "0";
  }
);
