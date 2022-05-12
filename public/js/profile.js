// add eventListener to Update Dog Button
// on click, update doggo_db at owner_id
// on click, display updated dog info

const newFormHandler = async (event) => {
  event.preventDefault();
  try {
    const name = document.querySelector("#dog-name").value.trim();
    const breed = document.querySelector("#breed").value.trim();
    const size = document.querySelector("#size").value;
    const gender = document.querySelector("#gender").value;
    const zipcode = document.querySelector("#zipcode").value.trim();
    const park = document.querySelector("#park").value.trim();
    const image = document.querySelector("#image").value.trim();

    const day = document.querySelectorAll('input[class="day"]:checked');
    const time = document.querySelectorAll('input[class="times"]:checked');

    for (var checkbox of day) {
      console.log(checkbox.value + " ");
    }

    for (var checkbox of time) {
      console.log(checkbox.value + " ");
    }

    // if (name && breed && size && gender && zipcode && park && image) {

    // }

    const formType = document.querySelector("#updateForm");
    const action = formType.dataset.action;
    // if the data-action = create
    if (action === "create") {
      // then fetch create POST route
      alert("Created");
    } else {
      alert("Updated");
      const response = await fetch("/api/", {
        method: "PUT",
        body: JSON.stringify({
          name,
          breed,
          size,
          gender,
          zipcode,
          park,
          image,
          day,
          time,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      console.log(response);
    }
    // else the data-action = update
    // then fetch update PUT route
  } catch (error) {
    console.log(error);
  }
};

document.querySelector(".updateDog").addEventListener("click", newFormHandler);

// Find-dogs button click takes user to search page
document.querySelector(".find-dogs").addEventListener("click", function () {
  document.location.replace("/search");
});
