$(document).ready(function(){
	var $starwriting = $("#starwriting");
	$starwriting.bind('input propertychange', function () {
		
		var text=$starwriting.val();
		console.log(text);
	
	});

});