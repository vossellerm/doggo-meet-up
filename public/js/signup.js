// Validate user input and send login request
const handleSignupSubmit = async (event) => {
  event.preventDefault();
  try {
    const first_name = document.querySelector("#firstname").value.trim();
    const last_name = document.querySelector("#lastname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    const confirmPassword = document
      .querySelector("#confirm-password")
      .value.trim();

    if (!first_name || !last_name || !email || !password) {
      alert("You must provide a fistname, lastname, email and password.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords to not match.");
      return;
    }

    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to sign up.");
      return;
    } else {
      document.location.replace("/profile");
    }
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", handleSignupSubmit);
