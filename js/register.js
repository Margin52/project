$(function(){
	changediv();
	reg();
	changeimg();
	regp();
	message();
});
function changediv(){
	$(".con_a_tit_box1").click(function(){
		$(".middle_box1").css({
			"display":"block"
		});
		$(".middle_box2").css({
			"display":"none"
		});
		$("con_a_register").css({
			"display":"block"
		});
		$("con_a_registertwo").css({
			"display":"none"
		});
	});
	$(".con_a_tit_box2").click(function(){
		$(".middle_box1").css({
			"display":"none"
		});
		$(".middle_box2").css({
			"display":"block"
		});
		$("con_a_register").css({
			"display":"none"
		});
		$("con_a_registertwo").css({
			"display":"block"
		});
	});
}
function reg(){
	$(".con_a_register").click(function(){
		if($(".con_a_input1")[0].value != "" && $(".con_a_input2")[0].value != ""){
			let xml = new XMLHttpRequest();
			xml.open("get","../php/reg1.php?phonenum1="+$(".con_a_input1")[0].value+"&password1="+$(".con_a_input2")[0].value,true);
			xml.onreadystatechange = function(){
				if(xml.readyState == 4 && xml.status == 200){
					if(xml.responseText == "1"){
						alert("您已登录成功!");
					}else{
						alert("请输入未注册的电话号码");
					}
				}
			}
			xml.send();
		}
	});
}
var index = 0;
function changeimg(){
	let ord = 9;
	$(".imgchange").click(function(){
		ord++;
		index++;
		if(index>9){
			index=0;
		}
		if(ord>18){
			ord = 9;
		}
		$(".imgchange")[0].src = "../img/reg_img"+ord+".png";

	});
}
function regp(){
	let code;
	let mess;
	let arr = ["74TP","W7F5","8PNF","3W33","QD4S","GDTB","DJD4","7RJ9","55B3","5ATU"];
	$(".con_a_registertwo").click(function(){
		if($(".con_a_input4")[0].value != ""){
			if($(".con_a_input4")[0].value == arr[index]){
				code = true;
			}else{
				code = false;
			}
		}
		if($(".con_a_input5")[0].value != ""){
			if($(".con_a_input5")[0].value == mes){
				mess = true;
			}else{
				mess = false;
			}
		}
		if(code == true && mess == true){
			alert("登录成功！");
		}else{
			alert("输入有误！");
		}
	});
}
let mes = parseInt(100000+Math.random()*900000);
function message(){
	$(".con_a_span5").click(function(){
		alert(mes);
	});
}