/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var collapse = document.getElementsByClassName("collapsible");
  var imgs = document.getElementsByClassName("images");
  var i;
  
    coll[i].addEventListener("click", function() {
      var content = imgs;
      if (content.style.display === "grid") {
        content.style.display = "none";
      } else {
        content.style.display = "grid";
      }
    });