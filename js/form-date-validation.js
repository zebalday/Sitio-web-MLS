// Get the current date
var currentDate = new Date();

// Format the date to be in 'YYYY-MM-DD' (required by the input type=date)
var formattedDate = currentDate.toISOString().split('T')[0];

// Set the min attribute of the date input
var element = document.getElementById('contact_date');
element.min = formattedDate;