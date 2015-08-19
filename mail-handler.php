<?php

if(isset($_POST['submit'])){
    $to = "jason@annexstudio.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $guest1 = $_POST['guest-1'];
    $guest2 = $_POST['guest-2'];
    $guest3 = $_POST['guest-3'];
    $guest4 = $_POST['guest-4'];
    $subject = "Wedding RSVP";
    $subject2 = "RSVP Confirmation to Tracy & Matt’s Wedding";
    $message = $name . " (phone " . $phone . ") (email " . $from . ") is RSVPing:" . "\n\nGuests they're bringing:\n" . $guest1 . "\n" . $guest2 . "\n" . $guest3 . "\n" . $guest4 . "\n\n";
    $message2 = $name . ", we’re excited to see you at our wedding. \n\nGuests:\n" . $guest1 . "\n" . $guest2 . "\n" . $guest3 . "\n" . $guest4 . "\n\n See you October 3!\n\nLove, Tracy & Matt.";
    
    $headers = "From:" . $from;
    $headers2 = "From: Tracy and Matt";
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "RSVP Sent. Thank you " . $name . ".";
    }
    
    
?>