

var colorgrab = document.getElementsByClassName("colorselect");

var colorSelected = "red";
 

for (var i=0; i < colorgrab.length; i++){
    colorgrab[i].addEventListener("click", function(event){
       colorSelected = event.target.id;
       document.getElementById("currentcolor").style.background = colorSelected;
       return colorSelected;
       
    })};



var pix = document.getElementsByClassName("square");

for (var i = 0; i < pix.length; i++) {        
    pix[i].addEventListener("mousedown", function(e){
        e.target.style.background = colorSelected;
        })};

