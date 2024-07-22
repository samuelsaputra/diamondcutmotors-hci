function validateData() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phonenum = document.getElementById("phonenum").value.trim();
  const password = document.getElementById("password").value.trim();
  const confpassword = document.getElementById("confpassword").value.trim();
  const agreement = document.getElementById("agreement").checked;

  let isValid = true;

  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => {
    error.style.display = "none";
    error.innerHTML = "";
  });
  document.getElementById("success-message").style.display = "none";
  document.getElementById("success-message").innerHTML = "";

  if (username === "") {
    isValid = false;
    document.getElementById("username-error").innerHTML =
      "Username is required.";
    document.getElementById("username-error").style.display = "block";
  } else if (username.length < 3 || username.length > 15) {
    isValid = false;
    document.getElementById("username-error").innerHTML =
      "Username must be between 3 and 15 characters long.";
    document.getElementById("username-error").style.display = "block";
  }

  if (email === "") {
    isValid = false;
    document.getElementById("email-error").innerHTML = "Email is required.";
    document.getElementById("email-error").style.display = "block";
  } else if (!email.includes("@") || !email.includes(".")) {
    isValid = false;
    document.getElementById("email-error").innerHTML =
      'Email must contain "@" and a domain name (e.g., ".com").';
    document.getElementById("email-error").style.display = "block";
  }

  if (phonenum === "") {
    isValid = false;
    document.getElementById("phonenum-error").innerHTML =
      "Phone number is required.";
    document.getElementById("phonenum-error").style.display = "block";
  } else if (isNaN(phonenum) || phonenum.length < 10) {
    isValid = false;
    document.getElementById("phonenum-error").innerHTML =
      "Phone number must be a valid number and at least 10 digits long.";
    document.getElementById("phonenum-error").style.display = "block";
  }

  if (password === "") {
    isValid = false;
    document.getElementById("password-error").innerHTML =
      "Password is required.";
    document.getElementById("password-error").style.display = "block";
  } else if (password.length < 6) {
    isValid = false;
    document.getElementById("password-error").innerHTML =
      "Password must be at least 6 characters long.";
    document.getElementById("password-error").style.display = "block";
  }

  if (confpassword === "") {
    isValid = false;
    document.getElementById("confpassword-error").innerHTML =
      "Confirm Password is required.";
    document.getElementById("confpassword-error").style.display = "block";
  } else if (confpassword !== password) {
    isValid = false;
    document.getElementById("confpassword-error").innerHTML =
      "Passwords do not match.";
    document.getElementById("confpassword-error").style.display = "block";
  }

  if (!agreement) {
    isValid = false;
    document.getElementById("agreement-error").innerHTML =
      "You must agree to the terms and services.";
    document.getElementById("agreement-error").style.display = "block";
  }

  if (isValid) {
    document.getElementById("success-message").innerHTML = "Login success!";
    document.getElementById("success-message").style.display = "block";
  }
}
