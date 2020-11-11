const littlePicture = document.querySelector(".small-picture");
const userForm = document.querySelector(".update-url");
const url = document.querySelector(".update-url input");
const updateUrlButton = document.querySelector(".update-url button");
const toggleFormButton = document.querySelector("footer button");

url.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    updateUrl(url.value);
  }
});

toggleFormButton.addEventListener("click", function(event) {
  resetForm();
});

updateUrlButton.addEventListener("click", function(event) {
  updateUrl(url.value);
});

const updateUrl = function(newUrl) {
  littlePicture.src = newUrl;
  resetForm();
};

const resetForm = function() {
  if (userForm.classList.contains("hidden")) {
    userForm.classList.remove("hidden");
    toggleFormButton.innerHTML = "cancel";
    return;
  }
  userForm.classList.add("hidden");
  toggleFormButton.innerHTML = "change it up again";
};
