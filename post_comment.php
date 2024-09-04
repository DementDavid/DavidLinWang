<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $comment = htmlspecialchars($_POST['comment']);
	
    $commentData = "<p><strong>" . $username . "</strong>: " . $comment . "</p>\n";

    $file = 'comment.txt';
    file_put_contents($file, $commentData, FILE_APPEND);

    header('Location: index.html');
    exit();
}
?>