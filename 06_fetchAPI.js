// Event Listener
document.getElementById("buttonFA1").addEventListener("click", getText);
document.getElementById("buttonFA2").addEventListener("click", getJSON);
document.getElementById("buttonFA3").addEventListener("click", getApiData);

// Get Text
function getText(e) {
  fetch("data.txt")
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(
        data.replace("</title>", "</title></meta>"),
        "application/xml"
      );
      if (!doc.querySelector("parsererror")) {
        console.log(doc.querySelector("pre").innerHTML);
        document.querySelector(".fetchApiData").innerHTML = doc.querySelector(
          "pre"
        ).innerHTML;
      } else {
        console.log(`Data: ${data}`);
        document.querySelector(".fetchApiData").innerHTML = data;
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
  e.preventDefault();
}

// Get JSON
function getJSON(e) {
  fetch("customers.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach(function (customer) {
        output += `<li>${customer.name}, ${customer.company}</li>`;
      });
      document.querySelector(".fetchApiData").innerHTML = output;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
  e.preventDefault();
}

// Get API Data
function getApiData(e) {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.querySelector(".fetchApiData").innerHTML = output;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
  e.preventDefault();
}
