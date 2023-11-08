let counter      = 0;
let counter_year = document.getElementById("counter");

function addYear()
{
    console.log("Button has been clicked!");
    counter++;
    counter_year.textContent = counter;
}