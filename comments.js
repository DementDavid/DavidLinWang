
        function loadComments() {
            fetch('load_comments.php')
            .then(response => response.text())
            .then(data => {
                document.getElementById('commentSection').innerHTML = data;
            });
        }

        // Load comments when the page loads
        window.onload = loadComments;