

$("#takePicBtn").click(function(){
		capturePhoto();
});




$(document).ready(function() {
$("#imageLoading").addClass("imageRotateHorizontal").fadeIn(1000).delay(6000).fadeOut(500).delay(250).queue(function(){
    $(this).removeClass("imageRotateHorizontal").dequeue().fadeIn(750);
});	
});


$(document).ready(function() {
(function blink() { 
  $('.blink_me').fadeOut(400).fadeIn(300, blink); 
})();
});


$(document).ready(function(){
	
    $('#menu-tracks').click(function(){
				$('#account').animate({"right":"-100vw"}, 150);
				$('#contact').animate({"right":"-100vw"}, 150);
        $('#tracks').delay(200).animate({"right":"0px"}, 350);
				$('#backgroundPanel').delay(1000).fadeIn(0);
    });
		
    $('#menu-account').click(function(){
				$('#tracks').animate({"right":"-100vw"}, 150);
				$('#contact').animate({"right":"-100vw"}, 150);
        $('#account').delay(200).animate({"right":"0px"}, 350);
				$('#backgroundPanel').delay(1000).fadeIn(0);
    });

    $('#menu-contact').click(function(){
				$('#tracks').animate({"right":"-100vw"}, 150);
				$('#account').animate({"right":"-100vw"}, 150);
        $('#contact').delay(200).animate({"right":"0px"}, 350);
				$('#backgroundPanel').delay(1000).fadeIn(0);
    });

});
