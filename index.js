function tipcalculate(){
    var billamount=document.getElementById("amnt").value;
    var service=document.getElementById("ser").value;
    var people=document.getElementById("peop").value;

    if (billamount === "" || service == 0) {
        alert("Please enter values");
        return;
      }

      if (people === "" || people <= 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
}
else{
  document.getElementById("each").style.display = "block";
}
//Calculate tip
var total = (billamount * service) / people;
//round to two decimal places
total = Math.round(total * 100) / 100;
//next line allows us to always have two digits after decimal point
total = total.toFixed(2);
//Display the tip
document.getElementById("total").style.display = "block";
document.getElementById("totaltip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("total").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("butn").onclick = function() {
tipcalculate();

};