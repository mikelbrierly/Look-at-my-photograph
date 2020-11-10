const littlePicture = document.querySelector('.small-picture');
const url = document.querySelector('#urlInput');
const button = document.querySelector('.update-button');

url.addEventListener('keyup', function(event) {
  if(event.keyCode === 13) {
    updateUrl(url.value);
  }
})

button.addEventListener('click', function(event) {
  updateUrl(url.value);
})

const updateUrl = function(newUrl) {
  console.log(newUrl);
  littlePicture.src = newUrl;
}