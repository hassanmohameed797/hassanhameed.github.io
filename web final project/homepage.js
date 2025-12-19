  function updateTime() {
            const date = new Date();
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');

            const timeString = `${hours}:${minutes}:${seconds}`;
            document.getElementById("date").innerHTML = timeString;
        }

        updateTime();
        setInterval(updateTime, 1000); 
