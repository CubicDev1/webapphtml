$( document ).ready(function() {
var base_color = "rgb(163,163,163)";
var active_color = "rgb(187,132,89)";



var child = 1;
var length = $("section").length - 1;
$("#prev").addClass("disabled");
$("#submit").addClass("disabled");

$("section").not("section:nth-of-type(1)").hide();
$("section").not("section:nth-of-type(1)").css('transform','translateX(100px)');

var svgWidth = length * 200 + 24;
$("#svg_wrap").html(
  '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
    svgWidth +
    ' 24" xml:space="preserve"></svg>'
);

function makeSVG(tag, attrs) {
  var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (var k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}

for (i = 0; i < length; i++) {
  var positionX = 12 + i * 200;
  var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
  document.getElementById("svg_form_time").appendChild(rect);
  // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
  var circle = makeSVG("circle", {
    cx: positionX,
    cy: 12,
    r: 12,
    width: positionX,
    height: 6
  });
  document.getElementById("svg_form_time").appendChild(circle);
}

var circle = makeSVG("circle", {
  cx: positionX + 200,
  cy: 12,
  r: 12,
  width: positionX,
  height: 6
});
document.getElementById("svg_form_time").appendChild(circle);

$('#svg_form_time rect').css('fill',base_color);
$('#svg_form_time circle').css('fill',base_color);
$("circle:nth-of-type(1)").css("fill", active_color);

 
$(".button").click(function () {
  $("#svg_form_time rect").css("fill", active_color);
  $("#svg_form_time circle").css("fill", active_color);
  var id = $(this).attr("id");
  if (id == "next") {
    $("#prev").removeClass("disabled");
    if (child >= length) {
      $(this).addClass("disabled");
      $('#submit').removeClass("disabled");
    }
    if (child <= length) {
      child++;
    }
  } else if (id == "prev") {
    $("#next").removeClass("disabled");
    $('#submit').addClass("disabled");
    if (child <= 2) {
      $(this).addClass("disabled");
    }
    if (child > 1) {
      child--;
    }
  }
  var circle_child = child + 1;
  $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
    "fill",
    base_color
  );
  $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
    "fill",
    base_color
  );
  var currentSection = $("section:nth-of-type(" + child + ")");
  currentSection.fadeIn();
  currentSection.css('transform','translateX(0)');
 currentSection.prevAll('section').css('transform','translateX(-100px)');
  currentSection.nextAll('section').css('transform','translateX(100px)');
  $('section').not(currentSection).hide();
});

});




/*cookie code*/
// Check if the user has already accepted cookies
if (localStorage.getItem('cookiesAccepted') !== 'true') {
    // Show the cookie consent bar if not accepted
    document.getElementById('cookieConsent').style.display = 'flex';
}

// Add an event listener to the "Got it!" button
document.getElementById('acceptCookie').addEventListener('click', function() {
    // Hide the cookie consent bar
    document.getElementById('cookieConsent').style.display = 'none';

    // Store the user's consent in localStorage to prevent the bar from showing again
    localStorage.setItem('cookiesAccepted', 'true');
});


/*youtube modal*/



      function openModal() {
            document.getElementById("videoModal").style.display = "flex";
            document.getElementById("youtubeVideo").src = "https://www.youtube.com/embed/zHKPh63hf1w?autoplay=1";
        }

        function closeModal() {
            document.getElementById("videoModal").style.display = "none";
            document.getElementById("youtubeVideo").src = "";
        }
/*youtube popup*/



    /*animation only happens when on screen*/

    var $animation_elements = $('.image-left');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('image-left');
            } else {
                $element.removeClass('image-left');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    var $animation_elements2 = $('.image-right');
    var $window2 = $(window);

    function check_if_in_view() {
        var window_height = $window2.height();
        var window_top_position = $window2.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements2, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('image-right');
            } else {
                $element.removeClass('image-right');
            }
        });
    }

    $window2.on('scroll resize', check_if_in_view);
    $window2.trigger('scroll');


    /*animation only happens when on screen*/
    