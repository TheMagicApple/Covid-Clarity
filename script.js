class Location {
  constructor(averageContact) {
    this.selected = 0; //Number of times user has been to place
    var prob;
    var chanceOfInfector = 0.0291; //Percentage of unaware infected population

    //Amount of infected people user has come in contact with
    this.positivePeople = averageContact*chanceOfInfector;
    
    //Probability of becoming infected
    this.probability = (1-(Math.pow(0.96,this.positivePeople)))*100;
  }
}

for (var i=0;i<9;i++) {
  document.getElementById("boxInput"+(i+1)).value=0;
}

//Average people in area at 1 time, average square meters of the area
var school = new Location(30); 
var store = new Location(15);
var shoppingCenter = new Location(200);
var movieTheater = new Location(25);
var office = new Location(40);
var residence = new Location(5);
var restaurant=new Location(25);
var publicTransport=new Location(30);
var largeGathering=new Location(400);


var places=[store, shoppingCenter, movieTheater, residence,school, office,restaurant,publicTransport,largeGathering];



function select(box) {
   if (document.getElementById("selectionBox"+box).innerHTML==null || document.getElementById("selectionBox"+box).innerHTML=="") {
     document.getElementById("selectionBox"+box).innerHTML="✓";
     places[box-1].selected =1;
     document.getElementById("boxInput"+box).value=1;
     document.getElementById("boxInput"+box).classList.remove("invis");
   }

   else {
     document.getElementById("selectionBox"+box).innerHTML="";
     places[box-1].selected =0;  
     document.getElementById("boxInput"+box).value=0;
     document.getElementById("boxInput"+box).classList.add("invis");

    }
   
}
function increase(box) {
  places[box].selected += 1;

  document.getElementById("boxInput"+(box+1)).innerHTML=places[box].selected;
}

for (var i=0;i<9;i++) {
  places[i].selected=document.getElementById("boxInput"+(i+1)).value;
}

function submit() {
  for (var i=0;i<9;i++) {
    //Make sure data type is a number
    
    if ((parseInt(document.getElementById("boxInput"+(i+1)).value)).toString() == "NaN") {
      alert("Please enter a number");
      break;
    }
    else {
      places[i].selected=document.getElementById("boxInput"+(i+1)).value;
      localStorage.setItem("places",JSON.stringify(places));
      window.location.href = "results.html";

    }

  }
}
