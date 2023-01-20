let container = $(".container");
let timeString = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let currentHour = moment().format('h:mm:ss a');
let currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");

// function to set the current date & Time - and append to 
let interval = setInterval(function() {
    let momentNow = moment();
    $('#currentDay').append(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100);