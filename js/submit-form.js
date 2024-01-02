function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}


function replaceFormContent() {

    // Perform the form container content changing.
    var greetingsContent = '<div class="tm-form-greetings">' +
        '<h2>Muchas gracias!</h2>' +
        '<p>Te contactaremos a la brevedad.</p>' +
        '</div>';

    // Change content
    $(".tm-contact-form-container").html(greetingsContent);
}

function submitInformation(event) {

    // Prevent the default form submission
    event.preventDefault();

    // Capture all the fields on plain text and assign it to variables
    var contactName = document.getElementById("contact_name").value;
    var contactDate = document.getElementById("contact_date").value;
    var contactCellphone = document.getElementById("contact_cellphone").value;

    // Obtain the current timestamp on "dd-mm-yyyy H:m:s" format and assign it to a variable
    var currentTimestamp = new Date().toLocaleString("es-CL");

    // Create URL
    const phone='+56978894986';
    const phone2='+56933447783';
    const apikey='1495846';
    const apikey2='2098195';
    var preparedMessage = "*NUEVO FORMULARIO DE CONTACTO ("+currentTimestamp+")*\n\n Nombres: "+contactName+"\n Fecha del evento: "+contactDate+"\n Contacto: "+contactCellphone+"\n";
    var send_message_url="https://api.callmebot.com/whatsapp.php?source=php&phone="+phone+"&text="+encodeURIComponent(preparedMessage)+"&apikey="+apikey;
    var send_message_url2="https://api.callmebot.com/whatsapp.php?source=php&phone="+phone2+"&text="+encodeURIComponent(preparedMessage)+"&apikey="+apikey2;
    
    // Send messages
    httpRequest(send_message_url);
    httpRequest(send_message_url2);

    // Form Greetings
    replaceFormContent();

    return false;

}



