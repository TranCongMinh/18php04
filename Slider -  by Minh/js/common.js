var x=$('.img');
var dem=0;
$(window).on("load",function(){
	for(var i=0;i<x.length;i++){
		if(i>0)
		x[i].style.display = "none";
	}
	autoplay();
});

function move (n) {
	console.log("Đầu"+x.length);
	if(n==1){
		dem++;
		if(dem>x.length-1){
		console.log("After if"+x.length);
		dem=0;
	}
	}else{
		dem--;
		console.log("after else"+x.length);
		if(dem<0){
			console.log("after else if"+x.length);
			dem=x.length-1;
		}
	}
 	for(var i=0;i<x.length;i++){
 		x[i].style.display = "none";
 	}
 		x[dem].style.display = "block";
};
function autoplay(){
 for(var i=0;i<x.length;i++){
 		x[i].style.display = "none";
 	}
 		dem++;
    	if (dem > x.length-1) {dem = 0}    
    	x[dem].style.display = "block";  
    	setTimeout(autoplay,3000);
};