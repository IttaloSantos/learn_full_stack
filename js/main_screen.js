let counter      = 0;
let counter_year = document.getElementById("counter");
const audio      = document.getElementById("audioContainer");

function addYear()
{
    console.log("Button has been clicked!");
    counter++;
    counter_year.textContent = counter;
    
    if(counter == 3) audio.play();
}