 var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
    	if (typeof(Storage) !== "undefined") {
    // Store
    
    localStorage.setItem("lastname", person);
    // Retrieve
 
    document.getElementById("person1").innerHTML = "Welcome " + localStorage.getItem("lastname") + "!";
   
} else {
    document.getElementById("person1").innerHTML = "Sorry, your browser does not support Web Storage...";
}
    	
       
    }







function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    ev.target.appendChild(document.getElementById(data));
}


var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;	
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

  
ctx.font="12px Arial";
ctx.fillText("3 3 3",150,187);

ctx.font="15px Arial";
ctx.fillText("HTML 1",412,122);

ctx.rect(400,100,500,75);
ctx.lineWidth="2";
ctx.strokeStyle="";
ctx.stroke();


ctx.beginPath();
ctx.rect(520,130,260,35);
ctx.lineWidth="3";
ctx.strokeStyle="";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "black";
ctx.font="12px Arial";
ctx.fillText("2 2",530,151);


ctx.rect(400,190,500,100);
ctx.lineWidth="2";
ctx.strokeStyle="";
ctx.stroke();

ctx.beginPath();

ctx.rect(415,204,280,35);
ctx.lineWidth="3";
ctx.strokeStyle="";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "black";
ctx.font="12px Arial";
ctx.fillText("4 4 4 4",425,225);


ctx.rect(696,204,85,35);
ctx.lineWidth="2";
ctx.strokeStyle="";
ctx.stroke();
ctx.font="12px Arial";
ctx.fillText("5 5 5 5 5",697,225);

ctx.rect(520,240,260,35);
ctx.lineWidth="2";
ctx.strokeStyle="";
ctx.stroke();
ctx.font="12px Arial";
ctx.fillText("6 6 6 6 6 6 ",530,260);

 ctx.beginPath();
        ctx.setLineDash([5,3]);
        ctx.rect(149,176,30,15);
    ctx.stroke();
ctx.beginPath();
ctx.setLineDash([]);
ctx.strokeStyle = "";
ctx.moveTo(530, 153);
ctx.lineTo(546, 153);
ctx.stroke();