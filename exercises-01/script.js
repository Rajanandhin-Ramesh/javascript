/*Write the JavaScript required to:
Select the status paragraph using getElementById .
Select the button using querySelector .
Create a named handler function.
Change the paragraph to Booking confirmed after the button is clicked.
Register the handler without calling it immediately.*/ 
const statusParagraph = document.getElementById("booking-status");
const confirmButton = document.querySelector("#confirm-booking");
function handlerFunction(){
    statusParagraph.textContent = "Booking Confirmed";
}
confirmButton.addEventListener("click",handlerFunction);