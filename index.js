
var header = $("#header");
var nav = $("#nav");
var navToggle = $("#navToggle")
var scrollPosition = $(window).scrollTop()

$(window).on("scroll load resize", function() {

  scrollPosition = $(this).scrollTop();
  if (scrollPosition > 0) {

    header.addClass("fixed");

  }

  else {

    header.removeClass("fixed");

  }

});

$("a").on("click", function(event) {

  if (this.hash !== "") {

    event.preventDefault();
    var hash = this.hash;
    nav.removeClass("show");
    $("html, body").animate({

      scrollTop: $(hash).offset().top - 70

    }, 800,);

  }

});

navToggle.on("click", function(event) {

  event.preventDefault();
  nav.toggleClass("show")

});
