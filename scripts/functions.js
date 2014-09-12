$(document) .ready (function ()
	{
	$('#email-link').wrap('<a href="mailto:david@davidputney.com?Subject=Website%20feedback" target="_top">');  
	$('#twitter-link').wrap('<a href="https://twitter.com/putneydm">');  
	$('#facebook-link').wrap('<a href="	https://www.facebook.com/david.putney">'); 

$( "a" ).each( function(){
  var href = $( this ).attr( "href" );
  if( href.indexOf( "#" ) !== 0 ){
                $( this ).bind( "tap", function(){
                    window.location.href = this.href;
                });
            }
        });
            
function page_scroller()
	{
	$('html, body').animate({ scrollTop: 0 }, 150);	
	}

	$("#scroll-to-top").click(function() {
		page_scroller();
		return false;
	});	
		            

$('#menu-button' ).bind( "tap", function( e ){ 
 
  	var id = '#' + $('#menu-button').closest("navigation").attr("id");
 	var menu_height = $(id) .height ();
 	
 if (menu_height === 40)
	 {
	 $(id) .addClass ('menu-active');
	  	console.log(menu_height);
	 $('.button_hidden') .show ();
	 $('.button_visible') .hide ();
	}
	
 else
	 {
	 $(id) .removeClass ('menu-active');
	 $('.button_hidden') .hide ();
	 $('.button_visible') .show ();
	}	

}); 


}); 


$(window) .resize (function ()
	{		
	$('#secondary-header, #inside-header') .removeClass ('menu-active');
	$('.button_hidden') .hide ();
	$('.button_visible') .show ();

	}); 




$(window) .scroll (function ()
	{
	var window_width = $(window) .width ();	
	scroll_position = $(document) .scrollTop ();
    main_position = $('#main') .offset ();
    
  function sticky_menu (main_position, scroll_position)
		{			
		if (main_position < scroll_position)
		{
		$('#secondary-header') .addClass ('social-menu-show');	
		}
		
		if (main_position > scroll_position)
		{
		$('#secondary-header') .removeClass ('social-menu-show') .removeClass ('menu-active');
		$('.button_hidden') .hide ();
		$('.button_visible') .show ();
		}		
		}		  

	function scroll_up (document_top)
		{	
		if (document_top > 300 && window_width < 900)
		{
		$('#scroll-to-top') .fadeIn (200);		
		}
		
		if (document_top < 300)
		{
		$('#scroll-to-top') .fadeOut (200);		
		}						
	}    

   $.data(this, 'scrollTimer', setTimeout(function() {    
		sticky_menu(main_position.top, scroll_position);
		var document_top = $(document) .scrollTop ();
		scroll_up(document_top);	
 }, 50));

	}); 
