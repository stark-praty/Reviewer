function show() {
  $('.open-btn').css({
     'left': '10px'
  });
}
function moveback() {
  $('.open-btn').css({
     'left': '-12px'
  });
}
jQuery(function ($) {
  
$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});  
});