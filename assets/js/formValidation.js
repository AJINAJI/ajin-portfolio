function validateName() {
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  
  if (nameInput.value.trim() === '') {
      nameError.classList.remove('d-none');
  } else {
      nameError.classList.add('d-none');
  }
}
function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  
  // Basic email validation regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim())) {
      emailError.classList.remove('d-none');
  } else {
      emailError.classList.add('d-none');
  }
}
function validatePhone() {
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  
  if (phoneInput.value.trim() === '') {
      phoneError.classList.remove('d-none');
  } else {
      phoneError.classList.add('d-none');
  }
}
function validateMessage() {
  const messageInput = document.getElementById('message');
  const messageError = document.getElementById('messageError');
  
  if (messageInput.value.trim() === '') {
      messageError.classList.remove('d-none');
  } else {
      messageError.classList.add('d-none');
  }
}
 
function handleFormSubmit() {
    
  // Validate and handle form submission logic
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
console.log(name)
  // Simple validation and display error messages
  let isValid = true;

  if (!name) {
    document.getElementById('nameError').classList.remove('d-none');
    isValid = false;
  } else {
    document.getElementById('nameError').classList.add('d-none');
  }

  if (!email) {
    document.getElementById('emailError').classList.remove('d-none');
    isValid = false;
  } else {
    document.getElementById('emailError').classList.add('d-none');
  }

  if (!phone) {
    document.getElementById('phoneError').classList.remove('d-none');
    isValid = false;
  } else {
    document.getElementById('phoneError').classList.add('d-none');
  }
  // If all fields are valid, proceed to submit form
  if (isValid) {
    emailSent(name,email,phone,message);  // Trigger email sending or any other action
    resetForm();  // Clear the form after submission
  }
}

// Function to clear the form fields
function resetForm() {
  document.getElementById('contactForm').reset();
}