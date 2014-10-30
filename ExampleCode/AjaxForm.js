// Passing Data to jQuery’s Ajax Utilities (POST request)
$("#submit_button").click(function(event) {
    $(this.form).load(       			// Replace the form by loading...
        this.form.action,           	// the form url
        $(this.form).serialize());  	// with the form data appended to it
    event.preventDefault();   			// Don't do the default form submission
    this.disabled = "disabled";     	// Prevent multiple submissions
});