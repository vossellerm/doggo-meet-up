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
    
    // fetch dog data
    const response = await fetch("/api/profile", {
      method: "GET",
      // body: JSON.stringify({ name, breed, size, gender, zipcode, park, image }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    // if new dog, run POST
    if (!response.ok) {
      // fetch the POST route
      return;
    } else {
      console.log(JSON.stringify(response));
      
      // if updating dog, run PUT
      //fetch the PUT route
      // const id = 
      const update = await fetch(`/api/profile/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name, breed, size, gender, zipcode, park, image }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
  
      if (!update.ok) {
        alert("Failed to update.");
        return;
      } else {
        alert("Profile has been updated.");
      }
    }

  } catch (error) {
    console.log(error);
  }

};

document
  .querySelector(".updateDog")
  .addEventListener("click", newFormHandler);

// Find-dogs button click takes user to search page
document.querySelector(".find-dogs").addEventListener("click", function () {
  document.location.replace("/search");
});
