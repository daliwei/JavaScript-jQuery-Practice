$(document).ready(function(){
	//total width of all slides
	var totalWidth = 0;
	// positions of each slider
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		positions[i] = totalWidth;
		totalWidth += $(this).width();
		
		// Check if there is a slider without width
		if(!$(this).width()) {
			alert('Please add width to img');
			return false;
		}
	});
	
	// Set the total width of all sliders
	$('#slides').width(totalWidth);
	
	// Menu item click handler
	$('#menu ul li a').click(function(e, keepScroll){
		// Remove active class and add inactive class for all sliders
		$('li.product').removeClass('active').addClass('inactive');
		// Add active class to current slider
		$(this).parent().addClass('active');
		
		var pos = $(this).parent().prevAll('.product').length;

		$('#slides').stop().animate({marginLeft:-positions[pos]+'px'},650);
		
		// Prevent default
		e.preventDefault();
		
		// If the click event is done by user, stop auto scroll
		if(!keepScroll) {
			clearInterval(itvl);
		}
	});
	
	// Make the first slider appear
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	
	// auto scroll
	var current = 1;
	function autoScroll(){
		if(current == -1) return false;
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',(true));
		current++;
	}
	
	// duration of auto scroll
	var duration = 5;
	var itvl = setInterval(function(){autoScroll()},duration*1000);
});