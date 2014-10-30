// Passing Data to jQuery’s Ajax Utilities (GET request)
// get the infomation in PHP: echo $_GET['username'];
$("#submit_button").click(function(event) {
        var fm = $(this.form).serialize();
        alert(fm);// eg.  "username=abc&password=123"
    $(this.form).load(       		// Replace the form by loading...
        this.form.action,            	// the form url
        fm);  	// with the form data appended to it
    event.preventDefault();   		// Don't do the default form submission
    this.disabled = "disabled";     	// Prevent multiple submissions
});