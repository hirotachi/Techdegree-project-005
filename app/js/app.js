const $searchBox = $(".search-box");
const $img = $(".img");


$img.fancybox();


$searchBox.on('keyup', function() {
	var searchVal = $(this).val();
	var filterItems = $img;

	if ( searchVal != '' ) {
		filterItems.addClass('hidden');
		$(`[data-filter-item][data-caption*="${searchVal.toLowerCase()}"]`).removeClass('hidden');
	} else {
		filterItems.removeClass('hidden');
	}
});

$img.each(function(){
	$(this).attr("alt", $(this).attr("title"));
});

