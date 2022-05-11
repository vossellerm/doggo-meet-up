// add eventListener to Update Dog Button
// on click, update doggo_db at owner_id
// on click, display updated dog info

const newFormHandler = (event) => {
  event.preventDefault();

  const name = document.querySelector("#dog-name").value.trim();
  const breed = document.querySelector("#breed").value.trim();
  const size = document.querySelector("#size").value;
  const gender = document.querySelector("#gender").value;
  const zipcode = document.querySelector("#zipcode").value.trim();
  const park = document.querySelector("#park").value.trim();
  const image = document.querySelector("#image").value.trim();

  const day = document.querySelectorAll('input[class="day"]:checked');
  const time = document.querySelectorAll('input[class="times"]:checked');

  if (name && breed && size && gender && zipcode && park && image) {
    // fetch dog data
    // if new dog, run POST
    // if updating dog, run PUT
    // IF (user has a dog)
    // THEN GET dog and run PUT route to update dog info
    // ELSE THEN GET error and run POST route to create a dog
  }

  for (var checkbox of day) {
    console.log(checkbox.value + " ");
  }

  for (var checkbox of time) {
    console.log(checkbox.value + " ");
  }
};

document
  .querySelector(".update-dog-form")
  .addEventListener("submit", newFormHandler);

// Find-dogs button click takes user to search page
document.querySelector(".find-dogs").addEventListener("click", function () {
  document.location.replace("/search");
});
