$(document) .ready (function ()
	{

//	$('#email-link') .append ('xxx');
	
	
	$('#email-link').wrap('<a href="mailto:david@davidputney.com?Subject=Website%20feedback" target="_top">');  
	$('#twitter-link').wrap('<a href="https://twitter.com/putneydm">');  
	$('#facebook-link').wrap('<a href="	https://www.facebook.com/david.putney">'); 
  console.log( "works" );

$( "a" ).each( function(){
  var href = $( this ).attr( "href" );
  if( href.indexOf( "#" ) !== 0 ){
                $( this ).bind( "tap", function(){
                    window.location.href = this.href;
                });
            }
} );





$('#menu-button' ).bind( "tap", function( e ){ 
 
var menu_height = $('#secondary-header') .height ();
	console.log(menu_height);

 if (menu_height == 40)
	 {
	 $('#secondary-header') .addClass ('menu-active');
	 $('.button_hidden') .show ();
	 $('.button_visible') .hide ();
	}
	
 else
	 {
	 $('#secondary-header') .removeClass ('menu-active');
	 $('.button_hidden') .hide ();
	 $('.button_visible') .show ();
	}	

}); 


}); 


$(window) .resize (function ()
	{
	var window_width = $(window) .width ();
	var menu_height = $('#secondary-header') .height ();
	
	console.log(menu_height);
	
	$('#secondary-header') .removeClass ('menu-active');
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
    
	
   $.data(this, 'scrollTimer', setTimeout(function() {    
		sticky_menu(main_position.top, scroll_position);		
 }, 50));

	}); 


