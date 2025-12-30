(function () {
    emailjs.init("z82-zkO63f2il1yJc");
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
        from_name: userName,
        message: messageBody
    };

    emailjs.send("service_64kyofd","template_houzctf", templateParams).then(function (response) {
        if (response.text == 'OK') {
            swal("SUBMITTED SUCCESSFULLY!", "We will contact you", "success");
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

// Initialize EmailJS ONCE
// (function () {
//   emailjs.init("yfcBkPZRtl3MCrM0O");
// })();

// function emailSent(userName, userEmail, userPhone, userMessage) {
// console.log(userName,userEmail,userPhone,userMessage)
//   const templateParams = {
//     subject: "For Job Vacancy Info",
//     from_name: userName,
//     from_email: userEmail,
//     phone: userPhone,
//     message: userMessage
//   };

//   emailjs.send("service_64kyofd", "template_nzsnkxk", templateParams)
//     .then(function (response) {
//       swal("Submitted Successfully!", "We will contact you shortly.", "success");
//       resetForm();
//     })
//     .catch(function (error) {
//       console.error("EmailJS Error:", error);
//       swal("Error", "Mail sending failed. Try again.", "error");
//     });
// }

// // Reset form
// function resetForm() {
//   document.getElementById("contactForm").reset();
// }
