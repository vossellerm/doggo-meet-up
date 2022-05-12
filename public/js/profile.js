// add eventListener to Update Dog Button
// on click, update doggo_db at owner_id
// on click, display updated dog info

const newFormHandler = async (event) => {
  event.preventDefault();
  try {
    const dog_name = document.querySelector("#dog-name").value.trim();
    const breed = document.querySelector("#breed").value.trim();
    const size = document.querySelector("#size").value;
    const gender = document.querySelector("#gender").value;
    const zipcode = document.querySelector("#zipcode").value.trim();
    const park = document.querySelector("#park").value.trim();
    const img = document.querySelector("#image").value.trim();

    const day = document.querySelector("#day").value;
    const time = document.querySelector("#time").value;

    // if (name && breed && size && gender && zipcode && park && image) {

    // }

    const formType = document.querySelector("#updateForm");
    const action = formType.dataset.action;
    // if the data-action = create
    function reload() {
      reload = location.reload();
    }

    if (action === "create") {
      // then fetch create POST route
      const response = await fetch("/api/profile/", {
        method: "POST",
        body: JSON.stringify({
          dog_name,
          breed,
          size,
          gender,
          zipcode,
          park,
          img,
          day,
          time,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      reload();
    } else {
      const response = await fetch("/api/profile/", {
        method: "PUT",
        body: JSON.stringify({
          dog_name,
          breed,
          size,
          gender,
          zipcode,
          park,
          img,
          day,
          time,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      reload();
      // console.log(response);
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
