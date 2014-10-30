// Passing Data to jQuery’s Ajax Utilities (POST request)
$("#submit_button").click(function(event) {
	var fm = $(this.form).serialize();
	alert(fm);// eg.  "name=abc&pwd=123"
    $(this.form).load(       		// Replace the form by loading...
        this.form.action,            	// the form url
        fm);  	// with the form data appended to it
    event.preventDefault();   		// Don't do the default form submission
    this.disabled = "disabled";     	// Prevent multiple submissions
});