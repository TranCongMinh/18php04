
function xemngay(){
    var getInfo = $( "#datepicker" ).val();
    var myDate = new Date(getInfo);
    var myBirthday = myDate.getDate();
    var myMonth= myDate.getMonth()+1;
    var myYear = myDate.getFullYear();
    var myWeekday = myDate.getUTCDay();
    console.log(myWeekday);
    $('#ngaysinh').text("Bạn sinh ngày " + myBirthday + " Tháng " + myMonth + " Năm " +myYear);
    weekDay(myWeekday);
    hoangdao(myBirthday,myMonth);
    checkTuoi(myYear);
}; 
function weekDay(myWeekday){
  switch (myWeekday) {
      case 0:
      $('#thu').text("Bạn sinh vào thứ 2 ");
      break;
      case 1:
      $('#thu').text("Bạn sinh vào thứ 3 ");
      break;
      case 2:
      $('#thu').text("Bạn sinh vào thứ 4 ");
      break;
      case 3:
      $('#thu').text("Bạn sinh vào thứ 5 ");
      break;
      case 4:
      $('#thu').text("Bạn sinh vào thứ 6 ");
      break;
      case 5:
      $('#thu').text("Bạn sinh vào thứ 7 ");
      break;
      case 6:
      $('#thu').text("Bạn sinh vào chủ nhật ");
      break;
      default:
      $('#thu').text("???")
      break;
  }
} 
function checkTuoi(myYear){
  var tuoi = 2018 - myYear;
  $('#tuoi').text(tuoi + " tuổi mà chưa có gấu !!!");
}
function hoangdao(myBirthday,myMonth){
  if (myMonth==1) {
    if (myBirthday>=21) {
        $('#hoangdao').text("Bạn thuộc cung Bảo Bình");
    }else $('#hoangdao').text("Bạn thuộc cung Ma kết");
  }
  if (myMonth==2) {
    if (myBirthday>=20) {
        $('#hoangdao').text("Bạn thuộc cung Song Ngư");
    }else $('#hoangdao').text("Bạn thuộc cung Bảo Bình");
  }
  if (myMonth==3) {
    if (myBirthday>=21) {
        $('#hoangdao').text("Bạn thuộc cung Bạch Dương");
    }else $('#hoangdao').text("Bạn thuộc cung Song Ngư");
  }
  if (myMonth==4) {
    if (myBirthday>=20) {
        $('#hoangdao').text("Bạn thuộc cung Kim Ngưu");
    }else $('#hoangdao').text("Bạn thuộc cung Bạch Dương");
  }
  if (myMonth==5) {
    if (myBirthday>=21) {
        $('#hoangdao').text("Bạn thuộc cung Song Tử");
    }else $('#hoangdao').text("Bạn thuộc cung Kim Ngưu");
  }
  if (myMonth==6) {
    if (myBirthday>=22) {
        $('#hoangdao').text("Bạn thuộc cung Cự Giải");
    }else $('#hoangdao').text("Bạn thuộc cung Song Tử");
  }
  if (myMonth==7) {
    if (myBirthday>=23) {
        $('#hoangdao').text("Bạn thuộc cung Sư Tử");
    }else $('#hoangdao').text("Bạn thuộc cung Cự Giải");
  }
  if (myMonth==8) {
    if (myBirthday>=23) {
        $('#hoangdao').text("Bạn thuộc cung Xử Nữ");
    }else $('#hoangdao').text("Bạn thuộc cung Sư Tử");
  }
  if (myMonth==9) {
    if (myBirthday>=23) {
        $('#hoangdao').text("Bạn thuộc cung Thiên Bình");
    }else $('#hoangdao').text("Bạn thuộc cung Xử Nữ");
  }
  if (myMonth==10) {
    if (myBirthday>=23) {
        $('#hoangdao').text("Bạn thuộc cung Thần Nông");
    }else $('#hoangdao').text("Bạn thuộc cung Thiên Bình");
  }
  if (myMonth==11) {
    if (myBirthday>=22) {
        $('#hoangdao').text("Bạn thuộc cung Nhân Mã");
    }else $('#hoangdao').text("Bạn thuộc cung Thần Nông");
  }
  if (myMonth==12) {
    if (myBirthday>=21) {
        $('#hoangdao').text("Bạn thuộc cung Ma Kết");
    }else $('#hoangdao').text("Bạn thuộc cung Nhân Mã");
  }
}
