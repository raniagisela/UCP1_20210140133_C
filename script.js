function updateDateTime() {
    var now = new Date();
    var hour = now.getHours();
    var greeting = '';

    if (hour < 12) {
      greeting = 'Good morning';
    } else if (hour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }

    var datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toDateString() + ' ' + now.toLocaleTimeString();

    var greetingElement = document.getElementById('greeting');
    greetingElement.textContent = greeting;
  }

  setInterval(updateDateTime, 1000); // Perbarui setiap detik
</script>
</body>
</html>