// logout button -logs user out/destroys session
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);

// search button - generates new zipcode search results
const newSearch = (event) => {
  event.preventDefault();

  const zipcode = document.querySelector("#zipcode").value.trim();

  if (zipcode) {
    // display all dog profiles with matching zipcode
    console.log(zipcode);
  }
};

document.querySelector("#search").addEventListener("click", newSearch);

// Contact Me Button - email window popup of user
const contact = (event) => {
  event.preventDefault();

  alert("hello");
};

[...document.querySelectorAll(".contact")].forEach(function (item) {
  item.addEventListener("click", contact);
});
