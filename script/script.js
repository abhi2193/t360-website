

$(document).ready(function(){
    // scroll on top
    // $(window).scrollTop(0);

    $(window).scroll(function() {
        if ($(document).scrollTop() > 1200 && $("#myModal-expo").attr("displayed") === "false") {
          $('#myModal-expo').modal('show');
          $("#myModal-expo").attr("displayed", "true");
        }
    });

    $("#myModal-expo").on("show", function () {
        $("body").addClass("modal-open");
        
      }).on("hidden", function () {
        $("body").removeClass("modal-open");
        
    });

    
    
    $(function(){
        var navbar = $('.navbar');
        
        $(window).scroll(function(){
            if($(window).scrollTop() <= 40){
                navbar.removeClass('navbar-scroll');
            } else {
                navbar.addClass('navbar-scroll');
            }
        });
    });

    

    // hover-effect

    $(".dd-am").hover(function(){
            $(".dd-am .outer-ring").css("background-image", "linear-gradient(315deg, #1bc965, #50fa99)");
            $(".dd-am .media-body").css("color", "#00ae4a");
        },
        function(){
            $(".dd-am .outer-ring").css("background-image", "linear-gradient(313deg, #2199fc, #8ccbff)");
            $(".dd-am .media-body").css("color", "#0f1c3b");
        }
    );

    $(".dd-pm").hover(function(){
            $(".dd-pm .outer-ring").css("background-image", "linear-gradient(315deg, #1bc965, #50fa99)");
            $(".dd-pm .media-body").css("color", "#00ae4a");
        },
        function(){
            $(".dd-pm .outer-ring").css("background-image", "linear-gradient(313deg, #2199fc, #8ccbff)");
            $(".dd-pm .media-body").css("color", "#0f1c3b");
        }
    );

    $(".dd-market").hover(function(){
            $(".dd-market .outer-ring").css("background-image", "linear-gradient(315deg, #1bc965, #50fa99)");
            $(".dd-market .media-body").css("color", "#00ae4a");
        },
        function(){
            $(".dd-market .outer-ring").css("background-image", "linear-gradient(313deg, #2199fc, #8ccbff)");
            $(".dd-market .media-body").css("color", "#0f1c3b");
        }
    );

    $(".dd-lm").hover(function(){
            $(".dd-lm .outer-ring").css("background-image", "linear-gradient(315deg, #1bc965, #50fa99)");
            $(".dd-lm .media-body").css("color", "#00ae4a");
        },
        function(){
            $(".dd-lm .outer-ring").css("background-image", "linear-gradient(313deg, #2199fc, #8ccbff)");
            $(".dd-lm .media-body").css("color", "#0f1c3b");
        }
    );

    $(".dd-portfolio").hover(function(){
            $(".dd-portfolio .outer-ring").css("background-image", "linear-gradient(315deg, #1bc965, #50fa99)");
            $(".dd-portfolio .media-body").css("color", "#00ae4a");
        },
        function(){
            $(".dd-portfolio .outer-ring").css("background-image", "linear-gradient(313deg, #2199fc, #8ccbff)");
            $(".dd-portfolio .media-body").css("color", "#0f1c3b");
        }
    );

    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1400,1],
        itemsDesktopSmall:[960,1],
        itemsTablet:[768,1],
        itemsMobile:[400,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:false
    });
});