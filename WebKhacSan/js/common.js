var x=$('.img');
var dem=0;
console.log(a);
$(window).on("load",function(){
	for(var i=0;i<x.length;i++){
		if(i>0)
		x[i].style.display = "none";
	}
	autoplay();
	$('#menu').slicknav();
});
function move (n) {
	if(n==1){
		dem++;
		if(dem>x.length-1){
		dem=0;
	}
	}else{
		dem--;
		if(dem<0){
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
$('#submit').click(function(){
	var name=$('#name').val();
	var idPhong=$('#idPhong').val();
	var soNguoi=$('#soNguoi').val();
	var datepickerstart=$('#datepickerstart').val();
	var datepickerend=$('#datepickerend').val();
	var aaa=$('#today').val();
	console.log(aaa);
	var confim;
	console.log(datepickerstart);
	if(name== ""){
		$('#resultName').text('Vui lòng nhập họ tên');
		$('#resultName').attr('style','color:red');
		confim=false;
	}else $('#resultName').text('');
	if(idPhong== ""){
		$('#resultidPhong').text('Vui lòng nhập mã phòng');
		$('#resultidPhong').attr('style','color:red');	
		confim=false;
	}else $('#resultidPhong').text('');
	if(soNguoi== ""){
		$('#resultsoNguoi').text('Vui lòng nhập số người');	
		$('#resultsoNguoi').attr('style','color:red');
		confim=false;
	}else $('#resultsoNguoi').text('');
	if(datepickerstart==""){
		$('#resultdatepickerstart').text('Vui lòng nhập ngày đến');
		$('#resultdatepickerstart').attr('style','color:red');	
		confim=false;
	}else $('#resultdatepickerstart').text('');
	if(datepickerend==""){
		$('#resultdatepickerend').text('Vui lòng nhập ngày đi');
		$('#resultdatepickerend').attr('style','color:red');
		confim=false;	
	}else $('#resultdatepickerend').text('');
	if (datepickerstart > datepickerend) {
		$('#resultdatepickerend').text('Ngày đi vui lòng lớn hơn ngày đến');
		$('#resultdatepickerend').attr('style','color:red');
		confim=false;
	}
	

});