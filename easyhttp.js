function EasyHttp() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP Get Request
EasyHttp.prototype.get = function (url) {
  this.http.open("GET", url, true);
  const that = this.http;
  this.http.onload = function () {
    if (that.status === 200) {
      console.log(that.responseText);
    }
  };
  this.http.send();
};

// Make an HTTP POST Request
// Make an HTTP PUT Request
// Make an HTTP DELETE Request
