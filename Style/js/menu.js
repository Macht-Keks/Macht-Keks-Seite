 









$(document).ready(function(e) {
	
		function UDResponsive(){
			
			if( (($('ul.normal').children('li').length)*151) > $(window).width() ){
			 	
				$('ul.normal').css('width','100%'); 
				$('ul.normal').css('background-color','#505050');
					$('ul.normal li').css('width','100%');
					$('ul.normal li').css('border-bottom','1px solid #505050');
					$('ul.normal li').css('border-right','none');
				
			} else {
				
				$('ul.normal').css('display','block');
				$('ul.normal').css('width','auto');
				$('ul.normal').css('background-color','none');
					$('ul.normal li').css('width','150px');
					$('ul.normal li').css('border-bottom','none');
					$('ul.normal li').css('border-right','1px solid #505050');
			};
			
		};
	 
	UDResponsive();
	
	 $('nav ul li').stop().hover(
		 function(e) {
			 $(this).children('ul').stop().slideDown(500);
			 
		 },
		 function(e) {
			  $(this).children('ul').stop().slideUp(500);
		 }
	 );
	 	
	 $(window).resize(function(e) {
		 UDResponsive();
			
	 });
	
});
	