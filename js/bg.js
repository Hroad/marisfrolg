				$(function() {
		/* position of the <li> that is currently shown */
		var current = 0;
		
		var loaded  = 0;
		
		for(var i = 1; i <4; ++i)
			$('<img />').load(function(){
				
				++loaded;
				if(loaded == 3){
					$('#bg1,#bg2,#bg3,#bg4,#bg5,#bg6').mouseover(function(e){
						


						var $this = $(this);

						//alert($this.parent().parent().html());

						/* if we hover the current one, then don't do anything */
						if($this.parent().parent().index() == current)
							return;

						/* item is bg1 or bg2 or bg3, depending where we are hovering */
						var item = e.target.id;

						/*
						this is the sub menu overlay. Let's hide the current one
						if we hover the first <li> or if we come from the last one,
						then the overlay should move left -> right,
						otherwise right->left
						 */

						if(item == 'bg1' || current == 2)
						{
							$('#menu .sub'+parseInt(current+1)).stop().animate({backgroundPosition:"(-194px 0)"},300,function(){
								$(this).find('li').hide();
							});
						}
						else
						{
							$('#menu .sub'+parseInt(current+1)).stop().animate({backgroundPosition:"(194px 0)"},300,function(){
								$(this).find('li').hide();								
							});
						}

						if(item == 'bg1' || current == 2){
							/* if we hover the first <li> or if we come from the last one, then the images should move left -> right */
							$('#menu > li').animate({backgroundPosition:"(-1158px 0)"},0).removeClass('bg1 bg2 bg3 bg4 bg5 bg6').addClass(item);
							move(1,item);
						}
						else{
							/* if we hover the first <li> or if we come from the last one, then the images should move right -> left */
							$('#menu > li').animate({backgroundPosition:"(1158px 0)"},0).removeClass('bg1 bg2 bg3 bg4 bg5 bg6').addClass(item);
							move(0,item);
						}

						/*
						We want that if we go from the first one to the last one (without hovering the middle one),
						or from the last one to the first one, the middle menu's overlay should also slide, either
						from left to right or right to left.
						 */
						if(current == 2 && item == 'bg1'){
							$('#menu .sub'+parseInt(current)).stop().animate({backgroundPosition:"(-194px 0)"},300);
						}
						if(current == 0 && item == 'bg6'){
							$('#menu .sub'+parseInt(current+2)).stop().animate({backgroundPosition:"(194px 0)"},400);
						}

						
						/* change the current element */
						current = $this.parent().parent().index();
						

						/* let's make the overlay of the current one appear */
					   
						$('#menu .sub'+parseInt(current+1)).stop().animate({backgroundPosition:"(0 0)"},300,function(){
							$(this).find('li').fadeIn();
						});
					});
				}	
			}).attr('src', 'img/'+i+'.jpg');
		
					
		/*
		dir:1 - move left->right
		dir:0 - move right->left
		 */
		function move(dir,item){
			if(dir){
				$('#bg1').parent().parent().stop().animate({backgroundPosition:"(0 0)"},100);
				$('#bg2').parent().parent().stop().animate({backgroundPosition:"(-194px 0)"},200);
				$('#bg3').parent().parent().stop().animate({backgroundPosition:"(-387px 0)"},300);
				$('#bg4').parent().parent().stop().animate({backgroundPosition:"(-577px 0)"},400);
				$('#bg5').parent().parent().stop().animate({backgroundPosition:"(-771px 0)"},500);
				$('#bg6').parent().parent().stop().animate({backgroundPosition:"(-961px 0)"},600,function(){
					$('#nav').removeClass('bg1 bg2 bg3 bg4 bg5 bg6').addClass(item);
				});
			}
			else{
				$('#bg1').parent().parent().stop().animate({backgroundPosition:"(0 0)"},600,function(){
					$('#nav').removeClass('bg1 bg2 bg3 bg4 bg5 bg6').addClass(item);
				});
				$('#bg2').parent().parent().stop().animate({backgroundPosition:"(-194px 0)"},500);
				$('#bg3').parent().parent().stop().animate({backgroundPosition:"(-387px 0)"},400);
				$('#bg4').parent().parent().stop().animate({backgroundPosition:"(-577px 0)"},300);
				$('#bg5').parent().parent().stop().animate({backgroundPosition:"(-771px 0)"},200);
				$('#bg6').parent().parent().stop().animate({backgroundPosition:"(-961px 0)"},100);
			}
		}
	});
