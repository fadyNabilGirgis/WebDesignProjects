/* global $,alert,console */
$(function () {
	
	'use strict';
	// adjust header height
	var header = $('.header'),
		navbar = $('.navbar'),
		bxslider =   $('.bxslider');
	
	header.height($(window).height());
	
	// make resize to window
	$(window).resize(function() {
		
		header.height($(window).height());
		
		//adjust Bxslider list make item center
		 bxslider.each(function() {
			$(this).css('paddingTop',($(window).height()- $('.bxslider li').height())/2);	     
      });
	});
	
	$(window).scroll(function() {
		
		if ($(this).scrollTop() >=610) {
			
              navbar.addClass('back-ground');
            } else
			{
				navbar.removeClass('back-ground');
			}
	});
	
	//Add active class to links
	$('.nav li a').on('click',function() { 
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	 //adjust Bxslider list make item center
		 bxslider.each(function() {
			$(this).css('paddingTop',($(window).height()-$('.bxslider li').height())/2);	     
    });
	
	// Trigger the bx slider
	 bxslider.bxSlider({
		   
		  pager:false
	  });
	
	//smooth scoll to div
	$('.nav li a').click(function(){
		$('html,body').animate({
			
			scrollTop:$('#'+$(this).data('value')).offset().top
			
		},1000);
		
	});
	
	// our Auto slider blugin
	(function autoslider(){
		
		$('.slider .active').each(function(){
			if(! $(this).is(':last-child'))
				{
					$(this).delay(3000).fadeOut(1000,function(){
						$(this).removeClass('active').next().addClass('active').fadeIn();
						
						autoslider();
					});
				}
			else
				{
					$(this).delay(3000).fadeOut(1000,function(){ 
						$(this).removeClass('active');
						$('.slider div').eq(0).addClass('active').fadeIn();
						autoslider();
					});
				}
			
		});
		
	}());
	//Trigger MixitUp
	$('#Container').mixItUp();
	//Adjust Shuffle links
	$('.shuffle li').click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	//Trigger Nice Scroll
	$("body").niceScroll({
		
		cursorcolor:'#18aa8f',
		cursorwidth: "10px",
		 cursorborder: "1px solid #18aa8f",
		scrollspeed: 50,
		horizrailenabled:false
	});
	var scrolltop=$('.scroll');
	// On Window Scrolling
	$(window).scroll(function()
	{
		//to show button
		if ($(window).scrollTop()>=2000)
			{
				scrolltop.fadeIn(1000);
				
			}
		//to hide button
		else
			{
				scrolltop.fadeOut(1000);
			}
	});
		//to make scroll top=0 to reach to the top of the page
		  scrolltop.click(function(){
			$('html,body').animate({scrollTop:0},2000);
	});
		
	
	
});

//Loading Screen
$(window).load(function(){
	//Loading elements
	$('.load-overlay .spinner').fadeOut(5000,function(){
		$(this).parent().fadeOut(5000,function(){
			$(this).remove();
		});
	});
});
