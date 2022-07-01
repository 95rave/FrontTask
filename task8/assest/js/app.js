var date = new Date().getHours();
if (date > 6 && date < 12) {
  alert("Sabanız xeyir");
} else if (date > 12 && date < 18) {
  alert("Günortanız xeyir");
  document.body.style.backgroundColor = "orange";
} else if (date > 18 && date < 6) {
  alert("Axsamınız  xeyir");
  document.body.style.backgroundColor = "black";
}
console.log(date);

var radius = 10;
console.log("Area of Circle: " + Math.floor(Math.PI) * Math.pow(radius, 2));
var length = 15;
console.log("Area of the Square: " + Math.pow(length, 2));
