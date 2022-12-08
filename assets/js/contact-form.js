/**
 * Add an eventListener to listen for the submit.
 * Sends an email to site owner through emailJS if the submit is fired.
 * Script taken from the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
 * and Email Templates Playground environment.
 */
const sendFormButton = document.getElementById("btn-send-form");

window.onload = function() {
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.init("4f0kXtGaMLsB341Z2");
    sendFormButton.value = "Sending..."; //changing value of the button when sending in progress

    emailjs.sendForm("service_bb9gt6r", "wotm-contact-form", this)
        .then(() => {
            sendFormButton.value = "Send";

            document.getElementById("feedback-heading").classList.add('submitted');
            document.getElementById("feedback-heading").innerHTML = "Thank you for sending us a message! You can contact us again anytime it's needed!";

            
            
        }, (err) => {
            console.log(JSON.stringify(err));
        });
});
}
