

(function() {
	function enabler(checkId, inputId) {
		var c = document.getElementById(checkId),
		    i = document.getElementById(inputId);
		
		if (!c || !i) return;
		
		i.disabled = !c.checked;
		
		c.addEventListener('click', function(e) {
			i.disabled = !c.checked;
		}, false);
	}
	
	document.addEventListener('submit', onSubmit, false);
	enabler('happy-hasurl', 'happy-url');
	enabler('sad-hasurl', 'sad-url');

	
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
