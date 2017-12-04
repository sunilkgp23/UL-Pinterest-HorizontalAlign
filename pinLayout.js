var columnWidth = 0;
var marginGiven = 20;
var heightMarker = [20, 20, 20];


// This function to Arrange the Existing Elements in 3 Rows as chosen 3 Array to Store Position
function pinterestLayout() {
	$('.box').each(function () {
		var minColHeight = Math.min.apply(Math, heightMarker); // Finding Available Height
		var ColumnInsert = findMinIndex(minColHeight);
		var insertLeft = marginGiven + (ColumnInsert * (columnWidth + marginGiven));
		$(this).css({
			'left': insertLeft + 'px',
			'top': minColHeight + 'px'
		});
		heightMarker[ColumnInsert] = minColHeight + $(this).outerHeight() + marginGiven; // updating New Available Height 
	});
}

// This function to Return the index of passed element
function findMinIndex(minColHeight){
	if(heightMarker[0]==minColHeight)
		return 0;
	else if (heightMarker[1]==minColHeight)
		return 1;
	else 
		return 2;
}

// This is to Call the Arrangement of the Loaded Content
$(window).load(function () {
	columnWidth = $('.box').outerWidth();
	pinterestLayout();
});

// This is to Load More Content When Scroll is hitting Bottom
function loadMoreContent() {
	count++;
	
	$('#rootBody').append(
		$('<div/>').attr("id", "newDiv" + count)
		.addClass("box")
		.append("<p/>")
		.text(count + ">. Just New Box Which will keep on adding on Scroll")
	);

	var minColHeight = Math.min.apply(Math, heightMarker);
	var ColumnInsert = findMinIndex(minColHeight);
	var insertLeft = marginGiven + (ColumnInsert * (columnWidth + marginGiven));
	$("#newDiv" + count).css({
		'left': insertLeft + 'px',
		'top': minColHeight + 'px'
	});
	heightMarker[ColumnInsert] = minColHeight + $("#newDiv" + count).outerHeight() + marginGiven;


};
var count = 17;

// This is to Trigger an Event on Scrolling
$(window).scroll(function () {
	if ($(window).scrollTop() + $(window).height() > $(document).height() - 40) {
		loadMoreContent();
	}
});