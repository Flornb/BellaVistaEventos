
// nuevo nav opens in small screens
$(function() {
    $("#svg").on("click", function() {
      $("#side-menu").css("width", "250px");
      $("#main").css("margin-left", "250px");
    });
    $("#close").on("click", function() {
      $("#side-menu").css("width", "0");
      $("#main").css("margin-left", "0");
    });
  });















