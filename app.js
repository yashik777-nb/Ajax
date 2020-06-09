document.getElementById("button").addEventListener("click", loaddata);

function loaddata() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open("GET", "data.txt", true);

  //   console.log("READYSTATE", xhr.readyState);

  // Used for Spinners/Loaders
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState);
  };

  xhr.onload = function () {
    console.log("READYSTATE", xhr.readyState);
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h3>${this.responseText}</h3>`;
    }
  };

  //   xhr.onreadystatechange = function () {
  //     console.log("READYSTATE", xhr.readyState);
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //  };

  xhr.onerror = function () {
    console.log("Request Error");
  };

  xhr.send();

  /* Ready State Values
     0: Request not intialized
     1: Server connection established
     2: Request recieved
     3: Processing Request
     4: Request finished and response is ready  
  */
}
