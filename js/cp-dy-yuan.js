
//圆形图片切换的js代码
$('.page3_tab li').hover(function(){
		var num = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.page3_list li').eq(num).fadeIn().siblings().fadeOut();
	});


//圆形图片上的图层遮罩代码
$('.page3_text li').hover(function(){ 
		$(this).find('img').stop(true,true).fadeIn();
	},function(){ 
		$(this).find('img').fadeOut();
	});
	
	
//图片折叠的代码
$('.la_list li').click(function(){ 
		var num = $(this).index();
		var This = $(this);
		$(this).addClass('active').siblings().removeClass('active');
		for(var i=0;i<4;i++){
			if(i<=num){
				$('.la_list li').eq(i).animate({'left':i*134+30},500,function(){
					This.addClass('active').siblings().removeClass('active');
				});
			}else{
				$('.la_list li').eq(i).animate({'left':i*134-134+910+8},function(){
					This.addClass('active').siblings().removeClass('active');
				});
			}
			
		}		
	});
	
	var Lzhi = [781,918,1052,1186];
	$('.close').click(function(ev){
		ev.stopPropagation(); 
		for(var i=0;i<4;i++){
			$('.la_list li').eq(i).animate({'left':Lzhi[i]});
		}
		$('.la_list li').removeClass('active');
	});