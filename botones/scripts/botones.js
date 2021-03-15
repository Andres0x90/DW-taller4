let botones = document.getElementsByClassName("btn");

for (let i=0; i<botones.length;  i++)
{
    botones[i].addEventListener("mouseover", function()
    {
        botones[i].style.fontWeight = "bold";
    });

    botones[i].addEventListener("mouseout", function()
    {
        botones[i].style.fontWeight = "normal";
    });
}