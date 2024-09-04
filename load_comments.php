<?php
$file = 'comment.txt';

if (file_exists($file)) {
    echo file_get_contents($file);
} else {
    echo "<p>No comments yet. Be the first to comment!</p>";
}
?>