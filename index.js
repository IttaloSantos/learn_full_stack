let counter      = 0;
let counterYear  = document.getElementById("counter");
const audio      = document.getElementById("audioContainer");
const divMessage = document.querySelector('div');
const divCounter = document.getElementById("div-counter");

function addYear()
{
    console.log("Button has been clicked!");
    counter++;
    counterYear.textContent = counter;
    
    if(counter == 3) showMessage();
}

function showMessage()
{
    audio.play();
    divCounter.style.display = 'none';
    divMessage.style.display = 'block';
}