let counter = 0;

function increment()
{
    console.log("Button has been clicked!");
    counter = counter + 1;
    document.getElementById("counter").innerText = counter;
}