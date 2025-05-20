document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let isValid = true;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');

  // Name Validation - Only alphabets and spaces
  const namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(nameInput.value.trim())) {
    nameError.textContent = "Name should contain only alphabets and spaces.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Phone Validation - Exactly 10 digits
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  if (isValid) {
    alert("Signup Successful!");
    document.getElementById('signupForm').reset();
  }
});