document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan elemen dengan ID greetingText
    var greetingText = document.getElementById('greetingText');
    
    // Mendapatkan elemen dengan ID dateTime
    var dateTime = document.getElementById('dateTime');
    
    // Mendapatkan tanggal dan waktu terkini
    var currentDate = new Date();
    
    // Menampilkan kalimat salam berdasarkan waktu terkini
    var currentHour = currentDate.getHours();
    var greeting = '';
    
    if (currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting =