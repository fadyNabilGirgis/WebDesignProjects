$(document).ready(function(){
		  "use strict";
			$(window).scroll(function(){
			var navbar=$(".navbar");
		if($(window).scrollTop()>=navbar.height())
			{
				navbar.addClass("scrolled");
			}
		else
			{
				navbar.removeClass("scrolled");
			}
		});
	   
	   //deal with tabs
	   $('.tab-switch li').click(function(){
		   //add selected class to active link
		   $(this).addClass('selected').siblings().removeClass('selected');
		   //add transform translate to tabs
		   $(this).toggleClass('clicked').siblings().removeClass('clicked');
		   //hide all divs
		   $('.tabs-section .tabs-content > div').hide();
		   //show div connected with the link
		   $($(this).data('class')).show();
	   });
});