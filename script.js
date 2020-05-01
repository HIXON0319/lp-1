$(function(){
	var pagetop = $('#page-top');
  pagetop.hide();

	$(window).scroll(function(){
    if($(this).scrollTop() > 100){
    	pagetop.fadeIn();
    }else{
    	pagetop.fadeOut();
    }
	});
	pagetop.click(function(){
		$('body,html').animate({
			scrollTop:0
		},500);
		return false;
	});
});


$(function(){
	$('a[href*="#"]:not([href="#"])').click(function(){
		var target = $($(this).attr('href')).offset().top;
		target -= 100;

		$('html,body').animate({scrollTop:target},500);
		return false;
	});
});



// スライダー
$(document).ready(function() {
    $('.slides').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slideToShow:1,
        infinit: true,
        responsive:[
        {
        	breakpoint:560,
        	settings:{
	        	slideToShow: 1,
	        	slideToScroll: 1
        	 }
          }
        ]
    });
});

// ふわっとエフェクト
$(function(){
  $(window).scroll(function(){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowH = $(window).height();
      if(scroll > elemPos - windowH){
        $(this).addClass('scroll');
      }
    });
  });
});

// Q & Aトグル
$(function(){
  $('.question').on('click',function(){
    $(this).next().slideToggle();

    if($(this).children('.accordion_btn').hasClass('active')){
      $(this).children('.accordion_btn').removeClass('active');
    }else{
      $(this).children('.accordion_btn').addClass('active');
    }
  });

});

// スマホドロワーナビ
$(function(){
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('active');
    $('.overlay').fadeToggle();
    $('.nav-menu').toggleClass('open');
  });

  $('.overlay').on('click',function(){
    $(this).fadeOut();
    $('#nav-btn').removeClass('active');
    $('.nav-menu').removeClass('open');
  }); 
});

// モダール
$(function(){
  $('#modal-open').on('click',function(){
    $('.modal').fadeIn();
    return false;
  });
  $('.modal-close').on('click',function(){
    $('.modal').fadeOut();
  })
});
