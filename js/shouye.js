
$(function(){
	navtext();
	condog();
	congoods();
	header_a_E_hover();
	header_a_cang_hover();
	header_a_phone_hover();
	addtit1();
	addtit2();
	addtit3();
	addtit4();
	conimg();
	add();
	listchange1();
	listchange2();
	listchange3();
	listchange4();
	listchange5();
	listchange6();
	listchange7();
	dogfoodchangge1();
	dogfoodchangge2();
	dogfoodchangge3();
	initUI();
	changeImg();//顺序变换（自动播放）
	$(".stu_a_middle")[0].onmouseover = stopChange;//鼠标放上停止
	$(".stu_a_middle")[0].onmouseout = changeImg;//跳转到对应的图片
	let lis = $(".stu_a_middle_div");
	lis.each(function(i){
		$(this).click(function(){
			goImg(i+1);
		});
	});
		
	//超链
	let arr = ["http://www.baidu.com","#","#","#","#","#","#"];
	$(".stu_a_middle_img").click(function(){
		location.href = arr[ord-1];
	});
	go();
	// backgroundchange();
});
//header部分鼠标滑过E宠下拉菜单显示
function header_a_E_hover(){
	var chong;
	$(".header_a_E").mouseenter(function(){
		$(".header_a-E_chong_f").css({
			"display":"block"
		});
	});
	$(".header_a_E").mouseleave(function(){
		chong = setInterval(function(){
			$(".header_a-E_chong_f").css({
				"display":"none"
			});
			clearInterval(chong);
		},300)
	});
	$(".header_a-E_chong_f").mouseenter(function(){
		clearInterval(chong);
		$(".header_a-E_chong_f").css({
			"display":"block"
		});
	});
	$(".header_a-E_chong_f").mouseleave(function(){
		$(".header_a-E_chong_f").css({
			"display":"none"
		});
	});

}

function header_a_cang_hover(){
	var chong;
	$(".header_a_cang").mouseenter(function(){
		$(".header_a_cang_f").css({
			"display":"block"
		});
	});
	$(".header_a_cang").mouseleave(function(){
		chong = setInterval(function(){
			$(".header_a_cang_f").css({
				"display":"none"
			});
			clearInterval(chong);
		},300)
	});
	$(".header_a_cang_f").mouseenter(function(){
		clearInterval(chong);
		$(".header_a_cang_f").css({
			"display":"block"
		});
	});
	$(".header_a_cang_f").mouseleave(function(){
		$(".header_a_cang_f").css({
			"display":"none"
		});
	});
}
function header_a_phone_hover(){
	var chong;
	$(".header_a_phone").mouseenter(function(){
		$(".header_a_phone_f").css({
			"display":"block"
		});
	});
	$(".header_a_phone").mouseleave(function(){
		chong = setInterval(function(){
			$(".header_a_phone_f").css({
				"display":"none"
			});
			clearInterval(chong);
		},300)
	});
	$(".header_a_phone_f").mouseenter(function(){
		clearInterval(chong);
		$(".header_a_phone_f").css({
			"display":"block"
		});
	});
	$(".header_a_phone_f").mouseleave(function(){
		$(".header_a_phone_f").css({
			"display":"none"
		});
	});
}
//地址模块
function add(){
	var chong;
	$(".header_a_city").mouseenter(function(){
		$(".header_a_area").css({
			"display":"block"
		});
	});
	$(".header_a_city").mouseleave(function(){
		chong = setInterval(function(){
			$(".header_a_area").css({
				"display":"none"
			});
			clearInterval(chong);
		},300)
	});
	$(".header_a_area").mouseenter(function(){
		clearInterval(chong);
		$(".header_a_area").css({
			"display":"block"
		});
	});
	$(".header_a_area").mouseleave(function(){
		$(".header_a_area").css({
			"display":"none"
		});
	});
}
function addtit1(){
	$(".header_a_area_tit1").click(function(){
		$(".header_a_area_box1").css({
			"display":"block"
		});
		$(".header_a_area_box2").css({
			"display":"none"
		});
	});
}
function addtit2(){
	$(".header_a_area_tit3").click(function(){
		$(".header_a_area_box2").css({
			"display":"block"
		});
		$(".header_a_area_box1").css({
			"display":"none"
		});
	});
}
function addtit3(){
	$(".header_tianjing").click(function(){
		$(".header_a_area_box2").css({
			"display":"block"
		})
		$(".header_beijing_box").css({
			"display":"none"
		});
		$(".header_tianjin_box").css({
			"display":"block"
		});
		$(".header_a_area_box1").css({
			"display":"none"
		});
	});
}
function addtit4(){
	$(".header_beijing").click(function(){
		$(".header_a_area_box2").css({
			"display":"block"
		})
		$(".header_beijing_box").css({
			"display":"block"
		});
		$(".header_tianjin_box").css({
			"display":"none"
		});
		$(".header_a_area_box1").css({
			"display":"none"
		});
	});
}
// nav
// 搜索框鼠标进入文本提示消失
function navtext(){
	$("#nav_a_input").blur(function(){
		$("#nav_a_input")[0].value="伯纳天纯";
	});
	$("#nav_a_input").focus(function(){
		$("#nav_a_input")[0].value="";
	});
}
// con
// 划过狗狗和商品分类切换不同的模块
function condog(){
	$(".con_a_dog").mouseover(function(){
		$(".stu_a_left_f").css({
			"display":"block"
		});
		$(".stu_a_left").css({
			"display":"none"
		});
	});
}
function congoods(){
	$(".con_a_goods").mouseover(function(){
		$(".stu_a_left").css({
			"display":"block"
		});
		$(".stu_a_left_f").css({
			"display":"none"
		});
	});
}



// 导航栏划过骨头360度旋转
function conimg(){
	$(".con_a_div").mouseover(function(){
		$(".conimgsame").css({
			"transform":"rotate(360deg)"
		},1000);
	});
}
// stu
//划过商品分类的列表显示不同的版块
function listchange1(){
	var chong;
	$(".stu_a_left_f1").mouseenter(function(){
		$(".stu_a_left_f1_ff").css({
			"display":"block"
		});

	});
	$(".stu_a_left_f1").mouseleave(function(){
		chong = setInterval(function(){
		$(".stu_a_left_f1_ff").css({
			"display":"none"
		});

			clearInterval(chong);
		},300)
	});
	$(".stu_a_left_f1_ff").mouseenter(function(){
		clearInterval(chong);
		$(".stu_a_left_f1_ff").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f1_ff").mouseleave(function(){
		$(".stu_a_left_f1_ff").css({
			"display":"none"
		});
	});
}
function listchange2(){
	var chong;
	$(".stu_a_left_f2").mouseenter(function(){
		$(".stu_a_left_f2_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f2").mouseleave(function(){
		chong = setInterval(function(){
		$(".stu_a_left_f2_f").css({
			"display":"none"
		});
			clearInterval(chong);
		},300)
	});
	$(".stu_a_left_f2_f").mouseenter(function(){
		clearInterval(chong);
		$(".stu_a_left_f2_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f2_f").mouseleave(function(){
		$(".stu_a_left_f2_f").css({
			"display":"none"
		});
	});
}
function listchange3(){
	var chong;
	$(".stu_a_left_f3").mouseenter(function(){
		$(".stu_a_left_f3_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f3").mouseleave(function(){
		chong = setInterval(function(){
		$(".stu_a_left_f3_f").css({
			"display":"none"
		});
			clearInterval(chong);
		},300)
	});
	$(".stu_a_left_f3_f").mouseenter(function(){
		clearInterval(chong);
		$(".stu_a_left_f3_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f3_f").mouseleave(function(){
		$(".stu_a_left_f3_f").css({
			"display":"none"
		});
	});
}
function listchange4(){
	var chong;
	$(".stu_a_left_f4").mouseenter(function(){
		$(".stu_a_left_f4_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f4").mouseleave(function(){
		chong = setInterval(function(){
		$(".stu_a_left_f4_f").css({
			"display":"none"
		});
			clearInterval(chong);
		},300)
	});
	$(".stu_a_left_f4_f").mouseenter(function(){
		clearInterval(chong);
		$(".stu_a_left_f4_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f4_f").mouseleave(function(){
		$(".stu_a_left_f4_f").css({
			"display":"none"
		});
	});
}
function listchange5(){
	var chong;
	$(".stu_a_left_f5").mouseenter(function(){
		$(".stu_a_left_f5_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f5").mouseleave(function(){
		chong = setInterval(function(){
		$(".stu_a_left_f5_f").css({
			"display":"none"
		});
			clearInterval(chong);
		},300)
	});
	$(".stu_a_left_f5_f").mouseenter(function(){
		clearInterval(chong);
		$(".stu_a_left_f5_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f5_f").mouseleave(function(){
		$(".stu_a_left_f5_f").css({
			"display":"none"
		});
	});
}
function listchange6(){
	var chong;
	$(".stu_a_left_f6").mouseenter(function(){
		$(".stu_a_left_f6_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f6").mouseleave(function(){
		chong = setInterval(function(){
		$(".stu_a_left_f6_f").css({
			"display":"none"
		});
			clearInterval(chong);
		},300)
	});
	$(".stu_a_left_f6_f").mouseenter(function(){
		clearInterval(chong);
		$(".stu_a_left_f6_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f6_f").mouseleave(function(){
		$(".stu_a_left_f6_f").css({
			"display":"none"
		});
	});
}
function listchange7(){
	var chong;
	$(".stu_a_left_f7").mouseenter(function(){
		$(".stu_a_left_f7_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f7").mouseleave(function(){
		chong = setInterval(function(){
		$(".stu_a_left_f7_f").css({
			"display":"none"
		});
			clearInterval(chong);
		},300)
	});
	$(".stu_a_left_f7_f").mouseenter(function(){
		clearInterval(chong);
		$(".stu_a_left_f7_f").css({
			"display":"block"
		});
	});
	$(".stu_a_left_f7_f").mouseleave(function(){
		$(".stu_a_left_f7_f").css({
			"display":"none"
		});
	});
}
//轮播图
function initUI(){
	let lis = $(".stu_a_middle_div");
	 lis[0].style.backgroundColor="#ffffff";
	 lis[0].style.color = "black"; 
}

let myTimer;
var ord = 1;//当前图片的序号

//停止
function stopChange(){
	window.clearInterval(myTimer);
}
//跳转到指定的图片
function goImg(transOrd){
	//1.改变数据
	let outOrd = ord;
	ord = transOrd;
	//2.处理边界
	if(ord>7){
		ord=1;
	}
	//3.外观呈现
	changeUI(outOrd,ord);
}
//自动播放
function changeImg(){
	myTimer = setInterval(function(){
		//1.改变数据
		let outOrd = ord;
		ord++;
		//2.处理边界
		if(ord>7){
			ord = 1;
		}
		if(ord == 1){
		$(".stu").css({
			"background":"#e2d8f1"
		})
		}else if(ord == 2){
			$(".stu").css({
				"background":"#f8f5e4"
			})
		}
		//3.外观呈现
		changeUI(outOrd,ord);
	},3000)
}
//改变外观
function changeUI(outOrd,inOrd){
	let lis = $(".stu_a_middle_div");  
	 //1）.把所有的豆豆变成原始颜色（粉色）
	 for(let i=0;i<lis.length;i++){
	 	lis[i].style.backgroundColor = "#999999";
	 	lis[i].style.color = "#ffffff"; 
	 }
	 //2).把当前的豆豆变成高亮
	 lis[inOrd-1].style.backgroundColor="#ffffff";
	 lis[inOrd-1].style.color = "#252a0c"; 
	 //3).改变图片
	 changeImgUI(outOrd,inOrd);
}
//切换图片
//俩张图片的滑入滑出
//outOrd:滑出图片的序号
//inOrd:滑入图片的序号
function changeImgUI(outOrd,inOrd){
	let left1 = 0;
	let myTimer = setInterval(function(){
		//1、改变数据
		left1-=10;
		//2、边界处理
		if(left1<-770){
			left1=-770;
			window.clearInterval(myTimer);
		}
		//3、改变外观
			$(".stu_a_middle_img")[outOrd-1].style.left = left1+"px";
			$(".stu_a_middle_img")[inOrd-1].style.left = (left1+770)+"px";	
	})
}
// 热门和进口狗粮的切换
function dogfoodchangge1(){
	$(".repe_a_list_a1_1").mouseover(function(){
		$(".repe_a_box_goods_list_1").css({
			"display":"block"
		});
		$(".repe_a_box_goods_list_f_1").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f1_1").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f2_1").css({
			"display":"none"
		});
	});
	$(".repe_a_list_a2_1").mouseover(function(){
		$(".repe_a_box_goods_list_1").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f_1").css({
			"display":"block"
		});
		$(".repe_a_box_goods_list_f1_1").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f2_1").css({
			"display":"none"
		});
	});
	$(".repe_a_list_a3_1").mouseover(function(){
		$(".repe_a_box_goods_list_1").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f_1").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f1_1").css({
			"display":"block"
		});
		$(".repe_a_box_goods_list_f2_1").css({
			"display":"none"
		});
	});
	$(".repe_a_list_a4_1").mouseover(function(){
		$(".repe_a_box_goods_list_1").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f_1").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f1_1").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f2_1").css({
			"display":"block"
		});
	});
}
function dogfoodchangge2(){
	$(".repe_a_list_a1_2").mouseover(function(){
		$(".repe_a_box_goods_list_2").css({
			"display":"block"
		});
		$(".repe_a_box_goods_list_f_2").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f1_2").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f2_2").css({
			"display":"none"
		});
	});
	$(".repe_a_list_a2_2").mouseover(function(){
		$(".repe_a_box_goods_list_2").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f_2").css({
			"display":"block"
		});
		$(".repe_a_box_goods_list_f1_2").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f2_2").css({
			"display":"none"
		});
	});
	$(".repe_a_list_a3_2").mouseover(function(){
		$(".repe_a_box_goods_list_2").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f_2").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f1_2").css({
			"display":"block"
		});
		$(".repe_a_box_goods_list_f2_2").css({
			"display":"none"
		});
	});
	$(".repe_a_list_a4_2").mouseover(function(){
		$(".repe_a_box_goods_list_2").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f_2").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f1_2").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f2_2").css({
			"display":"block"
		});
	});
}
function dogfoodchangge3(){
	$(".repe_a_list_a1_3").mouseover(function(){
		$(".repe_a_box_goods_list_2_3").css({
			"display":"block"
		});
		$(".repe_a_box_goods_list_f_2_3").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f1_2_3").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f2_2_3").css({
			"display":"none"
		});
	});
	$(".repe_a_list_a2_3").mouseover(function(){
		$(".repe_a_box_goods_list_2_3").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f_2_3").css({
			"display":"block"
		});
		$(".repe_a_box_goods_list_f1_2_3").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f2_2_3").css({
			"display":"none"
		});
	});
	$(".repe_a_list_a3_3").mouseover(function(){
		$(".repe_a_box_goods_list_2_3").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f_2_3").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f1_2_3").css({
			"display":"block"
		});
		$(".repe_a_box_goods_list_f2_2_3").css({
			"display":"none"
		});
	});
	$(".repe_a_list_a4_3").mouseover(function(){
		$(".repe_a_box_goods_list_2_3").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f_2_3").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f1_2_3").css({
			"display":"none"
		});
		$(".repe_a_box_goods_list_f2_2_3").css({
			"display":"block"
		});
	});
}
function yidong(fu,zi,change1,speed1,change2,speed2){
	fu.mouseenter(function(){
		zi.animate(change1,speed1);
	});
	fu.mouseleave(function(){
		zi.animate(change2,speed2);
	});
}
function go(){
	yidong($(".stu_a_img1_hover"),$(".stu_a_img1_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".stu_a_img2_hover"),$(".stu_a_img2_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".stu_a_img3_hover"),$(".stu_a_img3_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img1_hover"),$(".repe_a_img1_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img2_hover"),$(".repe_a_img2_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img3_hover"),$(".repe_a_img3_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img4_hover"),$(".repe_a_img4_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img5_hover"),$(".repe_a_img5_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img6_hover"),$(".repe_a_img6_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img7_hover"),$(".repe_a_img7_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img8_hover"),$(".repe_a_img8_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img9_hover"),$(".repe_a_img9_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img10_hover"),$(".repe_a_img10_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img11_hover"),$(".repe_a_img11_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img12_hover"),$(".repe_a_img12_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
    },200);
    yidong($(".repe_a_img13_hover"),$(".repe_a_img13_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img14_hover"),$(".repe_a_img14_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img15_hover"),$(".repe_a_img15_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img16_hover"),$(".repe_a_img16_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img17_hover"),$(".repe_a_img17_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img18_hover"),$(".repe_a_img18_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
    },200);
      yidong($(".repe_a_img19_hover"),$(".repe_a_img19_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img20_hover"),$(".repe_a_img20_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img21_hover"),$(".repe_a_img21_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img22_hover"),$(".repe_a_img22_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img23_hover"),$(".repe_a_img23_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img24_hover"),$(".repe_a_img24_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
    },200);
      yidong($(".repe_a_img25_hover"),$(".repe_a_img25_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img26_hover"),$(".repe_a_img26_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img27_hover"),$(".repe_a_img27_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img28_hover"),$(".repe_a_img28_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img29_hover"),$(".repe_a_img29_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
 	},200);
 	yidong($(".repe_a_img30_hover"),$(".repe_a_img30_hover"),{
 		left:"10px"
 	},200,{
 		left:"0px"
    },200);
 	yidong($(".sale_a_img1_hover"),$(".sale_a_img1_hover"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".sale_a_img2_hover"),$(".sale_a_img2_hover"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".sale_a_img3_hover"),$(".sale_a_img3_hover"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".sale_a_img4_hover"),$(".sale_a_img4_hover"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
    },200);
    yidong($(".ope_a_span1"),$(".ope_a_span1"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".ope_a_span2"),$(".ope_a_span2"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
    },200);
 	yidong($(".ope_a_span3"),$(".ope_a_span3"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".ope_a_span4"),$(".ope_a_span4"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".ope_a_span5"),$(".ope_a_span5"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
 	},200);
 	yidong($(".ope_a_span6"),$(".ope_a_span6"),{
 		bottom:"10px"
 	},200,{
 		bottom:"0px"
    },200);
}