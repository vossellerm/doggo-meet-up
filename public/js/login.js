// Validate user input and send login request
const handleLoginSubmit = async (event) => {
  event.preventDefault();
  try {
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (!email || !password) {
      alert("You must provide a email and password.");
      return;
    }

    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to log in.");
      return;
    } else {
      document.location.replace("/profile");
    }
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", handleLoginSubmit);
