// setInterval(function () { alert("Hello"); }, 1000);
setInterval(() => {
  document.querySelector('#randomInt').textContent = httpGet('http://127.0.0.1:5000/test-js')
}, 2000);

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}