
$(document).ready(function(){

  // open/close battle menu
  $("#fighta, .back").click(
    function(){
      $(".containermosse").toggle();
    }
  )

  // moves info on mouseover
  $(".mossa1").mouseover(
    function () {
      $(".type").text("Type: Water");
      $(".dmg").text("Damage: 90");
    }
  )

  $(".mossa2").mouseover(
    function () {
      $(".type").text("Type: Earth");
      $(".dmg").text("Damage: 100");
    }
  )

  $(".mossa3").mouseover(
    function () {
      $(".type").text("Type: Ice");
      $(".dmg").text("Damage: 120");
    }
  )

  $(".mossa4").mouseover(
    function () {
      $(".type").text("Type: Normal");
      $(".dmg").text("No dmg taken");
    }
  )

  // moves used
  $(".mossa4").click(
    function() {
      $("#blastoise").hide();
      $("#blastoiseshell").show();
  }
  )

});
