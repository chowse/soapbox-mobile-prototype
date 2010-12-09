

(function() {
	document.addEventListener('submit', onSubmit, false);

	
	var submitOK = false;
	
	function onSubmit(e) {
		var f = e.target;
		
		if (submitOK) {
			alert('submitOK');
			submitOK = false;
			return;
		}
		
		var b = f.getElementsByTagName('button')[0];
		b.disabled = true;
		setTimeout(function() {
			b.disabled = false;
			submitOK = true;
			f.submit();
		}, 1000);
		
		e.preventDefault();
		return false;
	}
})();
