
$(function(){
	judge();//判断内容是否为空，否则显示切换边框和显示未输入的提示信息
	changeimg();//切换验证码图片
	message();//获取验证码
	showpasswordlevel();//显示密码等级提示信息
	reg();//注册
});
var judgeone;
var	judgetwo;
var judgethree;
var judgefour;
var judgefive;
var judgesix;
var judgetel;
function judge(){
	$("#phonenum").blur(function(){
		let regObj = /^[0-9]{11}$/;
		if($("#phonenum")[0].value != ""){
			if(regObj.test(this.value)){
				let xml = new XMLHttpRequest();
				xml.open("get","../php/regf.php?phonenum1="+$("#phonenum")[0].value,true);
				xml.onreadystatechange = function(){
					if(xml.readyState == 4 && xml.status == 200){
						if(xml.responseText == "1"){
							$(".con_a_img1").css({
								"display":"none"
							});
							$(".con_a_span2_1").css({
								"display":"block"
							});
							$("#con_a_span2_1_change1")[0].innerHTML = "电话号码已被注册！";
						}else{
							$(".con_a_img1").css({
								"display":"block"
							});
							$(".con_a_span2_1").css({
								"display":"none"
							});
							judgeone = true;
						}
					}
				}
				xml.send();
				judgeone = true;
			}else{
				$(".con_a_img1").css({
					"display":"none"
				});
				$(".con_a_span2_1").css({
					"display":"block"
				});
				$("#con_a_span2_1_change1")[0].innerHTML = "电话号码输入错误";
				judgeone = false;
			}
		}
		if($("#phonenum")[0].value == ""){
			$("#phonenum").css({
				"border":"1px solid #ff6f4a"
			});
			$(".con_a_span2_1").css({
				"display":"block"
			});
			$("#con_a_span2_1_change1")[0].innerHTML = "请输入11位电话号码";
		}
		if(judgeone == true && judgetwo == true && judgethree == true && judgefour == true && judgefive == true && judgesix ==true){
			$(".con_a_div8").css({
				"background":"#33cb98"
			});
		}else{
			$(".con_a_div8").css({
				"background":"#ededed"
			});
		}
	});
	$("#phonenum").focus(function(){
		$(".con_a_span2_1").css({
			"display":"none"
		});
	});
	$("#imgcon").blur(function(){
		let arr = ["74TP","W7F5","8PNF","3W33","QD4S","GDTB","DJD4","7RJ9","55B3","5ATU"];
		var regObj = /^\w{4}$/;
		if($("#imgcon")[0].value != ""){
			if(regObj.test(this.value)){
				if($("#imgcon")[0].value == arr[index]){
					$(".con_a_img2").css({
						"display":"block"
					});
					$(".con_a_span2_2").css({
						"display":"none"
					});
					judgetwo = true;
		 		}else{
		 			$(".con_a_span2_2").css({
						"display":"block"
					});
					$("#con_a_span2_1_change2")[0].innerHTML = "验证码错误";
					$(".con_a_img2").css({
						"display":"none"
					});
					judgetwo = false;
		 		}
		 	}else{
		 		$(".con_a_span2_2").css({
						"display":"block"
				});
				$("#con_a_span2_1_change2")[0].innerHTML = "验证码错误";
				$(".con_a_img2").css({
					"display":"none"
				});
		 	}
		}
		if($("#imgcon")[0].value == ""){
			$("#imgcon").css({
				"border":"1px solid #ff6f4a"
			});
			$(".con_a_span2_2").css({
				"display":"block"
			});
			$("#con_a_span2_1_change2")[0].innerHTML = "请输入4位验证码";
		}
		if(judgeone == true && judgetwo == true && judgethree == true && judgefour == true && judgefive == true && judgesix ==true){
			$(".con_a_div8").css({
					"background":"#33cb98"
			});
		}else{
			$(".con_a_div8").css({
				"background":"#ededed"
			});
		}
	});
	$("#imgcon").focus(function(){
		$(".con_a_span2_2").css({
			"display":"none"
		});
	});
// function message(){
// 	$("#verify").click(function(){
// 		let mes = parseInt(99999+Math.random()*1000000);
// 		alert(mes);
// 	});
// }
	$("#messagenum").blur(function(){
		let regObj = /^[0-9]{6}$/;
		if($("#messagenum")[0].value != ""){
			if(regObj.test(this.value)){
				if($("#messagenum")[0].value == mes){
					$(".con_a_img3").css({
						"display":"block"
					});
					$(".con_a_span2_3").css({
						"display":"none"
					});
					judgethree = true;
				}else{
					$(".con_a_img3").css({
					"display":"none"
					});
					$(".con_a_span2_3").css({
						"display":"block"
					});
					$("#con_a_span2_1_change3")[0].innerHTML = "短信验证输入错误";
					judgethree = false;
				}
			}else{
				$(".con_a_img3").css({
					"display":"none"
				});
				$(".con_a_span2_3").css({
					"display":"block"
				});
				$("#con_a_span2_1_change3")[0].innerHTML = "短信验证输入错误";
			}
		}
		if($("#messagenum")[0].value == ""){
			$("#messagenum").css({
				"border":"1px solid #ff6f4a"
			});
			$(".con_a_span2_3").css({
				"display":"block"
			});
			$("#con_a_span2_1_change3")[0].innerHTML = "请输入短信验证码";
		}
		if(judgeone == true && judgetwo == true && judgethree == true && judgefour == true && judgefive == true && judgesix ==true){
			$(".con_a_div8").css({
					"background":"#33cb98"
			});
		}else{
			$(".con_a_div8").css({
				"background":"#ededed"
			});
		}
	});
	$("#messagenum").focus(function(){
		$(".con_a_span2_3").css({
			"display":"none"
		});
	});
	$("#idnum").blur(function(){
		if($("#idnum")[0].value != ""){
			let tex = $("#idnum")[0].value;
			let texlen = tex.length;
			if(texlen<=3||texlen>20){
				$(".con_a_img4").css({
					"display":"none"
				});
				$(".con_a_span2_4").css({
					"display":"block"
				});
				$("#con_a_span2_1_change4")[0].innerHTML = "用户名输入有误";
				judgefour = false;
			}else{
				$(".con_a_img4").css({
					"display":"block"
				});
				$(".con_a_span2_4").css({
					"display":"none"
				});
				judgefour = true;
			}
		}
		if($("#idnum")[0].value == ""){
			$("#idnum").css({
				"border":"1px solid #ff6f4a"
			});
			$(".con_a_span2_4").css({
				"display":"block"
			});
			$("#con_a_span2_1_change4")[0].innerHTML = "请输入4-20位用户名";
		}
		if(judgeone == true && judgetwo == true && judgethree == true && judgefour == true && judgefive == true && judgesix ==true){
			$(".con_a_div8").css({
					"background":"#33cb98"
			});
		}else{
			$(".con_a_div8").css({
				"background":"#ededed"
			});
		}
	});
	$("#idnum").focus(function(){
		$(".con_a_span2_4").css({
			"display":"none"
		});
	});
	$("#password").blur(function(){
		let regObj = /^\w{8,20}$/;
		if($("#password")[0].value != ""){
			if(regObj.test(this.value)){
				$(".con_a_img5").css({
					"display":"block"
				});
				$(".con_a_span2_5").css({
					"display":"none"
				});
				judgefive = true;
			}else{
				$(".con_a_img5").css({
					"display":"none"
				});
				$(".con_a_span2_5").css({
					"display":"block"
				});
				$(".con_a_span2_1_change5")[0].innerHTML = "请按规则输入密码";
				judgefive = false;
			}
		}
		if($("#password")[0].value == ""){
			$("#password").css({
				"border":"1px solid #ff6f4a"
			});
			$(".con_a_span2_5").css({
				"display":"block"
			});
			$(".con_a_span2_1_change5")[0].innerHTML = "请输入8-20位密码";
		}
		if(judgeone == true && judgetwo == true && judgethree == true && judgefour == true && judgefive == true && judgesix ==true){
			$(".con_a_div8").css({
					"background":"#33cb98"
			});
		}else{
			$(".con_a_div8").css({
				"background":"#ededed"
			});
		}
	});
	$("#password").keydown(function(){
		let tit = $("#password")[0].value;
		let titlen = tit.length;
		if(titlen>8 && titlen<13){
			$(".level1").css({
				"background":"#ff6f4a",
				"color":"white"
			});
		}else if(titlen>=13 && titlen<17){
			$(".level2").css({
				"background":"#ff6f4a",
				"color":"white"
			});
		}else if(titlen>=17 && titlen<=20){
			$(".level3").css({
				"background":"#ff6f4a",
				"color":"white"
			});
		}
	});
	$("#password").focus(function(){
		$(".con_a_span2_5").css({
			"display":"none"
		});
	});
	$("#truepassword").blur(function(){
		let regObj = /^\w{8,20}$/;
		if($("#truepassword")[0].value != ""){
			if(regObj.test(this.value)){
				if($("#truepassword")[0].value == $("#password")[0].value){
					$(".con_a_img6").css({
						"display":"block"
					});
					$(".con_a_span2_6").css({
						"display":"none"
					});
					judgesix = true;
				}else{
					$(".con_a_img6").css({
						"display":"none"
					});
					$(".con_a_span2_6").css({
						"display":"block"
					});
					$(".con_a_span2_1_change6")[0].innerHTML = "您的密码不一致";
					judgesix = false;
				}
			}else{
				$(".con_a_img6").css({
						"display":"none"
				});
				$(".con_a_span2_6").css({
					"display":"block"
				});
				$(".con_a_span2_1_change6")[0].innerHTML = "请按规则输入密码";
			}
		}
		if($("#truepassword")[0].value == ""){
			$("#truepassword").css({
				"border":"1px solid #ff6f4a"
			});
			$(".con_a_span2_6").css({
				"display":"block"
			});
			$(".con_a_span2_1_change6")[0].innerHTML = "请再次输入密码";
		}
		if(judgeone == true && judgetwo == true && judgethree == true && judgefour == true && judgefive == true && judgesix ==true){
			$(".con_a_div8").css({
					"background":"#33cb98"
			});
		}else{
			$(".con_a_div8").css({
				"background":"#ededed"
			});
		}
	});
	$("#truepassword").focus(function(){
		$(".con_a_span2_6").css({
			"display":"none"
		});
	});
}
var index = 0;
function changeimg(){
	let ord = 9;
	$("#con_a_span").click(function(){
		ord++;
		index++;
		if(index>9){
			index=0;
		}
		if(ord>18){
			ord=9;
		}
		$(".con_a_input_box_pho")[0].src="../img/reg_img"+ord+".png";
	});
}
let mes = parseInt(100000+Math.random()*900000);
function message(){
	$("#verify").click(function(){
		alert(mes);
	});
}
function showpasswordlevel(){
	$("#password").focus(function(){
		$(".passwordlevel").css({
			"display":"block"
		});
	});
	$("#password").blur(function(){
		$(".passwordlevel").css({
			"display":"none"
		});
	});
}

function reg(){
	$(".con_a_div8_reg").click(function(){
		if(judgeone == true && judgetwo == true && judgethree == true && judgefour == true && judgefive == true && judgesix ==true){
			let xhr = new XMLHttpRequest();
			//2.设置请求参数
			xhr.open("get","../php/reg.php?phonenum1="+$("#phonenum")[0].value+"&idnum1="+$("#idnum")[0].value+"&password1="+$("#password")[0].value,true);
			//3.设置回调函数
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
				}
			}
			//4.发送
			xhr.send();
		}
	});
}
