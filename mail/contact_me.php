<?php
// Check for empty fields
if(empty($_POST['nombre'])  		||
   empty($_POST['correo']) 		||
   empty($_POST['telefono']) 		||
   empty($_POST['mensaje'])	||
   !filter_var($_POST['coreo'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['nombre'];
$email_address = $_POST['correo'];
$phone = $_POST['telefono'];
$message = $_POST['mensaje'];
	
// Create the email and send the message
$to = 'venti_lador@hotmail.es'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>