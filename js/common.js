// $(function(){
            
//     $('.nav-list').hover(function(){
//         $(this).sibling('.sub-list').stop().slideDown();
//     },function(){
//         $('.sub-list').stop().slideUp();
//     })

// })

$(function(){

    $('.header .nav-list').hover(function(e){
         e.preventDefault();
    
         
         if($(this).find('.sub-wrap').length == 1){
             $('.header').addClass('on');
             $(this).find('.sub-wrap').stop().fadeIn(100);
         }    
    },function(){
        $('.header').removeClass('on');
        $('.sub-wrap').stop().fadeOut(100);
        $('.sub-item:first-child').addClass('active').siblings().removeClass('active');
    
    })
    
    
    $('.sub-item:first-child').addClass('active');
    
    $('.sub-item').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    
    });
    
    
    

    //사이드메뉴
    $('.btn-menu').click(function(e){
        e.preventDefault();
    
        $('.nav-area2').addClass('active');
        $('body').addClass('hidden');
    
    })

    $('.nav-top').click(function(e){
        e.preventDefault();

        $('.nav-area2').removeClass('active');
    })


    //사이드메뉴-리스트

    $('.side-nav-list > a').click(function(e){
        e.preventDefault();
        subWrap = $(this).siblings('.s-sub-wrap');
        subList = $(this).siblings('.s-sub-wrap').find('.s-sub-list');
      
        
        if(subWrap.css('display') == 'block'){
          subWrap.stop().fadeOut(500);
          subList.stop().slideUp();
          $(this).stop().removeClass('on');
          
        }else{
            subWrap.stop().fadeIn(500);
            subList.stop().slideDown();
            $(this).stop().addClass('on');      
        }
      
      })
      
    
    
    
    
    
    
    //footer
    $('.btn-title').click(function(e){
        e.preventDefault();
    
        if($(this).siblings('.family-site .sub-list').css('display') == 'block'){
    
            $(this).children('.txt').removeClass('on');
            $('.family-site .sub-list').stop().slideUp();
            
        }else{
            $(this).children('.txt').addClass('on');
            $(this).siblings().stop().slideDown();
        }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    })
    
    
    //   //font
    
    //   	var wid = $('.sc-font .list-wrap').outerWidth();
    // 	var num = $('.sc-font .list-wrap').length;
    // 	var totalWid = wid*num;
    // 	$('.sc-font .font-wrap').width(totalWid); //()엔에 값이 없으면 선택자의 넓이 구해주고, 값이 있으면 ()안에 값으로 변경
    // 	var mleft = 0;
    
    // 	var timer = setInterval(move, 20);
    
    // 	$('.sc-font .list-wrap').on('mouseenter',function(){
    // 		clearInterval(timer);//
    // 	});
         
    // 	 $('.sc-font .list-wrap').on('mouseleave',function(){
    // 		timer = setInterval(move, 20);
    // 	 });
         
    
    // 	function move(){
    // 		mleft -= 2;
    // 		if (mleft < - wid) {
    // 			$('.sc-font .list-wrap').first().appendTo('.sc-font .font-wrap');
    // 			mleft = 0;
    // 		}
    // 		$('.sc-font .list-wrap').css({'left' : mleft});
    // 	}
    
    
    
    
    //footer
    