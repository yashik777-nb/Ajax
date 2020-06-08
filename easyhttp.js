function EasyHttp() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP Get Request
EasyHttp.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  const that = this.http;
  this.http.onload = function () {
    if (that.status === 200) {
      // console.log(that.responseText);
      callback(null, that.responseText);
    } else {
      callback(`Error: ${that.status}`);
    }
  };
  this.http.send();
};

// Make an HTTP POST Request
EasyHttp.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  this.http.setRequestHeader("charset", "UTF-8");

  const that = this;
  this.http.onload = function () {
    callback(null, that.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
EasyHttp.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  this.http.setRequestHeader("charset", "UTF-8");

  const that = this;
  this.http.onload = function () {
    callback(null, that.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
EasyHttp.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  const that = this.http;
  this.http.onload = function () {
    if (that.status === 200) {
      // console.log(that.responseText);
      callback(null, `Post Deleted`);
    } else {
      callback(`Error: ${that.status}`);
    }
  };
  this.http.send();
};
