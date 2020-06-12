// Event Listener
document.getElementById("buttonFA1").addEventListener("click", getText);
document.getElementById("buttonFA2").addEventListener("click", getJSON);
document.getElementById("buttonFA3").addEventListener("click", getApiData);

// Get Text
function getText(e) {
  fetch("data1.txt")
    .then(function (response) {
      console.log(response);
      return response.text();
    })
    .then(function (data) {
      console.log(data);
    });
  // .catch(function (err) {
  //   console.log(`Error: ${err}`);
  // });
  // e.preventDefault();
}

// Get JSON
function getJSON(e) {
  console.log(e.target);
  e.preventDefault();
}

// Get API Data
function getApiData(e) {
  console.log(e.target);
  e.preventDefault();
}
