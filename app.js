
// nuevo nav opens in small screens
// Opens side nav
$(function() {
  $("#svg").on("click", function() {
    openNav();
  });
  // closes side bar and smoothly goes to section
  $("#side-menu a").on("click", function() {
    closeNav();
    // gets the data-section attribute from href
    const target = $(this).data("section");
      
    // if data section exists 
    if (target) {
      // smoothly goes to href selected
      $("html, body").animate(
        {
          scrollTop: $("#" + target).offset().top
        },
        1000
      );
    }
  });
  // close side nav
  $("#close").on("click", function() {
      closeNav();
  });
  // open and close side nav
  function openNav() {
      $("#side-menu").css("width", "250px");
      $("#main").css("margin-left", "250px");
  }
  function closeNav() {
      $("#side-menu").css("width", "0");
      $("#main").css("margin-left", "0");
  }
});













