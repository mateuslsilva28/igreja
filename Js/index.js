$(document).ready(function(){
    $('#slick').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: 'true',
        autoplaySpeed: 10000
    })

    $(".menuMobile").click(function(){
        $(".mobile")
        $(".mobile").fadeToggle(1000).css("display","flex");
    })

    var dropMobile = $(".dropdownPaiMobile")
    var dropFilhoMobile = $(".dropFilhoMobile")
    
    $(dropMobile[0]).click(function(){
        $(dropFilhoMobile[0]).fadeToggle()
    })
    $(dropMobile[1]).click(function(){
        $(dropFilhoMobile[1]).fadeToggle()
    })
    $(dropMobile[2]).click(function(){
        $(dropFilhoMobile[2]).fadeToggle()
    })

})