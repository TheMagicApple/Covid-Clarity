var places = JSON.parse(localStorage.getItem("places"));
var prCovid = 0;


var total = 0;
for (var i=0; i<places.length; i++) {
  total += (1-(Math.pow((1-(places[i].probability/100)),places[i].selected)))*100;

}
prCovid = total.toFixed(2);
if (prCovid >= 100) {
  prCovid = 99.99;
}

document.getElementById("Result1").innerHTML="<b>"+prCovid+"%</b>";

//Set message depending on likelihood of infection
if (prCovid<25) {
  document.getElementById("Result1").style.color="rgb(53, 219, 72)";
  document.getElementById("Rec1").innerHTML="";
}
else if (prCovid<50) {
  document.getElementById("Result1").style.color="rgb(240, 189, 7)";
  document.getElementById("Rec1").innerHTML="<b>You should try to get tested for COVID-19 soon.</b>";
}
else {
  document.getElementById("Result1").style.color="red";
  document.getElementById("Rec1").innerHTML="<b>You should get tested for COVID-19 as soon as possible.</b>";
}
