$(document).ready(function(){
	$('.nav-holder .nav-btn').click(function(){
		$('.nav-holder .nav').slideToggle('fast');
	});
	
	$(window).resize(paginationChange);
	
	function paginationChange(){
		var collection = $('.pagination li');
		var collectionLength = collection.length;
		
		if ($(window).width() <= 460) {
			collection.hide();
			collection.each(function(i){
				if (i < 4 || collectionLength - i < 5) {
					collection.eq(i).show();
				}
			});
			$('.pagination li:contains(...)').show();
		} else {
			collection.show();
		}
	}
})