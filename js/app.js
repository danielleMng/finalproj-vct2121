$(document).ready(function(){
    $(".description1").hide();
    $(".Btn1").on("click",function(){
        $(".description1").toggle();
    })
    $(".description2").hide();
    $(".Btn2").on("click",function(){
        $(".description2").toggle();
    })

    
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
   
    //adding scrollmagic
    var controller= new ScrollMagic.Controller();
    var scene= new ScrollMagic.Scene({
      triggerElement:'#slideshow'
    })
    .setClassToggle('#slideshow','fade-in')
    .addTo(controller)
    var controller1= new ScrollMagic.Controller();
    var scene1= new ScrollMagic.Scene({
      triggerElement:'.contact-section'
    })
    .setClassToggle('.contact-section','fade-in')
    .addTo(controller1)

    
})