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
   

    
})