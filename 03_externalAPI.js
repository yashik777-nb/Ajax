document.getElementById("button-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number =
      document.querySelector('input[type="number"]').value > 0
        ? document.querySelector('input[type="number"]').value
        : 1,
    url = `http://api.icndb.com/jokes/random/${number}`;
  let htmlCon = "";

  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const output = JSON.parse(this.responseText);
      if (output.type === "success") {
        const jokes = output.value;
        jokes.forEach(function (joke) {
          htmlCon += `<li>${joke.joke}</li>`;
        });
        document.querySelector(".jokes").innerHTML = htmlCon;
      } else {
        document.querySelector(".jokes").innerHTML =
          "<h6>Something Went Wrong</h6>";
      }
    }
    console.log(this.responseText);
  };

  xhr.send();

  e.preventDefault();
  document.querySelector('input[type="number"]').value = "";
}
