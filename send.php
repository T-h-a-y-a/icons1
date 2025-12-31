<?php
// /public_html/mail/send.php
header('Content-Type: application/json');

// CORS (uncomment if your React app is on a different domain)
// header('Access-Control-Allow-Origin: https://your-domain.com');
// header('Access-Control-Allow-Methods: POST');
// header('Access-Control-Allow-Headers: Content-Type');

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Honeypot (hidden input named "website")
if (!empty($_POST['website'])) {
  echo json_encode(['ok' => true, 'message' => 'Thanks!']);
  exit;
}

// Read fields (keep names in sync with your React form)
$firstName = trim($_POST['firstName'] ?? '');
$lastName  = trim($_POST['lastName']  ?? '');
$phone     = trim($_POST['phone']     ?? '');
$location  = trim($_POST['location']  ?? '');
$company   = trim($_POST['company']   ?? '');
$email     = trim($_POST['email']     ?? '');
$interest  = trim($_POST['interest']  ?? '');
$message   = trim($_POST['message']   ?? '');

if ($firstName === '' || $lastName === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Invalid input']);
  exit;
}

// Load PHPMailer (no Composer)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
  // ======= SMTP SETTINGS =======
  // Microsoft 365 (GoDaddy M365)
  $mail->isSMTP();
  $mail->Host       = 'smtp.office365.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'info@i-constech.com';         // <-- your mailbox
  $mail->Password   = 'YOUR_SMTP_OR_APP_PASSWORD';   // <-- app password if MFA
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port       = 587;

  // ======= FROM / TO =======
  $mail->setFrom('info@i-constech.com', 'Website Contact');
  $mail->addAddress('info@i-constech.com');          // receive here
  $mail->addReplyTo($email, $firstName . ' ' . $lastName);

  // ======= CONTENT =======
  $subject = 'New Contact: ' . $firstName . ' ' . $lastName . ' • ' . ($interest ?: 'General');
  $body = "
    <strong>Name:</strong> {$firstName} {$lastName}<br>
    <strong>Email:</strong> {$email}<br>
    <strong>Phone:</strong> {$phone}<br>
    <strong>Location:</strong> {$location}<br>
    <strong>Company:</strong> {$company}<br>
    <strong>Solutions of Interest:</strong> {$interest}<br><br>
    <strong>Message:</strong><br>" . nl2br(htmlspecialchars($message));

  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body    = $body;
  $mail->AltBody = strip_tags(str_replace('<br>', "\n", $body));

  $mail->send();
  echo json_encode(['ok' => true, 'message' => 'Sent']);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => $mail->ErrorInfo ?: $e->getMessage()]);
}
