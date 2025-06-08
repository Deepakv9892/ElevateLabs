
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  let valid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Thank you! Your message has been submitted.";
    name.value = "";
    email.value = "";
    message.value = "";
  }
});
