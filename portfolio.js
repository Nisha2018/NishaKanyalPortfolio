$(document).ready(function () {
  $(".toggle").click(function () {
    $("nav").slideDown(1000);
    $(".close").show(function () {
      $(".close").click(function () {
        $("nav").slideUp(1000);
        $(".close").hide();
      });
    });
  });

  $(".menu a").click(function () {
    $("nav").slideUp(1000);
    $(".close").hide();
  });

});
