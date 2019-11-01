jQuery(function(){

  jQuery('input[placeholder], textarea[placeholder]').placeholder();

});

jQuery(document).ready(function () {

  $('.video_list .video').hover(function(){
	var titles = $('div.title');
	var current_title = $(this).find('div.title');
	
	if (current_title.is(':hidden')) {
	  titles.slideUp('fast');
	  current_title.eq(0).slideDown('fast');
	  }
	else if (current_title.is(':visible')) {
	  current_title.eq(0).slideUp('fast');
	  }
  });

});