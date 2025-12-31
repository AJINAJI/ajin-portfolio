if (typeof emailjs === "undefined") {
    console.error("❌ EmailJS SDK not loaded");
} else {
    console.log("✅ EmailJS SDK loaded");
}
(function () {
  emailjs.init("z82-zkO63f2iI1yJc");
})();

function emailSent(userName, userEmail, userPhone, userMessage) {
    console.log(userName, userEmail, userPhone, userMessage)
    var messageBody = `
  Name: ${userName} 
  Email: ${userEmail} 
  Phone: ${userPhone} 
  Message: ${userMessage}
`;
    var templateParams = {
        subject: userName,
        name:userName,
        message: messageBody
    };

    emailjs.send("service_x4w7vvh","template_4435reu", templateParams).then(function (response) {
        if (response.text == 'OK') {
            swal("SUBMITTED SUCCESSFULLY!", "Thank for contact me", "success");
            resetForm();
        } else {
            swal("TRY AGAIN", "There was an issue with submission", "error");
            resetForm();
        }
    })
        .catch(function (error) {
            swal("ERROR", "An unexpected error occurred", "error");
            console.error("EmailJS Error:", error);
        });

    // Function to clear the form fields
    function resetForm() {
        document.getElementById('contactForm').reset();
    }
}
