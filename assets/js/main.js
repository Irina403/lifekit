$(document).ready(function(){
	$('.collapse-button').on('click', function() {
		console.log($(this).text());
		// $('.collapse-inform').toggleClass('active');
		$('.collapse-inform').slideToggle(500);
	  });
	  
});

