const now = new Date().getTime();

    let endDate = localStorage.getItem('endDate');

    if (!endDate) {
        endDate = now + (30 * 24 * 60 * 60 * 1000);
        localStorage.setItem('endDate', endDate);
    } else {
        endDate = parseInt(endDate);
    }

    function updateTimer() {
        const currentTime = new Date().getTime();
        const distance = endDate - currentTime;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = days + "d " + hours + "h " 
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerHTML = "EXPIRED";
            localStorage.removeItem('endDate');
        }
    }

    const countdownInterval = setInterval(updateTimer, 1000);