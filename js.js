
var t = document.querySelector("#tem").value;
document.querySelector("#conv").addEventListener("click", function () {
    var fer = (t * 1.8000+ 32.00);
    var cel = (t-32.00)/ 1.800;

    if(document.getElementById("fer").checked)
    document.querySelector(".tempera>p").innerHTML=`${fer}°F`;
    else 
    document.querySelector(".tempera>p").innerHTML=`${cel}°C`;
})
