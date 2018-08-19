
// ==================================================//
$('#no').hover(function(){
	$('#no').val("yes");
});
$('#no').mouseleave(function(){
	$('#no').val("no");
});
$('#yes').click(function(){
	$('#result').text("Mình có người yêu rồi bạn");
});
$('#no').click(function(){
	$('#result').text("Mình có người yêu rồi mà");
});
//======================================================//
