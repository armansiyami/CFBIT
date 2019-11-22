<?php
/*
This first bit sets the email address that you want the form to be submitted to.
You will need to change this value to a valid email address that you can access.
*/
$webmaster_email = "arman.siyami@gmail.com";

/*
This bit sets the URLs of the supporting pages.
If you change the names of any of the pages, you will need to change the values here.
*/
$feedback_page = "index.html#contact-section";
$error_page = "404.html";
$thankyou_page = "thank_you.html";

/*
This next bit loads the form field data into variables.
If you add a form field, you will need to add it here.
*/
$email_address = $_REQUEST['email'] ;
$comments = $_REQUEST['numUsers'] ;
$first_name = $_REQUEST['name'] ;
$company = $_REQUEST['company'] ;
$phone = $_REQUEST['phone']
$msg =
"Name: " . $first_name . "\r\n" .
"Phone Number: " . $phone
"Company: " . $
"Email: " . $email_address . "\r\n" .
"Number of Users: " . $comments

/*
The following function checks for email injection.
Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// If the user tries to access this script directly, redirect them to the feedback form,


	mail( "$webmaster_email", "Feedback Form Results", $msg );

	header( "Location: $thankyou_page" );

?>
