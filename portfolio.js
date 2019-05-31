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

  //Skills set Progress bar

  $(".html").animate({ width: '95%' }, 2000).css("backgroundColor", "#4caf50");
  $(".js").animate({ width: '70%' }, 2000).css("backgroundColor", "#2196f3");
  $(".jquery").animate({ width: '75%' }, 2000).css("backgroundColor", "#808080");
  $(".bootstrap").animate({ width: '75%' }, 2000).css("backgroundColor", "salmon");

});
