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


    var tl = new TimelineMax();
    tl.from("#img1", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    tl.from("#img2", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    tl.from("#img3", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    tl.from("#img4", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    tl.from("#img5", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    tl.from("#img6", 1.5, {autoAlpha: 0, scale: 1},"-=1");
    var controller3 = new ScrollMagic.Controller()
    const scene3 = new ScrollMagic.Scene({
      triggerElement: "#myportfolio",
      triggerHook: 'onLeave',
      duration: "100%",
      offset:-200
    })
    .setPin('#myportfolio')
    .setTween(tl)
    .addTo(controller)


    
})