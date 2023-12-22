function validateForm() {
  // Email validation
  var usernameInput = document.getElementById("username");
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(usernameInput.value)) {
    alert("Please enter a valid email address");
    return;
  }

  // Password validation
  var passwordInput = document.getElementById("password");
  var passwordRegex = /^(?=.*?[A-Z])(?=.*?\d)(?=.*?@)[a-zA-Z0-9@]+$/;
  if (!passwordRegex.test(passwordInput.value)) {
    alert(
      "Password must contain an uppercase letter, a number, and should not contain special characters other than @"
    );
    return;
  }

  // If both validations pass, you can proceed with further actions (e.g., form submission)
  alert("Login successful!");
}

function forgotAction() {
  var usernameInput = document.getElementById("username");
  var email = usernameInput.value;
  if (email.length == 0) {
    alert("Please enter a valid email address");
  } else {
    window.open(
      `mailto:support@smartserv.io?subject=Password Reset&body=Request For Change Of Password From ${email}`
    );
  }
}
