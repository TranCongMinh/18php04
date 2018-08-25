$(window).on("load",function(){
	for (var i = 1 ; i <= 20; i++) {
		$('#' + i).attr('src','img/no_img.png');		
	}
});

var capHinh;
var idHinh;
var dem=0;
var win=0;

function checkanh(ch,id){	
		if (dem==0) {
			$('#'+id).attr('src','img/'+ ch + ".png");
			dem++;
			capHinh=ch;
			idHinh=id;
			
			console.log("cặp hình",capHinh);
			console.log("id hình",idHinh);
			console.log("đếm",dem);
		}
		else if (id==idHinh) {
			$('#' + id).attr('src','img/no_img.png');
			dem=0;
			idHinh=0;
			capHinh=0;
			console.log("cặp hình",capHinh);
			console.log("id hình",idHinh);
			console.log("đếm",dem);
		}
		else if (ch==capHinh) {
			$('#'+id).attr('src','img/'+ ch + ".png");
			$('#'+id).click(false);
			$('#'+idHinh).click(false);
			dem=0;
			idHinh=0;
			capHinh=0;
			console.log("cặp hình",capHinh);
			console.log("id hình",idHinh);
			console.log("đếm",dem);
			win++;
		}else
			{
			$('#'+id).attr('src','img/'+ ch + ".png");
			setTimeout(function(){
			$('#' + id).attr('src','img/no_img.png');
			$('#' + idHinh).attr('src','img/no_img.png');	
			},700);
			dem=0;
			}
		if (win==10) {
			alert("Chúc mừng bạn đã giành chiến thắng");
		}
}

	

