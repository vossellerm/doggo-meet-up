// search button - generates new zipcode search results
const newSearch = async (event) => {
  event.preventDefault();

  const zipcode = document.querySelector("#zipcode").value.trim();

  if (!zipcode) {
    alert("Enter valid Zip Code");
    return;
  }
  console.log(zipcode);
  const response = await fetch(`/api/search/?zipcode=${zipcode}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    alert("No dogs available to play near you.");
    return;
  } else {
    // display dogs with matching zipcode
    document.location.replace(`/api/search/?zipcode=${zipcode}`);
  }
};

document.querySelector("#search").addEventListener("click", newSearch);

const logout = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".backpro").addEventListener("click", function () {
  document.location.replace("/profile");
});

document.querySelector(".logo").addEventListener("click", logout);
