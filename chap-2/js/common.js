
//======================================================//
$('.flower').addClass("hide");
$('#start').click(function(){
	$('.animal').animate({right:'360px'}, 2000);
	$('.animal2').animate({left:'360px'}, 2000);
});
$('#marry').click(function(){
	$('.flower').removeClass("hide");
});
// =======================================================//
