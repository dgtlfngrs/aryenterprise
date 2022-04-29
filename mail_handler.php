<?php 
if(isset($_POST['submit'])){
    $to = "rishi@aryenterprise.com"; // this is your Email address
    $from = "ARY Enterprises Website "; // this is the sender's Email address
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone_No'];
    $subject = "ARY Enterprises Form Submission";
    $subject2 = "Copy of your form submission";
    $message = "Name : " . $name . "\n" . "Mobile : " . $phone . "\n"  . $name . " Wrote the Following Message:" . "\n" . $_POST['Query'];
    $message2 = "Here is a copy of your message " . $name . "\n" . $_POST['Query'];
    $headers .= "Reply-To: $name <$email>\r\n";
    $headers .= "From: $from <$email>\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "X-Priority: 3\r\n";

$headers.= "BCC: $emailList";
$headers.= "CC: $emailList";
   
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    header('Location: http://aryenterprise.com/thank-you.html');
    
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>