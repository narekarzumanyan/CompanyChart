/**
 * Created by Smart on 18-Mar-15.
 */
$(window).resize(function() {
   var $i=$(window).width();
    if($i>700 && $i<910){
        $("#tree").addClass("tree900");
    };
    if($i<700){
        $("#tree").addClass("tree700");
    }
    else{
        $("#tree").removeClass("tree700");
    };
    if($i>910){
		$(".tree").children("li:first-child:before").css('border','0 none');
		$(".tree").children("li:last-child:after").css('border','0 none');
		$(".tree").children("li:nth-child(3n+1):before").css('border','0 none');
		$(".tree").children("li:nth-child(3n):after").css('border','0 none');
        $("#tree").removeClass("tree900");
    };

});