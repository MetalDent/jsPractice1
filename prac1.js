$(document).ready(function(){
	$(".b2").hide();

    $(".b1").click(function(){
        $("p").hide();
        $(".b1").hide();
        $(".b2").show();
    });
    
     $(".b2").click(function(){
        $("p").show();
        $(".b1").show();
        $(".b2").hide();
    });
});