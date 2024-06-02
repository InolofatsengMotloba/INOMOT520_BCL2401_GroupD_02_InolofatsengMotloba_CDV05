$(document).ready(function () {
  var image = $(".img-profile");
  var aboutPosition = $(".about-myself").offset().top / 0.6;

  // Add a class to hide the image initially
  image.addClass("hidden");

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    image.css({ top: aboutPosition - scrollTop });

    if (scrollTop > aboutPosition) {
      image.css({ top: 0 });
    }

    // Remove the hidden class when the scroll event is triggered
    image.removeClass("hidden");
  });
});
