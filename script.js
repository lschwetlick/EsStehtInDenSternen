$(document).ready(function() {
	var $starwriting = $("#starwriting");	
	var hash = window.location.hash;

	/* If a hash is present, add the message to the textarea */
	if ( hash != "" ) {
		//first character of hash is '#'
		var decoded = deobfuscate(hash.substring(1));
		$starwriting.val(decoded);
	}

	/* Update hash when message is changed */
	// JQuery's .change() doesn't do the trick for <textarea>
	// http://stackoverflow.com/questions/11338592/how-can-i-bind-to-the-change-event-of-a-textarea-in-jquery
	$starwriting.bind('input change', function() {
		// self in this context is window and not $starwriting
		var coded = obfuscate($starwriting.val());
		window.location.hash = coded;
	});
});

/* Obfuscate messages, so they're not immediately readable */
function obfuscate(message) {
	return btoa(encodeURI(message));
}

function deobfuscate(message) {
	return decodeURI(atob(message));
}