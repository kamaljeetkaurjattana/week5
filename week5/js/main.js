function myFunction(a, b) {
   
    return a + b; //The function returns the product of a and b
}

function arrays() {
    var pens;
    pens = new Array("red", "green", "orange", "blue", "purple");
    markers = pens;
    console.log(markers);
    console.log(markers[0]);
    for (i = 0; i < markers.length; i++) {
        alert(markers[i]);
    }
    alert("Length of array is :" + markers.length);
}
